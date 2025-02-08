import {
    elizaLogger,
    Action,
    ActionExample,
    HandlerCallback,
    IAgentRuntime,
    Memory,
    State,
    ModelClass,
    generateText
} from "@elizaos/core";
import { createAdService } from "../services";
import { callbackResponseExamples, getAdResponseExamples } from "../examples";
import { Ad } from "../types";

const TWITTER_MAX_LENGTH = 280;

export const callbackResponseAction: Action = {
    name: "CALLBACK_RESPONSE",
    similes: [
      "TWITTER"
    ],
    description: "Callback response for twitter to track the response",
    validate: async (_runtime: IAgentRuntime) => {
        return true;
    },
    shouldHandle: async (_runtime: IAgentRuntime, message: Memory) => {
        elizaLogger.debug("[CALLBACK_RESPONSE] Checking if should handle message:", message.content.text);
        const messageText = message.content.text?.toLowerCase() || "";
        const matchingSimiles = callbackResponseAction.similes.filter(simile =>
            messageText.includes(simile.toLowerCase())
        );

        elizaLogger.debug("[GET_RESPONSE_WITH_AD] Matching similes:", matchingSimiles);
        const shouldHandle = matchingSimiles.length > 0;
        elizaLogger.debug("[GET_RESPONSE_WITH_AD] Should handle:", shouldHandle);

        return true;
    },
    handler: async (
        runtime: IAgentRuntime,
        message: Memory,
        _state: State,
        _options: { [key: string]: unknown },
        callback: HandlerCallback
    ) => {
        try {
            elizaLogger.debug("[CALLBACK_RESPONSE] Action handler started");
            elizaLogger.debug("[CALLBACK_RESPONSE] Message:", message);

            const userMessage = message.content.text || "";
            elizaLogger.debug("[CALLBACK_RESPONSE] User message:", userMessage);

            const adService = createAdService();
            elizaLogger.debug("[CALLBACK_RESPONSE] Ad service created");

            const response = await adService.callbackResponse(userMessage);
            elizaLogger.debug("[CALLBACK_RESPONSE] Retrieved ad:", response);

            elizaLogger.success(`Successfully generated response with ad`);

            callback({
                text: response,  // Changed from aiResponse to finalResponse
                action: "CALLBACK_RESPONSE",
                intent: "HELP"
            });
            return true;
        } catch (error: any) {
            elizaLogger.error("Error in response with ad handler:", error);
            callback({
                text: `Error generating response with ad: ${error.message}`,
                content: { error: error.message },
            });
            return false;
        }
    },
    examples: callbackResponseExamples as ActionExample[][],
} as Action;

export default callbackResponseAction;

