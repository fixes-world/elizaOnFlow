import path from "path";
import { fileURLToPath } from "url";
import { Container } from "inversify";
import { CONSTANTS } from "./symbols";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const globalContainer = new Container();

// Load flow.json file and bind it to the container
globalContainer
    .bind<Record<string, unknown>>(CONSTANTS.FlowJSON)
    .toDynamicValue(async () => {
        const filePath = path.resolve(__dirname, "../../../flow.json");
        return await import(filePath, { assert: { type: "json" } });
    });

// Bind to Types

export { globalContainer };
