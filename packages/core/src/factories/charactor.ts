import { Character, elizaLogger, Plugin } from "@elizaos/core";
import { globalContainer } from "../di";
import { PluginFactory } from "../types";
import { FACTORIES } from "../symbols";

/**
 * Normalize a character by creating all plugins from the character's plugin list using the PluginFactory
 * @param character
 */
export async function normalizeCharacter(
    character: Character
): Promise<Character> {
    // Use the PluginFactory to import the plugins within the same request for each character
    const createPlugin = globalContainer.get<PluginFactory>(
        FACTORIES.PluginFactory
    );

    const normalizePlugin = async (plugin: any) => {
        if (
            typeof plugin?.name === "string" &&
            typeof plugin?.description === "string"
        ) {
            try {
                const normalized = await createPlugin(plugin);
                elizaLogger.info("Normalized plugin:", normalized.name);
                return normalized;
            } catch (e) {
                elizaLogger.error(
                    `Error normalizing plugin: ${plugin.name}`,
                    e.message
                );
            }
        }
        return plugin;
    };

    let plugins: Plugin[] = [];
    if (character.plugins?.length > 0) {
        plugins = (
            await Promise.all(character.plugins.map(normalizePlugin))
        ).filter((plugin) => plugin !== undefined) as Plugin[];
    }
    return Object.assign({}, character, { plugins }) as Character;
}
