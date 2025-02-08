import { Plugin, Evaluator, IAgentRuntime, Memory, State } from "@elizaos/core";

import { getResponseWithAdAction  } from "./actions/getResponseWithAd";
import { callbackResponseAction } from "./actions/callbackResponse";

export const adsPlugin: Plugin = {
    name: "Ads",
    description: "Ads plugin for Eliza",
    actions: [getResponseWithAdAction, callbackResponseAction],
    // evaluators analyze the situations and actions taken by the agent. they run after each agent action
    // allowing the agent to reflect on what happened and potentially trigger additional actions or modifications
    evaluators: [
    ],
    // providers supply information and state to the agent's context, help agent access necessary data
    providers: [],
};
export default adsPlugin;
