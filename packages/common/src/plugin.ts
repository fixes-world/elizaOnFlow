import { type PluginOptions } from "@fixes-ai/core";
import { TransferAction, GetPriceAction } from "./actions";

/**
 * Basic Flow Plugin Options
 * Required for the plugin to be loaded, will be exported as default
 */
export const basicFlowPluginOptions: PluginOptions = {
    name: "flow-basic",
    description: "Flow Plugin for Eliza, with basic actions like transfer",
    actions: [TransferAction, GetPriceAction],
    providers: [],
    evaluators: [],
    services: [],
};
