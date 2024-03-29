/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientDuplexStream, ClientOptions, ClientUnaryCall, handleBidiStreamingCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import * as _m0 from "protobufjs/minimal";
import { BlockHeight, Rewards, Transaction, TransactionStatusMeta, UnixTimestamp } from "./solana-storage";
export declare const protobufPackage = "geyser";
export declare enum CommitmentLevel {
    PROCESSED = 0,
    CONFIRMED = 1,
    FINALIZED = 2,
    UNRECOGNIZED = -1
}
export declare function commitmentLevelFromJSON(object: any): CommitmentLevel;
export declare function commitmentLevelToJSON(object: CommitmentLevel): string;
export interface SubscribeRequest {
    accounts: {
        [key: string]: SubscribeRequestFilterAccounts;
    };
    slots: {
        [key: string]: SubscribeRequestFilterSlots;
    };
    transactions: {
        [key: string]: SubscribeRequestFilterTransactions;
    };
    blocks: {
        [key: string]: SubscribeRequestFilterBlocks;
    };
    blocksMeta: {
        [key: string]: SubscribeRequestFilterBlocksMeta;
    };
    entry: {
        [key: string]: SubscribeRequestFilterEntry;
    };
    commitment?: CommitmentLevel | undefined;
    accountsDataSlice: SubscribeRequestAccountsDataSlice[];
    ping?: SubscribeRequestPing | undefined;
}
export interface SubscribeRequest_AccountsEntry {
    key: string;
    value: SubscribeRequestFilterAccounts | undefined;
}
export interface SubscribeRequest_SlotsEntry {
    key: string;
    value: SubscribeRequestFilterSlots | undefined;
}
export interface SubscribeRequest_TransactionsEntry {
    key: string;
    value: SubscribeRequestFilterTransactions | undefined;
}
export interface SubscribeRequest_BlocksEntry {
    key: string;
    value: SubscribeRequestFilterBlocks | undefined;
}
export interface SubscribeRequest_BlocksMetaEntry {
    key: string;
    value: SubscribeRequestFilterBlocksMeta | undefined;
}
export interface SubscribeRequest_EntryEntry {
    key: string;
    value: SubscribeRequestFilterEntry | undefined;
}
export interface SubscribeRequestFilterAccounts {
    account: string[];
    owner: string[];
    filters: SubscribeRequestFilterAccountsFilter[];
}
export interface SubscribeRequestFilterAccountsFilter {
    memcmp?: SubscribeRequestFilterAccountsFilterMemcmp | undefined;
    datasize?: string | undefined;
    tokenAccountState?: boolean | undefined;
}
export interface SubscribeRequestFilterAccountsFilterMemcmp {
    offset: string;
    bytes?: Uint8Array | undefined;
    base58?: string | undefined;
    base64?: string | undefined;
}
export interface SubscribeRequestFilterSlots {
    filterByCommitment?: boolean | undefined;
}
export interface SubscribeRequestFilterTransactions {
    vote?: boolean | undefined;
    failed?: boolean | undefined;
    signature?: string | undefined;
    accountInclude: string[];
    accountExclude: string[];
    accountRequired: string[];
}
export interface SubscribeRequestFilterBlocks {
    accountInclude: string[];
    includeTransactions?: boolean | undefined;
    includeAccounts?: boolean | undefined;
    includeEntries?: boolean | undefined;
}
export interface SubscribeRequestFilterBlocksMeta {
}
export interface SubscribeRequestFilterEntry {
}
export interface SubscribeRequestAccountsDataSlice {
    offset: string;
    length: string;
}
export interface SubscribeRequestPing {
    id: number;
}
export interface SubscribeUpdate {
    filters: string[];
    account?: SubscribeUpdateAccount | undefined;
    slot?: SubscribeUpdateSlot | undefined;
    transaction?: SubscribeUpdateTransaction | undefined;
    block?: SubscribeUpdateBlock | undefined;
    ping?: SubscribeUpdatePing | undefined;
    pong?: SubscribeUpdatePong | undefined;
    blockMeta?: SubscribeUpdateBlockMeta | undefined;
    entry?: SubscribeUpdateEntry | undefined;
}
export interface SubscribeUpdateAccount {
    account: SubscribeUpdateAccountInfo | undefined;
    slot: string;
    isStartup: boolean;
}
export interface SubscribeUpdateAccountInfo {
    pubkey: Uint8Array;
    lamports: string;
    owner: Uint8Array;
    executable: boolean;
    rentEpoch: string;
    data: Uint8Array;
    writeVersion: string;
    txnSignature?: Uint8Array | undefined;
}
export interface SubscribeUpdateSlot {
    slot: string;
    parent?: string | undefined;
    status: CommitmentLevel;
}
export interface SubscribeUpdateTransaction {
    transaction: SubscribeUpdateTransactionInfo | undefined;
    slot: string;
}
export interface SubscribeUpdateTransactionInfo {
    signature: Uint8Array;
    isVote: boolean;
    transaction: Transaction | undefined;
    meta: TransactionStatusMeta | undefined;
    index: string;
}
export interface SubscribeUpdateBlock {
    slot: string;
    blockhash: string;
    rewards: Rewards | undefined;
    blockTime: UnixTimestamp | undefined;
    blockHeight: BlockHeight | undefined;
    parentSlot: string;
    parentBlockhash: string;
    executedTransactionCount: string;
    transactions: SubscribeUpdateTransactionInfo[];
    updatedAccountCount: string;
    accounts: SubscribeUpdateAccountInfo[];
    entriesCount: string;
    entries: SubscribeUpdateEntry[];
}
export interface SubscribeUpdateBlockMeta {
    slot: string;
    blockhash: string;
    rewards: Rewards | undefined;
    blockTime: UnixTimestamp | undefined;
    blockHeight: BlockHeight | undefined;
    parentSlot: string;
    parentBlockhash: string;
    executedTransactionCount: string;
}
export interface SubscribeUpdateEntry {
    slot: string;
    index: string;
    numHashes: string;
    hash: Uint8Array;
    executedTransactionCount: string;
}
export interface SubscribeUpdatePing {
}
export interface SubscribeUpdatePong {
    id: number;
}
export interface PingRequest {
    count: number;
}
export interface PongResponse {
    count: number;
}
export interface GetLatestBlockhashRequest {
    commitment?: CommitmentLevel | undefined;
}
export interface GetLatestBlockhashResponse {
    slot: string;
    blockhash: string;
    lastValidBlockHeight: string;
}
export interface GetBlockHeightRequest {
    commitment?: CommitmentLevel | undefined;
}
export interface GetBlockHeightResponse {
    blockHeight: string;
}
export interface GetSlotRequest {
    commitment?: CommitmentLevel | undefined;
}
export interface GetSlotResponse {
    slot: string;
}
export interface GetVersionRequest {
}
export interface GetVersionResponse {
    version: string;
}
export interface IsBlockhashValidRequest {
    blockhash: string;
    commitment?: CommitmentLevel | undefined;
}
export interface IsBlockhashValidResponse {
    slot: string;
    valid: boolean;
}
export declare const SubscribeRequest: {
    encode(message: SubscribeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeRequest;
    fromJSON(object: any): SubscribeRequest;
    toJSON(message: SubscribeRequest): unknown;
    create<I extends {
        accounts?: {
            [x: string]: {
                account?: string[];
                owner?: string[];
                filters?: {
                    memcmp?: {
                        offset?: string;
                        bytes?: Uint8Array | undefined;
                        base58?: string | undefined;
                        base64?: string | undefined;
                    };
                    datasize?: string | undefined;
                    tokenAccountState?: boolean | undefined;
                }[];
            };
        };
        slots?: {
            [x: string]: {
                filterByCommitment?: boolean | undefined;
            };
        };
        transactions?: {
            [x: string]: {
                vote?: boolean | undefined;
                failed?: boolean | undefined;
                signature?: string | undefined;
                accountInclude?: string[];
                accountExclude?: string[];
                accountRequired?: string[];
            };
        };
        blocks?: {
            [x: string]: {
                accountInclude?: string[];
                includeTransactions?: boolean | undefined;
                includeAccounts?: boolean | undefined;
                includeEntries?: boolean | undefined;
            };
        };
        blocksMeta?: {
            [x: string]: {};
        };
        entry?: {
            [x: string]: {};
        };
        commitment?: CommitmentLevel | undefined;
        accountsDataSlice?: {
            offset?: string;
            length?: string;
        }[];
        ping?: {
            id?: number;
        };
    } & {
        accounts?: {
            [x: string]: {
                account?: string[];
                owner?: string[];
                filters?: {
                    memcmp?: {
                        offset?: string;
                        bytes?: Uint8Array | undefined;
                        base58?: string | undefined;
                        base64?: string | undefined;
                    };
                    datasize?: string | undefined;
                    tokenAccountState?: boolean | undefined;
                }[];
            };
        } & {
            [x: string]: {
                account?: string[];
                owner?: string[];
                filters?: {
                    memcmp?: {
                        offset?: string;
                        bytes?: Uint8Array | undefined;
                        base58?: string | undefined;
                        base64?: string | undefined;
                    };
                    datasize?: string | undefined;
                    tokenAccountState?: boolean | undefined;
                }[];
            } & {
                account?: string[] & string[] & { [K in Exclude<keyof I["accounts"][string]["account"], keyof string[]>]: never; };
                owner?: string[] & string[] & { [K_1 in Exclude<keyof I["accounts"][string]["owner"], keyof string[]>]: never; };
                filters?: {
                    memcmp?: {
                        offset?: string;
                        bytes?: Uint8Array | undefined;
                        base58?: string | undefined;
                        base64?: string | undefined;
                    };
                    datasize?: string | undefined;
                    tokenAccountState?: boolean | undefined;
                }[] & ({
                    memcmp?: {
                        offset?: string;
                        bytes?: Uint8Array | undefined;
                        base58?: string | undefined;
                        base64?: string | undefined;
                    };
                    datasize?: string | undefined;
                    tokenAccountState?: boolean | undefined;
                } & {
                    memcmp?: {
                        offset?: string;
                        bytes?: Uint8Array | undefined;
                        base58?: string | undefined;
                        base64?: string | undefined;
                    } & {
                        offset?: string;
                        bytes?: Uint8Array | undefined;
                        base58?: string | undefined;
                        base64?: string | undefined;
                    } & { [K_2 in Exclude<keyof I["accounts"][string]["filters"][number]["memcmp"], keyof SubscribeRequestFilterAccountsFilterMemcmp>]: never; };
                    datasize?: string | undefined;
                    tokenAccountState?: boolean | undefined;
                } & { [K_3 in Exclude<keyof I["accounts"][string]["filters"][number], keyof SubscribeRequestFilterAccountsFilter>]: never; })[] & { [K_4 in Exclude<keyof I["accounts"][string]["filters"], keyof {
                    memcmp?: {
                        offset?: string;
                        bytes?: Uint8Array | undefined;
                        base58?: string | undefined;
                        base64?: string | undefined;
                    };
                    datasize?: string | undefined;
                    tokenAccountState?: boolean | undefined;
                }[]>]: never; };
            } & { [K_5 in Exclude<keyof I["accounts"][string], keyof SubscribeRequestFilterAccounts>]: never; };
        } & { [K_6 in Exclude<keyof I["accounts"], string | number>]: never; };
        slots?: {
            [x: string]: {
                filterByCommitment?: boolean | undefined;
            };
        } & {
            [x: string]: {
                filterByCommitment?: boolean | undefined;
            } & {
                filterByCommitment?: boolean | undefined;
            } & { [K_7 in Exclude<keyof I["slots"][string], "filterByCommitment">]: never; };
        } & { [K_8 in Exclude<keyof I["slots"], string | number>]: never; };
        transactions?: {
            [x: string]: {
                vote?: boolean | undefined;
                failed?: boolean | undefined;
                signature?: string | undefined;
                accountInclude?: string[];
                accountExclude?: string[];
                accountRequired?: string[];
            };
        } & {
            [x: string]: {
                vote?: boolean | undefined;
                failed?: boolean | undefined;
                signature?: string | undefined;
                accountInclude?: string[];
                accountExclude?: string[];
                accountRequired?: string[];
            } & {
                vote?: boolean | undefined;
                failed?: boolean | undefined;
                signature?: string | undefined;
                accountInclude?: string[] & string[] & { [K_9 in Exclude<keyof I["transactions"][string]["accountInclude"], keyof string[]>]: never; };
                accountExclude?: string[] & string[] & { [K_10 in Exclude<keyof I["transactions"][string]["accountExclude"], keyof string[]>]: never; };
                accountRequired?: string[] & string[] & { [K_11 in Exclude<keyof I["transactions"][string]["accountRequired"], keyof string[]>]: never; };
            } & { [K_12 in Exclude<keyof I["transactions"][string], keyof SubscribeRequestFilterTransactions>]: never; };
        } & { [K_13 in Exclude<keyof I["transactions"], string | number>]: never; };
        blocks?: {
            [x: string]: {
                accountInclude?: string[];
                includeTransactions?: boolean | undefined;
                includeAccounts?: boolean | undefined;
                includeEntries?: boolean | undefined;
            };
        } & {
            [x: string]: {
                accountInclude?: string[];
                includeTransactions?: boolean | undefined;
                includeAccounts?: boolean | undefined;
                includeEntries?: boolean | undefined;
            } & {
                accountInclude?: string[] & string[] & { [K_14 in Exclude<keyof I["blocks"][string]["accountInclude"], keyof string[]>]: never; };
                includeTransactions?: boolean | undefined;
                includeAccounts?: boolean | undefined;
                includeEntries?: boolean | undefined;
            } & { [K_15 in Exclude<keyof I["blocks"][string], keyof SubscribeRequestFilterBlocks>]: never; };
        } & { [K_16 in Exclude<keyof I["blocks"], string | number>]: never; };
        blocksMeta?: {
            [x: string]: {};
        } & {
            [x: string]: {} & {} & { [K_17 in Exclude<keyof I["blocksMeta"][string], never>]: never; };
        } & { [K_18 in Exclude<keyof I["blocksMeta"], string | number>]: never; };
        entry?: {
            [x: string]: {};
        } & {
            [x: string]: {} & {} & { [K_19 in Exclude<keyof I["entry"][string], never>]: never; };
        } & { [K_20 in Exclude<keyof I["entry"], string | number>]: never; };
        commitment?: CommitmentLevel | undefined;
        accountsDataSlice?: {
            offset?: string;
            length?: string;
        }[] & ({
            offset?: string;
            length?: string;
        } & {
            offset?: string;
            length?: string;
        } & { [K_21 in Exclude<keyof I["accountsDataSlice"][number], keyof SubscribeRequestAccountsDataSlice>]: never; })[] & { [K_22 in Exclude<keyof I["accountsDataSlice"], keyof {
            offset?: string;
            length?: string;
        }[]>]: never; };
        ping?: {
            id?: number;
        } & {
            id?: number;
        } & { [K_23 in Exclude<keyof I["ping"], "id">]: never; };
    } & { [K_24 in Exclude<keyof I, keyof SubscribeRequest>]: never; }>(base?: I): SubscribeRequest;
    fromPartial<I_1 extends {
        accounts?: {
            [x: string]: {
                account?: string[];
                owner?: string[];
                filters?: {
                    memcmp?: {
                        offset?: string;
                        bytes?: Uint8Array | undefined;
                        base58?: string | undefined;
                        base64?: string | undefined;
                    };
                    datasize?: string | undefined;
                    tokenAccountState?: boolean | undefined;
                }[];
            };
        };
        slots?: {
            [x: string]: {
                filterByCommitment?: boolean | undefined;
            };
        };
        transactions?: {
            [x: string]: {
                vote?: boolean | undefined;
                failed?: boolean | undefined;
                signature?: string | undefined;
                accountInclude?: string[];
                accountExclude?: string[];
                accountRequired?: string[];
            };
        };
        blocks?: {
            [x: string]: {
                accountInclude?: string[];
                includeTransactions?: boolean | undefined;
                includeAccounts?: boolean | undefined;
                includeEntries?: boolean | undefined;
            };
        };
        blocksMeta?: {
            [x: string]: {};
        };
        entry?: {
            [x: string]: {};
        };
        commitment?: CommitmentLevel | undefined;
        accountsDataSlice?: {
            offset?: string;
            length?: string;
        }[];
        ping?: {
            id?: number;
        };
    } & {
        accounts?: {
            [x: string]: {
                account?: string[];
                owner?: string[];
                filters?: {
                    memcmp?: {
                        offset?: string;
                        bytes?: Uint8Array | undefined;
                        base58?: string | undefined;
                        base64?: string | undefined;
                    };
                    datasize?: string | undefined;
                    tokenAccountState?: boolean | undefined;
                }[];
            };
        } & {
            [x: string]: {
                account?: string[];
                owner?: string[];
                filters?: {
                    memcmp?: {
                        offset?: string;
                        bytes?: Uint8Array | undefined;
                        base58?: string | undefined;
                        base64?: string | undefined;
                    };
                    datasize?: string | undefined;
                    tokenAccountState?: boolean | undefined;
                }[];
            } & {
                account?: string[] & string[] & { [K_25 in Exclude<keyof I_1["accounts"][string]["account"], keyof string[]>]: never; };
                owner?: string[] & string[] & { [K_26 in Exclude<keyof I_1["accounts"][string]["owner"], keyof string[]>]: never; };
                filters?: {
                    memcmp?: {
                        offset?: string;
                        bytes?: Uint8Array | undefined;
                        base58?: string | undefined;
                        base64?: string | undefined;
                    };
                    datasize?: string | undefined;
                    tokenAccountState?: boolean | undefined;
                }[] & ({
                    memcmp?: {
                        offset?: string;
                        bytes?: Uint8Array | undefined;
                        base58?: string | undefined;
                        base64?: string | undefined;
                    };
                    datasize?: string | undefined;
                    tokenAccountState?: boolean | undefined;
                } & {
                    memcmp?: {
                        offset?: string;
                        bytes?: Uint8Array | undefined;
                        base58?: string | undefined;
                        base64?: string | undefined;
                    } & {
                        offset?: string;
                        bytes?: Uint8Array | undefined;
                        base58?: string | undefined;
                        base64?: string | undefined;
                    } & { [K_27 in Exclude<keyof I_1["accounts"][string]["filters"][number]["memcmp"], keyof SubscribeRequestFilterAccountsFilterMemcmp>]: never; };
                    datasize?: string | undefined;
                    tokenAccountState?: boolean | undefined;
                } & { [K_28 in Exclude<keyof I_1["accounts"][string]["filters"][number], keyof SubscribeRequestFilterAccountsFilter>]: never; })[] & { [K_29 in Exclude<keyof I_1["accounts"][string]["filters"], keyof {
                    memcmp?: {
                        offset?: string;
                        bytes?: Uint8Array | undefined;
                        base58?: string | undefined;
                        base64?: string | undefined;
                    };
                    datasize?: string | undefined;
                    tokenAccountState?: boolean | undefined;
                }[]>]: never; };
            } & { [K_30 in Exclude<keyof I_1["accounts"][string], keyof SubscribeRequestFilterAccounts>]: never; };
        } & { [K_31 in Exclude<keyof I_1["accounts"], string | number>]: never; };
        slots?: {
            [x: string]: {
                filterByCommitment?: boolean | undefined;
            };
        } & {
            [x: string]: {
                filterByCommitment?: boolean | undefined;
            } & {
                filterByCommitment?: boolean | undefined;
            } & { [K_32 in Exclude<keyof I_1["slots"][string], "filterByCommitment">]: never; };
        } & { [K_33 in Exclude<keyof I_1["slots"], string | number>]: never; };
        transactions?: {
            [x: string]: {
                vote?: boolean | undefined;
                failed?: boolean | undefined;
                signature?: string | undefined;
                accountInclude?: string[];
                accountExclude?: string[];
                accountRequired?: string[];
            };
        } & {
            [x: string]: {
                vote?: boolean | undefined;
                failed?: boolean | undefined;
                signature?: string | undefined;
                accountInclude?: string[];
                accountExclude?: string[];
                accountRequired?: string[];
            } & {
                vote?: boolean | undefined;
                failed?: boolean | undefined;
                signature?: string | undefined;
                accountInclude?: string[] & string[] & { [K_34 in Exclude<keyof I_1["transactions"][string]["accountInclude"], keyof string[]>]: never; };
                accountExclude?: string[] & string[] & { [K_35 in Exclude<keyof I_1["transactions"][string]["accountExclude"], keyof string[]>]: never; };
                accountRequired?: string[] & string[] & { [K_36 in Exclude<keyof I_1["transactions"][string]["accountRequired"], keyof string[]>]: never; };
            } & { [K_37 in Exclude<keyof I_1["transactions"][string], keyof SubscribeRequestFilterTransactions>]: never; };
        } & { [K_38 in Exclude<keyof I_1["transactions"], string | number>]: never; };
        blocks?: {
            [x: string]: {
                accountInclude?: string[];
                includeTransactions?: boolean | undefined;
                includeAccounts?: boolean | undefined;
                includeEntries?: boolean | undefined;
            };
        } & {
            [x: string]: {
                accountInclude?: string[];
                includeTransactions?: boolean | undefined;
                includeAccounts?: boolean | undefined;
                includeEntries?: boolean | undefined;
            } & {
                accountInclude?: string[] & string[] & { [K_39 in Exclude<keyof I_1["blocks"][string]["accountInclude"], keyof string[]>]: never; };
                includeTransactions?: boolean | undefined;
                includeAccounts?: boolean | undefined;
                includeEntries?: boolean | undefined;
            } & { [K_40 in Exclude<keyof I_1["blocks"][string], keyof SubscribeRequestFilterBlocks>]: never; };
        } & { [K_41 in Exclude<keyof I_1["blocks"], string | number>]: never; };
        blocksMeta?: {
            [x: string]: {};
        } & {
            [x: string]: {} & {} & { [K_42 in Exclude<keyof I_1["blocksMeta"][string], never>]: never; };
        } & { [K_43 in Exclude<keyof I_1["blocksMeta"], string | number>]: never; };
        entry?: {
            [x: string]: {};
        } & {
            [x: string]: {} & {} & { [K_44 in Exclude<keyof I_1["entry"][string], never>]: never; };
        } & { [K_45 in Exclude<keyof I_1["entry"], string | number>]: never; };
        commitment?: CommitmentLevel | undefined;
        accountsDataSlice?: {
            offset?: string;
            length?: string;
        }[] & ({
            offset?: string;
            length?: string;
        } & {
            offset?: string;
            length?: string;
        } & { [K_46 in Exclude<keyof I_1["accountsDataSlice"][number], keyof SubscribeRequestAccountsDataSlice>]: never; })[] & { [K_47 in Exclude<keyof I_1["accountsDataSlice"], keyof {
            offset?: string;
            length?: string;
        }[]>]: never; };
        ping?: {
            id?: number;
        } & {
            id?: number;
        } & { [K_48 in Exclude<keyof I_1["ping"], "id">]: never; };
    } & { [K_49 in Exclude<keyof I_1, keyof SubscribeRequest>]: never; }>(object: I_1): SubscribeRequest;
};
export declare const SubscribeRequest_AccountsEntry: {
    encode(message: SubscribeRequest_AccountsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeRequest_AccountsEntry;
    fromJSON(object: any): SubscribeRequest_AccountsEntry;
    toJSON(message: SubscribeRequest_AccountsEntry): unknown;
    create<I extends {
        key?: string;
        value?: {
            account?: string[];
            owner?: string[];
            filters?: {
                memcmp?: {
                    offset?: string;
                    bytes?: Uint8Array | undefined;
                    base58?: string | undefined;
                    base64?: string | undefined;
                };
                datasize?: string | undefined;
                tokenAccountState?: boolean | undefined;
            }[];
        };
    } & {
        key?: string;
        value?: {
            account?: string[];
            owner?: string[];
            filters?: {
                memcmp?: {
                    offset?: string;
                    bytes?: Uint8Array | undefined;
                    base58?: string | undefined;
                    base64?: string | undefined;
                };
                datasize?: string | undefined;
                tokenAccountState?: boolean | undefined;
            }[];
        } & {
            account?: string[] & string[] & { [K in Exclude<keyof I["value"]["account"], keyof string[]>]: never; };
            owner?: string[] & string[] & { [K_1 in Exclude<keyof I["value"]["owner"], keyof string[]>]: never; };
            filters?: {
                memcmp?: {
                    offset?: string;
                    bytes?: Uint8Array | undefined;
                    base58?: string | undefined;
                    base64?: string | undefined;
                };
                datasize?: string | undefined;
                tokenAccountState?: boolean | undefined;
            }[] & ({
                memcmp?: {
                    offset?: string;
                    bytes?: Uint8Array | undefined;
                    base58?: string | undefined;
                    base64?: string | undefined;
                };
                datasize?: string | undefined;
                tokenAccountState?: boolean | undefined;
            } & {
                memcmp?: {
                    offset?: string;
                    bytes?: Uint8Array | undefined;
                    base58?: string | undefined;
                    base64?: string | undefined;
                } & {
                    offset?: string;
                    bytes?: Uint8Array | undefined;
                    base58?: string | undefined;
                    base64?: string | undefined;
                } & { [K_2 in Exclude<keyof I["value"]["filters"][number]["memcmp"], keyof SubscribeRequestFilterAccountsFilterMemcmp>]: never; };
                datasize?: string | undefined;
                tokenAccountState?: boolean | undefined;
            } & { [K_3 in Exclude<keyof I["value"]["filters"][number], keyof SubscribeRequestFilterAccountsFilter>]: never; })[] & { [K_4 in Exclude<keyof I["value"]["filters"], keyof {
                memcmp?: {
                    offset?: string;
                    bytes?: Uint8Array | undefined;
                    base58?: string | undefined;
                    base64?: string | undefined;
                };
                datasize?: string | undefined;
                tokenAccountState?: boolean | undefined;
            }[]>]: never; };
        } & { [K_5 in Exclude<keyof I["value"], keyof SubscribeRequestFilterAccounts>]: never; };
    } & { [K_6 in Exclude<keyof I, keyof SubscribeRequest_AccountsEntry>]: never; }>(base?: I): SubscribeRequest_AccountsEntry;
    fromPartial<I_1 extends {
        key?: string;
        value?: {
            account?: string[];
            owner?: string[];
            filters?: {
                memcmp?: {
                    offset?: string;
                    bytes?: Uint8Array | undefined;
                    base58?: string | undefined;
                    base64?: string | undefined;
                };
                datasize?: string | undefined;
                tokenAccountState?: boolean | undefined;
            }[];
        };
    } & {
        key?: string;
        value?: {
            account?: string[];
            owner?: string[];
            filters?: {
                memcmp?: {
                    offset?: string;
                    bytes?: Uint8Array | undefined;
                    base58?: string | undefined;
                    base64?: string | undefined;
                };
                datasize?: string | undefined;
                tokenAccountState?: boolean | undefined;
            }[];
        } & {
            account?: string[] & string[] & { [K_7 in Exclude<keyof I_1["value"]["account"], keyof string[]>]: never; };
            owner?: string[] & string[] & { [K_8 in Exclude<keyof I_1["value"]["owner"], keyof string[]>]: never; };
            filters?: {
                memcmp?: {
                    offset?: string;
                    bytes?: Uint8Array | undefined;
                    base58?: string | undefined;
                    base64?: string | undefined;
                };
                datasize?: string | undefined;
                tokenAccountState?: boolean | undefined;
            }[] & ({
                memcmp?: {
                    offset?: string;
                    bytes?: Uint8Array | undefined;
                    base58?: string | undefined;
                    base64?: string | undefined;
                };
                datasize?: string | undefined;
                tokenAccountState?: boolean | undefined;
            } & {
                memcmp?: {
                    offset?: string;
                    bytes?: Uint8Array | undefined;
                    base58?: string | undefined;
                    base64?: string | undefined;
                } & {
                    offset?: string;
                    bytes?: Uint8Array | undefined;
                    base58?: string | undefined;
                    base64?: string | undefined;
                } & { [K_9 in Exclude<keyof I_1["value"]["filters"][number]["memcmp"], keyof SubscribeRequestFilterAccountsFilterMemcmp>]: never; };
                datasize?: string | undefined;
                tokenAccountState?: boolean | undefined;
            } & { [K_10 in Exclude<keyof I_1["value"]["filters"][number], keyof SubscribeRequestFilterAccountsFilter>]: never; })[] & { [K_11 in Exclude<keyof I_1["value"]["filters"], keyof {
                memcmp?: {
                    offset?: string;
                    bytes?: Uint8Array | undefined;
                    base58?: string | undefined;
                    base64?: string | undefined;
                };
                datasize?: string | undefined;
                tokenAccountState?: boolean | undefined;
            }[]>]: never; };
        } & { [K_12 in Exclude<keyof I_1["value"], keyof SubscribeRequestFilterAccounts>]: never; };
    } & { [K_13 in Exclude<keyof I_1, keyof SubscribeRequest_AccountsEntry>]: never; }>(object: I_1): SubscribeRequest_AccountsEntry;
};
export declare const SubscribeRequest_SlotsEntry: {
    encode(message: SubscribeRequest_SlotsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeRequest_SlotsEntry;
    fromJSON(object: any): SubscribeRequest_SlotsEntry;
    toJSON(message: SubscribeRequest_SlotsEntry): unknown;
    create<I extends {
        key?: string;
        value?: {
            filterByCommitment?: boolean | undefined;
        };
    } & {
        key?: string;
        value?: {
            filterByCommitment?: boolean | undefined;
        } & {
            filterByCommitment?: boolean | undefined;
        } & { [K in Exclude<keyof I["value"], "filterByCommitment">]: never; };
    } & { [K_1 in Exclude<keyof I, keyof SubscribeRequest_SlotsEntry>]: never; }>(base?: I): SubscribeRequest_SlotsEntry;
    fromPartial<I_1 extends {
        key?: string;
        value?: {
            filterByCommitment?: boolean | undefined;
        };
    } & {
        key?: string;
        value?: {
            filterByCommitment?: boolean | undefined;
        } & {
            filterByCommitment?: boolean | undefined;
        } & { [K_2 in Exclude<keyof I_1["value"], "filterByCommitment">]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof SubscribeRequest_SlotsEntry>]: never; }>(object: I_1): SubscribeRequest_SlotsEntry;
};
export declare const SubscribeRequest_TransactionsEntry: {
    encode(message: SubscribeRequest_TransactionsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeRequest_TransactionsEntry;
    fromJSON(object: any): SubscribeRequest_TransactionsEntry;
    toJSON(message: SubscribeRequest_TransactionsEntry): unknown;
    create<I extends {
        key?: string;
        value?: {
            vote?: boolean | undefined;
            failed?: boolean | undefined;
            signature?: string | undefined;
            accountInclude?: string[];
            accountExclude?: string[];
            accountRequired?: string[];
        };
    } & {
        key?: string;
        value?: {
            vote?: boolean | undefined;
            failed?: boolean | undefined;
            signature?: string | undefined;
            accountInclude?: string[];
            accountExclude?: string[];
            accountRequired?: string[];
        } & {
            vote?: boolean | undefined;
            failed?: boolean | undefined;
            signature?: string | undefined;
            accountInclude?: string[] & string[] & { [K in Exclude<keyof I["value"]["accountInclude"], keyof string[]>]: never; };
            accountExclude?: string[] & string[] & { [K_1 in Exclude<keyof I["value"]["accountExclude"], keyof string[]>]: never; };
            accountRequired?: string[] & string[] & { [K_2 in Exclude<keyof I["value"]["accountRequired"], keyof string[]>]: never; };
        } & { [K_3 in Exclude<keyof I["value"], keyof SubscribeRequestFilterTransactions>]: never; };
    } & { [K_4 in Exclude<keyof I, keyof SubscribeRequest_TransactionsEntry>]: never; }>(base?: I): SubscribeRequest_TransactionsEntry;
    fromPartial<I_1 extends {
        key?: string;
        value?: {
            vote?: boolean | undefined;
            failed?: boolean | undefined;
            signature?: string | undefined;
            accountInclude?: string[];
            accountExclude?: string[];
            accountRequired?: string[];
        };
    } & {
        key?: string;
        value?: {
            vote?: boolean | undefined;
            failed?: boolean | undefined;
            signature?: string | undefined;
            accountInclude?: string[];
            accountExclude?: string[];
            accountRequired?: string[];
        } & {
            vote?: boolean | undefined;
            failed?: boolean | undefined;
            signature?: string | undefined;
            accountInclude?: string[] & string[] & { [K_5 in Exclude<keyof I_1["value"]["accountInclude"], keyof string[]>]: never; };
            accountExclude?: string[] & string[] & { [K_6 in Exclude<keyof I_1["value"]["accountExclude"], keyof string[]>]: never; };
            accountRequired?: string[] & string[] & { [K_7 in Exclude<keyof I_1["value"]["accountRequired"], keyof string[]>]: never; };
        } & { [K_8 in Exclude<keyof I_1["value"], keyof SubscribeRequestFilterTransactions>]: never; };
    } & { [K_9 in Exclude<keyof I_1, keyof SubscribeRequest_TransactionsEntry>]: never; }>(object: I_1): SubscribeRequest_TransactionsEntry;
};
export declare const SubscribeRequest_BlocksEntry: {
    encode(message: SubscribeRequest_BlocksEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeRequest_BlocksEntry;
    fromJSON(object: any): SubscribeRequest_BlocksEntry;
    toJSON(message: SubscribeRequest_BlocksEntry): unknown;
    create<I extends {
        key?: string;
        value?: {
            accountInclude?: string[];
            includeTransactions?: boolean | undefined;
            includeAccounts?: boolean | undefined;
            includeEntries?: boolean | undefined;
        };
    } & {
        key?: string;
        value?: {
            accountInclude?: string[];
            includeTransactions?: boolean | undefined;
            includeAccounts?: boolean | undefined;
            includeEntries?: boolean | undefined;
        } & {
            accountInclude?: string[] & string[] & { [K in Exclude<keyof I["value"]["accountInclude"], keyof string[]>]: never; };
            includeTransactions?: boolean | undefined;
            includeAccounts?: boolean | undefined;
            includeEntries?: boolean | undefined;
        } & { [K_1 in Exclude<keyof I["value"], keyof SubscribeRequestFilterBlocks>]: never; };
    } & { [K_2 in Exclude<keyof I, keyof SubscribeRequest_BlocksEntry>]: never; }>(base?: I): SubscribeRequest_BlocksEntry;
    fromPartial<I_1 extends {
        key?: string;
        value?: {
            accountInclude?: string[];
            includeTransactions?: boolean | undefined;
            includeAccounts?: boolean | undefined;
            includeEntries?: boolean | undefined;
        };
    } & {
        key?: string;
        value?: {
            accountInclude?: string[];
            includeTransactions?: boolean | undefined;
            includeAccounts?: boolean | undefined;
            includeEntries?: boolean | undefined;
        } & {
            accountInclude?: string[] & string[] & { [K_3 in Exclude<keyof I_1["value"]["accountInclude"], keyof string[]>]: never; };
            includeTransactions?: boolean | undefined;
            includeAccounts?: boolean | undefined;
            includeEntries?: boolean | undefined;
        } & { [K_4 in Exclude<keyof I_1["value"], keyof SubscribeRequestFilterBlocks>]: never; };
    } & { [K_5 in Exclude<keyof I_1, keyof SubscribeRequest_BlocksEntry>]: never; }>(object: I_1): SubscribeRequest_BlocksEntry;
};
export declare const SubscribeRequest_BlocksMetaEntry: {
    encode(message: SubscribeRequest_BlocksMetaEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeRequest_BlocksMetaEntry;
    fromJSON(object: any): SubscribeRequest_BlocksMetaEntry;
    toJSON(message: SubscribeRequest_BlocksMetaEntry): unknown;
    create<I extends {
        key?: string;
        value?: {};
    } & {
        key?: string;
        value?: {} & {} & { [K in Exclude<keyof I["value"], never>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof SubscribeRequest_BlocksMetaEntry>]: never; }>(base?: I): SubscribeRequest_BlocksMetaEntry;
    fromPartial<I_1 extends {
        key?: string;
        value?: {};
    } & {
        key?: string;
        value?: {} & {} & { [K_2 in Exclude<keyof I_1["value"], never>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof SubscribeRequest_BlocksMetaEntry>]: never; }>(object: I_1): SubscribeRequest_BlocksMetaEntry;
};
export declare const SubscribeRequest_EntryEntry: {
    encode(message: SubscribeRequest_EntryEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeRequest_EntryEntry;
    fromJSON(object: any): SubscribeRequest_EntryEntry;
    toJSON(message: SubscribeRequest_EntryEntry): unknown;
    create<I extends {
        key?: string;
        value?: {};
    } & {
        key?: string;
        value?: {} & {} & { [K in Exclude<keyof I["value"], never>]: never; };
    } & { [K_1 in Exclude<keyof I, keyof SubscribeRequest_EntryEntry>]: never; }>(base?: I): SubscribeRequest_EntryEntry;
    fromPartial<I_1 extends {
        key?: string;
        value?: {};
    } & {
        key?: string;
        value?: {} & {} & { [K_2 in Exclude<keyof I_1["value"], never>]: never; };
    } & { [K_3 in Exclude<keyof I_1, keyof SubscribeRequest_EntryEntry>]: never; }>(object: I_1): SubscribeRequest_EntryEntry;
};
export declare const SubscribeRequestFilterAccounts: {
    encode(message: SubscribeRequestFilterAccounts, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeRequestFilterAccounts;
    fromJSON(object: any): SubscribeRequestFilterAccounts;
    toJSON(message: SubscribeRequestFilterAccounts): unknown;
    create<I extends {
        account?: string[];
        owner?: string[];
        filters?: {
            memcmp?: {
                offset?: string;
                bytes?: Uint8Array | undefined;
                base58?: string | undefined;
                base64?: string | undefined;
            };
            datasize?: string | undefined;
            tokenAccountState?: boolean | undefined;
        }[];
    } & {
        account?: string[] & string[] & { [K in Exclude<keyof I["account"], keyof string[]>]: never; };
        owner?: string[] & string[] & { [K_1 in Exclude<keyof I["owner"], keyof string[]>]: never; };
        filters?: {
            memcmp?: {
                offset?: string;
                bytes?: Uint8Array | undefined;
                base58?: string | undefined;
                base64?: string | undefined;
            };
            datasize?: string | undefined;
            tokenAccountState?: boolean | undefined;
        }[] & ({
            memcmp?: {
                offset?: string;
                bytes?: Uint8Array | undefined;
                base58?: string | undefined;
                base64?: string | undefined;
            };
            datasize?: string | undefined;
            tokenAccountState?: boolean | undefined;
        } & {
            memcmp?: {
                offset?: string;
                bytes?: Uint8Array | undefined;
                base58?: string | undefined;
                base64?: string | undefined;
            } & {
                offset?: string;
                bytes?: Uint8Array | undefined;
                base58?: string | undefined;
                base64?: string | undefined;
            } & { [K_2 in Exclude<keyof I["filters"][number]["memcmp"], keyof SubscribeRequestFilterAccountsFilterMemcmp>]: never; };
            datasize?: string | undefined;
            tokenAccountState?: boolean | undefined;
        } & { [K_3 in Exclude<keyof I["filters"][number], keyof SubscribeRequestFilterAccountsFilter>]: never; })[] & { [K_4 in Exclude<keyof I["filters"], keyof {
            memcmp?: {
                offset?: string;
                bytes?: Uint8Array | undefined;
                base58?: string | undefined;
                base64?: string | undefined;
            };
            datasize?: string | undefined;
            tokenAccountState?: boolean | undefined;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I, keyof SubscribeRequestFilterAccounts>]: never; }>(base?: I): SubscribeRequestFilterAccounts;
    fromPartial<I_1 extends {
        account?: string[];
        owner?: string[];
        filters?: {
            memcmp?: {
                offset?: string;
                bytes?: Uint8Array | undefined;
                base58?: string | undefined;
                base64?: string | undefined;
            };
            datasize?: string | undefined;
            tokenAccountState?: boolean | undefined;
        }[];
    } & {
        account?: string[] & string[] & { [K_6 in Exclude<keyof I_1["account"], keyof string[]>]: never; };
        owner?: string[] & string[] & { [K_7 in Exclude<keyof I_1["owner"], keyof string[]>]: never; };
        filters?: {
            memcmp?: {
                offset?: string;
                bytes?: Uint8Array | undefined;
                base58?: string | undefined;
                base64?: string | undefined;
            };
            datasize?: string | undefined;
            tokenAccountState?: boolean | undefined;
        }[] & ({
            memcmp?: {
                offset?: string;
                bytes?: Uint8Array | undefined;
                base58?: string | undefined;
                base64?: string | undefined;
            };
            datasize?: string | undefined;
            tokenAccountState?: boolean | undefined;
        } & {
            memcmp?: {
                offset?: string;
                bytes?: Uint8Array | undefined;
                base58?: string | undefined;
                base64?: string | undefined;
            } & {
                offset?: string;
                bytes?: Uint8Array | undefined;
                base58?: string | undefined;
                base64?: string | undefined;
            } & { [K_8 in Exclude<keyof I_1["filters"][number]["memcmp"], keyof SubscribeRequestFilterAccountsFilterMemcmp>]: never; };
            datasize?: string | undefined;
            tokenAccountState?: boolean | undefined;
        } & { [K_9 in Exclude<keyof I_1["filters"][number], keyof SubscribeRequestFilterAccountsFilter>]: never; })[] & { [K_10 in Exclude<keyof I_1["filters"], keyof {
            memcmp?: {
                offset?: string;
                bytes?: Uint8Array | undefined;
                base58?: string | undefined;
                base64?: string | undefined;
            };
            datasize?: string | undefined;
            tokenAccountState?: boolean | undefined;
        }[]>]: never; };
    } & { [K_11 in Exclude<keyof I_1, keyof SubscribeRequestFilterAccounts>]: never; }>(object: I_1): SubscribeRequestFilterAccounts;
};
export declare const SubscribeRequestFilterAccountsFilter: {
    encode(message: SubscribeRequestFilterAccountsFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeRequestFilterAccountsFilter;
    fromJSON(object: any): SubscribeRequestFilterAccountsFilter;
    toJSON(message: SubscribeRequestFilterAccountsFilter): unknown;
    create<I extends {
        memcmp?: {
            offset?: string;
            bytes?: Uint8Array | undefined;
            base58?: string | undefined;
            base64?: string | undefined;
        };
        datasize?: string | undefined;
        tokenAccountState?: boolean | undefined;
    } & {
        memcmp?: {
            offset?: string;
            bytes?: Uint8Array | undefined;
            base58?: string | undefined;
            base64?: string | undefined;
        } & {
            offset?: string;
            bytes?: Uint8Array | undefined;
            base58?: string | undefined;
            base64?: string | undefined;
        } & { [K in Exclude<keyof I["memcmp"], keyof SubscribeRequestFilterAccountsFilterMemcmp>]: never; };
        datasize?: string | undefined;
        tokenAccountState?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I, keyof SubscribeRequestFilterAccountsFilter>]: never; }>(base?: I): SubscribeRequestFilterAccountsFilter;
    fromPartial<I_1 extends {
        memcmp?: {
            offset?: string;
            bytes?: Uint8Array | undefined;
            base58?: string | undefined;
            base64?: string | undefined;
        };
        datasize?: string | undefined;
        tokenAccountState?: boolean | undefined;
    } & {
        memcmp?: {
            offset?: string;
            bytes?: Uint8Array | undefined;
            base58?: string | undefined;
            base64?: string | undefined;
        } & {
            offset?: string;
            bytes?: Uint8Array | undefined;
            base58?: string | undefined;
            base64?: string | undefined;
        } & { [K_2 in Exclude<keyof I_1["memcmp"], keyof SubscribeRequestFilterAccountsFilterMemcmp>]: never; };
        datasize?: string | undefined;
        tokenAccountState?: boolean | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof SubscribeRequestFilterAccountsFilter>]: never; }>(object: I_1): SubscribeRequestFilterAccountsFilter;
};
export declare const SubscribeRequestFilterAccountsFilterMemcmp: {
    encode(message: SubscribeRequestFilterAccountsFilterMemcmp, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeRequestFilterAccountsFilterMemcmp;
    fromJSON(object: any): SubscribeRequestFilterAccountsFilterMemcmp;
    toJSON(message: SubscribeRequestFilterAccountsFilterMemcmp): unknown;
    create<I extends {
        offset?: string;
        bytes?: Uint8Array | undefined;
        base58?: string | undefined;
        base64?: string | undefined;
    } & {
        offset?: string;
        bytes?: Uint8Array | undefined;
        base58?: string | undefined;
        base64?: string | undefined;
    } & { [K in Exclude<keyof I, keyof SubscribeRequestFilterAccountsFilterMemcmp>]: never; }>(base?: I): SubscribeRequestFilterAccountsFilterMemcmp;
    fromPartial<I_1 extends {
        offset?: string;
        bytes?: Uint8Array | undefined;
        base58?: string | undefined;
        base64?: string | undefined;
    } & {
        offset?: string;
        bytes?: Uint8Array | undefined;
        base58?: string | undefined;
        base64?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SubscribeRequestFilterAccountsFilterMemcmp>]: never; }>(object: I_1): SubscribeRequestFilterAccountsFilterMemcmp;
};
export declare const SubscribeRequestFilterSlots: {
    encode(message: SubscribeRequestFilterSlots, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeRequestFilterSlots;
    fromJSON(object: any): SubscribeRequestFilterSlots;
    toJSON(message: SubscribeRequestFilterSlots): unknown;
    create<I extends {
        filterByCommitment?: boolean | undefined;
    } & {
        filterByCommitment?: boolean | undefined;
    } & { [K in Exclude<keyof I, "filterByCommitment">]: never; }>(base?: I): SubscribeRequestFilterSlots;
    fromPartial<I_1 extends {
        filterByCommitment?: boolean | undefined;
    } & {
        filterByCommitment?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I_1, "filterByCommitment">]: never; }>(object: I_1): SubscribeRequestFilterSlots;
};
export declare const SubscribeRequestFilterTransactions: {
    encode(message: SubscribeRequestFilterTransactions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeRequestFilterTransactions;
    fromJSON(object: any): SubscribeRequestFilterTransactions;
    toJSON(message: SubscribeRequestFilterTransactions): unknown;
    create<I extends {
        vote?: boolean | undefined;
        failed?: boolean | undefined;
        signature?: string | undefined;
        accountInclude?: string[];
        accountExclude?: string[];
        accountRequired?: string[];
    } & {
        vote?: boolean | undefined;
        failed?: boolean | undefined;
        signature?: string | undefined;
        accountInclude?: string[] & string[] & { [K in Exclude<keyof I["accountInclude"], keyof string[]>]: never; };
        accountExclude?: string[] & string[] & { [K_1 in Exclude<keyof I["accountExclude"], keyof string[]>]: never; };
        accountRequired?: string[] & string[] & { [K_2 in Exclude<keyof I["accountRequired"], keyof string[]>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof SubscribeRequestFilterTransactions>]: never; }>(base?: I): SubscribeRequestFilterTransactions;
    fromPartial<I_1 extends {
        vote?: boolean | undefined;
        failed?: boolean | undefined;
        signature?: string | undefined;
        accountInclude?: string[];
        accountExclude?: string[];
        accountRequired?: string[];
    } & {
        vote?: boolean | undefined;
        failed?: boolean | undefined;
        signature?: string | undefined;
        accountInclude?: string[] & string[] & { [K_4 in Exclude<keyof I_1["accountInclude"], keyof string[]>]: never; };
        accountExclude?: string[] & string[] & { [K_5 in Exclude<keyof I_1["accountExclude"], keyof string[]>]: never; };
        accountRequired?: string[] & string[] & { [K_6 in Exclude<keyof I_1["accountRequired"], keyof string[]>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof SubscribeRequestFilterTransactions>]: never; }>(object: I_1): SubscribeRequestFilterTransactions;
};
export declare const SubscribeRequestFilterBlocks: {
    encode(message: SubscribeRequestFilterBlocks, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeRequestFilterBlocks;
    fromJSON(object: any): SubscribeRequestFilterBlocks;
    toJSON(message: SubscribeRequestFilterBlocks): unknown;
    create<I extends {
        accountInclude?: string[];
        includeTransactions?: boolean | undefined;
        includeAccounts?: boolean | undefined;
        includeEntries?: boolean | undefined;
    } & {
        accountInclude?: string[] & string[] & { [K in Exclude<keyof I["accountInclude"], keyof string[]>]: never; };
        includeTransactions?: boolean | undefined;
        includeAccounts?: boolean | undefined;
        includeEntries?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I, keyof SubscribeRequestFilterBlocks>]: never; }>(base?: I): SubscribeRequestFilterBlocks;
    fromPartial<I_1 extends {
        accountInclude?: string[];
        includeTransactions?: boolean | undefined;
        includeAccounts?: boolean | undefined;
        includeEntries?: boolean | undefined;
    } & {
        accountInclude?: string[] & string[] & { [K_2 in Exclude<keyof I_1["accountInclude"], keyof string[]>]: never; };
        includeTransactions?: boolean | undefined;
        includeAccounts?: boolean | undefined;
        includeEntries?: boolean | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof SubscribeRequestFilterBlocks>]: never; }>(object: I_1): SubscribeRequestFilterBlocks;
};
export declare const SubscribeRequestFilterBlocksMeta: {
    encode(_: SubscribeRequestFilterBlocksMeta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeRequestFilterBlocksMeta;
    fromJSON(_: any): SubscribeRequestFilterBlocksMeta;
    toJSON(_: SubscribeRequestFilterBlocksMeta): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): SubscribeRequestFilterBlocksMeta;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): SubscribeRequestFilterBlocksMeta;
};
export declare const SubscribeRequestFilterEntry: {
    encode(_: SubscribeRequestFilterEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeRequestFilterEntry;
    fromJSON(_: any): SubscribeRequestFilterEntry;
    toJSON(_: SubscribeRequestFilterEntry): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): SubscribeRequestFilterEntry;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): SubscribeRequestFilterEntry;
};
export declare const SubscribeRequestAccountsDataSlice: {
    encode(message: SubscribeRequestAccountsDataSlice, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeRequestAccountsDataSlice;
    fromJSON(object: any): SubscribeRequestAccountsDataSlice;
    toJSON(message: SubscribeRequestAccountsDataSlice): unknown;
    create<I extends {
        offset?: string;
        length?: string;
    } & {
        offset?: string;
        length?: string;
    } & { [K in Exclude<keyof I, keyof SubscribeRequestAccountsDataSlice>]: never; }>(base?: I): SubscribeRequestAccountsDataSlice;
    fromPartial<I_1 extends {
        offset?: string;
        length?: string;
    } & {
        offset?: string;
        length?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof SubscribeRequestAccountsDataSlice>]: never; }>(object: I_1): SubscribeRequestAccountsDataSlice;
};
export declare const SubscribeRequestPing: {
    encode(message: SubscribeRequestPing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeRequestPing;
    fromJSON(object: any): SubscribeRequestPing;
    toJSON(message: SubscribeRequestPing): unknown;
    create<I extends {
        id?: number;
    } & {
        id?: number;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): SubscribeRequestPing;
    fromPartial<I_1 extends {
        id?: number;
    } & {
        id?: number;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): SubscribeRequestPing;
};
export declare const SubscribeUpdate: {
    encode(message: SubscribeUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeUpdate;
    fromJSON(object: any): SubscribeUpdate;
    toJSON(message: SubscribeUpdate): unknown;
    create<I extends {
        filters?: string[];
        account?: {
            account?: {
                pubkey?: Uint8Array;
                lamports?: string;
                owner?: Uint8Array;
                executable?: boolean;
                rentEpoch?: string;
                data?: Uint8Array;
                writeVersion?: string;
                txnSignature?: Uint8Array | undefined;
            };
            slot?: string;
            isStartup?: boolean;
        };
        slot?: {
            slot?: string;
            parent?: string | undefined;
            status?: CommitmentLevel;
        };
        transaction?: {
            transaction?: {
                signature?: Uint8Array;
                isVote?: boolean;
                transaction?: {
                    signatures?: Uint8Array[];
                    message?: {
                        header?: {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        };
                        accountKeys?: Uint8Array[];
                        recentBlockhash?: Uint8Array;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                        versioned?: boolean;
                        addressTableLookups?: {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        }[];
                    };
                };
                meta?: {
                    err?: {
                        err?: Uint8Array;
                    };
                    fee?: string;
                    preBalances?: string[];
                    postBalances?: string[];
                    innerInstructions?: {
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[];
                    }[];
                    innerInstructionsNone?: boolean;
                    logMessages?: string[];
                    logMessagesNone?: boolean;
                    preTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    postTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    rewards?: {
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    }[];
                    loadedWritableAddresses?: Uint8Array[];
                    loadedReadonlyAddresses?: Uint8Array[];
                    returnData?: {
                        programId?: Uint8Array;
                        data?: Uint8Array;
                    };
                    returnDataNone?: boolean;
                    computeUnitsConsumed?: string;
                };
                index?: string;
            };
            slot?: string;
        };
        block?: {
            slot?: string;
            blockhash?: string;
            rewards?: {
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[];
            };
            blockTime?: {
                timestamp?: string;
            };
            blockHeight?: {
                blockHeight?: string;
            };
            parentSlot?: string;
            parentBlockhash?: string;
            executedTransactionCount?: string;
            transactions?: {
                signature?: Uint8Array;
                isVote?: boolean;
                transaction?: {
                    signatures?: Uint8Array[];
                    message?: {
                        header?: {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        };
                        accountKeys?: Uint8Array[];
                        recentBlockhash?: Uint8Array;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                        versioned?: boolean;
                        addressTableLookups?: {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        }[];
                    };
                };
                meta?: {
                    err?: {
                        err?: Uint8Array;
                    };
                    fee?: string;
                    preBalances?: string[];
                    postBalances?: string[];
                    innerInstructions?: {
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[];
                    }[];
                    innerInstructionsNone?: boolean;
                    logMessages?: string[];
                    logMessagesNone?: boolean;
                    preTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    postTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    rewards?: {
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    }[];
                    loadedWritableAddresses?: Uint8Array[];
                    loadedReadonlyAddresses?: Uint8Array[];
                    returnData?: {
                        programId?: Uint8Array;
                        data?: Uint8Array;
                    };
                    returnDataNone?: boolean;
                    computeUnitsConsumed?: string;
                };
                index?: string;
            }[];
            updatedAccountCount?: string;
            accounts?: {
                pubkey?: Uint8Array;
                lamports?: string;
                owner?: Uint8Array;
                executable?: boolean;
                rentEpoch?: string;
                data?: Uint8Array;
                writeVersion?: string;
                txnSignature?: Uint8Array | undefined;
            }[];
            entriesCount?: string;
            entries?: {
                slot?: string;
                index?: string;
                numHashes?: string;
                hash?: Uint8Array;
                executedTransactionCount?: string;
            }[];
        };
        ping?: {};
        pong?: {
            id?: number;
        };
        blockMeta?: {
            slot?: string;
            blockhash?: string;
            rewards?: {
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[];
            };
            blockTime?: {
                timestamp?: string;
            };
            blockHeight?: {
                blockHeight?: string;
            };
            parentSlot?: string;
            parentBlockhash?: string;
            executedTransactionCount?: string;
        };
        entry?: {
            slot?: string;
            index?: string;
            numHashes?: string;
            hash?: Uint8Array;
            executedTransactionCount?: string;
        };
    } & {
        filters?: string[] & string[] & { [K in Exclude<keyof I["filters"], keyof string[]>]: never; };
        account?: {
            account?: {
                pubkey?: Uint8Array;
                lamports?: string;
                owner?: Uint8Array;
                executable?: boolean;
                rentEpoch?: string;
                data?: Uint8Array;
                writeVersion?: string;
                txnSignature?: Uint8Array | undefined;
            };
            slot?: string;
            isStartup?: boolean;
        } & {
            account?: {
                pubkey?: Uint8Array;
                lamports?: string;
                owner?: Uint8Array;
                executable?: boolean;
                rentEpoch?: string;
                data?: Uint8Array;
                writeVersion?: string;
                txnSignature?: Uint8Array | undefined;
            } & {
                pubkey?: Uint8Array;
                lamports?: string;
                owner?: Uint8Array;
                executable?: boolean;
                rentEpoch?: string;
                data?: Uint8Array;
                writeVersion?: string;
                txnSignature?: Uint8Array | undefined;
            } & { [K_1 in Exclude<keyof I["account"]["account"], keyof SubscribeUpdateAccountInfo>]: never; };
            slot?: string;
            isStartup?: boolean;
        } & { [K_2 in Exclude<keyof I["account"], keyof SubscribeUpdateAccount>]: never; };
        slot?: {
            slot?: string;
            parent?: string | undefined;
            status?: CommitmentLevel;
        } & {
            slot?: string;
            parent?: string | undefined;
            status?: CommitmentLevel;
        } & { [K_3 in Exclude<keyof I["slot"], keyof SubscribeUpdateSlot>]: never; };
        transaction?: {
            transaction?: {
                signature?: Uint8Array;
                isVote?: boolean;
                transaction?: {
                    signatures?: Uint8Array[];
                    message?: {
                        header?: {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        };
                        accountKeys?: Uint8Array[];
                        recentBlockhash?: Uint8Array;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                        versioned?: boolean;
                        addressTableLookups?: {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        }[];
                    };
                };
                meta?: {
                    err?: {
                        err?: Uint8Array;
                    };
                    fee?: string;
                    preBalances?: string[];
                    postBalances?: string[];
                    innerInstructions?: {
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[];
                    }[];
                    innerInstructionsNone?: boolean;
                    logMessages?: string[];
                    logMessagesNone?: boolean;
                    preTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    postTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    rewards?: {
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    }[];
                    loadedWritableAddresses?: Uint8Array[];
                    loadedReadonlyAddresses?: Uint8Array[];
                    returnData?: {
                        programId?: Uint8Array;
                        data?: Uint8Array;
                    };
                    returnDataNone?: boolean;
                    computeUnitsConsumed?: string;
                };
                index?: string;
            };
            slot?: string;
        } & {
            transaction?: {
                signature?: Uint8Array;
                isVote?: boolean;
                transaction?: {
                    signatures?: Uint8Array[];
                    message?: {
                        header?: {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        };
                        accountKeys?: Uint8Array[];
                        recentBlockhash?: Uint8Array;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                        versioned?: boolean;
                        addressTableLookups?: {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        }[];
                    };
                };
                meta?: {
                    err?: {
                        err?: Uint8Array;
                    };
                    fee?: string;
                    preBalances?: string[];
                    postBalances?: string[];
                    innerInstructions?: {
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[];
                    }[];
                    innerInstructionsNone?: boolean;
                    logMessages?: string[];
                    logMessagesNone?: boolean;
                    preTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    postTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    rewards?: {
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    }[];
                    loadedWritableAddresses?: Uint8Array[];
                    loadedReadonlyAddresses?: Uint8Array[];
                    returnData?: {
                        programId?: Uint8Array;
                        data?: Uint8Array;
                    };
                    returnDataNone?: boolean;
                    computeUnitsConsumed?: string;
                };
                index?: string;
            } & {
                signature?: Uint8Array;
                isVote?: boolean;
                transaction?: {
                    signatures?: Uint8Array[];
                    message?: {
                        header?: {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        };
                        accountKeys?: Uint8Array[];
                        recentBlockhash?: Uint8Array;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                        versioned?: boolean;
                        addressTableLookups?: {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        }[];
                    };
                } & {
                    signatures?: Uint8Array[] & Uint8Array[] & { [K_4 in Exclude<keyof I["transaction"]["transaction"]["transaction"]["signatures"], keyof Uint8Array[]>]: never; };
                    message?: {
                        header?: {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        };
                        accountKeys?: Uint8Array[];
                        recentBlockhash?: Uint8Array;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                        versioned?: boolean;
                        addressTableLookups?: {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        }[];
                    } & {
                        header?: {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        } & {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        } & { [K_5 in Exclude<keyof I["transaction"]["transaction"]["transaction"]["message"]["header"], keyof import("./solana-storage").MessageHeader>]: never; };
                        accountKeys?: Uint8Array[] & Uint8Array[] & { [K_6 in Exclude<keyof I["transaction"]["transaction"]["transaction"]["message"]["accountKeys"], keyof Uint8Array[]>]: never; };
                        recentBlockhash?: Uint8Array;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        }[] & ({
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        } & {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        } & { [K_7 in Exclude<keyof I["transaction"]["transaction"]["transaction"]["message"]["instructions"][number], keyof import("./solana-storage").CompiledInstruction>]: never; })[] & { [K_8 in Exclude<keyof I["transaction"]["transaction"]["transaction"]["message"]["instructions"], keyof {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        }[]>]: never; };
                        versioned?: boolean;
                        addressTableLookups?: {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        }[] & ({
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        } & {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        } & { [K_9 in Exclude<keyof I["transaction"]["transaction"]["transaction"]["message"]["addressTableLookups"][number], keyof import("./solana-storage").MessageAddressTableLookup>]: never; })[] & { [K_10 in Exclude<keyof I["transaction"]["transaction"]["transaction"]["message"]["addressTableLookups"], keyof {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        }[]>]: never; };
                    } & { [K_11 in Exclude<keyof I["transaction"]["transaction"]["transaction"]["message"], keyof import("./solana-storage").Message>]: never; };
                } & { [K_12 in Exclude<keyof I["transaction"]["transaction"]["transaction"], keyof Transaction>]: never; };
                meta?: {
                    err?: {
                        err?: Uint8Array;
                    };
                    fee?: string;
                    preBalances?: string[];
                    postBalances?: string[];
                    innerInstructions?: {
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[];
                    }[];
                    innerInstructionsNone?: boolean;
                    logMessages?: string[];
                    logMessagesNone?: boolean;
                    preTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    postTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    rewards?: {
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    }[];
                    loadedWritableAddresses?: Uint8Array[];
                    loadedReadonlyAddresses?: Uint8Array[];
                    returnData?: {
                        programId?: Uint8Array;
                        data?: Uint8Array;
                    };
                    returnDataNone?: boolean;
                    computeUnitsConsumed?: string;
                } & {
                    err?: {
                        err?: Uint8Array;
                    } & {
                        err?: Uint8Array;
                    } & { [K_13 in Exclude<keyof I["transaction"]["transaction"]["meta"]["err"], "err">]: never; };
                    fee?: string;
                    preBalances?: string[] & string[] & { [K_14 in Exclude<keyof I["transaction"]["transaction"]["meta"]["preBalances"], keyof string[]>]: never; };
                    postBalances?: string[] & string[] & { [K_15 in Exclude<keyof I["transaction"]["transaction"]["meta"]["postBalances"], keyof string[]>]: never; };
                    innerInstructions?: {
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[];
                    }[] & ({
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[];
                    } & {
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[] & ({
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        } & {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        } & { [K_16 in Exclude<keyof I["transaction"]["transaction"]["meta"]["innerInstructions"][number]["instructions"][number], keyof import("./solana-storage").InnerInstruction>]: never; })[] & { [K_17 in Exclude<keyof I["transaction"]["transaction"]["meta"]["innerInstructions"][number]["instructions"], keyof {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[]>]: never; };
                    } & { [K_18 in Exclude<keyof I["transaction"]["transaction"]["meta"]["innerInstructions"][number], keyof import("./solana-storage").InnerInstructions>]: never; })[] & { [K_19 in Exclude<keyof I["transaction"]["transaction"]["meta"]["innerInstructions"], keyof {
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[];
                    }[]>]: never; };
                    innerInstructionsNone?: boolean;
                    logMessages?: string[] & string[] & { [K_20 in Exclude<keyof I["transaction"]["transaction"]["meta"]["logMessages"], keyof string[]>]: never; };
                    logMessagesNone?: boolean;
                    preTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[] & ({
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    } & {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        } & {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        } & { [K_21 in Exclude<keyof I["transaction"]["transaction"]["meta"]["preTokenBalances"][number]["uiTokenAmount"], keyof import("./solana-storage").UiTokenAmount>]: never; };
                        owner?: string;
                        programId?: string;
                    } & { [K_22 in Exclude<keyof I["transaction"]["transaction"]["meta"]["preTokenBalances"][number], keyof import("./solana-storage").TokenBalance>]: never; })[] & { [K_23 in Exclude<keyof I["transaction"]["transaction"]["meta"]["preTokenBalances"], keyof {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[]>]: never; };
                    postTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[] & ({
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    } & {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        } & {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        } & { [K_24 in Exclude<keyof I["transaction"]["transaction"]["meta"]["postTokenBalances"][number]["uiTokenAmount"], keyof import("./solana-storage").UiTokenAmount>]: never; };
                        owner?: string;
                        programId?: string;
                    } & { [K_25 in Exclude<keyof I["transaction"]["transaction"]["meta"]["postTokenBalances"][number], keyof import("./solana-storage").TokenBalance>]: never; })[] & { [K_26 in Exclude<keyof I["transaction"]["transaction"]["meta"]["postTokenBalances"], keyof {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[]>]: never; };
                    rewards?: {
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    }[] & ({
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    } & {
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    } & { [K_27 in Exclude<keyof I["transaction"]["transaction"]["meta"]["rewards"][number], keyof import("./solana-storage").Reward>]: never; })[] & { [K_28 in Exclude<keyof I["transaction"]["transaction"]["meta"]["rewards"], keyof {
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    }[]>]: never; };
                    loadedWritableAddresses?: Uint8Array[] & Uint8Array[] & { [K_29 in Exclude<keyof I["transaction"]["transaction"]["meta"]["loadedWritableAddresses"], keyof Uint8Array[]>]: never; };
                    loadedReadonlyAddresses?: Uint8Array[] & Uint8Array[] & { [K_30 in Exclude<keyof I["transaction"]["transaction"]["meta"]["loadedReadonlyAddresses"], keyof Uint8Array[]>]: never; };
                    returnData?: {
                        programId?: Uint8Array;
                        data?: Uint8Array;
                    } & {
                        programId?: Uint8Array;
                        data?: Uint8Array;
                    } & { [K_31 in Exclude<keyof I["transaction"]["transaction"]["meta"]["returnData"], keyof import("./solana-storage").ReturnData>]: never; };
                    returnDataNone?: boolean;
                    computeUnitsConsumed?: string;
                } & { [K_32 in Exclude<keyof I["transaction"]["transaction"]["meta"], keyof TransactionStatusMeta>]: never; };
                index?: string;
            } & { [K_33 in Exclude<keyof I["transaction"]["transaction"], keyof SubscribeUpdateTransactionInfo>]: never; };
            slot?: string;
        } & { [K_34 in Exclude<keyof I["transaction"], keyof SubscribeUpdateTransaction>]: never; };
        block?: {
            slot?: string;
            blockhash?: string;
            rewards?: {
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[];
            };
            blockTime?: {
                timestamp?: string;
            };
            blockHeight?: {
                blockHeight?: string;
            };
            parentSlot?: string;
            parentBlockhash?: string;
            executedTransactionCount?: string;
            transactions?: {
                signature?: Uint8Array;
                isVote?: boolean;
                transaction?: {
                    signatures?: Uint8Array[];
                    message?: {
                        header?: {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        };
                        accountKeys?: Uint8Array[];
                        recentBlockhash?: Uint8Array;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                        versioned?: boolean;
                        addressTableLookups?: {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        }[];
                    };
                };
                meta?: {
                    err?: {
                        err?: Uint8Array;
                    };
                    fee?: string;
                    preBalances?: string[];
                    postBalances?: string[];
                    innerInstructions?: {
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[];
                    }[];
                    innerInstructionsNone?: boolean;
                    logMessages?: string[];
                    logMessagesNone?: boolean;
                    preTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    postTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    rewards?: {
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    }[];
                    loadedWritableAddresses?: Uint8Array[];
                    loadedReadonlyAddresses?: Uint8Array[];
                    returnData?: {
                        programId?: Uint8Array;
                        data?: Uint8Array;
                    };
                    returnDataNone?: boolean;
                    computeUnitsConsumed?: string;
                };
                index?: string;
            }[];
            updatedAccountCount?: string;
            accounts?: {
                pubkey?: Uint8Array;
                lamports?: string;
                owner?: Uint8Array;
                executable?: boolean;
                rentEpoch?: string;
                data?: Uint8Array;
                writeVersion?: string;
                txnSignature?: Uint8Array | undefined;
            }[];
            entriesCount?: string;
            entries?: {
                slot?: string;
                index?: string;
                numHashes?: string;
                hash?: Uint8Array;
                executedTransactionCount?: string;
            }[];
        } & {
            slot?: string;
            blockhash?: string;
            rewards?: {
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[];
            } & {
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[] & ({
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                } & {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                } & { [K_35 in Exclude<keyof I["block"]["rewards"]["rewards"][number], keyof import("./solana-storage").Reward>]: never; })[] & { [K_36 in Exclude<keyof I["block"]["rewards"]["rewards"], keyof {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[]>]: never; };
            } & { [K_37 in Exclude<keyof I["block"]["rewards"], "rewards">]: never; };
            blockTime?: {
                timestamp?: string;
            } & {
                timestamp?: string;
            } & { [K_38 in Exclude<keyof I["block"]["blockTime"], "timestamp">]: never; };
            blockHeight?: {
                blockHeight?: string;
            } & {
                blockHeight?: string;
            } & { [K_39 in Exclude<keyof I["block"]["blockHeight"], "blockHeight">]: never; };
            parentSlot?: string;
            parentBlockhash?: string;
            executedTransactionCount?: string;
            transactions?: {
                signature?: Uint8Array;
                isVote?: boolean;
                transaction?: {
                    signatures?: Uint8Array[];
                    message?: {
                        header?: {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        };
                        accountKeys?: Uint8Array[];
                        recentBlockhash?: Uint8Array;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                        versioned?: boolean;
                        addressTableLookups?: {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        }[];
                    };
                };
                meta?: {
                    err?: {
                        err?: Uint8Array;
                    };
                    fee?: string;
                    preBalances?: string[];
                    postBalances?: string[];
                    innerInstructions?: {
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[];
                    }[];
                    innerInstructionsNone?: boolean;
                    logMessages?: string[];
                    logMessagesNone?: boolean;
                    preTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    postTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    rewards?: {
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    }[];
                    loadedWritableAddresses?: Uint8Array[];
                    loadedReadonlyAddresses?: Uint8Array[];
                    returnData?: {
                        programId?: Uint8Array;
                        data?: Uint8Array;
                    };
                    returnDataNone?: boolean;
                    computeUnitsConsumed?: string;
                };
                index?: string;
            }[] & ({
                signature?: Uint8Array;
                isVote?: boolean;
                transaction?: {
                    signatures?: Uint8Array[];
                    message?: {
                        header?: {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        };
                        accountKeys?: Uint8Array[];
                        recentBlockhash?: Uint8Array;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                        versioned?: boolean;
                        addressTableLookups?: {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        }[];
                    };
                };
                meta?: {
                    err?: {
                        err?: Uint8Array;
                    };
                    fee?: string;
                    preBalances?: string[];
                    postBalances?: string[];
                    innerInstructions?: {
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[];
                    }[];
                    innerInstructionsNone?: boolean;
                    logMessages?: string[];
                    logMessagesNone?: boolean;
                    preTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    postTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    rewards?: {
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    }[];
                    loadedWritableAddresses?: Uint8Array[];
                    loadedReadonlyAddresses?: Uint8Array[];
                    returnData?: {
                        programId?: Uint8Array;
                        data?: Uint8Array;
                    };
                    returnDataNone?: boolean;
                    computeUnitsConsumed?: string;
                };
                index?: string;
            } & {
                signature?: Uint8Array;
                isVote?: boolean;
                transaction?: {
                    signatures?: Uint8Array[];
                    message?: {
                        header?: {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        };
                        accountKeys?: Uint8Array[];
                        recentBlockhash?: Uint8Array;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                        versioned?: boolean;
                        addressTableLookups?: {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        }[];
                    };
                } & {
                    signatures?: Uint8Array[] & Uint8Array[] & { [K_40 in Exclude<keyof I["block"]["transactions"][number]["transaction"]["signatures"], keyof Uint8Array[]>]: never; };
                    message?: {
                        header?: {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        };
                        accountKeys?: Uint8Array[];
                        recentBlockhash?: Uint8Array;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                        versioned?: boolean;
                        addressTableLookups?: {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        }[];
                    } & {
                        header?: {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        } & {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        } & { [K_41 in Exclude<keyof I["block"]["transactions"][number]["transaction"]["message"]["header"], keyof import("./solana-storage").MessageHeader>]: never; };
                        accountKeys?: Uint8Array[] & Uint8Array[] & { [K_42 in Exclude<keyof I["block"]["transactions"][number]["transaction"]["message"]["accountKeys"], keyof Uint8Array[]>]: never; };
                        recentBlockhash?: Uint8Array;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        }[] & ({
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        } & {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        } & { [K_43 in Exclude<keyof I["block"]["transactions"][number]["transaction"]["message"]["instructions"][number], keyof import("./solana-storage").CompiledInstruction>]: never; })[] & { [K_44 in Exclude<keyof I["block"]["transactions"][number]["transaction"]["message"]["instructions"], keyof {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        }[]>]: never; };
                        versioned?: boolean;
                        addressTableLookups?: {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        }[] & ({
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        } & {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        } & { [K_45 in Exclude<keyof I["block"]["transactions"][number]["transaction"]["message"]["addressTableLookups"][number], keyof import("./solana-storage").MessageAddressTableLookup>]: never; })[] & { [K_46 in Exclude<keyof I["block"]["transactions"][number]["transaction"]["message"]["addressTableLookups"], keyof {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        }[]>]: never; };
                    } & { [K_47 in Exclude<keyof I["block"]["transactions"][number]["transaction"]["message"], keyof import("./solana-storage").Message>]: never; };
                } & { [K_48 in Exclude<keyof I["block"]["transactions"][number]["transaction"], keyof Transaction>]: never; };
                meta?: {
                    err?: {
                        err?: Uint8Array;
                    };
                    fee?: string;
                    preBalances?: string[];
                    postBalances?: string[];
                    innerInstructions?: {
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[];
                    }[];
                    innerInstructionsNone?: boolean;
                    logMessages?: string[];
                    logMessagesNone?: boolean;
                    preTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    postTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    rewards?: {
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    }[];
                    loadedWritableAddresses?: Uint8Array[];
                    loadedReadonlyAddresses?: Uint8Array[];
                    returnData?: {
                        programId?: Uint8Array;
                        data?: Uint8Array;
                    };
                    returnDataNone?: boolean;
                    computeUnitsConsumed?: string;
                } & {
                    err?: {
                        err?: Uint8Array;
                    } & {
                        err?: Uint8Array;
                    } & { [K_49 in Exclude<keyof I["block"]["transactions"][number]["meta"]["err"], "err">]: never; };
                    fee?: string;
                    preBalances?: string[] & string[] & { [K_50 in Exclude<keyof I["block"]["transactions"][number]["meta"]["preBalances"], keyof string[]>]: never; };
                    postBalances?: string[] & string[] & { [K_51 in Exclude<keyof I["block"]["transactions"][number]["meta"]["postBalances"], keyof string[]>]: never; };
                    innerInstructions?: {
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[];
                    }[] & ({
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[];
                    } & {
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[] & ({
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        } & {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        } & { [K_52 in Exclude<keyof I["block"]["transactions"][number]["meta"]["innerInstructions"][number]["instructions"][number], keyof import("./solana-storage").InnerInstruction>]: never; })[] & { [K_53 in Exclude<keyof I["block"]["transactions"][number]["meta"]["innerInstructions"][number]["instructions"], keyof {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[]>]: never; };
                    } & { [K_54 in Exclude<keyof I["block"]["transactions"][number]["meta"]["innerInstructions"][number], keyof import("./solana-storage").InnerInstructions>]: never; })[] & { [K_55 in Exclude<keyof I["block"]["transactions"][number]["meta"]["innerInstructions"], keyof {
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[];
                    }[]>]: never; };
                    innerInstructionsNone?: boolean;
                    logMessages?: string[] & string[] & { [K_56 in Exclude<keyof I["block"]["transactions"][number]["meta"]["logMessages"], keyof string[]>]: never; };
                    logMessagesNone?: boolean;
                    preTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[] & ({
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    } & {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        } & {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        } & { [K_57 in Exclude<keyof I["block"]["transactions"][number]["meta"]["preTokenBalances"][number]["uiTokenAmount"], keyof import("./solana-storage").UiTokenAmount>]: never; };
                        owner?: string;
                        programId?: string;
                    } & { [K_58 in Exclude<keyof I["block"]["transactions"][number]["meta"]["preTokenBalances"][number], keyof import("./solana-storage").TokenBalance>]: never; })[] & { [K_59 in Exclude<keyof I["block"]["transactions"][number]["meta"]["preTokenBalances"], keyof {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[]>]: never; };
                    postTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[] & ({
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    } & {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        } & {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        } & { [K_60 in Exclude<keyof I["block"]["transactions"][number]["meta"]["postTokenBalances"][number]["uiTokenAmount"], keyof import("./solana-storage").UiTokenAmount>]: never; };
                        owner?: string;
                        programId?: string;
                    } & { [K_61 in Exclude<keyof I["block"]["transactions"][number]["meta"]["postTokenBalances"][number], keyof import("./solana-storage").TokenBalance>]: never; })[] & { [K_62 in Exclude<keyof I["block"]["transactions"][number]["meta"]["postTokenBalances"], keyof {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[]>]: never; };
                    rewards?: {
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    }[] & ({
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    } & {
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    } & { [K_63 in Exclude<keyof I["block"]["transactions"][number]["meta"]["rewards"][number], keyof import("./solana-storage").Reward>]: never; })[] & { [K_64 in Exclude<keyof I["block"]["transactions"][number]["meta"]["rewards"], keyof {
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    }[]>]: never; };
                    loadedWritableAddresses?: Uint8Array[] & Uint8Array[] & { [K_65 in Exclude<keyof I["block"]["transactions"][number]["meta"]["loadedWritableAddresses"], keyof Uint8Array[]>]: never; };
                    loadedReadonlyAddresses?: Uint8Array[] & Uint8Array[] & { [K_66 in Exclude<keyof I["block"]["transactions"][number]["meta"]["loadedReadonlyAddresses"], keyof Uint8Array[]>]: never; };
                    returnData?: {
                        programId?: Uint8Array;
                        data?: Uint8Array;
                    } & {
                        programId?: Uint8Array;
                        data?: Uint8Array;
                    } & { [K_67 in Exclude<keyof I["block"]["transactions"][number]["meta"]["returnData"], keyof import("./solana-storage").ReturnData>]: never; };
                    returnDataNone?: boolean;
                    computeUnitsConsumed?: string;
                } & { [K_68 in Exclude<keyof I["block"]["transactions"][number]["meta"], keyof TransactionStatusMeta>]: never; };
                index?: string;
            } & { [K_69 in Exclude<keyof I["block"]["transactions"][number], keyof SubscribeUpdateTransactionInfo>]: never; })[] & { [K_70 in Exclude<keyof I["block"]["transactions"], keyof {
                signature?: Uint8Array;
                isVote?: boolean;
                transaction?: {
                    signatures?: Uint8Array[];
                    message?: {
                        header?: {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        };
                        accountKeys?: Uint8Array[];
                        recentBlockhash?: Uint8Array;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                        versioned?: boolean;
                        addressTableLookups?: {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        }[];
                    };
                };
                meta?: {
                    err?: {
                        err?: Uint8Array;
                    };
                    fee?: string;
                    preBalances?: string[];
                    postBalances?: string[];
                    innerInstructions?: {
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[];
                    }[];
                    innerInstructionsNone?: boolean;
                    logMessages?: string[];
                    logMessagesNone?: boolean;
                    preTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    postTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    rewards?: {
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    }[];
                    loadedWritableAddresses?: Uint8Array[];
                    loadedReadonlyAddresses?: Uint8Array[];
                    returnData?: {
                        programId?: Uint8Array;
                        data?: Uint8Array;
                    };
                    returnDataNone?: boolean;
                    computeUnitsConsumed?: string;
                };
                index?: string;
            }[]>]: never; };
            updatedAccountCount?: string;
            accounts?: {
                pubkey?: Uint8Array;
                lamports?: string;
                owner?: Uint8Array;
                executable?: boolean;
                rentEpoch?: string;
                data?: Uint8Array;
                writeVersion?: string;
                txnSignature?: Uint8Array | undefined;
            }[] & ({
                pubkey?: Uint8Array;
                lamports?: string;
                owner?: Uint8Array;
                executable?: boolean;
                rentEpoch?: string;
                data?: Uint8Array;
                writeVersion?: string;
                txnSignature?: Uint8Array | undefined;
            } & {
                pubkey?: Uint8Array;
                lamports?: string;
                owner?: Uint8Array;
                executable?: boolean;
                rentEpoch?: string;
                data?: Uint8Array;
                writeVersion?: string;
                txnSignature?: Uint8Array | undefined;
            } & { [K_71 in Exclude<keyof I["block"]["accounts"][number], keyof SubscribeUpdateAccountInfo>]: never; })[] & { [K_72 in Exclude<keyof I["block"]["accounts"], keyof {
                pubkey?: Uint8Array;
                lamports?: string;
                owner?: Uint8Array;
                executable?: boolean;
                rentEpoch?: string;
                data?: Uint8Array;
                writeVersion?: string;
                txnSignature?: Uint8Array | undefined;
            }[]>]: never; };
            entriesCount?: string;
            entries?: {
                slot?: string;
                index?: string;
                numHashes?: string;
                hash?: Uint8Array;
                executedTransactionCount?: string;
            }[] & ({
                slot?: string;
                index?: string;
                numHashes?: string;
                hash?: Uint8Array;
                executedTransactionCount?: string;
            } & {
                slot?: string;
                index?: string;
                numHashes?: string;
                hash?: Uint8Array;
                executedTransactionCount?: string;
            } & { [K_73 in Exclude<keyof I["block"]["entries"][number], keyof SubscribeUpdateEntry>]: never; })[] & { [K_74 in Exclude<keyof I["block"]["entries"], keyof {
                slot?: string;
                index?: string;
                numHashes?: string;
                hash?: Uint8Array;
                executedTransactionCount?: string;
            }[]>]: never; };
        } & { [K_75 in Exclude<keyof I["block"], keyof SubscribeUpdateBlock>]: never; };
        ping?: {} & {} & { [K_76 in Exclude<keyof I["ping"], never>]: never; };
        pong?: {
            id?: number;
        } & {
            id?: number;
        } & { [K_77 in Exclude<keyof I["pong"], "id">]: never; };
        blockMeta?: {
            slot?: string;
            blockhash?: string;
            rewards?: {
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[];
            };
            blockTime?: {
                timestamp?: string;
            };
            blockHeight?: {
                blockHeight?: string;
            };
            parentSlot?: string;
            parentBlockhash?: string;
            executedTransactionCount?: string;
        } & {
            slot?: string;
            blockhash?: string;
            rewards?: {
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[];
            } & {
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[] & ({
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                } & {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                } & { [K_78 in Exclude<keyof I["blockMeta"]["rewards"]["rewards"][number], keyof import("./solana-storage").Reward>]: never; })[] & { [K_79 in Exclude<keyof I["blockMeta"]["rewards"]["rewards"], keyof {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[]>]: never; };
            } & { [K_80 in Exclude<keyof I["blockMeta"]["rewards"], "rewards">]: never; };
            blockTime?: {
                timestamp?: string;
            } & {
                timestamp?: string;
            } & { [K_81 in Exclude<keyof I["blockMeta"]["blockTime"], "timestamp">]: never; };
            blockHeight?: {
                blockHeight?: string;
            } & {
                blockHeight?: string;
            } & { [K_82 in Exclude<keyof I["blockMeta"]["blockHeight"], "blockHeight">]: never; };
            parentSlot?: string;
            parentBlockhash?: string;
            executedTransactionCount?: string;
        } & { [K_83 in Exclude<keyof I["blockMeta"], keyof SubscribeUpdateBlockMeta>]: never; };
        entry?: {
            slot?: string;
            index?: string;
            numHashes?: string;
            hash?: Uint8Array;
            executedTransactionCount?: string;
        } & {
            slot?: string;
            index?: string;
            numHashes?: string;
            hash?: Uint8Array;
            executedTransactionCount?: string;
        } & { [K_84 in Exclude<keyof I["entry"], keyof SubscribeUpdateEntry>]: never; };
    } & { [K_85 in Exclude<keyof I, keyof SubscribeUpdate>]: never; }>(base?: I): SubscribeUpdate;
    fromPartial<I_1 extends {
        filters?: string[];
        account?: {
            account?: {
                pubkey?: Uint8Array;
                lamports?: string;
                owner?: Uint8Array;
                executable?: boolean;
                rentEpoch?: string;
                data?: Uint8Array;
                writeVersion?: string;
                txnSignature?: Uint8Array | undefined;
            };
            slot?: string;
            isStartup?: boolean;
        };
        slot?: {
            slot?: string;
            parent?: string | undefined;
            status?: CommitmentLevel;
        };
        transaction?: {
            transaction?: {
                signature?: Uint8Array;
                isVote?: boolean;
                transaction?: {
                    signatures?: Uint8Array[];
                    message?: {
                        header?: {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        };
                        accountKeys?: Uint8Array[];
                        recentBlockhash?: Uint8Array;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                        versioned?: boolean;
                        addressTableLookups?: {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        }[];
                    };
                };
                meta?: {
                    err?: {
                        err?: Uint8Array;
                    };
                    fee?: string;
                    preBalances?: string[];
                    postBalances?: string[];
                    innerInstructions?: {
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[];
                    }[];
                    innerInstructionsNone?: boolean;
                    logMessages?: string[];
                    logMessagesNone?: boolean;
                    preTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    postTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    rewards?: {
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    }[];
                    loadedWritableAddresses?: Uint8Array[];
                    loadedReadonlyAddresses?: Uint8Array[];
                    returnData?: {
                        programId?: Uint8Array;
                        data?: Uint8Array;
                    };
                    returnDataNone?: boolean;
                    computeUnitsConsumed?: string;
                };
                index?: string;
            };
            slot?: string;
        };
        block?: {
            slot?: string;
            blockhash?: string;
            rewards?: {
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[];
            };
            blockTime?: {
                timestamp?: string;
            };
            blockHeight?: {
                blockHeight?: string;
            };
            parentSlot?: string;
            parentBlockhash?: string;
            executedTransactionCount?: string;
            transactions?: {
                signature?: Uint8Array;
                isVote?: boolean;
                transaction?: {
                    signatures?: Uint8Array[];
                    message?: {
                        header?: {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        };
                        accountKeys?: Uint8Array[];
                        recentBlockhash?: Uint8Array;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                        versioned?: boolean;
                        addressTableLookups?: {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        }[];
                    };
                };
                meta?: {
                    err?: {
                        err?: Uint8Array;
                    };
                    fee?: string;
                    preBalances?: string[];
                    postBalances?: string[];
                    innerInstructions?: {
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[];
                    }[];
                    innerInstructionsNone?: boolean;
                    logMessages?: string[];
                    logMessagesNone?: boolean;
                    preTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    postTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    rewards?: {
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    }[];
                    loadedWritableAddresses?: Uint8Array[];
                    loadedReadonlyAddresses?: Uint8Array[];
                    returnData?: {
                        programId?: Uint8Array;
                        data?: Uint8Array;
                    };
                    returnDataNone?: boolean;
                    computeUnitsConsumed?: string;
                };
                index?: string;
            }[];
            updatedAccountCount?: string;
            accounts?: {
                pubkey?: Uint8Array;
                lamports?: string;
                owner?: Uint8Array;
                executable?: boolean;
                rentEpoch?: string;
                data?: Uint8Array;
                writeVersion?: string;
                txnSignature?: Uint8Array | undefined;
            }[];
            entriesCount?: string;
            entries?: {
                slot?: string;
                index?: string;
                numHashes?: string;
                hash?: Uint8Array;
                executedTransactionCount?: string;
            }[];
        };
        ping?: {};
        pong?: {
            id?: number;
        };
        blockMeta?: {
            slot?: string;
            blockhash?: string;
            rewards?: {
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[];
            };
            blockTime?: {
                timestamp?: string;
            };
            blockHeight?: {
                blockHeight?: string;
            };
            parentSlot?: string;
            parentBlockhash?: string;
            executedTransactionCount?: string;
        };
        entry?: {
            slot?: string;
            index?: string;
            numHashes?: string;
            hash?: Uint8Array;
            executedTransactionCount?: string;
        };
    } & {
        filters?: string[] & string[] & { [K_86 in Exclude<keyof I_1["filters"], keyof string[]>]: never; };
        account?: {
            account?: {
                pubkey?: Uint8Array;
                lamports?: string;
                owner?: Uint8Array;
                executable?: boolean;
                rentEpoch?: string;
                data?: Uint8Array;
                writeVersion?: string;
                txnSignature?: Uint8Array | undefined;
            };
            slot?: string;
            isStartup?: boolean;
        } & {
            account?: {
                pubkey?: Uint8Array;
                lamports?: string;
                owner?: Uint8Array;
                executable?: boolean;
                rentEpoch?: string;
                data?: Uint8Array;
                writeVersion?: string;
                txnSignature?: Uint8Array | undefined;
            } & {
                pubkey?: Uint8Array;
                lamports?: string;
                owner?: Uint8Array;
                executable?: boolean;
                rentEpoch?: string;
                data?: Uint8Array;
                writeVersion?: string;
                txnSignature?: Uint8Array | undefined;
            } & { [K_87 in Exclude<keyof I_1["account"]["account"], keyof SubscribeUpdateAccountInfo>]: never; };
            slot?: string;
            isStartup?: boolean;
        } & { [K_88 in Exclude<keyof I_1["account"], keyof SubscribeUpdateAccount>]: never; };
        slot?: {
            slot?: string;
            parent?: string | undefined;
            status?: CommitmentLevel;
        } & {
            slot?: string;
            parent?: string | undefined;
            status?: CommitmentLevel;
        } & { [K_89 in Exclude<keyof I_1["slot"], keyof SubscribeUpdateSlot>]: never; };
        transaction?: {
            transaction?: {
                signature?: Uint8Array;
                isVote?: boolean;
                transaction?: {
                    signatures?: Uint8Array[];
                    message?: {
                        header?: {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        };
                        accountKeys?: Uint8Array[];
                        recentBlockhash?: Uint8Array;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                        versioned?: boolean;
                        addressTableLookups?: {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        }[];
                    };
                };
                meta?: {
                    err?: {
                        err?: Uint8Array;
                    };
                    fee?: string;
                    preBalances?: string[];
                    postBalances?: string[];
                    innerInstructions?: {
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[];
                    }[];
                    innerInstructionsNone?: boolean;
                    logMessages?: string[];
                    logMessagesNone?: boolean;
                    preTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    postTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    rewards?: {
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    }[];
                    loadedWritableAddresses?: Uint8Array[];
                    loadedReadonlyAddresses?: Uint8Array[];
                    returnData?: {
                        programId?: Uint8Array;
                        data?: Uint8Array;
                    };
                    returnDataNone?: boolean;
                    computeUnitsConsumed?: string;
                };
                index?: string;
            };
            slot?: string;
        } & {
            transaction?: {
                signature?: Uint8Array;
                isVote?: boolean;
                transaction?: {
                    signatures?: Uint8Array[];
                    message?: {
                        header?: {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        };
                        accountKeys?: Uint8Array[];
                        recentBlockhash?: Uint8Array;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                        versioned?: boolean;
                        addressTableLookups?: {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        }[];
                    };
                };
                meta?: {
                    err?: {
                        err?: Uint8Array;
                    };
                    fee?: string;
                    preBalances?: string[];
                    postBalances?: string[];
                    innerInstructions?: {
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[];
                    }[];
                    innerInstructionsNone?: boolean;
                    logMessages?: string[];
                    logMessagesNone?: boolean;
                    preTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    postTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    rewards?: {
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    }[];
                    loadedWritableAddresses?: Uint8Array[];
                    loadedReadonlyAddresses?: Uint8Array[];
                    returnData?: {
                        programId?: Uint8Array;
                        data?: Uint8Array;
                    };
                    returnDataNone?: boolean;
                    computeUnitsConsumed?: string;
                };
                index?: string;
            } & {
                signature?: Uint8Array;
                isVote?: boolean;
                transaction?: {
                    signatures?: Uint8Array[];
                    message?: {
                        header?: {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        };
                        accountKeys?: Uint8Array[];
                        recentBlockhash?: Uint8Array;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                        versioned?: boolean;
                        addressTableLookups?: {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        }[];
                    };
                } & {
                    signatures?: Uint8Array[] & Uint8Array[] & { [K_90 in Exclude<keyof I_1["transaction"]["transaction"]["transaction"]["signatures"], keyof Uint8Array[]>]: never; };
                    message?: {
                        header?: {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        };
                        accountKeys?: Uint8Array[];
                        recentBlockhash?: Uint8Array;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                        versioned?: boolean;
                        addressTableLookups?: {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        }[];
                    } & {
                        header?: {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        } & {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        } & { [K_91 in Exclude<keyof I_1["transaction"]["transaction"]["transaction"]["message"]["header"], keyof import("./solana-storage").MessageHeader>]: never; };
                        accountKeys?: Uint8Array[] & Uint8Array[] & { [K_92 in Exclude<keyof I_1["transaction"]["transaction"]["transaction"]["message"]["accountKeys"], keyof Uint8Array[]>]: never; };
                        recentBlockhash?: Uint8Array;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        }[] & ({
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        } & {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        } & { [K_93 in Exclude<keyof I_1["transaction"]["transaction"]["transaction"]["message"]["instructions"][number], keyof import("./solana-storage").CompiledInstruction>]: never; })[] & { [K_94 in Exclude<keyof I_1["transaction"]["transaction"]["transaction"]["message"]["instructions"], keyof {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        }[]>]: never; };
                        versioned?: boolean;
                        addressTableLookups?: {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        }[] & ({
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        } & {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        } & { [K_95 in Exclude<keyof I_1["transaction"]["transaction"]["transaction"]["message"]["addressTableLookups"][number], keyof import("./solana-storage").MessageAddressTableLookup>]: never; })[] & { [K_96 in Exclude<keyof I_1["transaction"]["transaction"]["transaction"]["message"]["addressTableLookups"], keyof {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        }[]>]: never; };
                    } & { [K_97 in Exclude<keyof I_1["transaction"]["transaction"]["transaction"]["message"], keyof import("./solana-storage").Message>]: never; };
                } & { [K_98 in Exclude<keyof I_1["transaction"]["transaction"]["transaction"], keyof Transaction>]: never; };
                meta?: {
                    err?: {
                        err?: Uint8Array;
                    };
                    fee?: string;
                    preBalances?: string[];
                    postBalances?: string[];
                    innerInstructions?: {
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[];
                    }[];
                    innerInstructionsNone?: boolean;
                    logMessages?: string[];
                    logMessagesNone?: boolean;
                    preTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    postTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    rewards?: {
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    }[];
                    loadedWritableAddresses?: Uint8Array[];
                    loadedReadonlyAddresses?: Uint8Array[];
                    returnData?: {
                        programId?: Uint8Array;
                        data?: Uint8Array;
                    };
                    returnDataNone?: boolean;
                    computeUnitsConsumed?: string;
                } & {
                    err?: {
                        err?: Uint8Array;
                    } & {
                        err?: Uint8Array;
                    } & { [K_99 in Exclude<keyof I_1["transaction"]["transaction"]["meta"]["err"], "err">]: never; };
                    fee?: string;
                    preBalances?: string[] & string[] & { [K_100 in Exclude<keyof I_1["transaction"]["transaction"]["meta"]["preBalances"], keyof string[]>]: never; };
                    postBalances?: string[] & string[] & { [K_101 in Exclude<keyof I_1["transaction"]["transaction"]["meta"]["postBalances"], keyof string[]>]: never; };
                    innerInstructions?: {
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[];
                    }[] & ({
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[];
                    } & {
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[] & ({
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        } & {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        } & { [K_102 in Exclude<keyof I_1["transaction"]["transaction"]["meta"]["innerInstructions"][number]["instructions"][number], keyof import("./solana-storage").InnerInstruction>]: never; })[] & { [K_103 in Exclude<keyof I_1["transaction"]["transaction"]["meta"]["innerInstructions"][number]["instructions"], keyof {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[]>]: never; };
                    } & { [K_104 in Exclude<keyof I_1["transaction"]["transaction"]["meta"]["innerInstructions"][number], keyof import("./solana-storage").InnerInstructions>]: never; })[] & { [K_105 in Exclude<keyof I_1["transaction"]["transaction"]["meta"]["innerInstructions"], keyof {
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[];
                    }[]>]: never; };
                    innerInstructionsNone?: boolean;
                    logMessages?: string[] & string[] & { [K_106 in Exclude<keyof I_1["transaction"]["transaction"]["meta"]["logMessages"], keyof string[]>]: never; };
                    logMessagesNone?: boolean;
                    preTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[] & ({
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    } & {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        } & {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        } & { [K_107 in Exclude<keyof I_1["transaction"]["transaction"]["meta"]["preTokenBalances"][number]["uiTokenAmount"], keyof import("./solana-storage").UiTokenAmount>]: never; };
                        owner?: string;
                        programId?: string;
                    } & { [K_108 in Exclude<keyof I_1["transaction"]["transaction"]["meta"]["preTokenBalances"][number], keyof import("./solana-storage").TokenBalance>]: never; })[] & { [K_109 in Exclude<keyof I_1["transaction"]["transaction"]["meta"]["preTokenBalances"], keyof {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[]>]: never; };
                    postTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[] & ({
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    } & {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        } & {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        } & { [K_110 in Exclude<keyof I_1["transaction"]["transaction"]["meta"]["postTokenBalances"][number]["uiTokenAmount"], keyof import("./solana-storage").UiTokenAmount>]: never; };
                        owner?: string;
                        programId?: string;
                    } & { [K_111 in Exclude<keyof I_1["transaction"]["transaction"]["meta"]["postTokenBalances"][number], keyof import("./solana-storage").TokenBalance>]: never; })[] & { [K_112 in Exclude<keyof I_1["transaction"]["transaction"]["meta"]["postTokenBalances"], keyof {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[]>]: never; };
                    rewards?: {
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    }[] & ({
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    } & {
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    } & { [K_113 in Exclude<keyof I_1["transaction"]["transaction"]["meta"]["rewards"][number], keyof import("./solana-storage").Reward>]: never; })[] & { [K_114 in Exclude<keyof I_1["transaction"]["transaction"]["meta"]["rewards"], keyof {
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    }[]>]: never; };
                    loadedWritableAddresses?: Uint8Array[] & Uint8Array[] & { [K_115 in Exclude<keyof I_1["transaction"]["transaction"]["meta"]["loadedWritableAddresses"], keyof Uint8Array[]>]: never; };
                    loadedReadonlyAddresses?: Uint8Array[] & Uint8Array[] & { [K_116 in Exclude<keyof I_1["transaction"]["transaction"]["meta"]["loadedReadonlyAddresses"], keyof Uint8Array[]>]: never; };
                    returnData?: {
                        programId?: Uint8Array;
                        data?: Uint8Array;
                    } & {
                        programId?: Uint8Array;
                        data?: Uint8Array;
                    } & { [K_117 in Exclude<keyof I_1["transaction"]["transaction"]["meta"]["returnData"], keyof import("./solana-storage").ReturnData>]: never; };
                    returnDataNone?: boolean;
                    computeUnitsConsumed?: string;
                } & { [K_118 in Exclude<keyof I_1["transaction"]["transaction"]["meta"], keyof TransactionStatusMeta>]: never; };
                index?: string;
            } & { [K_119 in Exclude<keyof I_1["transaction"]["transaction"], keyof SubscribeUpdateTransactionInfo>]: never; };
            slot?: string;
        } & { [K_120 in Exclude<keyof I_1["transaction"], keyof SubscribeUpdateTransaction>]: never; };
        block?: {
            slot?: string;
            blockhash?: string;
            rewards?: {
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[];
            };
            blockTime?: {
                timestamp?: string;
            };
            blockHeight?: {
                blockHeight?: string;
            };
            parentSlot?: string;
            parentBlockhash?: string;
            executedTransactionCount?: string;
            transactions?: {
                signature?: Uint8Array;
                isVote?: boolean;
                transaction?: {
                    signatures?: Uint8Array[];
                    message?: {
                        header?: {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        };
                        accountKeys?: Uint8Array[];
                        recentBlockhash?: Uint8Array;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                        versioned?: boolean;
                        addressTableLookups?: {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        }[];
                    };
                };
                meta?: {
                    err?: {
                        err?: Uint8Array;
                    };
                    fee?: string;
                    preBalances?: string[];
                    postBalances?: string[];
                    innerInstructions?: {
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[];
                    }[];
                    innerInstructionsNone?: boolean;
                    logMessages?: string[];
                    logMessagesNone?: boolean;
                    preTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    postTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    rewards?: {
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    }[];
                    loadedWritableAddresses?: Uint8Array[];
                    loadedReadonlyAddresses?: Uint8Array[];
                    returnData?: {
                        programId?: Uint8Array;
                        data?: Uint8Array;
                    };
                    returnDataNone?: boolean;
                    computeUnitsConsumed?: string;
                };
                index?: string;
            }[];
            updatedAccountCount?: string;
            accounts?: {
                pubkey?: Uint8Array;
                lamports?: string;
                owner?: Uint8Array;
                executable?: boolean;
                rentEpoch?: string;
                data?: Uint8Array;
                writeVersion?: string;
                txnSignature?: Uint8Array | undefined;
            }[];
            entriesCount?: string;
            entries?: {
                slot?: string;
                index?: string;
                numHashes?: string;
                hash?: Uint8Array;
                executedTransactionCount?: string;
            }[];
        } & {
            slot?: string;
            blockhash?: string;
            rewards?: {
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[];
            } & {
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[] & ({
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                } & {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                } & { [K_121 in Exclude<keyof I_1["block"]["rewards"]["rewards"][number], keyof import("./solana-storage").Reward>]: never; })[] & { [K_122 in Exclude<keyof I_1["block"]["rewards"]["rewards"], keyof {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[]>]: never; };
            } & { [K_123 in Exclude<keyof I_1["block"]["rewards"], "rewards">]: never; };
            blockTime?: {
                timestamp?: string;
            } & {
                timestamp?: string;
            } & { [K_124 in Exclude<keyof I_1["block"]["blockTime"], "timestamp">]: never; };
            blockHeight?: {
                blockHeight?: string;
            } & {
                blockHeight?: string;
            } & { [K_125 in Exclude<keyof I_1["block"]["blockHeight"], "blockHeight">]: never; };
            parentSlot?: string;
            parentBlockhash?: string;
            executedTransactionCount?: string;
            transactions?: {
                signature?: Uint8Array;
                isVote?: boolean;
                transaction?: {
                    signatures?: Uint8Array[];
                    message?: {
                        header?: {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        };
                        accountKeys?: Uint8Array[];
                        recentBlockhash?: Uint8Array;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                        versioned?: boolean;
                        addressTableLookups?: {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        }[];
                    };
                };
                meta?: {
                    err?: {
                        err?: Uint8Array;
                    };
                    fee?: string;
                    preBalances?: string[];
                    postBalances?: string[];
                    innerInstructions?: {
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[];
                    }[];
                    innerInstructionsNone?: boolean;
                    logMessages?: string[];
                    logMessagesNone?: boolean;
                    preTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    postTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    rewards?: {
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    }[];
                    loadedWritableAddresses?: Uint8Array[];
                    loadedReadonlyAddresses?: Uint8Array[];
                    returnData?: {
                        programId?: Uint8Array;
                        data?: Uint8Array;
                    };
                    returnDataNone?: boolean;
                    computeUnitsConsumed?: string;
                };
                index?: string;
            }[] & ({
                signature?: Uint8Array;
                isVote?: boolean;
                transaction?: {
                    signatures?: Uint8Array[];
                    message?: {
                        header?: {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        };
                        accountKeys?: Uint8Array[];
                        recentBlockhash?: Uint8Array;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                        versioned?: boolean;
                        addressTableLookups?: {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        }[];
                    };
                };
                meta?: {
                    err?: {
                        err?: Uint8Array;
                    };
                    fee?: string;
                    preBalances?: string[];
                    postBalances?: string[];
                    innerInstructions?: {
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[];
                    }[];
                    innerInstructionsNone?: boolean;
                    logMessages?: string[];
                    logMessagesNone?: boolean;
                    preTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    postTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    rewards?: {
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    }[];
                    loadedWritableAddresses?: Uint8Array[];
                    loadedReadonlyAddresses?: Uint8Array[];
                    returnData?: {
                        programId?: Uint8Array;
                        data?: Uint8Array;
                    };
                    returnDataNone?: boolean;
                    computeUnitsConsumed?: string;
                };
                index?: string;
            } & {
                signature?: Uint8Array;
                isVote?: boolean;
                transaction?: {
                    signatures?: Uint8Array[];
                    message?: {
                        header?: {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        };
                        accountKeys?: Uint8Array[];
                        recentBlockhash?: Uint8Array;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                        versioned?: boolean;
                        addressTableLookups?: {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        }[];
                    };
                } & {
                    signatures?: Uint8Array[] & Uint8Array[] & { [K_126 in Exclude<keyof I_1["block"]["transactions"][number]["transaction"]["signatures"], keyof Uint8Array[]>]: never; };
                    message?: {
                        header?: {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        };
                        accountKeys?: Uint8Array[];
                        recentBlockhash?: Uint8Array;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                        versioned?: boolean;
                        addressTableLookups?: {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        }[];
                    } & {
                        header?: {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        } & {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        } & { [K_127 in Exclude<keyof I_1["block"]["transactions"][number]["transaction"]["message"]["header"], keyof import("./solana-storage").MessageHeader>]: never; };
                        accountKeys?: Uint8Array[] & Uint8Array[] & { [K_128 in Exclude<keyof I_1["block"]["transactions"][number]["transaction"]["message"]["accountKeys"], keyof Uint8Array[]>]: never; };
                        recentBlockhash?: Uint8Array;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        }[] & ({
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        } & {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        } & { [K_129 in Exclude<keyof I_1["block"]["transactions"][number]["transaction"]["message"]["instructions"][number], keyof import("./solana-storage").CompiledInstruction>]: never; })[] & { [K_130 in Exclude<keyof I_1["block"]["transactions"][number]["transaction"]["message"]["instructions"], keyof {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        }[]>]: never; };
                        versioned?: boolean;
                        addressTableLookups?: {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        }[] & ({
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        } & {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        } & { [K_131 in Exclude<keyof I_1["block"]["transactions"][number]["transaction"]["message"]["addressTableLookups"][number], keyof import("./solana-storage").MessageAddressTableLookup>]: never; })[] & { [K_132 in Exclude<keyof I_1["block"]["transactions"][number]["transaction"]["message"]["addressTableLookups"], keyof {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        }[]>]: never; };
                    } & { [K_133 in Exclude<keyof I_1["block"]["transactions"][number]["transaction"]["message"], keyof import("./solana-storage").Message>]: never; };
                } & { [K_134 in Exclude<keyof I_1["block"]["transactions"][number]["transaction"], keyof Transaction>]: never; };
                meta?: {
                    err?: {
                        err?: Uint8Array;
                    };
                    fee?: string;
                    preBalances?: string[];
                    postBalances?: string[];
                    innerInstructions?: {
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[];
                    }[];
                    innerInstructionsNone?: boolean;
                    logMessages?: string[];
                    logMessagesNone?: boolean;
                    preTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    postTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    rewards?: {
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    }[];
                    loadedWritableAddresses?: Uint8Array[];
                    loadedReadonlyAddresses?: Uint8Array[];
                    returnData?: {
                        programId?: Uint8Array;
                        data?: Uint8Array;
                    };
                    returnDataNone?: boolean;
                    computeUnitsConsumed?: string;
                } & {
                    err?: {
                        err?: Uint8Array;
                    } & {
                        err?: Uint8Array;
                    } & { [K_135 in Exclude<keyof I_1["block"]["transactions"][number]["meta"]["err"], "err">]: never; };
                    fee?: string;
                    preBalances?: string[] & string[] & { [K_136 in Exclude<keyof I_1["block"]["transactions"][number]["meta"]["preBalances"], keyof string[]>]: never; };
                    postBalances?: string[] & string[] & { [K_137 in Exclude<keyof I_1["block"]["transactions"][number]["meta"]["postBalances"], keyof string[]>]: never; };
                    innerInstructions?: {
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[];
                    }[] & ({
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[];
                    } & {
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[] & ({
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        } & {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        } & { [K_138 in Exclude<keyof I_1["block"]["transactions"][number]["meta"]["innerInstructions"][number]["instructions"][number], keyof import("./solana-storage").InnerInstruction>]: never; })[] & { [K_139 in Exclude<keyof I_1["block"]["transactions"][number]["meta"]["innerInstructions"][number]["instructions"], keyof {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[]>]: never; };
                    } & { [K_140 in Exclude<keyof I_1["block"]["transactions"][number]["meta"]["innerInstructions"][number], keyof import("./solana-storage").InnerInstructions>]: never; })[] & { [K_141 in Exclude<keyof I_1["block"]["transactions"][number]["meta"]["innerInstructions"], keyof {
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[];
                    }[]>]: never; };
                    innerInstructionsNone?: boolean;
                    logMessages?: string[] & string[] & { [K_142 in Exclude<keyof I_1["block"]["transactions"][number]["meta"]["logMessages"], keyof string[]>]: never; };
                    logMessagesNone?: boolean;
                    preTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[] & ({
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    } & {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        } & {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        } & { [K_143 in Exclude<keyof I_1["block"]["transactions"][number]["meta"]["preTokenBalances"][number]["uiTokenAmount"], keyof import("./solana-storage").UiTokenAmount>]: never; };
                        owner?: string;
                        programId?: string;
                    } & { [K_144 in Exclude<keyof I_1["block"]["transactions"][number]["meta"]["preTokenBalances"][number], keyof import("./solana-storage").TokenBalance>]: never; })[] & { [K_145 in Exclude<keyof I_1["block"]["transactions"][number]["meta"]["preTokenBalances"], keyof {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[]>]: never; };
                    postTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[] & ({
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    } & {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        } & {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        } & { [K_146 in Exclude<keyof I_1["block"]["transactions"][number]["meta"]["postTokenBalances"][number]["uiTokenAmount"], keyof import("./solana-storage").UiTokenAmount>]: never; };
                        owner?: string;
                        programId?: string;
                    } & { [K_147 in Exclude<keyof I_1["block"]["transactions"][number]["meta"]["postTokenBalances"][number], keyof import("./solana-storage").TokenBalance>]: never; })[] & { [K_148 in Exclude<keyof I_1["block"]["transactions"][number]["meta"]["postTokenBalances"], keyof {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[]>]: never; };
                    rewards?: {
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    }[] & ({
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    } & {
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    } & { [K_149 in Exclude<keyof I_1["block"]["transactions"][number]["meta"]["rewards"][number], keyof import("./solana-storage").Reward>]: never; })[] & { [K_150 in Exclude<keyof I_1["block"]["transactions"][number]["meta"]["rewards"], keyof {
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    }[]>]: never; };
                    loadedWritableAddresses?: Uint8Array[] & Uint8Array[] & { [K_151 in Exclude<keyof I_1["block"]["transactions"][number]["meta"]["loadedWritableAddresses"], keyof Uint8Array[]>]: never; };
                    loadedReadonlyAddresses?: Uint8Array[] & Uint8Array[] & { [K_152 in Exclude<keyof I_1["block"]["transactions"][number]["meta"]["loadedReadonlyAddresses"], keyof Uint8Array[]>]: never; };
                    returnData?: {
                        programId?: Uint8Array;
                        data?: Uint8Array;
                    } & {
                        programId?: Uint8Array;
                        data?: Uint8Array;
                    } & { [K_153 in Exclude<keyof I_1["block"]["transactions"][number]["meta"]["returnData"], keyof import("./solana-storage").ReturnData>]: never; };
                    returnDataNone?: boolean;
                    computeUnitsConsumed?: string;
                } & { [K_154 in Exclude<keyof I_1["block"]["transactions"][number]["meta"], keyof TransactionStatusMeta>]: never; };
                index?: string;
            } & { [K_155 in Exclude<keyof I_1["block"]["transactions"][number], keyof SubscribeUpdateTransactionInfo>]: never; })[] & { [K_156 in Exclude<keyof I_1["block"]["transactions"], keyof {
                signature?: Uint8Array;
                isVote?: boolean;
                transaction?: {
                    signatures?: Uint8Array[];
                    message?: {
                        header?: {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        };
                        accountKeys?: Uint8Array[];
                        recentBlockhash?: Uint8Array;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                        versioned?: boolean;
                        addressTableLookups?: {
                            accountKey?: Uint8Array;
                            writableIndexes?: Uint8Array;
                            readonlyIndexes?: Uint8Array;
                        }[];
                    };
                };
                meta?: {
                    err?: {
                        err?: Uint8Array;
                    };
                    fee?: string;
                    preBalances?: string[];
                    postBalances?: string[];
                    innerInstructions?: {
                        index?: number;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: Uint8Array;
                            data?: Uint8Array;
                            stackHeight?: number;
                        }[];
                    }[];
                    innerInstructionsNone?: boolean;
                    logMessages?: string[];
                    logMessagesNone?: boolean;
                    preTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    postTokenBalances?: {
                        accountIndex?: number;
                        mint?: string;
                        uiTokenAmount?: {
                            uiAmount?: number;
                            decimals?: number;
                            amount?: string;
                            uiAmountString?: string;
                        };
                        owner?: string;
                        programId?: string;
                    }[];
                    rewards?: {
                        pubkey?: string;
                        lamports?: string;
                        postBalance?: string;
                        rewardType?: import("./solana-storage").RewardType;
                        commission?: string;
                    }[];
                    loadedWritableAddresses?: Uint8Array[];
                    loadedReadonlyAddresses?: Uint8Array[];
                    returnData?: {
                        programId?: Uint8Array;
                        data?: Uint8Array;
                    };
                    returnDataNone?: boolean;
                    computeUnitsConsumed?: string;
                };
                index?: string;
            }[]>]: never; };
            updatedAccountCount?: string;
            accounts?: {
                pubkey?: Uint8Array;
                lamports?: string;
                owner?: Uint8Array;
                executable?: boolean;
                rentEpoch?: string;
                data?: Uint8Array;
                writeVersion?: string;
                txnSignature?: Uint8Array | undefined;
            }[] & ({
                pubkey?: Uint8Array;
                lamports?: string;
                owner?: Uint8Array;
                executable?: boolean;
                rentEpoch?: string;
                data?: Uint8Array;
                writeVersion?: string;
                txnSignature?: Uint8Array | undefined;
            } & {
                pubkey?: Uint8Array;
                lamports?: string;
                owner?: Uint8Array;
                executable?: boolean;
                rentEpoch?: string;
                data?: Uint8Array;
                writeVersion?: string;
                txnSignature?: Uint8Array | undefined;
            } & { [K_157 in Exclude<keyof I_1["block"]["accounts"][number], keyof SubscribeUpdateAccountInfo>]: never; })[] & { [K_158 in Exclude<keyof I_1["block"]["accounts"], keyof {
                pubkey?: Uint8Array;
                lamports?: string;
                owner?: Uint8Array;
                executable?: boolean;
                rentEpoch?: string;
                data?: Uint8Array;
                writeVersion?: string;
                txnSignature?: Uint8Array | undefined;
            }[]>]: never; };
            entriesCount?: string;
            entries?: {
                slot?: string;
                index?: string;
                numHashes?: string;
                hash?: Uint8Array;
                executedTransactionCount?: string;
            }[] & ({
                slot?: string;
                index?: string;
                numHashes?: string;
                hash?: Uint8Array;
                executedTransactionCount?: string;
            } & {
                slot?: string;
                index?: string;
                numHashes?: string;
                hash?: Uint8Array;
                executedTransactionCount?: string;
            } & { [K_159 in Exclude<keyof I_1["block"]["entries"][number], keyof SubscribeUpdateEntry>]: never; })[] & { [K_160 in Exclude<keyof I_1["block"]["entries"], keyof {
                slot?: string;
                index?: string;
                numHashes?: string;
                hash?: Uint8Array;
                executedTransactionCount?: string;
            }[]>]: never; };
        } & { [K_161 in Exclude<keyof I_1["block"], keyof SubscribeUpdateBlock>]: never; };
        ping?: {} & {} & { [K_162 in Exclude<keyof I_1["ping"], never>]: never; };
        pong?: {
            id?: number;
        } & {
            id?: number;
        } & { [K_163 in Exclude<keyof I_1["pong"], "id">]: never; };
        blockMeta?: {
            slot?: string;
            blockhash?: string;
            rewards?: {
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[];
            };
            blockTime?: {
                timestamp?: string;
            };
            blockHeight?: {
                blockHeight?: string;
            };
            parentSlot?: string;
            parentBlockhash?: string;
            executedTransactionCount?: string;
        } & {
            slot?: string;
            blockhash?: string;
            rewards?: {
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[];
            } & {
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[] & ({
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                } & {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                } & { [K_164 in Exclude<keyof I_1["blockMeta"]["rewards"]["rewards"][number], keyof import("./solana-storage").Reward>]: never; })[] & { [K_165 in Exclude<keyof I_1["blockMeta"]["rewards"]["rewards"], keyof {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[]>]: never; };
            } & { [K_166 in Exclude<keyof I_1["blockMeta"]["rewards"], "rewards">]: never; };
            blockTime?: {
                timestamp?: string;
            } & {
                timestamp?: string;
            } & { [K_167 in Exclude<keyof I_1["blockMeta"]["blockTime"], "timestamp">]: never; };
            blockHeight?: {
                blockHeight?: string;
            } & {
                blockHeight?: string;
            } & { [K_168 in Exclude<keyof I_1["blockMeta"]["blockHeight"], "blockHeight">]: never; };
            parentSlot?: string;
            parentBlockhash?: string;
            executedTransactionCount?: string;
        } & { [K_169 in Exclude<keyof I_1["blockMeta"], keyof SubscribeUpdateBlockMeta>]: never; };
        entry?: {
            slot?: string;
            index?: string;
            numHashes?: string;
            hash?: Uint8Array;
            executedTransactionCount?: string;
        } & {
            slot?: string;
            index?: string;
            numHashes?: string;
            hash?: Uint8Array;
            executedTransactionCount?: string;
        } & { [K_170 in Exclude<keyof I_1["entry"], keyof SubscribeUpdateEntry>]: never; };
    } & { [K_171 in Exclude<keyof I_1, keyof SubscribeUpdate>]: never; }>(object: I_1): SubscribeUpdate;
};
export declare const SubscribeUpdateAccount: {
    encode(message: SubscribeUpdateAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeUpdateAccount;
    fromJSON(object: any): SubscribeUpdateAccount;
    toJSON(message: SubscribeUpdateAccount): unknown;
    create<I extends {
        account?: {
            pubkey?: Uint8Array;
            lamports?: string;
            owner?: Uint8Array;
            executable?: boolean;
            rentEpoch?: string;
            data?: Uint8Array;
            writeVersion?: string;
            txnSignature?: Uint8Array | undefined;
        };
        slot?: string;
        isStartup?: boolean;
    } & {
        account?: {
            pubkey?: Uint8Array;
            lamports?: string;
            owner?: Uint8Array;
            executable?: boolean;
            rentEpoch?: string;
            data?: Uint8Array;
            writeVersion?: string;
            txnSignature?: Uint8Array | undefined;
        } & {
            pubkey?: Uint8Array;
            lamports?: string;
            owner?: Uint8Array;
            executable?: boolean;
            rentEpoch?: string;
            data?: Uint8Array;
            writeVersion?: string;
            txnSignature?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["account"], keyof SubscribeUpdateAccountInfo>]: never; };
        slot?: string;
        isStartup?: boolean;
    } & { [K_1 in Exclude<keyof I, keyof SubscribeUpdateAccount>]: never; }>(base?: I): SubscribeUpdateAccount;
    fromPartial<I_1 extends {
        account?: {
            pubkey?: Uint8Array;
            lamports?: string;
            owner?: Uint8Array;
            executable?: boolean;
            rentEpoch?: string;
            data?: Uint8Array;
            writeVersion?: string;
            txnSignature?: Uint8Array | undefined;
        };
        slot?: string;
        isStartup?: boolean;
    } & {
        account?: {
            pubkey?: Uint8Array;
            lamports?: string;
            owner?: Uint8Array;
            executable?: boolean;
            rentEpoch?: string;
            data?: Uint8Array;
            writeVersion?: string;
            txnSignature?: Uint8Array | undefined;
        } & {
            pubkey?: Uint8Array;
            lamports?: string;
            owner?: Uint8Array;
            executable?: boolean;
            rentEpoch?: string;
            data?: Uint8Array;
            writeVersion?: string;
            txnSignature?: Uint8Array | undefined;
        } & { [K_2 in Exclude<keyof I_1["account"], keyof SubscribeUpdateAccountInfo>]: never; };
        slot?: string;
        isStartup?: boolean;
    } & { [K_3 in Exclude<keyof I_1, keyof SubscribeUpdateAccount>]: never; }>(object: I_1): SubscribeUpdateAccount;
};
export declare const SubscribeUpdateAccountInfo: {
    encode(message: SubscribeUpdateAccountInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeUpdateAccountInfo;
    fromJSON(object: any): SubscribeUpdateAccountInfo;
    toJSON(message: SubscribeUpdateAccountInfo): unknown;
    create<I extends {
        pubkey?: Uint8Array;
        lamports?: string;
        owner?: Uint8Array;
        executable?: boolean;
        rentEpoch?: string;
        data?: Uint8Array;
        writeVersion?: string;
        txnSignature?: Uint8Array | undefined;
    } & {
        pubkey?: Uint8Array;
        lamports?: string;
        owner?: Uint8Array;
        executable?: boolean;
        rentEpoch?: string;
        data?: Uint8Array;
        writeVersion?: string;
        txnSignature?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, keyof SubscribeUpdateAccountInfo>]: never; }>(base?: I): SubscribeUpdateAccountInfo;
    fromPartial<I_1 extends {
        pubkey?: Uint8Array;
        lamports?: string;
        owner?: Uint8Array;
        executable?: boolean;
        rentEpoch?: string;
        data?: Uint8Array;
        writeVersion?: string;
        txnSignature?: Uint8Array | undefined;
    } & {
        pubkey?: Uint8Array;
        lamports?: string;
        owner?: Uint8Array;
        executable?: boolean;
        rentEpoch?: string;
        data?: Uint8Array;
        writeVersion?: string;
        txnSignature?: Uint8Array | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SubscribeUpdateAccountInfo>]: never; }>(object: I_1): SubscribeUpdateAccountInfo;
};
export declare const SubscribeUpdateSlot: {
    encode(message: SubscribeUpdateSlot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeUpdateSlot;
    fromJSON(object: any): SubscribeUpdateSlot;
    toJSON(message: SubscribeUpdateSlot): unknown;
    create<I extends {
        slot?: string;
        parent?: string | undefined;
        status?: CommitmentLevel;
    } & {
        slot?: string;
        parent?: string | undefined;
        status?: CommitmentLevel;
    } & { [K in Exclude<keyof I, keyof SubscribeUpdateSlot>]: never; }>(base?: I): SubscribeUpdateSlot;
    fromPartial<I_1 extends {
        slot?: string;
        parent?: string | undefined;
        status?: CommitmentLevel;
    } & {
        slot?: string;
        parent?: string | undefined;
        status?: CommitmentLevel;
    } & { [K_1 in Exclude<keyof I_1, keyof SubscribeUpdateSlot>]: never; }>(object: I_1): SubscribeUpdateSlot;
};
export declare const SubscribeUpdateTransaction: {
    encode(message: SubscribeUpdateTransaction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeUpdateTransaction;
    fromJSON(object: any): SubscribeUpdateTransaction;
    toJSON(message: SubscribeUpdateTransaction): unknown;
    create<I extends {
        transaction?: {
            signature?: Uint8Array;
            isVote?: boolean;
            transaction?: {
                signatures?: Uint8Array[];
                message?: {
                    header?: {
                        numRequiredSignatures?: number;
                        numReadonlySignedAccounts?: number;
                        numReadonlyUnsignedAccounts?: number;
                    };
                    accountKeys?: Uint8Array[];
                    recentBlockhash?: Uint8Array;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                    versioned?: boolean;
                    addressTableLookups?: {
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    }[];
                };
            };
            meta?: {
                err?: {
                    err?: Uint8Array;
                };
                fee?: string;
                preBalances?: string[];
                postBalances?: string[];
                innerInstructions?: {
                    index?: number;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[];
                }[];
                innerInstructionsNone?: boolean;
                logMessages?: string[];
                logMessagesNone?: boolean;
                preTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[];
                postTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[];
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[];
                loadedWritableAddresses?: Uint8Array[];
                loadedReadonlyAddresses?: Uint8Array[];
                returnData?: {
                    programId?: Uint8Array;
                    data?: Uint8Array;
                };
                returnDataNone?: boolean;
                computeUnitsConsumed?: string;
            };
            index?: string;
        };
        slot?: string;
    } & {
        transaction?: {
            signature?: Uint8Array;
            isVote?: boolean;
            transaction?: {
                signatures?: Uint8Array[];
                message?: {
                    header?: {
                        numRequiredSignatures?: number;
                        numReadonlySignedAccounts?: number;
                        numReadonlyUnsignedAccounts?: number;
                    };
                    accountKeys?: Uint8Array[];
                    recentBlockhash?: Uint8Array;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                    versioned?: boolean;
                    addressTableLookups?: {
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    }[];
                };
            };
            meta?: {
                err?: {
                    err?: Uint8Array;
                };
                fee?: string;
                preBalances?: string[];
                postBalances?: string[];
                innerInstructions?: {
                    index?: number;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[];
                }[];
                innerInstructionsNone?: boolean;
                logMessages?: string[];
                logMessagesNone?: boolean;
                preTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[];
                postTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[];
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[];
                loadedWritableAddresses?: Uint8Array[];
                loadedReadonlyAddresses?: Uint8Array[];
                returnData?: {
                    programId?: Uint8Array;
                    data?: Uint8Array;
                };
                returnDataNone?: boolean;
                computeUnitsConsumed?: string;
            };
            index?: string;
        } & {
            signature?: Uint8Array;
            isVote?: boolean;
            transaction?: {
                signatures?: Uint8Array[];
                message?: {
                    header?: {
                        numRequiredSignatures?: number;
                        numReadonlySignedAccounts?: number;
                        numReadonlyUnsignedAccounts?: number;
                    };
                    accountKeys?: Uint8Array[];
                    recentBlockhash?: Uint8Array;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                    versioned?: boolean;
                    addressTableLookups?: {
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    }[];
                };
            } & {
                signatures?: Uint8Array[] & Uint8Array[] & { [K in Exclude<keyof I["transaction"]["transaction"]["signatures"], keyof Uint8Array[]>]: never; };
                message?: {
                    header?: {
                        numRequiredSignatures?: number;
                        numReadonlySignedAccounts?: number;
                        numReadonlyUnsignedAccounts?: number;
                    };
                    accountKeys?: Uint8Array[];
                    recentBlockhash?: Uint8Array;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                    versioned?: boolean;
                    addressTableLookups?: {
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    }[];
                } & {
                    header?: {
                        numRequiredSignatures?: number;
                        numReadonlySignedAccounts?: number;
                        numReadonlyUnsignedAccounts?: number;
                    } & {
                        numRequiredSignatures?: number;
                        numReadonlySignedAccounts?: number;
                        numReadonlyUnsignedAccounts?: number;
                    } & { [K_1 in Exclude<keyof I["transaction"]["transaction"]["message"]["header"], keyof import("./solana-storage").MessageHeader>]: never; };
                    accountKeys?: Uint8Array[] & Uint8Array[] & { [K_2 in Exclude<keyof I["transaction"]["transaction"]["message"]["accountKeys"], keyof Uint8Array[]>]: never; };
                    recentBlockhash?: Uint8Array;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    }[] & ({
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    } & {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    } & { [K_3 in Exclude<keyof I["transaction"]["transaction"]["message"]["instructions"][number], keyof import("./solana-storage").CompiledInstruction>]: never; })[] & { [K_4 in Exclude<keyof I["transaction"]["transaction"]["message"]["instructions"], keyof {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    }[]>]: never; };
                    versioned?: boolean;
                    addressTableLookups?: {
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    }[] & ({
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    } & {
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    } & { [K_5 in Exclude<keyof I["transaction"]["transaction"]["message"]["addressTableLookups"][number], keyof import("./solana-storage").MessageAddressTableLookup>]: never; })[] & { [K_6 in Exclude<keyof I["transaction"]["transaction"]["message"]["addressTableLookups"], keyof {
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    }[]>]: never; };
                } & { [K_7 in Exclude<keyof I["transaction"]["transaction"]["message"], keyof import("./solana-storage").Message>]: never; };
            } & { [K_8 in Exclude<keyof I["transaction"]["transaction"], keyof Transaction>]: never; };
            meta?: {
                err?: {
                    err?: Uint8Array;
                };
                fee?: string;
                preBalances?: string[];
                postBalances?: string[];
                innerInstructions?: {
                    index?: number;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[];
                }[];
                innerInstructionsNone?: boolean;
                logMessages?: string[];
                logMessagesNone?: boolean;
                preTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[];
                postTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[];
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[];
                loadedWritableAddresses?: Uint8Array[];
                loadedReadonlyAddresses?: Uint8Array[];
                returnData?: {
                    programId?: Uint8Array;
                    data?: Uint8Array;
                };
                returnDataNone?: boolean;
                computeUnitsConsumed?: string;
            } & {
                err?: {
                    err?: Uint8Array;
                } & {
                    err?: Uint8Array;
                } & { [K_9 in Exclude<keyof I["transaction"]["meta"]["err"], "err">]: never; };
                fee?: string;
                preBalances?: string[] & string[] & { [K_10 in Exclude<keyof I["transaction"]["meta"]["preBalances"], keyof string[]>]: never; };
                postBalances?: string[] & string[] & { [K_11 in Exclude<keyof I["transaction"]["meta"]["postBalances"], keyof string[]>]: never; };
                innerInstructions?: {
                    index?: number;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[];
                }[] & ({
                    index?: number;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[];
                } & {
                    index?: number;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[] & ({
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    } & {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    } & { [K_12 in Exclude<keyof I["transaction"]["meta"]["innerInstructions"][number]["instructions"][number], keyof import("./solana-storage").InnerInstruction>]: never; })[] & { [K_13 in Exclude<keyof I["transaction"]["meta"]["innerInstructions"][number]["instructions"], keyof {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[]>]: never; };
                } & { [K_14 in Exclude<keyof I["transaction"]["meta"]["innerInstructions"][number], keyof import("./solana-storage").InnerInstructions>]: never; })[] & { [K_15 in Exclude<keyof I["transaction"]["meta"]["innerInstructions"], keyof {
                    index?: number;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[];
                }[]>]: never; };
                innerInstructionsNone?: boolean;
                logMessages?: string[] & string[] & { [K_16 in Exclude<keyof I["transaction"]["meta"]["logMessages"], keyof string[]>]: never; };
                logMessagesNone?: boolean;
                preTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[] & ({
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                } & {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    } & {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    } & { [K_17 in Exclude<keyof I["transaction"]["meta"]["preTokenBalances"][number]["uiTokenAmount"], keyof import("./solana-storage").UiTokenAmount>]: never; };
                    owner?: string;
                    programId?: string;
                } & { [K_18 in Exclude<keyof I["transaction"]["meta"]["preTokenBalances"][number], keyof import("./solana-storage").TokenBalance>]: never; })[] & { [K_19 in Exclude<keyof I["transaction"]["meta"]["preTokenBalances"], keyof {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[]>]: never; };
                postTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[] & ({
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                } & {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    } & {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    } & { [K_20 in Exclude<keyof I["transaction"]["meta"]["postTokenBalances"][number]["uiTokenAmount"], keyof import("./solana-storage").UiTokenAmount>]: never; };
                    owner?: string;
                    programId?: string;
                } & { [K_21 in Exclude<keyof I["transaction"]["meta"]["postTokenBalances"][number], keyof import("./solana-storage").TokenBalance>]: never; })[] & { [K_22 in Exclude<keyof I["transaction"]["meta"]["postTokenBalances"], keyof {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[]>]: never; };
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[] & ({
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                } & {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                } & { [K_23 in Exclude<keyof I["transaction"]["meta"]["rewards"][number], keyof import("./solana-storage").Reward>]: never; })[] & { [K_24 in Exclude<keyof I["transaction"]["meta"]["rewards"], keyof {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[]>]: never; };
                loadedWritableAddresses?: Uint8Array[] & Uint8Array[] & { [K_25 in Exclude<keyof I["transaction"]["meta"]["loadedWritableAddresses"], keyof Uint8Array[]>]: never; };
                loadedReadonlyAddresses?: Uint8Array[] & Uint8Array[] & { [K_26 in Exclude<keyof I["transaction"]["meta"]["loadedReadonlyAddresses"], keyof Uint8Array[]>]: never; };
                returnData?: {
                    programId?: Uint8Array;
                    data?: Uint8Array;
                } & {
                    programId?: Uint8Array;
                    data?: Uint8Array;
                } & { [K_27 in Exclude<keyof I["transaction"]["meta"]["returnData"], keyof import("./solana-storage").ReturnData>]: never; };
                returnDataNone?: boolean;
                computeUnitsConsumed?: string;
            } & { [K_28 in Exclude<keyof I["transaction"]["meta"], keyof TransactionStatusMeta>]: never; };
            index?: string;
        } & { [K_29 in Exclude<keyof I["transaction"], keyof SubscribeUpdateTransactionInfo>]: never; };
        slot?: string;
    } & { [K_30 in Exclude<keyof I, keyof SubscribeUpdateTransaction>]: never; }>(base?: I): SubscribeUpdateTransaction;
    fromPartial<I_1 extends {
        transaction?: {
            signature?: Uint8Array;
            isVote?: boolean;
            transaction?: {
                signatures?: Uint8Array[];
                message?: {
                    header?: {
                        numRequiredSignatures?: number;
                        numReadonlySignedAccounts?: number;
                        numReadonlyUnsignedAccounts?: number;
                    };
                    accountKeys?: Uint8Array[];
                    recentBlockhash?: Uint8Array;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                    versioned?: boolean;
                    addressTableLookups?: {
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    }[];
                };
            };
            meta?: {
                err?: {
                    err?: Uint8Array;
                };
                fee?: string;
                preBalances?: string[];
                postBalances?: string[];
                innerInstructions?: {
                    index?: number;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[];
                }[];
                innerInstructionsNone?: boolean;
                logMessages?: string[];
                logMessagesNone?: boolean;
                preTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[];
                postTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[];
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[];
                loadedWritableAddresses?: Uint8Array[];
                loadedReadonlyAddresses?: Uint8Array[];
                returnData?: {
                    programId?: Uint8Array;
                    data?: Uint8Array;
                };
                returnDataNone?: boolean;
                computeUnitsConsumed?: string;
            };
            index?: string;
        };
        slot?: string;
    } & {
        transaction?: {
            signature?: Uint8Array;
            isVote?: boolean;
            transaction?: {
                signatures?: Uint8Array[];
                message?: {
                    header?: {
                        numRequiredSignatures?: number;
                        numReadonlySignedAccounts?: number;
                        numReadonlyUnsignedAccounts?: number;
                    };
                    accountKeys?: Uint8Array[];
                    recentBlockhash?: Uint8Array;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                    versioned?: boolean;
                    addressTableLookups?: {
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    }[];
                };
            };
            meta?: {
                err?: {
                    err?: Uint8Array;
                };
                fee?: string;
                preBalances?: string[];
                postBalances?: string[];
                innerInstructions?: {
                    index?: number;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[];
                }[];
                innerInstructionsNone?: boolean;
                logMessages?: string[];
                logMessagesNone?: boolean;
                preTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[];
                postTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[];
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[];
                loadedWritableAddresses?: Uint8Array[];
                loadedReadonlyAddresses?: Uint8Array[];
                returnData?: {
                    programId?: Uint8Array;
                    data?: Uint8Array;
                };
                returnDataNone?: boolean;
                computeUnitsConsumed?: string;
            };
            index?: string;
        } & {
            signature?: Uint8Array;
            isVote?: boolean;
            transaction?: {
                signatures?: Uint8Array[];
                message?: {
                    header?: {
                        numRequiredSignatures?: number;
                        numReadonlySignedAccounts?: number;
                        numReadonlyUnsignedAccounts?: number;
                    };
                    accountKeys?: Uint8Array[];
                    recentBlockhash?: Uint8Array;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                    versioned?: boolean;
                    addressTableLookups?: {
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    }[];
                };
            } & {
                signatures?: Uint8Array[] & Uint8Array[] & { [K_31 in Exclude<keyof I_1["transaction"]["transaction"]["signatures"], keyof Uint8Array[]>]: never; };
                message?: {
                    header?: {
                        numRequiredSignatures?: number;
                        numReadonlySignedAccounts?: number;
                        numReadonlyUnsignedAccounts?: number;
                    };
                    accountKeys?: Uint8Array[];
                    recentBlockhash?: Uint8Array;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                    versioned?: boolean;
                    addressTableLookups?: {
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    }[];
                } & {
                    header?: {
                        numRequiredSignatures?: number;
                        numReadonlySignedAccounts?: number;
                        numReadonlyUnsignedAccounts?: number;
                    } & {
                        numRequiredSignatures?: number;
                        numReadonlySignedAccounts?: number;
                        numReadonlyUnsignedAccounts?: number;
                    } & { [K_32 in Exclude<keyof I_1["transaction"]["transaction"]["message"]["header"], keyof import("./solana-storage").MessageHeader>]: never; };
                    accountKeys?: Uint8Array[] & Uint8Array[] & { [K_33 in Exclude<keyof I_1["transaction"]["transaction"]["message"]["accountKeys"], keyof Uint8Array[]>]: never; };
                    recentBlockhash?: Uint8Array;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    }[] & ({
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    } & {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    } & { [K_34 in Exclude<keyof I_1["transaction"]["transaction"]["message"]["instructions"][number], keyof import("./solana-storage").CompiledInstruction>]: never; })[] & { [K_35 in Exclude<keyof I_1["transaction"]["transaction"]["message"]["instructions"], keyof {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    }[]>]: never; };
                    versioned?: boolean;
                    addressTableLookups?: {
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    }[] & ({
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    } & {
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    } & { [K_36 in Exclude<keyof I_1["transaction"]["transaction"]["message"]["addressTableLookups"][number], keyof import("./solana-storage").MessageAddressTableLookup>]: never; })[] & { [K_37 in Exclude<keyof I_1["transaction"]["transaction"]["message"]["addressTableLookups"], keyof {
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    }[]>]: never; };
                } & { [K_38 in Exclude<keyof I_1["transaction"]["transaction"]["message"], keyof import("./solana-storage").Message>]: never; };
            } & { [K_39 in Exclude<keyof I_1["transaction"]["transaction"], keyof Transaction>]: never; };
            meta?: {
                err?: {
                    err?: Uint8Array;
                };
                fee?: string;
                preBalances?: string[];
                postBalances?: string[];
                innerInstructions?: {
                    index?: number;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[];
                }[];
                innerInstructionsNone?: boolean;
                logMessages?: string[];
                logMessagesNone?: boolean;
                preTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[];
                postTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[];
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[];
                loadedWritableAddresses?: Uint8Array[];
                loadedReadonlyAddresses?: Uint8Array[];
                returnData?: {
                    programId?: Uint8Array;
                    data?: Uint8Array;
                };
                returnDataNone?: boolean;
                computeUnitsConsumed?: string;
            } & {
                err?: {
                    err?: Uint8Array;
                } & {
                    err?: Uint8Array;
                } & { [K_40 in Exclude<keyof I_1["transaction"]["meta"]["err"], "err">]: never; };
                fee?: string;
                preBalances?: string[] & string[] & { [K_41 in Exclude<keyof I_1["transaction"]["meta"]["preBalances"], keyof string[]>]: never; };
                postBalances?: string[] & string[] & { [K_42 in Exclude<keyof I_1["transaction"]["meta"]["postBalances"], keyof string[]>]: never; };
                innerInstructions?: {
                    index?: number;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[];
                }[] & ({
                    index?: number;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[];
                } & {
                    index?: number;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[] & ({
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    } & {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    } & { [K_43 in Exclude<keyof I_1["transaction"]["meta"]["innerInstructions"][number]["instructions"][number], keyof import("./solana-storage").InnerInstruction>]: never; })[] & { [K_44 in Exclude<keyof I_1["transaction"]["meta"]["innerInstructions"][number]["instructions"], keyof {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[]>]: never; };
                } & { [K_45 in Exclude<keyof I_1["transaction"]["meta"]["innerInstructions"][number], keyof import("./solana-storage").InnerInstructions>]: never; })[] & { [K_46 in Exclude<keyof I_1["transaction"]["meta"]["innerInstructions"], keyof {
                    index?: number;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[];
                }[]>]: never; };
                innerInstructionsNone?: boolean;
                logMessages?: string[] & string[] & { [K_47 in Exclude<keyof I_1["transaction"]["meta"]["logMessages"], keyof string[]>]: never; };
                logMessagesNone?: boolean;
                preTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[] & ({
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                } & {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    } & {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    } & { [K_48 in Exclude<keyof I_1["transaction"]["meta"]["preTokenBalances"][number]["uiTokenAmount"], keyof import("./solana-storage").UiTokenAmount>]: never; };
                    owner?: string;
                    programId?: string;
                } & { [K_49 in Exclude<keyof I_1["transaction"]["meta"]["preTokenBalances"][number], keyof import("./solana-storage").TokenBalance>]: never; })[] & { [K_50 in Exclude<keyof I_1["transaction"]["meta"]["preTokenBalances"], keyof {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[]>]: never; };
                postTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[] & ({
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                } & {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    } & {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    } & { [K_51 in Exclude<keyof I_1["transaction"]["meta"]["postTokenBalances"][number]["uiTokenAmount"], keyof import("./solana-storage").UiTokenAmount>]: never; };
                    owner?: string;
                    programId?: string;
                } & { [K_52 in Exclude<keyof I_1["transaction"]["meta"]["postTokenBalances"][number], keyof import("./solana-storage").TokenBalance>]: never; })[] & { [K_53 in Exclude<keyof I_1["transaction"]["meta"]["postTokenBalances"], keyof {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[]>]: never; };
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[] & ({
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                } & {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                } & { [K_54 in Exclude<keyof I_1["transaction"]["meta"]["rewards"][number], keyof import("./solana-storage").Reward>]: never; })[] & { [K_55 in Exclude<keyof I_1["transaction"]["meta"]["rewards"], keyof {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[]>]: never; };
                loadedWritableAddresses?: Uint8Array[] & Uint8Array[] & { [K_56 in Exclude<keyof I_1["transaction"]["meta"]["loadedWritableAddresses"], keyof Uint8Array[]>]: never; };
                loadedReadonlyAddresses?: Uint8Array[] & Uint8Array[] & { [K_57 in Exclude<keyof I_1["transaction"]["meta"]["loadedReadonlyAddresses"], keyof Uint8Array[]>]: never; };
                returnData?: {
                    programId?: Uint8Array;
                    data?: Uint8Array;
                } & {
                    programId?: Uint8Array;
                    data?: Uint8Array;
                } & { [K_58 in Exclude<keyof I_1["transaction"]["meta"]["returnData"], keyof import("./solana-storage").ReturnData>]: never; };
                returnDataNone?: boolean;
                computeUnitsConsumed?: string;
            } & { [K_59 in Exclude<keyof I_1["transaction"]["meta"], keyof TransactionStatusMeta>]: never; };
            index?: string;
        } & { [K_60 in Exclude<keyof I_1["transaction"], keyof SubscribeUpdateTransactionInfo>]: never; };
        slot?: string;
    } & { [K_61 in Exclude<keyof I_1, keyof SubscribeUpdateTransaction>]: never; }>(object: I_1): SubscribeUpdateTransaction;
};
export declare const SubscribeUpdateTransactionInfo: {
    encode(message: SubscribeUpdateTransactionInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeUpdateTransactionInfo;
    fromJSON(object: any): SubscribeUpdateTransactionInfo;
    toJSON(message: SubscribeUpdateTransactionInfo): unknown;
    create<I extends {
        signature?: Uint8Array;
        isVote?: boolean;
        transaction?: {
            signatures?: Uint8Array[];
            message?: {
                header?: {
                    numRequiredSignatures?: number;
                    numReadonlySignedAccounts?: number;
                    numReadonlyUnsignedAccounts?: number;
                };
                accountKeys?: Uint8Array[];
                recentBlockhash?: Uint8Array;
                instructions?: {
                    programIdIndex?: number;
                    accounts?: Uint8Array;
                    data?: Uint8Array;
                }[];
                versioned?: boolean;
                addressTableLookups?: {
                    accountKey?: Uint8Array;
                    writableIndexes?: Uint8Array;
                    readonlyIndexes?: Uint8Array;
                }[];
            };
        };
        meta?: {
            err?: {
                err?: Uint8Array;
            };
            fee?: string;
            preBalances?: string[];
            postBalances?: string[];
            innerInstructions?: {
                index?: number;
                instructions?: {
                    programIdIndex?: number;
                    accounts?: Uint8Array;
                    data?: Uint8Array;
                    stackHeight?: number;
                }[];
            }[];
            innerInstructionsNone?: boolean;
            logMessages?: string[];
            logMessagesNone?: boolean;
            preTokenBalances?: {
                accountIndex?: number;
                mint?: string;
                uiTokenAmount?: {
                    uiAmount?: number;
                    decimals?: number;
                    amount?: string;
                    uiAmountString?: string;
                };
                owner?: string;
                programId?: string;
            }[];
            postTokenBalances?: {
                accountIndex?: number;
                mint?: string;
                uiTokenAmount?: {
                    uiAmount?: number;
                    decimals?: number;
                    amount?: string;
                    uiAmountString?: string;
                };
                owner?: string;
                programId?: string;
            }[];
            rewards?: {
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            }[];
            loadedWritableAddresses?: Uint8Array[];
            loadedReadonlyAddresses?: Uint8Array[];
            returnData?: {
                programId?: Uint8Array;
                data?: Uint8Array;
            };
            returnDataNone?: boolean;
            computeUnitsConsumed?: string;
        };
        index?: string;
    } & {
        signature?: Uint8Array;
        isVote?: boolean;
        transaction?: {
            signatures?: Uint8Array[];
            message?: {
                header?: {
                    numRequiredSignatures?: number;
                    numReadonlySignedAccounts?: number;
                    numReadonlyUnsignedAccounts?: number;
                };
                accountKeys?: Uint8Array[];
                recentBlockhash?: Uint8Array;
                instructions?: {
                    programIdIndex?: number;
                    accounts?: Uint8Array;
                    data?: Uint8Array;
                }[];
                versioned?: boolean;
                addressTableLookups?: {
                    accountKey?: Uint8Array;
                    writableIndexes?: Uint8Array;
                    readonlyIndexes?: Uint8Array;
                }[];
            };
        } & {
            signatures?: Uint8Array[] & Uint8Array[] & { [K in Exclude<keyof I["transaction"]["signatures"], keyof Uint8Array[]>]: never; };
            message?: {
                header?: {
                    numRequiredSignatures?: number;
                    numReadonlySignedAccounts?: number;
                    numReadonlyUnsignedAccounts?: number;
                };
                accountKeys?: Uint8Array[];
                recentBlockhash?: Uint8Array;
                instructions?: {
                    programIdIndex?: number;
                    accounts?: Uint8Array;
                    data?: Uint8Array;
                }[];
                versioned?: boolean;
                addressTableLookups?: {
                    accountKey?: Uint8Array;
                    writableIndexes?: Uint8Array;
                    readonlyIndexes?: Uint8Array;
                }[];
            } & {
                header?: {
                    numRequiredSignatures?: number;
                    numReadonlySignedAccounts?: number;
                    numReadonlyUnsignedAccounts?: number;
                } & {
                    numRequiredSignatures?: number;
                    numReadonlySignedAccounts?: number;
                    numReadonlyUnsignedAccounts?: number;
                } & { [K_1 in Exclude<keyof I["transaction"]["message"]["header"], keyof import("./solana-storage").MessageHeader>]: never; };
                accountKeys?: Uint8Array[] & Uint8Array[] & { [K_2 in Exclude<keyof I["transaction"]["message"]["accountKeys"], keyof Uint8Array[]>]: never; };
                recentBlockhash?: Uint8Array;
                instructions?: {
                    programIdIndex?: number;
                    accounts?: Uint8Array;
                    data?: Uint8Array;
                }[] & ({
                    programIdIndex?: number;
                    accounts?: Uint8Array;
                    data?: Uint8Array;
                } & {
                    programIdIndex?: number;
                    accounts?: Uint8Array;
                    data?: Uint8Array;
                } & { [K_3 in Exclude<keyof I["transaction"]["message"]["instructions"][number], keyof import("./solana-storage").CompiledInstruction>]: never; })[] & { [K_4 in Exclude<keyof I["transaction"]["message"]["instructions"], keyof {
                    programIdIndex?: number;
                    accounts?: Uint8Array;
                    data?: Uint8Array;
                }[]>]: never; };
                versioned?: boolean;
                addressTableLookups?: {
                    accountKey?: Uint8Array;
                    writableIndexes?: Uint8Array;
                    readonlyIndexes?: Uint8Array;
                }[] & ({
                    accountKey?: Uint8Array;
                    writableIndexes?: Uint8Array;
                    readonlyIndexes?: Uint8Array;
                } & {
                    accountKey?: Uint8Array;
                    writableIndexes?: Uint8Array;
                    readonlyIndexes?: Uint8Array;
                } & { [K_5 in Exclude<keyof I["transaction"]["message"]["addressTableLookups"][number], keyof import("./solana-storage").MessageAddressTableLookup>]: never; })[] & { [K_6 in Exclude<keyof I["transaction"]["message"]["addressTableLookups"], keyof {
                    accountKey?: Uint8Array;
                    writableIndexes?: Uint8Array;
                    readonlyIndexes?: Uint8Array;
                }[]>]: never; };
            } & { [K_7 in Exclude<keyof I["transaction"]["message"], keyof import("./solana-storage").Message>]: never; };
        } & { [K_8 in Exclude<keyof I["transaction"], keyof Transaction>]: never; };
        meta?: {
            err?: {
                err?: Uint8Array;
            };
            fee?: string;
            preBalances?: string[];
            postBalances?: string[];
            innerInstructions?: {
                index?: number;
                instructions?: {
                    programIdIndex?: number;
                    accounts?: Uint8Array;
                    data?: Uint8Array;
                    stackHeight?: number;
                }[];
            }[];
            innerInstructionsNone?: boolean;
            logMessages?: string[];
            logMessagesNone?: boolean;
            preTokenBalances?: {
                accountIndex?: number;
                mint?: string;
                uiTokenAmount?: {
                    uiAmount?: number;
                    decimals?: number;
                    amount?: string;
                    uiAmountString?: string;
                };
                owner?: string;
                programId?: string;
            }[];
            postTokenBalances?: {
                accountIndex?: number;
                mint?: string;
                uiTokenAmount?: {
                    uiAmount?: number;
                    decimals?: number;
                    amount?: string;
                    uiAmountString?: string;
                };
                owner?: string;
                programId?: string;
            }[];
            rewards?: {
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            }[];
            loadedWritableAddresses?: Uint8Array[];
            loadedReadonlyAddresses?: Uint8Array[];
            returnData?: {
                programId?: Uint8Array;
                data?: Uint8Array;
            };
            returnDataNone?: boolean;
            computeUnitsConsumed?: string;
        } & {
            err?: {
                err?: Uint8Array;
            } & {
                err?: Uint8Array;
            } & { [K_9 in Exclude<keyof I["meta"]["err"], "err">]: never; };
            fee?: string;
            preBalances?: string[] & string[] & { [K_10 in Exclude<keyof I["meta"]["preBalances"], keyof string[]>]: never; };
            postBalances?: string[] & string[] & { [K_11 in Exclude<keyof I["meta"]["postBalances"], keyof string[]>]: never; };
            innerInstructions?: {
                index?: number;
                instructions?: {
                    programIdIndex?: number;
                    accounts?: Uint8Array;
                    data?: Uint8Array;
                    stackHeight?: number;
                }[];
            }[] & ({
                index?: number;
                instructions?: {
                    programIdIndex?: number;
                    accounts?: Uint8Array;
                    data?: Uint8Array;
                    stackHeight?: number;
                }[];
            } & {
                index?: number;
                instructions?: {
                    programIdIndex?: number;
                    accounts?: Uint8Array;
                    data?: Uint8Array;
                    stackHeight?: number;
                }[] & ({
                    programIdIndex?: number;
                    accounts?: Uint8Array;
                    data?: Uint8Array;
                    stackHeight?: number;
                } & {
                    programIdIndex?: number;
                    accounts?: Uint8Array;
                    data?: Uint8Array;
                    stackHeight?: number;
                } & { [K_12 in Exclude<keyof I["meta"]["innerInstructions"][number]["instructions"][number], keyof import("./solana-storage").InnerInstruction>]: never; })[] & { [K_13 in Exclude<keyof I["meta"]["innerInstructions"][number]["instructions"], keyof {
                    programIdIndex?: number;
                    accounts?: Uint8Array;
                    data?: Uint8Array;
                    stackHeight?: number;
                }[]>]: never; };
            } & { [K_14 in Exclude<keyof I["meta"]["innerInstructions"][number], keyof import("./solana-storage").InnerInstructions>]: never; })[] & { [K_15 in Exclude<keyof I["meta"]["innerInstructions"], keyof {
                index?: number;
                instructions?: {
                    programIdIndex?: number;
                    accounts?: Uint8Array;
                    data?: Uint8Array;
                    stackHeight?: number;
                }[];
            }[]>]: never; };
            innerInstructionsNone?: boolean;
            logMessages?: string[] & string[] & { [K_16 in Exclude<keyof I["meta"]["logMessages"], keyof string[]>]: never; };
            logMessagesNone?: boolean;
            preTokenBalances?: {
                accountIndex?: number;
                mint?: string;
                uiTokenAmount?: {
                    uiAmount?: number;
                    decimals?: number;
                    amount?: string;
                    uiAmountString?: string;
                };
                owner?: string;
                programId?: string;
            }[] & ({
                accountIndex?: number;
                mint?: string;
                uiTokenAmount?: {
                    uiAmount?: number;
                    decimals?: number;
                    amount?: string;
                    uiAmountString?: string;
                };
                owner?: string;
                programId?: string;
            } & {
                accountIndex?: number;
                mint?: string;
                uiTokenAmount?: {
                    uiAmount?: number;
                    decimals?: number;
                    amount?: string;
                    uiAmountString?: string;
                } & {
                    uiAmount?: number;
                    decimals?: number;
                    amount?: string;
                    uiAmountString?: string;
                } & { [K_17 in Exclude<keyof I["meta"]["preTokenBalances"][number]["uiTokenAmount"], keyof import("./solana-storage").UiTokenAmount>]: never; };
                owner?: string;
                programId?: string;
            } & { [K_18 in Exclude<keyof I["meta"]["preTokenBalances"][number], keyof import("./solana-storage").TokenBalance>]: never; })[] & { [K_19 in Exclude<keyof I["meta"]["preTokenBalances"], keyof {
                accountIndex?: number;
                mint?: string;
                uiTokenAmount?: {
                    uiAmount?: number;
                    decimals?: number;
                    amount?: string;
                    uiAmountString?: string;
                };
                owner?: string;
                programId?: string;
            }[]>]: never; };
            postTokenBalances?: {
                accountIndex?: number;
                mint?: string;
                uiTokenAmount?: {
                    uiAmount?: number;
                    decimals?: number;
                    amount?: string;
                    uiAmountString?: string;
                };
                owner?: string;
                programId?: string;
            }[] & ({
                accountIndex?: number;
                mint?: string;
                uiTokenAmount?: {
                    uiAmount?: number;
                    decimals?: number;
                    amount?: string;
                    uiAmountString?: string;
                };
                owner?: string;
                programId?: string;
            } & {
                accountIndex?: number;
                mint?: string;
                uiTokenAmount?: {
                    uiAmount?: number;
                    decimals?: number;
                    amount?: string;
                    uiAmountString?: string;
                } & {
                    uiAmount?: number;
                    decimals?: number;
                    amount?: string;
                    uiAmountString?: string;
                } & { [K_20 in Exclude<keyof I["meta"]["postTokenBalances"][number]["uiTokenAmount"], keyof import("./solana-storage").UiTokenAmount>]: never; };
                owner?: string;
                programId?: string;
            } & { [K_21 in Exclude<keyof I["meta"]["postTokenBalances"][number], keyof import("./solana-storage").TokenBalance>]: never; })[] & { [K_22 in Exclude<keyof I["meta"]["postTokenBalances"], keyof {
                accountIndex?: number;
                mint?: string;
                uiTokenAmount?: {
                    uiAmount?: number;
                    decimals?: number;
                    amount?: string;
                    uiAmountString?: string;
                };
                owner?: string;
                programId?: string;
            }[]>]: never; };
            rewards?: {
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            }[] & ({
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            } & {
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            } & { [K_23 in Exclude<keyof I["meta"]["rewards"][number], keyof import("./solana-storage").Reward>]: never; })[] & { [K_24 in Exclude<keyof I["meta"]["rewards"], keyof {
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            }[]>]: never; };
            loadedWritableAddresses?: Uint8Array[] & Uint8Array[] & { [K_25 in Exclude<keyof I["meta"]["loadedWritableAddresses"], keyof Uint8Array[]>]: never; };
            loadedReadonlyAddresses?: Uint8Array[] & Uint8Array[] & { [K_26 in Exclude<keyof I["meta"]["loadedReadonlyAddresses"], keyof Uint8Array[]>]: never; };
            returnData?: {
                programId?: Uint8Array;
                data?: Uint8Array;
            } & {
                programId?: Uint8Array;
                data?: Uint8Array;
            } & { [K_27 in Exclude<keyof I["meta"]["returnData"], keyof import("./solana-storage").ReturnData>]: never; };
            returnDataNone?: boolean;
            computeUnitsConsumed?: string;
        } & { [K_28 in Exclude<keyof I["meta"], keyof TransactionStatusMeta>]: never; };
        index?: string;
    } & { [K_29 in Exclude<keyof I, keyof SubscribeUpdateTransactionInfo>]: never; }>(base?: I): SubscribeUpdateTransactionInfo;
    fromPartial<I_1 extends {
        signature?: Uint8Array;
        isVote?: boolean;
        transaction?: {
            signatures?: Uint8Array[];
            message?: {
                header?: {
                    numRequiredSignatures?: number;
                    numReadonlySignedAccounts?: number;
                    numReadonlyUnsignedAccounts?: number;
                };
                accountKeys?: Uint8Array[];
                recentBlockhash?: Uint8Array;
                instructions?: {
                    programIdIndex?: number;
                    accounts?: Uint8Array;
                    data?: Uint8Array;
                }[];
                versioned?: boolean;
                addressTableLookups?: {
                    accountKey?: Uint8Array;
                    writableIndexes?: Uint8Array;
                    readonlyIndexes?: Uint8Array;
                }[];
            };
        };
        meta?: {
            err?: {
                err?: Uint8Array;
            };
            fee?: string;
            preBalances?: string[];
            postBalances?: string[];
            innerInstructions?: {
                index?: number;
                instructions?: {
                    programIdIndex?: number;
                    accounts?: Uint8Array;
                    data?: Uint8Array;
                    stackHeight?: number;
                }[];
            }[];
            innerInstructionsNone?: boolean;
            logMessages?: string[];
            logMessagesNone?: boolean;
            preTokenBalances?: {
                accountIndex?: number;
                mint?: string;
                uiTokenAmount?: {
                    uiAmount?: number;
                    decimals?: number;
                    amount?: string;
                    uiAmountString?: string;
                };
                owner?: string;
                programId?: string;
            }[];
            postTokenBalances?: {
                accountIndex?: number;
                mint?: string;
                uiTokenAmount?: {
                    uiAmount?: number;
                    decimals?: number;
                    amount?: string;
                    uiAmountString?: string;
                };
                owner?: string;
                programId?: string;
            }[];
            rewards?: {
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            }[];
            loadedWritableAddresses?: Uint8Array[];
            loadedReadonlyAddresses?: Uint8Array[];
            returnData?: {
                programId?: Uint8Array;
                data?: Uint8Array;
            };
            returnDataNone?: boolean;
            computeUnitsConsumed?: string;
        };
        index?: string;
    } & {
        signature?: Uint8Array;
        isVote?: boolean;
        transaction?: {
            signatures?: Uint8Array[];
            message?: {
                header?: {
                    numRequiredSignatures?: number;
                    numReadonlySignedAccounts?: number;
                    numReadonlyUnsignedAccounts?: number;
                };
                accountKeys?: Uint8Array[];
                recentBlockhash?: Uint8Array;
                instructions?: {
                    programIdIndex?: number;
                    accounts?: Uint8Array;
                    data?: Uint8Array;
                }[];
                versioned?: boolean;
                addressTableLookups?: {
                    accountKey?: Uint8Array;
                    writableIndexes?: Uint8Array;
                    readonlyIndexes?: Uint8Array;
                }[];
            };
        } & {
            signatures?: Uint8Array[] & Uint8Array[] & { [K_30 in Exclude<keyof I_1["transaction"]["signatures"], keyof Uint8Array[]>]: never; };
            message?: {
                header?: {
                    numRequiredSignatures?: number;
                    numReadonlySignedAccounts?: number;
                    numReadonlyUnsignedAccounts?: number;
                };
                accountKeys?: Uint8Array[];
                recentBlockhash?: Uint8Array;
                instructions?: {
                    programIdIndex?: number;
                    accounts?: Uint8Array;
                    data?: Uint8Array;
                }[];
                versioned?: boolean;
                addressTableLookups?: {
                    accountKey?: Uint8Array;
                    writableIndexes?: Uint8Array;
                    readonlyIndexes?: Uint8Array;
                }[];
            } & {
                header?: {
                    numRequiredSignatures?: number;
                    numReadonlySignedAccounts?: number;
                    numReadonlyUnsignedAccounts?: number;
                } & {
                    numRequiredSignatures?: number;
                    numReadonlySignedAccounts?: number;
                    numReadonlyUnsignedAccounts?: number;
                } & { [K_31 in Exclude<keyof I_1["transaction"]["message"]["header"], keyof import("./solana-storage").MessageHeader>]: never; };
                accountKeys?: Uint8Array[] & Uint8Array[] & { [K_32 in Exclude<keyof I_1["transaction"]["message"]["accountKeys"], keyof Uint8Array[]>]: never; };
                recentBlockhash?: Uint8Array;
                instructions?: {
                    programIdIndex?: number;
                    accounts?: Uint8Array;
                    data?: Uint8Array;
                }[] & ({
                    programIdIndex?: number;
                    accounts?: Uint8Array;
                    data?: Uint8Array;
                } & {
                    programIdIndex?: number;
                    accounts?: Uint8Array;
                    data?: Uint8Array;
                } & { [K_33 in Exclude<keyof I_1["transaction"]["message"]["instructions"][number], keyof import("./solana-storage").CompiledInstruction>]: never; })[] & { [K_34 in Exclude<keyof I_1["transaction"]["message"]["instructions"], keyof {
                    programIdIndex?: number;
                    accounts?: Uint8Array;
                    data?: Uint8Array;
                }[]>]: never; };
                versioned?: boolean;
                addressTableLookups?: {
                    accountKey?: Uint8Array;
                    writableIndexes?: Uint8Array;
                    readonlyIndexes?: Uint8Array;
                }[] & ({
                    accountKey?: Uint8Array;
                    writableIndexes?: Uint8Array;
                    readonlyIndexes?: Uint8Array;
                } & {
                    accountKey?: Uint8Array;
                    writableIndexes?: Uint8Array;
                    readonlyIndexes?: Uint8Array;
                } & { [K_35 in Exclude<keyof I_1["transaction"]["message"]["addressTableLookups"][number], keyof import("./solana-storage").MessageAddressTableLookup>]: never; })[] & { [K_36 in Exclude<keyof I_1["transaction"]["message"]["addressTableLookups"], keyof {
                    accountKey?: Uint8Array;
                    writableIndexes?: Uint8Array;
                    readonlyIndexes?: Uint8Array;
                }[]>]: never; };
            } & { [K_37 in Exclude<keyof I_1["transaction"]["message"], keyof import("./solana-storage").Message>]: never; };
        } & { [K_38 in Exclude<keyof I_1["transaction"], keyof Transaction>]: never; };
        meta?: {
            err?: {
                err?: Uint8Array;
            };
            fee?: string;
            preBalances?: string[];
            postBalances?: string[];
            innerInstructions?: {
                index?: number;
                instructions?: {
                    programIdIndex?: number;
                    accounts?: Uint8Array;
                    data?: Uint8Array;
                    stackHeight?: number;
                }[];
            }[];
            innerInstructionsNone?: boolean;
            logMessages?: string[];
            logMessagesNone?: boolean;
            preTokenBalances?: {
                accountIndex?: number;
                mint?: string;
                uiTokenAmount?: {
                    uiAmount?: number;
                    decimals?: number;
                    amount?: string;
                    uiAmountString?: string;
                };
                owner?: string;
                programId?: string;
            }[];
            postTokenBalances?: {
                accountIndex?: number;
                mint?: string;
                uiTokenAmount?: {
                    uiAmount?: number;
                    decimals?: number;
                    amount?: string;
                    uiAmountString?: string;
                };
                owner?: string;
                programId?: string;
            }[];
            rewards?: {
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            }[];
            loadedWritableAddresses?: Uint8Array[];
            loadedReadonlyAddresses?: Uint8Array[];
            returnData?: {
                programId?: Uint8Array;
                data?: Uint8Array;
            };
            returnDataNone?: boolean;
            computeUnitsConsumed?: string;
        } & {
            err?: {
                err?: Uint8Array;
            } & {
                err?: Uint8Array;
            } & { [K_39 in Exclude<keyof I_1["meta"]["err"], "err">]: never; };
            fee?: string;
            preBalances?: string[] & string[] & { [K_40 in Exclude<keyof I_1["meta"]["preBalances"], keyof string[]>]: never; };
            postBalances?: string[] & string[] & { [K_41 in Exclude<keyof I_1["meta"]["postBalances"], keyof string[]>]: never; };
            innerInstructions?: {
                index?: number;
                instructions?: {
                    programIdIndex?: number;
                    accounts?: Uint8Array;
                    data?: Uint8Array;
                    stackHeight?: number;
                }[];
            }[] & ({
                index?: number;
                instructions?: {
                    programIdIndex?: number;
                    accounts?: Uint8Array;
                    data?: Uint8Array;
                    stackHeight?: number;
                }[];
            } & {
                index?: number;
                instructions?: {
                    programIdIndex?: number;
                    accounts?: Uint8Array;
                    data?: Uint8Array;
                    stackHeight?: number;
                }[] & ({
                    programIdIndex?: number;
                    accounts?: Uint8Array;
                    data?: Uint8Array;
                    stackHeight?: number;
                } & {
                    programIdIndex?: number;
                    accounts?: Uint8Array;
                    data?: Uint8Array;
                    stackHeight?: number;
                } & { [K_42 in Exclude<keyof I_1["meta"]["innerInstructions"][number]["instructions"][number], keyof import("./solana-storage").InnerInstruction>]: never; })[] & { [K_43 in Exclude<keyof I_1["meta"]["innerInstructions"][number]["instructions"], keyof {
                    programIdIndex?: number;
                    accounts?: Uint8Array;
                    data?: Uint8Array;
                    stackHeight?: number;
                }[]>]: never; };
            } & { [K_44 in Exclude<keyof I_1["meta"]["innerInstructions"][number], keyof import("./solana-storage").InnerInstructions>]: never; })[] & { [K_45 in Exclude<keyof I_1["meta"]["innerInstructions"], keyof {
                index?: number;
                instructions?: {
                    programIdIndex?: number;
                    accounts?: Uint8Array;
                    data?: Uint8Array;
                    stackHeight?: number;
                }[];
            }[]>]: never; };
            innerInstructionsNone?: boolean;
            logMessages?: string[] & string[] & { [K_46 in Exclude<keyof I_1["meta"]["logMessages"], keyof string[]>]: never; };
            logMessagesNone?: boolean;
            preTokenBalances?: {
                accountIndex?: number;
                mint?: string;
                uiTokenAmount?: {
                    uiAmount?: number;
                    decimals?: number;
                    amount?: string;
                    uiAmountString?: string;
                };
                owner?: string;
                programId?: string;
            }[] & ({
                accountIndex?: number;
                mint?: string;
                uiTokenAmount?: {
                    uiAmount?: number;
                    decimals?: number;
                    amount?: string;
                    uiAmountString?: string;
                };
                owner?: string;
                programId?: string;
            } & {
                accountIndex?: number;
                mint?: string;
                uiTokenAmount?: {
                    uiAmount?: number;
                    decimals?: number;
                    amount?: string;
                    uiAmountString?: string;
                } & {
                    uiAmount?: number;
                    decimals?: number;
                    amount?: string;
                    uiAmountString?: string;
                } & { [K_47 in Exclude<keyof I_1["meta"]["preTokenBalances"][number]["uiTokenAmount"], keyof import("./solana-storage").UiTokenAmount>]: never; };
                owner?: string;
                programId?: string;
            } & { [K_48 in Exclude<keyof I_1["meta"]["preTokenBalances"][number], keyof import("./solana-storage").TokenBalance>]: never; })[] & { [K_49 in Exclude<keyof I_1["meta"]["preTokenBalances"], keyof {
                accountIndex?: number;
                mint?: string;
                uiTokenAmount?: {
                    uiAmount?: number;
                    decimals?: number;
                    amount?: string;
                    uiAmountString?: string;
                };
                owner?: string;
                programId?: string;
            }[]>]: never; };
            postTokenBalances?: {
                accountIndex?: number;
                mint?: string;
                uiTokenAmount?: {
                    uiAmount?: number;
                    decimals?: number;
                    amount?: string;
                    uiAmountString?: string;
                };
                owner?: string;
                programId?: string;
            }[] & ({
                accountIndex?: number;
                mint?: string;
                uiTokenAmount?: {
                    uiAmount?: number;
                    decimals?: number;
                    amount?: string;
                    uiAmountString?: string;
                };
                owner?: string;
                programId?: string;
            } & {
                accountIndex?: number;
                mint?: string;
                uiTokenAmount?: {
                    uiAmount?: number;
                    decimals?: number;
                    amount?: string;
                    uiAmountString?: string;
                } & {
                    uiAmount?: number;
                    decimals?: number;
                    amount?: string;
                    uiAmountString?: string;
                } & { [K_50 in Exclude<keyof I_1["meta"]["postTokenBalances"][number]["uiTokenAmount"], keyof import("./solana-storage").UiTokenAmount>]: never; };
                owner?: string;
                programId?: string;
            } & { [K_51 in Exclude<keyof I_1["meta"]["postTokenBalances"][number], keyof import("./solana-storage").TokenBalance>]: never; })[] & { [K_52 in Exclude<keyof I_1["meta"]["postTokenBalances"], keyof {
                accountIndex?: number;
                mint?: string;
                uiTokenAmount?: {
                    uiAmount?: number;
                    decimals?: number;
                    amount?: string;
                    uiAmountString?: string;
                };
                owner?: string;
                programId?: string;
            }[]>]: never; };
            rewards?: {
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            }[] & ({
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            } & {
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            } & { [K_53 in Exclude<keyof I_1["meta"]["rewards"][number], keyof import("./solana-storage").Reward>]: never; })[] & { [K_54 in Exclude<keyof I_1["meta"]["rewards"], keyof {
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            }[]>]: never; };
            loadedWritableAddresses?: Uint8Array[] & Uint8Array[] & { [K_55 in Exclude<keyof I_1["meta"]["loadedWritableAddresses"], keyof Uint8Array[]>]: never; };
            loadedReadonlyAddresses?: Uint8Array[] & Uint8Array[] & { [K_56 in Exclude<keyof I_1["meta"]["loadedReadonlyAddresses"], keyof Uint8Array[]>]: never; };
            returnData?: {
                programId?: Uint8Array;
                data?: Uint8Array;
            } & {
                programId?: Uint8Array;
                data?: Uint8Array;
            } & { [K_57 in Exclude<keyof I_1["meta"]["returnData"], keyof import("./solana-storage").ReturnData>]: never; };
            returnDataNone?: boolean;
            computeUnitsConsumed?: string;
        } & { [K_58 in Exclude<keyof I_1["meta"], keyof TransactionStatusMeta>]: never; };
        index?: string;
    } & { [K_59 in Exclude<keyof I_1, keyof SubscribeUpdateTransactionInfo>]: never; }>(object: I_1): SubscribeUpdateTransactionInfo;
};
export declare const SubscribeUpdateBlock: {
    encode(message: SubscribeUpdateBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeUpdateBlock;
    fromJSON(object: any): SubscribeUpdateBlock;
    toJSON(message: SubscribeUpdateBlock): unknown;
    create<I extends {
        slot?: string;
        blockhash?: string;
        rewards?: {
            rewards?: {
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            }[];
        };
        blockTime?: {
            timestamp?: string;
        };
        blockHeight?: {
            blockHeight?: string;
        };
        parentSlot?: string;
        parentBlockhash?: string;
        executedTransactionCount?: string;
        transactions?: {
            signature?: Uint8Array;
            isVote?: boolean;
            transaction?: {
                signatures?: Uint8Array[];
                message?: {
                    header?: {
                        numRequiredSignatures?: number;
                        numReadonlySignedAccounts?: number;
                        numReadonlyUnsignedAccounts?: number;
                    };
                    accountKeys?: Uint8Array[];
                    recentBlockhash?: Uint8Array;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                    versioned?: boolean;
                    addressTableLookups?: {
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    }[];
                };
            };
            meta?: {
                err?: {
                    err?: Uint8Array;
                };
                fee?: string;
                preBalances?: string[];
                postBalances?: string[];
                innerInstructions?: {
                    index?: number;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[];
                }[];
                innerInstructionsNone?: boolean;
                logMessages?: string[];
                logMessagesNone?: boolean;
                preTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[];
                postTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[];
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[];
                loadedWritableAddresses?: Uint8Array[];
                loadedReadonlyAddresses?: Uint8Array[];
                returnData?: {
                    programId?: Uint8Array;
                    data?: Uint8Array;
                };
                returnDataNone?: boolean;
                computeUnitsConsumed?: string;
            };
            index?: string;
        }[];
        updatedAccountCount?: string;
        accounts?: {
            pubkey?: Uint8Array;
            lamports?: string;
            owner?: Uint8Array;
            executable?: boolean;
            rentEpoch?: string;
            data?: Uint8Array;
            writeVersion?: string;
            txnSignature?: Uint8Array | undefined;
        }[];
        entriesCount?: string;
        entries?: {
            slot?: string;
            index?: string;
            numHashes?: string;
            hash?: Uint8Array;
            executedTransactionCount?: string;
        }[];
    } & {
        slot?: string;
        blockhash?: string;
        rewards?: {
            rewards?: {
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            }[];
        } & {
            rewards?: {
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            }[] & ({
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            } & {
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            } & { [K in Exclude<keyof I["rewards"]["rewards"][number], keyof import("./solana-storage").Reward>]: never; })[] & { [K_1 in Exclude<keyof I["rewards"]["rewards"], keyof {
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            }[]>]: never; };
        } & { [K_2 in Exclude<keyof I["rewards"], "rewards">]: never; };
        blockTime?: {
            timestamp?: string;
        } & {
            timestamp?: string;
        } & { [K_3 in Exclude<keyof I["blockTime"], "timestamp">]: never; };
        blockHeight?: {
            blockHeight?: string;
        } & {
            blockHeight?: string;
        } & { [K_4 in Exclude<keyof I["blockHeight"], "blockHeight">]: never; };
        parentSlot?: string;
        parentBlockhash?: string;
        executedTransactionCount?: string;
        transactions?: {
            signature?: Uint8Array;
            isVote?: boolean;
            transaction?: {
                signatures?: Uint8Array[];
                message?: {
                    header?: {
                        numRequiredSignatures?: number;
                        numReadonlySignedAccounts?: number;
                        numReadonlyUnsignedAccounts?: number;
                    };
                    accountKeys?: Uint8Array[];
                    recentBlockhash?: Uint8Array;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                    versioned?: boolean;
                    addressTableLookups?: {
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    }[];
                };
            };
            meta?: {
                err?: {
                    err?: Uint8Array;
                };
                fee?: string;
                preBalances?: string[];
                postBalances?: string[];
                innerInstructions?: {
                    index?: number;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[];
                }[];
                innerInstructionsNone?: boolean;
                logMessages?: string[];
                logMessagesNone?: boolean;
                preTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[];
                postTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[];
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[];
                loadedWritableAddresses?: Uint8Array[];
                loadedReadonlyAddresses?: Uint8Array[];
                returnData?: {
                    programId?: Uint8Array;
                    data?: Uint8Array;
                };
                returnDataNone?: boolean;
                computeUnitsConsumed?: string;
            };
            index?: string;
        }[] & ({
            signature?: Uint8Array;
            isVote?: boolean;
            transaction?: {
                signatures?: Uint8Array[];
                message?: {
                    header?: {
                        numRequiredSignatures?: number;
                        numReadonlySignedAccounts?: number;
                        numReadonlyUnsignedAccounts?: number;
                    };
                    accountKeys?: Uint8Array[];
                    recentBlockhash?: Uint8Array;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                    versioned?: boolean;
                    addressTableLookups?: {
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    }[];
                };
            };
            meta?: {
                err?: {
                    err?: Uint8Array;
                };
                fee?: string;
                preBalances?: string[];
                postBalances?: string[];
                innerInstructions?: {
                    index?: number;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[];
                }[];
                innerInstructionsNone?: boolean;
                logMessages?: string[];
                logMessagesNone?: boolean;
                preTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[];
                postTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[];
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[];
                loadedWritableAddresses?: Uint8Array[];
                loadedReadonlyAddresses?: Uint8Array[];
                returnData?: {
                    programId?: Uint8Array;
                    data?: Uint8Array;
                };
                returnDataNone?: boolean;
                computeUnitsConsumed?: string;
            };
            index?: string;
        } & {
            signature?: Uint8Array;
            isVote?: boolean;
            transaction?: {
                signatures?: Uint8Array[];
                message?: {
                    header?: {
                        numRequiredSignatures?: number;
                        numReadonlySignedAccounts?: number;
                        numReadonlyUnsignedAccounts?: number;
                    };
                    accountKeys?: Uint8Array[];
                    recentBlockhash?: Uint8Array;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                    versioned?: boolean;
                    addressTableLookups?: {
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    }[];
                };
            } & {
                signatures?: Uint8Array[] & Uint8Array[] & { [K_5 in Exclude<keyof I["transactions"][number]["transaction"]["signatures"], keyof Uint8Array[]>]: never; };
                message?: {
                    header?: {
                        numRequiredSignatures?: number;
                        numReadonlySignedAccounts?: number;
                        numReadonlyUnsignedAccounts?: number;
                    };
                    accountKeys?: Uint8Array[];
                    recentBlockhash?: Uint8Array;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                    versioned?: boolean;
                    addressTableLookups?: {
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    }[];
                } & {
                    header?: {
                        numRequiredSignatures?: number;
                        numReadonlySignedAccounts?: number;
                        numReadonlyUnsignedAccounts?: number;
                    } & {
                        numRequiredSignatures?: number;
                        numReadonlySignedAccounts?: number;
                        numReadonlyUnsignedAccounts?: number;
                    } & { [K_6 in Exclude<keyof I["transactions"][number]["transaction"]["message"]["header"], keyof import("./solana-storage").MessageHeader>]: never; };
                    accountKeys?: Uint8Array[] & Uint8Array[] & { [K_7 in Exclude<keyof I["transactions"][number]["transaction"]["message"]["accountKeys"], keyof Uint8Array[]>]: never; };
                    recentBlockhash?: Uint8Array;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    }[] & ({
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    } & {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    } & { [K_8 in Exclude<keyof I["transactions"][number]["transaction"]["message"]["instructions"][number], keyof import("./solana-storage").CompiledInstruction>]: never; })[] & { [K_9 in Exclude<keyof I["transactions"][number]["transaction"]["message"]["instructions"], keyof {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    }[]>]: never; };
                    versioned?: boolean;
                    addressTableLookups?: {
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    }[] & ({
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    } & {
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    } & { [K_10 in Exclude<keyof I["transactions"][number]["transaction"]["message"]["addressTableLookups"][number], keyof import("./solana-storage").MessageAddressTableLookup>]: never; })[] & { [K_11 in Exclude<keyof I["transactions"][number]["transaction"]["message"]["addressTableLookups"], keyof {
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    }[]>]: never; };
                } & { [K_12 in Exclude<keyof I["transactions"][number]["transaction"]["message"], keyof import("./solana-storage").Message>]: never; };
            } & { [K_13 in Exclude<keyof I["transactions"][number]["transaction"], keyof Transaction>]: never; };
            meta?: {
                err?: {
                    err?: Uint8Array;
                };
                fee?: string;
                preBalances?: string[];
                postBalances?: string[];
                innerInstructions?: {
                    index?: number;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[];
                }[];
                innerInstructionsNone?: boolean;
                logMessages?: string[];
                logMessagesNone?: boolean;
                preTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[];
                postTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[];
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[];
                loadedWritableAddresses?: Uint8Array[];
                loadedReadonlyAddresses?: Uint8Array[];
                returnData?: {
                    programId?: Uint8Array;
                    data?: Uint8Array;
                };
                returnDataNone?: boolean;
                computeUnitsConsumed?: string;
            } & {
                err?: {
                    err?: Uint8Array;
                } & {
                    err?: Uint8Array;
                } & { [K_14 in Exclude<keyof I["transactions"][number]["meta"]["err"], "err">]: never; };
                fee?: string;
                preBalances?: string[] & string[] & { [K_15 in Exclude<keyof I["transactions"][number]["meta"]["preBalances"], keyof string[]>]: never; };
                postBalances?: string[] & string[] & { [K_16 in Exclude<keyof I["transactions"][number]["meta"]["postBalances"], keyof string[]>]: never; };
                innerInstructions?: {
                    index?: number;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[];
                }[] & ({
                    index?: number;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[];
                } & {
                    index?: number;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[] & ({
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    } & {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    } & { [K_17 in Exclude<keyof I["transactions"][number]["meta"]["innerInstructions"][number]["instructions"][number], keyof import("./solana-storage").InnerInstruction>]: never; })[] & { [K_18 in Exclude<keyof I["transactions"][number]["meta"]["innerInstructions"][number]["instructions"], keyof {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[]>]: never; };
                } & { [K_19 in Exclude<keyof I["transactions"][number]["meta"]["innerInstructions"][number], keyof import("./solana-storage").InnerInstructions>]: never; })[] & { [K_20 in Exclude<keyof I["transactions"][number]["meta"]["innerInstructions"], keyof {
                    index?: number;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[];
                }[]>]: never; };
                innerInstructionsNone?: boolean;
                logMessages?: string[] & string[] & { [K_21 in Exclude<keyof I["transactions"][number]["meta"]["logMessages"], keyof string[]>]: never; };
                logMessagesNone?: boolean;
                preTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[] & ({
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                } & {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    } & {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    } & { [K_22 in Exclude<keyof I["transactions"][number]["meta"]["preTokenBalances"][number]["uiTokenAmount"], keyof import("./solana-storage").UiTokenAmount>]: never; };
                    owner?: string;
                    programId?: string;
                } & { [K_23 in Exclude<keyof I["transactions"][number]["meta"]["preTokenBalances"][number], keyof import("./solana-storage").TokenBalance>]: never; })[] & { [K_24 in Exclude<keyof I["transactions"][number]["meta"]["preTokenBalances"], keyof {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[]>]: never; };
                postTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[] & ({
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                } & {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    } & {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    } & { [K_25 in Exclude<keyof I["transactions"][number]["meta"]["postTokenBalances"][number]["uiTokenAmount"], keyof import("./solana-storage").UiTokenAmount>]: never; };
                    owner?: string;
                    programId?: string;
                } & { [K_26 in Exclude<keyof I["transactions"][number]["meta"]["postTokenBalances"][number], keyof import("./solana-storage").TokenBalance>]: never; })[] & { [K_27 in Exclude<keyof I["transactions"][number]["meta"]["postTokenBalances"], keyof {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[]>]: never; };
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[] & ({
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                } & {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                } & { [K_28 in Exclude<keyof I["transactions"][number]["meta"]["rewards"][number], keyof import("./solana-storage").Reward>]: never; })[] & { [K_29 in Exclude<keyof I["transactions"][number]["meta"]["rewards"], keyof {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[]>]: never; };
                loadedWritableAddresses?: Uint8Array[] & Uint8Array[] & { [K_30 in Exclude<keyof I["transactions"][number]["meta"]["loadedWritableAddresses"], keyof Uint8Array[]>]: never; };
                loadedReadonlyAddresses?: Uint8Array[] & Uint8Array[] & { [K_31 in Exclude<keyof I["transactions"][number]["meta"]["loadedReadonlyAddresses"], keyof Uint8Array[]>]: never; };
                returnData?: {
                    programId?: Uint8Array;
                    data?: Uint8Array;
                } & {
                    programId?: Uint8Array;
                    data?: Uint8Array;
                } & { [K_32 in Exclude<keyof I["transactions"][number]["meta"]["returnData"], keyof import("./solana-storage").ReturnData>]: never; };
                returnDataNone?: boolean;
                computeUnitsConsumed?: string;
            } & { [K_33 in Exclude<keyof I["transactions"][number]["meta"], keyof TransactionStatusMeta>]: never; };
            index?: string;
        } & { [K_34 in Exclude<keyof I["transactions"][number], keyof SubscribeUpdateTransactionInfo>]: never; })[] & { [K_35 in Exclude<keyof I["transactions"], keyof {
            signature?: Uint8Array;
            isVote?: boolean;
            transaction?: {
                signatures?: Uint8Array[];
                message?: {
                    header?: {
                        numRequiredSignatures?: number;
                        numReadonlySignedAccounts?: number;
                        numReadonlyUnsignedAccounts?: number;
                    };
                    accountKeys?: Uint8Array[];
                    recentBlockhash?: Uint8Array;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                    versioned?: boolean;
                    addressTableLookups?: {
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    }[];
                };
            };
            meta?: {
                err?: {
                    err?: Uint8Array;
                };
                fee?: string;
                preBalances?: string[];
                postBalances?: string[];
                innerInstructions?: {
                    index?: number;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[];
                }[];
                innerInstructionsNone?: boolean;
                logMessages?: string[];
                logMessagesNone?: boolean;
                preTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[];
                postTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[];
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[];
                loadedWritableAddresses?: Uint8Array[];
                loadedReadonlyAddresses?: Uint8Array[];
                returnData?: {
                    programId?: Uint8Array;
                    data?: Uint8Array;
                };
                returnDataNone?: boolean;
                computeUnitsConsumed?: string;
            };
            index?: string;
        }[]>]: never; };
        updatedAccountCount?: string;
        accounts?: {
            pubkey?: Uint8Array;
            lamports?: string;
            owner?: Uint8Array;
            executable?: boolean;
            rentEpoch?: string;
            data?: Uint8Array;
            writeVersion?: string;
            txnSignature?: Uint8Array | undefined;
        }[] & ({
            pubkey?: Uint8Array;
            lamports?: string;
            owner?: Uint8Array;
            executable?: boolean;
            rentEpoch?: string;
            data?: Uint8Array;
            writeVersion?: string;
            txnSignature?: Uint8Array | undefined;
        } & {
            pubkey?: Uint8Array;
            lamports?: string;
            owner?: Uint8Array;
            executable?: boolean;
            rentEpoch?: string;
            data?: Uint8Array;
            writeVersion?: string;
            txnSignature?: Uint8Array | undefined;
        } & { [K_36 in Exclude<keyof I["accounts"][number], keyof SubscribeUpdateAccountInfo>]: never; })[] & { [K_37 in Exclude<keyof I["accounts"], keyof {
            pubkey?: Uint8Array;
            lamports?: string;
            owner?: Uint8Array;
            executable?: boolean;
            rentEpoch?: string;
            data?: Uint8Array;
            writeVersion?: string;
            txnSignature?: Uint8Array | undefined;
        }[]>]: never; };
        entriesCount?: string;
        entries?: {
            slot?: string;
            index?: string;
            numHashes?: string;
            hash?: Uint8Array;
            executedTransactionCount?: string;
        }[] & ({
            slot?: string;
            index?: string;
            numHashes?: string;
            hash?: Uint8Array;
            executedTransactionCount?: string;
        } & {
            slot?: string;
            index?: string;
            numHashes?: string;
            hash?: Uint8Array;
            executedTransactionCount?: string;
        } & { [K_38 in Exclude<keyof I["entries"][number], keyof SubscribeUpdateEntry>]: never; })[] & { [K_39 in Exclude<keyof I["entries"], keyof {
            slot?: string;
            index?: string;
            numHashes?: string;
            hash?: Uint8Array;
            executedTransactionCount?: string;
        }[]>]: never; };
    } & { [K_40 in Exclude<keyof I, keyof SubscribeUpdateBlock>]: never; }>(base?: I): SubscribeUpdateBlock;
    fromPartial<I_1 extends {
        slot?: string;
        blockhash?: string;
        rewards?: {
            rewards?: {
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            }[];
        };
        blockTime?: {
            timestamp?: string;
        };
        blockHeight?: {
            blockHeight?: string;
        };
        parentSlot?: string;
        parentBlockhash?: string;
        executedTransactionCount?: string;
        transactions?: {
            signature?: Uint8Array;
            isVote?: boolean;
            transaction?: {
                signatures?: Uint8Array[];
                message?: {
                    header?: {
                        numRequiredSignatures?: number;
                        numReadonlySignedAccounts?: number;
                        numReadonlyUnsignedAccounts?: number;
                    };
                    accountKeys?: Uint8Array[];
                    recentBlockhash?: Uint8Array;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                    versioned?: boolean;
                    addressTableLookups?: {
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    }[];
                };
            };
            meta?: {
                err?: {
                    err?: Uint8Array;
                };
                fee?: string;
                preBalances?: string[];
                postBalances?: string[];
                innerInstructions?: {
                    index?: number;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[];
                }[];
                innerInstructionsNone?: boolean;
                logMessages?: string[];
                logMessagesNone?: boolean;
                preTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[];
                postTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[];
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[];
                loadedWritableAddresses?: Uint8Array[];
                loadedReadonlyAddresses?: Uint8Array[];
                returnData?: {
                    programId?: Uint8Array;
                    data?: Uint8Array;
                };
                returnDataNone?: boolean;
                computeUnitsConsumed?: string;
            };
            index?: string;
        }[];
        updatedAccountCount?: string;
        accounts?: {
            pubkey?: Uint8Array;
            lamports?: string;
            owner?: Uint8Array;
            executable?: boolean;
            rentEpoch?: string;
            data?: Uint8Array;
            writeVersion?: string;
            txnSignature?: Uint8Array | undefined;
        }[];
        entriesCount?: string;
        entries?: {
            slot?: string;
            index?: string;
            numHashes?: string;
            hash?: Uint8Array;
            executedTransactionCount?: string;
        }[];
    } & {
        slot?: string;
        blockhash?: string;
        rewards?: {
            rewards?: {
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            }[];
        } & {
            rewards?: {
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            }[] & ({
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            } & {
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            } & { [K_41 in Exclude<keyof I_1["rewards"]["rewards"][number], keyof import("./solana-storage").Reward>]: never; })[] & { [K_42 in Exclude<keyof I_1["rewards"]["rewards"], keyof {
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            }[]>]: never; };
        } & { [K_43 in Exclude<keyof I_1["rewards"], "rewards">]: never; };
        blockTime?: {
            timestamp?: string;
        } & {
            timestamp?: string;
        } & { [K_44 in Exclude<keyof I_1["blockTime"], "timestamp">]: never; };
        blockHeight?: {
            blockHeight?: string;
        } & {
            blockHeight?: string;
        } & { [K_45 in Exclude<keyof I_1["blockHeight"], "blockHeight">]: never; };
        parentSlot?: string;
        parentBlockhash?: string;
        executedTransactionCount?: string;
        transactions?: {
            signature?: Uint8Array;
            isVote?: boolean;
            transaction?: {
                signatures?: Uint8Array[];
                message?: {
                    header?: {
                        numRequiredSignatures?: number;
                        numReadonlySignedAccounts?: number;
                        numReadonlyUnsignedAccounts?: number;
                    };
                    accountKeys?: Uint8Array[];
                    recentBlockhash?: Uint8Array;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                    versioned?: boolean;
                    addressTableLookups?: {
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    }[];
                };
            };
            meta?: {
                err?: {
                    err?: Uint8Array;
                };
                fee?: string;
                preBalances?: string[];
                postBalances?: string[];
                innerInstructions?: {
                    index?: number;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[];
                }[];
                innerInstructionsNone?: boolean;
                logMessages?: string[];
                logMessagesNone?: boolean;
                preTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[];
                postTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[];
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[];
                loadedWritableAddresses?: Uint8Array[];
                loadedReadonlyAddresses?: Uint8Array[];
                returnData?: {
                    programId?: Uint8Array;
                    data?: Uint8Array;
                };
                returnDataNone?: boolean;
                computeUnitsConsumed?: string;
            };
            index?: string;
        }[] & ({
            signature?: Uint8Array;
            isVote?: boolean;
            transaction?: {
                signatures?: Uint8Array[];
                message?: {
                    header?: {
                        numRequiredSignatures?: number;
                        numReadonlySignedAccounts?: number;
                        numReadonlyUnsignedAccounts?: number;
                    };
                    accountKeys?: Uint8Array[];
                    recentBlockhash?: Uint8Array;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                    versioned?: boolean;
                    addressTableLookups?: {
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    }[];
                };
            };
            meta?: {
                err?: {
                    err?: Uint8Array;
                };
                fee?: string;
                preBalances?: string[];
                postBalances?: string[];
                innerInstructions?: {
                    index?: number;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[];
                }[];
                innerInstructionsNone?: boolean;
                logMessages?: string[];
                logMessagesNone?: boolean;
                preTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[];
                postTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[];
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[];
                loadedWritableAddresses?: Uint8Array[];
                loadedReadonlyAddresses?: Uint8Array[];
                returnData?: {
                    programId?: Uint8Array;
                    data?: Uint8Array;
                };
                returnDataNone?: boolean;
                computeUnitsConsumed?: string;
            };
            index?: string;
        } & {
            signature?: Uint8Array;
            isVote?: boolean;
            transaction?: {
                signatures?: Uint8Array[];
                message?: {
                    header?: {
                        numRequiredSignatures?: number;
                        numReadonlySignedAccounts?: number;
                        numReadonlyUnsignedAccounts?: number;
                    };
                    accountKeys?: Uint8Array[];
                    recentBlockhash?: Uint8Array;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                    versioned?: boolean;
                    addressTableLookups?: {
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    }[];
                };
            } & {
                signatures?: Uint8Array[] & Uint8Array[] & { [K_46 in Exclude<keyof I_1["transactions"][number]["transaction"]["signatures"], keyof Uint8Array[]>]: never; };
                message?: {
                    header?: {
                        numRequiredSignatures?: number;
                        numReadonlySignedAccounts?: number;
                        numReadonlyUnsignedAccounts?: number;
                    };
                    accountKeys?: Uint8Array[];
                    recentBlockhash?: Uint8Array;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                    versioned?: boolean;
                    addressTableLookups?: {
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    }[];
                } & {
                    header?: {
                        numRequiredSignatures?: number;
                        numReadonlySignedAccounts?: number;
                        numReadonlyUnsignedAccounts?: number;
                    } & {
                        numRequiredSignatures?: number;
                        numReadonlySignedAccounts?: number;
                        numReadonlyUnsignedAccounts?: number;
                    } & { [K_47 in Exclude<keyof I_1["transactions"][number]["transaction"]["message"]["header"], keyof import("./solana-storage").MessageHeader>]: never; };
                    accountKeys?: Uint8Array[] & Uint8Array[] & { [K_48 in Exclude<keyof I_1["transactions"][number]["transaction"]["message"]["accountKeys"], keyof Uint8Array[]>]: never; };
                    recentBlockhash?: Uint8Array;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    }[] & ({
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    } & {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    } & { [K_49 in Exclude<keyof I_1["transactions"][number]["transaction"]["message"]["instructions"][number], keyof import("./solana-storage").CompiledInstruction>]: never; })[] & { [K_50 in Exclude<keyof I_1["transactions"][number]["transaction"]["message"]["instructions"], keyof {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    }[]>]: never; };
                    versioned?: boolean;
                    addressTableLookups?: {
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    }[] & ({
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    } & {
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    } & { [K_51 in Exclude<keyof I_1["transactions"][number]["transaction"]["message"]["addressTableLookups"][number], keyof import("./solana-storage").MessageAddressTableLookup>]: never; })[] & { [K_52 in Exclude<keyof I_1["transactions"][number]["transaction"]["message"]["addressTableLookups"], keyof {
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    }[]>]: never; };
                } & { [K_53 in Exclude<keyof I_1["transactions"][number]["transaction"]["message"], keyof import("./solana-storage").Message>]: never; };
            } & { [K_54 in Exclude<keyof I_1["transactions"][number]["transaction"], keyof Transaction>]: never; };
            meta?: {
                err?: {
                    err?: Uint8Array;
                };
                fee?: string;
                preBalances?: string[];
                postBalances?: string[];
                innerInstructions?: {
                    index?: number;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[];
                }[];
                innerInstructionsNone?: boolean;
                logMessages?: string[];
                logMessagesNone?: boolean;
                preTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[];
                postTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[];
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[];
                loadedWritableAddresses?: Uint8Array[];
                loadedReadonlyAddresses?: Uint8Array[];
                returnData?: {
                    programId?: Uint8Array;
                    data?: Uint8Array;
                };
                returnDataNone?: boolean;
                computeUnitsConsumed?: string;
            } & {
                err?: {
                    err?: Uint8Array;
                } & {
                    err?: Uint8Array;
                } & { [K_55 in Exclude<keyof I_1["transactions"][number]["meta"]["err"], "err">]: never; };
                fee?: string;
                preBalances?: string[] & string[] & { [K_56 in Exclude<keyof I_1["transactions"][number]["meta"]["preBalances"], keyof string[]>]: never; };
                postBalances?: string[] & string[] & { [K_57 in Exclude<keyof I_1["transactions"][number]["meta"]["postBalances"], keyof string[]>]: never; };
                innerInstructions?: {
                    index?: number;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[];
                }[] & ({
                    index?: number;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[];
                } & {
                    index?: number;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[] & ({
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    } & {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    } & { [K_58 in Exclude<keyof I_1["transactions"][number]["meta"]["innerInstructions"][number]["instructions"][number], keyof import("./solana-storage").InnerInstruction>]: never; })[] & { [K_59 in Exclude<keyof I_1["transactions"][number]["meta"]["innerInstructions"][number]["instructions"], keyof {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[]>]: never; };
                } & { [K_60 in Exclude<keyof I_1["transactions"][number]["meta"]["innerInstructions"][number], keyof import("./solana-storage").InnerInstructions>]: never; })[] & { [K_61 in Exclude<keyof I_1["transactions"][number]["meta"]["innerInstructions"], keyof {
                    index?: number;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[];
                }[]>]: never; };
                innerInstructionsNone?: boolean;
                logMessages?: string[] & string[] & { [K_62 in Exclude<keyof I_1["transactions"][number]["meta"]["logMessages"], keyof string[]>]: never; };
                logMessagesNone?: boolean;
                preTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[] & ({
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                } & {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    } & {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    } & { [K_63 in Exclude<keyof I_1["transactions"][number]["meta"]["preTokenBalances"][number]["uiTokenAmount"], keyof import("./solana-storage").UiTokenAmount>]: never; };
                    owner?: string;
                    programId?: string;
                } & { [K_64 in Exclude<keyof I_1["transactions"][number]["meta"]["preTokenBalances"][number], keyof import("./solana-storage").TokenBalance>]: never; })[] & { [K_65 in Exclude<keyof I_1["transactions"][number]["meta"]["preTokenBalances"], keyof {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[]>]: never; };
                postTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[] & ({
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                } & {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    } & {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    } & { [K_66 in Exclude<keyof I_1["transactions"][number]["meta"]["postTokenBalances"][number]["uiTokenAmount"], keyof import("./solana-storage").UiTokenAmount>]: never; };
                    owner?: string;
                    programId?: string;
                } & { [K_67 in Exclude<keyof I_1["transactions"][number]["meta"]["postTokenBalances"][number], keyof import("./solana-storage").TokenBalance>]: never; })[] & { [K_68 in Exclude<keyof I_1["transactions"][number]["meta"]["postTokenBalances"], keyof {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[]>]: never; };
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[] & ({
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                } & {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                } & { [K_69 in Exclude<keyof I_1["transactions"][number]["meta"]["rewards"][number], keyof import("./solana-storage").Reward>]: never; })[] & { [K_70 in Exclude<keyof I_1["transactions"][number]["meta"]["rewards"], keyof {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[]>]: never; };
                loadedWritableAddresses?: Uint8Array[] & Uint8Array[] & { [K_71 in Exclude<keyof I_1["transactions"][number]["meta"]["loadedWritableAddresses"], keyof Uint8Array[]>]: never; };
                loadedReadonlyAddresses?: Uint8Array[] & Uint8Array[] & { [K_72 in Exclude<keyof I_1["transactions"][number]["meta"]["loadedReadonlyAddresses"], keyof Uint8Array[]>]: never; };
                returnData?: {
                    programId?: Uint8Array;
                    data?: Uint8Array;
                } & {
                    programId?: Uint8Array;
                    data?: Uint8Array;
                } & { [K_73 in Exclude<keyof I_1["transactions"][number]["meta"]["returnData"], keyof import("./solana-storage").ReturnData>]: never; };
                returnDataNone?: boolean;
                computeUnitsConsumed?: string;
            } & { [K_74 in Exclude<keyof I_1["transactions"][number]["meta"], keyof TransactionStatusMeta>]: never; };
            index?: string;
        } & { [K_75 in Exclude<keyof I_1["transactions"][number], keyof SubscribeUpdateTransactionInfo>]: never; })[] & { [K_76 in Exclude<keyof I_1["transactions"], keyof {
            signature?: Uint8Array;
            isVote?: boolean;
            transaction?: {
                signatures?: Uint8Array[];
                message?: {
                    header?: {
                        numRequiredSignatures?: number;
                        numReadonlySignedAccounts?: number;
                        numReadonlyUnsignedAccounts?: number;
                    };
                    accountKeys?: Uint8Array[];
                    recentBlockhash?: Uint8Array;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                    versioned?: boolean;
                    addressTableLookups?: {
                        accountKey?: Uint8Array;
                        writableIndexes?: Uint8Array;
                        readonlyIndexes?: Uint8Array;
                    }[];
                };
            };
            meta?: {
                err?: {
                    err?: Uint8Array;
                };
                fee?: string;
                preBalances?: string[];
                postBalances?: string[];
                innerInstructions?: {
                    index?: number;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: Uint8Array;
                        data?: Uint8Array;
                        stackHeight?: number;
                    }[];
                }[];
                innerInstructionsNone?: boolean;
                logMessages?: string[];
                logMessagesNone?: boolean;
                preTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[];
                postTokenBalances?: {
                    accountIndex?: number;
                    mint?: string;
                    uiTokenAmount?: {
                        uiAmount?: number;
                        decimals?: number;
                        amount?: string;
                        uiAmountString?: string;
                    };
                    owner?: string;
                    programId?: string;
                }[];
                rewards?: {
                    pubkey?: string;
                    lamports?: string;
                    postBalance?: string;
                    rewardType?: import("./solana-storage").RewardType;
                    commission?: string;
                }[];
                loadedWritableAddresses?: Uint8Array[];
                loadedReadonlyAddresses?: Uint8Array[];
                returnData?: {
                    programId?: Uint8Array;
                    data?: Uint8Array;
                };
                returnDataNone?: boolean;
                computeUnitsConsumed?: string;
            };
            index?: string;
        }[]>]: never; };
        updatedAccountCount?: string;
        accounts?: {
            pubkey?: Uint8Array;
            lamports?: string;
            owner?: Uint8Array;
            executable?: boolean;
            rentEpoch?: string;
            data?: Uint8Array;
            writeVersion?: string;
            txnSignature?: Uint8Array | undefined;
        }[] & ({
            pubkey?: Uint8Array;
            lamports?: string;
            owner?: Uint8Array;
            executable?: boolean;
            rentEpoch?: string;
            data?: Uint8Array;
            writeVersion?: string;
            txnSignature?: Uint8Array | undefined;
        } & {
            pubkey?: Uint8Array;
            lamports?: string;
            owner?: Uint8Array;
            executable?: boolean;
            rentEpoch?: string;
            data?: Uint8Array;
            writeVersion?: string;
            txnSignature?: Uint8Array | undefined;
        } & { [K_77 in Exclude<keyof I_1["accounts"][number], keyof SubscribeUpdateAccountInfo>]: never; })[] & { [K_78 in Exclude<keyof I_1["accounts"], keyof {
            pubkey?: Uint8Array;
            lamports?: string;
            owner?: Uint8Array;
            executable?: boolean;
            rentEpoch?: string;
            data?: Uint8Array;
            writeVersion?: string;
            txnSignature?: Uint8Array | undefined;
        }[]>]: never; };
        entriesCount?: string;
        entries?: {
            slot?: string;
            index?: string;
            numHashes?: string;
            hash?: Uint8Array;
            executedTransactionCount?: string;
        }[] & ({
            slot?: string;
            index?: string;
            numHashes?: string;
            hash?: Uint8Array;
            executedTransactionCount?: string;
        } & {
            slot?: string;
            index?: string;
            numHashes?: string;
            hash?: Uint8Array;
            executedTransactionCount?: string;
        } & { [K_79 in Exclude<keyof I_1["entries"][number], keyof SubscribeUpdateEntry>]: never; })[] & { [K_80 in Exclude<keyof I_1["entries"], keyof {
            slot?: string;
            index?: string;
            numHashes?: string;
            hash?: Uint8Array;
            executedTransactionCount?: string;
        }[]>]: never; };
    } & { [K_81 in Exclude<keyof I_1, keyof SubscribeUpdateBlock>]: never; }>(object: I_1): SubscribeUpdateBlock;
};
export declare const SubscribeUpdateBlockMeta: {
    encode(message: SubscribeUpdateBlockMeta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeUpdateBlockMeta;
    fromJSON(object: any): SubscribeUpdateBlockMeta;
    toJSON(message: SubscribeUpdateBlockMeta): unknown;
    create<I extends {
        slot?: string;
        blockhash?: string;
        rewards?: {
            rewards?: {
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            }[];
        };
        blockTime?: {
            timestamp?: string;
        };
        blockHeight?: {
            blockHeight?: string;
        };
        parentSlot?: string;
        parentBlockhash?: string;
        executedTransactionCount?: string;
    } & {
        slot?: string;
        blockhash?: string;
        rewards?: {
            rewards?: {
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            }[];
        } & {
            rewards?: {
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            }[] & ({
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            } & {
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            } & { [K in Exclude<keyof I["rewards"]["rewards"][number], keyof import("./solana-storage").Reward>]: never; })[] & { [K_1 in Exclude<keyof I["rewards"]["rewards"], keyof {
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            }[]>]: never; };
        } & { [K_2 in Exclude<keyof I["rewards"], "rewards">]: never; };
        blockTime?: {
            timestamp?: string;
        } & {
            timestamp?: string;
        } & { [K_3 in Exclude<keyof I["blockTime"], "timestamp">]: never; };
        blockHeight?: {
            blockHeight?: string;
        } & {
            blockHeight?: string;
        } & { [K_4 in Exclude<keyof I["blockHeight"], "blockHeight">]: never; };
        parentSlot?: string;
        parentBlockhash?: string;
        executedTransactionCount?: string;
    } & { [K_5 in Exclude<keyof I, keyof SubscribeUpdateBlockMeta>]: never; }>(base?: I): SubscribeUpdateBlockMeta;
    fromPartial<I_1 extends {
        slot?: string;
        blockhash?: string;
        rewards?: {
            rewards?: {
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            }[];
        };
        blockTime?: {
            timestamp?: string;
        };
        blockHeight?: {
            blockHeight?: string;
        };
        parentSlot?: string;
        parentBlockhash?: string;
        executedTransactionCount?: string;
    } & {
        slot?: string;
        blockhash?: string;
        rewards?: {
            rewards?: {
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            }[];
        } & {
            rewards?: {
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            }[] & ({
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            } & {
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            } & { [K_6 in Exclude<keyof I_1["rewards"]["rewards"][number], keyof import("./solana-storage").Reward>]: never; })[] & { [K_7 in Exclude<keyof I_1["rewards"]["rewards"], keyof {
                pubkey?: string;
                lamports?: string;
                postBalance?: string;
                rewardType?: import("./solana-storage").RewardType;
                commission?: string;
            }[]>]: never; };
        } & { [K_8 in Exclude<keyof I_1["rewards"], "rewards">]: never; };
        blockTime?: {
            timestamp?: string;
        } & {
            timestamp?: string;
        } & { [K_9 in Exclude<keyof I_1["blockTime"], "timestamp">]: never; };
        blockHeight?: {
            blockHeight?: string;
        } & {
            blockHeight?: string;
        } & { [K_10 in Exclude<keyof I_1["blockHeight"], "blockHeight">]: never; };
        parentSlot?: string;
        parentBlockhash?: string;
        executedTransactionCount?: string;
    } & { [K_11 in Exclude<keyof I_1, keyof SubscribeUpdateBlockMeta>]: never; }>(object: I_1): SubscribeUpdateBlockMeta;
};
export declare const SubscribeUpdateEntry: {
    encode(message: SubscribeUpdateEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeUpdateEntry;
    fromJSON(object: any): SubscribeUpdateEntry;
    toJSON(message: SubscribeUpdateEntry): unknown;
    create<I extends {
        slot?: string;
        index?: string;
        numHashes?: string;
        hash?: Uint8Array;
        executedTransactionCount?: string;
    } & {
        slot?: string;
        index?: string;
        numHashes?: string;
        hash?: Uint8Array;
        executedTransactionCount?: string;
    } & { [K in Exclude<keyof I, keyof SubscribeUpdateEntry>]: never; }>(base?: I): SubscribeUpdateEntry;
    fromPartial<I_1 extends {
        slot?: string;
        index?: string;
        numHashes?: string;
        hash?: Uint8Array;
        executedTransactionCount?: string;
    } & {
        slot?: string;
        index?: string;
        numHashes?: string;
        hash?: Uint8Array;
        executedTransactionCount?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof SubscribeUpdateEntry>]: never; }>(object: I_1): SubscribeUpdateEntry;
};
export declare const SubscribeUpdatePing: {
    encode(_: SubscribeUpdatePing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeUpdatePing;
    fromJSON(_: any): SubscribeUpdatePing;
    toJSON(_: SubscribeUpdatePing): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): SubscribeUpdatePing;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): SubscribeUpdatePing;
};
export declare const SubscribeUpdatePong: {
    encode(message: SubscribeUpdatePong, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeUpdatePong;
    fromJSON(object: any): SubscribeUpdatePong;
    toJSON(message: SubscribeUpdatePong): unknown;
    create<I extends {
        id?: number;
    } & {
        id?: number;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): SubscribeUpdatePong;
    fromPartial<I_1 extends {
        id?: number;
    } & {
        id?: number;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): SubscribeUpdatePong;
};
export declare const PingRequest: {
    encode(message: PingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PingRequest;
    fromJSON(object: any): PingRequest;
    toJSON(message: PingRequest): unknown;
    create<I extends {
        count?: number;
    } & {
        count?: number;
    } & { [K in Exclude<keyof I, "count">]: never; }>(base?: I): PingRequest;
    fromPartial<I_1 extends {
        count?: number;
    } & {
        count?: number;
    } & { [K_1 in Exclude<keyof I_1, "count">]: never; }>(object: I_1): PingRequest;
};
export declare const PongResponse: {
    encode(message: PongResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PongResponse;
    fromJSON(object: any): PongResponse;
    toJSON(message: PongResponse): unknown;
    create<I extends {
        count?: number;
    } & {
        count?: number;
    } & { [K in Exclude<keyof I, "count">]: never; }>(base?: I): PongResponse;
    fromPartial<I_1 extends {
        count?: number;
    } & {
        count?: number;
    } & { [K_1 in Exclude<keyof I_1, "count">]: never; }>(object: I_1): PongResponse;
};
export declare const GetLatestBlockhashRequest: {
    encode(message: GetLatestBlockhashRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLatestBlockhashRequest;
    fromJSON(object: any): GetLatestBlockhashRequest;
    toJSON(message: GetLatestBlockhashRequest): unknown;
    create<I extends {
        commitment?: CommitmentLevel | undefined;
    } & {
        commitment?: CommitmentLevel | undefined;
    } & { [K in Exclude<keyof I, "commitment">]: never; }>(base?: I): GetLatestBlockhashRequest;
    fromPartial<I_1 extends {
        commitment?: CommitmentLevel | undefined;
    } & {
        commitment?: CommitmentLevel | undefined;
    } & { [K_1 in Exclude<keyof I_1, "commitment">]: never; }>(object: I_1): GetLatestBlockhashRequest;
};
export declare const GetLatestBlockhashResponse: {
    encode(message: GetLatestBlockhashResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLatestBlockhashResponse;
    fromJSON(object: any): GetLatestBlockhashResponse;
    toJSON(message: GetLatestBlockhashResponse): unknown;
    create<I extends {
        slot?: string;
        blockhash?: string;
        lastValidBlockHeight?: string;
    } & {
        slot?: string;
        blockhash?: string;
        lastValidBlockHeight?: string;
    } & { [K in Exclude<keyof I, keyof GetLatestBlockhashResponse>]: never; }>(base?: I): GetLatestBlockhashResponse;
    fromPartial<I_1 extends {
        slot?: string;
        blockhash?: string;
        lastValidBlockHeight?: string;
    } & {
        slot?: string;
        blockhash?: string;
        lastValidBlockHeight?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof GetLatestBlockhashResponse>]: never; }>(object: I_1): GetLatestBlockhashResponse;
};
export declare const GetBlockHeightRequest: {
    encode(message: GetBlockHeightRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockHeightRequest;
    fromJSON(object: any): GetBlockHeightRequest;
    toJSON(message: GetBlockHeightRequest): unknown;
    create<I extends {
        commitment?: CommitmentLevel | undefined;
    } & {
        commitment?: CommitmentLevel | undefined;
    } & { [K in Exclude<keyof I, "commitment">]: never; }>(base?: I): GetBlockHeightRequest;
    fromPartial<I_1 extends {
        commitment?: CommitmentLevel | undefined;
    } & {
        commitment?: CommitmentLevel | undefined;
    } & { [K_1 in Exclude<keyof I_1, "commitment">]: never; }>(object: I_1): GetBlockHeightRequest;
};
export declare const GetBlockHeightResponse: {
    encode(message: GetBlockHeightResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockHeightResponse;
    fromJSON(object: any): GetBlockHeightResponse;
    toJSON(message: GetBlockHeightResponse): unknown;
    create<I extends {
        blockHeight?: string;
    } & {
        blockHeight?: string;
    } & { [K in Exclude<keyof I, "blockHeight">]: never; }>(base?: I): GetBlockHeightResponse;
    fromPartial<I_1 extends {
        blockHeight?: string;
    } & {
        blockHeight?: string;
    } & { [K_1 in Exclude<keyof I_1, "blockHeight">]: never; }>(object: I_1): GetBlockHeightResponse;
};
export declare const GetSlotRequest: {
    encode(message: GetSlotRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSlotRequest;
    fromJSON(object: any): GetSlotRequest;
    toJSON(message: GetSlotRequest): unknown;
    create<I extends {
        commitment?: CommitmentLevel | undefined;
    } & {
        commitment?: CommitmentLevel | undefined;
    } & { [K in Exclude<keyof I, "commitment">]: never; }>(base?: I): GetSlotRequest;
    fromPartial<I_1 extends {
        commitment?: CommitmentLevel | undefined;
    } & {
        commitment?: CommitmentLevel | undefined;
    } & { [K_1 in Exclude<keyof I_1, "commitment">]: never; }>(object: I_1): GetSlotRequest;
};
export declare const GetSlotResponse: {
    encode(message: GetSlotResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSlotResponse;
    fromJSON(object: any): GetSlotResponse;
    toJSON(message: GetSlotResponse): unknown;
    create<I extends {
        slot?: string;
    } & {
        slot?: string;
    } & { [K in Exclude<keyof I, "slot">]: never; }>(base?: I): GetSlotResponse;
    fromPartial<I_1 extends {
        slot?: string;
    } & {
        slot?: string;
    } & { [K_1 in Exclude<keyof I_1, "slot">]: never; }>(object: I_1): GetSlotResponse;
};
export declare const GetVersionRequest: {
    encode(_: GetVersionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetVersionRequest;
    fromJSON(_: any): GetVersionRequest;
    toJSON(_: GetVersionRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): GetVersionRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): GetVersionRequest;
};
export declare const GetVersionResponse: {
    encode(message: GetVersionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetVersionResponse;
    fromJSON(object: any): GetVersionResponse;
    toJSON(message: GetVersionResponse): unknown;
    create<I extends {
        version?: string;
    } & {
        version?: string;
    } & { [K in Exclude<keyof I, "version">]: never; }>(base?: I): GetVersionResponse;
    fromPartial<I_1 extends {
        version?: string;
    } & {
        version?: string;
    } & { [K_1 in Exclude<keyof I_1, "version">]: never; }>(object: I_1): GetVersionResponse;
};
export declare const IsBlockhashValidRequest: {
    encode(message: IsBlockhashValidRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IsBlockhashValidRequest;
    fromJSON(object: any): IsBlockhashValidRequest;
    toJSON(message: IsBlockhashValidRequest): unknown;
    create<I extends {
        blockhash?: string;
        commitment?: CommitmentLevel | undefined;
    } & {
        blockhash?: string;
        commitment?: CommitmentLevel | undefined;
    } & { [K in Exclude<keyof I, keyof IsBlockhashValidRequest>]: never; }>(base?: I): IsBlockhashValidRequest;
    fromPartial<I_1 extends {
        blockhash?: string;
        commitment?: CommitmentLevel | undefined;
    } & {
        blockhash?: string;
        commitment?: CommitmentLevel | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof IsBlockhashValidRequest>]: never; }>(object: I_1): IsBlockhashValidRequest;
};
export declare const IsBlockhashValidResponse: {
    encode(message: IsBlockhashValidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IsBlockhashValidResponse;
    fromJSON(object: any): IsBlockhashValidResponse;
    toJSON(message: IsBlockhashValidResponse): unknown;
    create<I extends {
        slot?: string;
        valid?: boolean;
    } & {
        slot?: string;
        valid?: boolean;
    } & { [K in Exclude<keyof I, keyof IsBlockhashValidResponse>]: never; }>(base?: I): IsBlockhashValidResponse;
    fromPartial<I_1 extends {
        slot?: string;
        valid?: boolean;
    } & {
        slot?: string;
        valid?: boolean;
    } & { [K_1 in Exclude<keyof I_1, keyof IsBlockhashValidResponse>]: never; }>(object: I_1): IsBlockhashValidResponse;
};
export type GeyserService = typeof GeyserService;
export declare const GeyserService: {
    readonly subscribe: {
        readonly path: "/geyser.Geyser/Subscribe";
        readonly requestStream: true;
        readonly responseStream: true;
        readonly requestSerialize: (value: SubscribeRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SubscribeRequest;
        readonly responseSerialize: (value: SubscribeUpdate) => Buffer;
        readonly responseDeserialize: (value: Buffer) => SubscribeUpdate;
    };
    readonly ping: {
        readonly path: "/geyser.Geyser/Ping";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: PingRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => PingRequest;
        readonly responseSerialize: (value: PongResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => PongResponse;
    };
    readonly getLatestBlockhash: {
        readonly path: "/geyser.Geyser/GetLatestBlockhash";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetLatestBlockhashRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetLatestBlockhashRequest;
        readonly responseSerialize: (value: GetLatestBlockhashResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetLatestBlockhashResponse;
    };
    readonly getBlockHeight: {
        readonly path: "/geyser.Geyser/GetBlockHeight";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetBlockHeightRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetBlockHeightRequest;
        readonly responseSerialize: (value: GetBlockHeightResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetBlockHeightResponse;
    };
    readonly getSlot: {
        readonly path: "/geyser.Geyser/GetSlot";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetSlotRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetSlotRequest;
        readonly responseSerialize: (value: GetSlotResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetSlotResponse;
    };
    readonly isBlockhashValid: {
        readonly path: "/geyser.Geyser/IsBlockhashValid";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: IsBlockhashValidRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => IsBlockhashValidRequest;
        readonly responseSerialize: (value: IsBlockhashValidResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => IsBlockhashValidResponse;
    };
    readonly getVersion: {
        readonly path: "/geyser.Geyser/GetVersion";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetVersionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetVersionRequest;
        readonly responseSerialize: (value: GetVersionResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetVersionResponse;
    };
};
export interface GeyserServer extends UntypedServiceImplementation {
    subscribe: handleBidiStreamingCall<SubscribeRequest, SubscribeUpdate>;
    ping: handleUnaryCall<PingRequest, PongResponse>;
    getLatestBlockhash: handleUnaryCall<GetLatestBlockhashRequest, GetLatestBlockhashResponse>;
    getBlockHeight: handleUnaryCall<GetBlockHeightRequest, GetBlockHeightResponse>;
    getSlot: handleUnaryCall<GetSlotRequest, GetSlotResponse>;
    isBlockhashValid: handleUnaryCall<IsBlockhashValidRequest, IsBlockhashValidResponse>;
    getVersion: handleUnaryCall<GetVersionRequest, GetVersionResponse>;
}
export interface GeyserClient extends Client {
    subscribe(): ClientDuplexStream<SubscribeRequest, SubscribeUpdate>;
    subscribe(options: Partial<CallOptions>): ClientDuplexStream<SubscribeRequest, SubscribeUpdate>;
    subscribe(metadata: Metadata, options?: Partial<CallOptions>): ClientDuplexStream<SubscribeRequest, SubscribeUpdate>;
    ping(request: PingRequest, callback: (error: ServiceError | null, response: PongResponse) => void): ClientUnaryCall;
    ping(request: PingRequest, metadata: Metadata, callback: (error: ServiceError | null, response: PongResponse) => void): ClientUnaryCall;
    ping(request: PingRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: PongResponse) => void): ClientUnaryCall;
    getLatestBlockhash(request: GetLatestBlockhashRequest, callback: (error: ServiceError | null, response: GetLatestBlockhashResponse) => void): ClientUnaryCall;
    getLatestBlockhash(request: GetLatestBlockhashRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetLatestBlockhashResponse) => void): ClientUnaryCall;
    getLatestBlockhash(request: GetLatestBlockhashRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetLatestBlockhashResponse) => void): ClientUnaryCall;
    getBlockHeight(request: GetBlockHeightRequest, callback: (error: ServiceError | null, response: GetBlockHeightResponse) => void): ClientUnaryCall;
    getBlockHeight(request: GetBlockHeightRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetBlockHeightResponse) => void): ClientUnaryCall;
    getBlockHeight(request: GetBlockHeightRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetBlockHeightResponse) => void): ClientUnaryCall;
    getSlot(request: GetSlotRequest, callback: (error: ServiceError | null, response: GetSlotResponse) => void): ClientUnaryCall;
    getSlot(request: GetSlotRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetSlotResponse) => void): ClientUnaryCall;
    getSlot(request: GetSlotRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetSlotResponse) => void): ClientUnaryCall;
    isBlockhashValid(request: IsBlockhashValidRequest, callback: (error: ServiceError | null, response: IsBlockhashValidResponse) => void): ClientUnaryCall;
    isBlockhashValid(request: IsBlockhashValidRequest, metadata: Metadata, callback: (error: ServiceError | null, response: IsBlockhashValidResponse) => void): ClientUnaryCall;
    isBlockhashValid(request: IsBlockhashValidRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: IsBlockhashValidResponse) => void): ClientUnaryCall;
    getVersion(request: GetVersionRequest, callback: (error: ServiceError | null, response: GetVersionResponse) => void): ClientUnaryCall;
    getVersion(request: GetVersionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetVersionResponse) => void): ClientUnaryCall;
    getVersion(request: GetVersionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetVersionResponse) => void): ClientUnaryCall;
}
export declare const GeyserClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): GeyserClient;
    service: typeof GeyserService;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
