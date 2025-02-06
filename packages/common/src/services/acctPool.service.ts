import { injectable, inject } from "inversify";
import {
    elizaLogger,
    Service,
    ServiceType,
    type IAgentRuntime,
} from "@elizaos/core";
import type { FlowAccountBalanceInfo } from "@elizaos/plugin-flow";
import { scripts } from "../assets/scripts.defs";
import { globalContainer } from "@elizaos/plugin-di";
import { FlowWalletService } from "./wallet.service";

// Add SAMPLE to ServiceType enum in types.ts
declare module "@elizaos/core" {
    export enum ServiceType {
        ACCOUNTS_POOL = "accounts-pool",
    }
}

/**
 * Wallet provider
 */
@injectable()
export class AccountsPoolService extends Service {
    constructor(
        @inject(FlowWalletService)
        private readonly walletService: FlowWalletService,
    ) {
        super();
    }

    static get serviceType(): ServiceType {
        return ServiceType.ACCOUNTS_POOL;
    }

    async initialize(_runtime: IAgentRuntime): Promise<void> {
        // NOTHING to do here
        elizaLogger.info("AccountsPoolService initialized");
    }

    // ----- Customized methods -----

    async queryAccountInfo(
        userId: string = undefined,
    ): Promise<FlowAccountBalanceInfo | undefined> {
        const wallet = this.walletService.wallet;
        return await wallet.executeScript(
            scripts.getAccountStatus,
            (arg, t) => [
                arg(wallet.address, t.Address),
                arg(userId ?? null, t.Optional(t.String)),
            ],
            undefined,
        );
    }
}

// Register the provider with the global container
globalContainer.bind(AccountsPoolService).toSelf().inSingletonScope();
