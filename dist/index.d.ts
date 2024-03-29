/**
 * TypeScript/JavaScript client for gRPC Geyser.
 */
import { CommitmentLevel, GetLatestBlockhashResponse, GeyserClient, IsBlockhashValidResponse, SubscribeRequestAccountsDataSlice, SubscribeRequestFilterAccounts, SubscribeRequestFilterBlocks, SubscribeRequestFilterBlocksMeta, SubscribeRequestFilterEntry, SubscribeRequestFilterSlots, SubscribeRequestFilterTransactions } from "./grpc/geyser";
export { CommitmentLevel, SubscribeRequest, SubscribeRequestAccountsDataSlice, SubscribeRequestFilterAccounts, SubscribeRequestFilterAccountsFilter, SubscribeRequestFilterAccountsFilterMemcmp, SubscribeRequestFilterBlocks, SubscribeRequestFilterBlocksMeta, SubscribeRequestFilterEntry, SubscribeRequestFilterSlots, SubscribeRequestFilterTransactions, SubscribeRequest_AccountsEntry, SubscribeRequest_BlocksEntry, SubscribeRequest_BlocksMetaEntry, SubscribeRequest_SlotsEntry, SubscribeRequest_TransactionsEntry, SubscribeUpdate, SubscribeUpdateAccount, SubscribeUpdateAccountInfo, SubscribeUpdateBlock, SubscribeUpdateBlockMeta, SubscribeUpdatePing, SubscribeUpdateSlot, SubscribeUpdateTransaction, SubscribeUpdateTransactionInfo, } from "./grpc/geyser";
export default class Client {
    _client: GeyserClient;
    constructor(endpoint: string, xToken: string | undefined);
    subscribe(): Promise<import("@grpc/grpc-js").ClientDuplexStream<import("./grpc/geyser").SubscribeRequest, import("./grpc/geyser").SubscribeUpdate>>;
    subscribeOnce(accounts: {
        [key: string]: SubscribeRequestFilterAccounts;
    }, slots: {
        [key: string]: SubscribeRequestFilterSlots;
    }, transactions: {
        [key: string]: SubscribeRequestFilterTransactions;
    }, entry: {
        [key: string]: SubscribeRequestFilterEntry;
    }, blocks: {
        [key: string]: SubscribeRequestFilterBlocks;
    }, blocksMeta: {
        [key: string]: SubscribeRequestFilterBlocksMeta;
    }, commitment: CommitmentLevel | undefined, accountsDataSlice: SubscribeRequestAccountsDataSlice[]): Promise<import("@grpc/grpc-js").ClientDuplexStream<import("./grpc/geyser").SubscribeRequest, import("./grpc/geyser").SubscribeUpdate>>;
    ping(count: number): Promise<number>;
    getLatestBlockhash(commitment?: CommitmentLevel): Promise<GetLatestBlockhashResponse>;
    getBlockHeight(commitment?: CommitmentLevel): Promise<string>;
    getSlot(commitment?: CommitmentLevel): Promise<string>;
    isBlockhashValid(blockhash: string, commitment?: CommitmentLevel): Promise<IsBlockhashValidResponse>;
    getVersion(): Promise<string>;
}
