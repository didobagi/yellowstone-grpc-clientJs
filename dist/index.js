"use strict";
/**
 * TypeScript/JavaScript client for gRPC Geyser.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.SubscribeUpdateTransactionInfo = exports.SubscribeUpdateTransaction = exports.SubscribeUpdateSlot = exports.SubscribeUpdatePing = exports.SubscribeUpdateBlockMeta = exports.SubscribeUpdateBlock = exports.SubscribeUpdateAccountInfo = exports.SubscribeUpdateAccount = exports.SubscribeUpdate = exports.SubscribeRequest_TransactionsEntry = exports.SubscribeRequest_SlotsEntry = exports.SubscribeRequest_BlocksMetaEntry = exports.SubscribeRequest_BlocksEntry = exports.SubscribeRequest_AccountsEntry = exports.SubscribeRequestFilterTransactions = exports.SubscribeRequestFilterSlots = exports.SubscribeRequestFilterEntry = exports.SubscribeRequestFilterBlocksMeta = exports.SubscribeRequestFilterBlocks = exports.SubscribeRequestFilterAccountsFilterMemcmp = exports.SubscribeRequestFilterAccountsFilter = exports.SubscribeRequestFilterAccounts = exports.SubscribeRequestAccountsDataSlice = exports.SubscribeRequest = exports.CommitmentLevel = void 0;
// Import generated gRPC client and types.
var geyser_1 = require("./grpc/geyser");
var grpc_js_1 = require("@grpc/grpc-js");
// Reexport automatically generated types
var geyser_2 = require("./grpc/geyser");
__createBinding(exports, geyser_2, "CommitmentLevel");
__createBinding(exports, geyser_2, "SubscribeRequest");
__createBinding(exports, geyser_2, "SubscribeRequestAccountsDataSlice");
__createBinding(exports, geyser_2, "SubscribeRequestFilterAccounts");
__createBinding(exports, geyser_2, "SubscribeRequestFilterAccountsFilter");
__createBinding(exports, geyser_2, "SubscribeRequestFilterAccountsFilterMemcmp");
__createBinding(exports, geyser_2, "SubscribeRequestFilterBlocks");
__createBinding(exports, geyser_2, "SubscribeRequestFilterBlocksMeta");
__createBinding(exports, geyser_2, "SubscribeRequestFilterEntry");
__createBinding(exports, geyser_2, "SubscribeRequestFilterSlots");
__createBinding(exports, geyser_2, "SubscribeRequestFilterTransactions");
__createBinding(exports, geyser_2, "SubscribeRequest_AccountsEntry");
__createBinding(exports, geyser_2, "SubscribeRequest_BlocksEntry");
__createBinding(exports, geyser_2, "SubscribeRequest_BlocksMetaEntry");
__createBinding(exports, geyser_2, "SubscribeRequest_SlotsEntry");
__createBinding(exports, geyser_2, "SubscribeRequest_TransactionsEntry");
__createBinding(exports, geyser_2, "SubscribeUpdate");
__createBinding(exports, geyser_2, "SubscribeUpdateAccount");
__createBinding(exports, geyser_2, "SubscribeUpdateAccountInfo");
__createBinding(exports, geyser_2, "SubscribeUpdateBlock");
__createBinding(exports, geyser_2, "SubscribeUpdateBlockMeta");
__createBinding(exports, geyser_2, "SubscribeUpdatePing");
__createBinding(exports, geyser_2, "SubscribeUpdateSlot");
__createBinding(exports, geyser_2, "SubscribeUpdateTransaction");
__createBinding(exports, geyser_2, "SubscribeUpdateTransactionInfo");
var Client = /** @class */ (function () {
    function Client(endpoint, xToken) {
        var creds;
        var endpointURL = new URL(endpoint);
        // Check if we need to use TLS.
        if (endpointURL.protocol === "https:") {
            creds = grpc_js_1.credentials.combineChannelCredentials(grpc_js_1.credentials.createSsl(), grpc_js_1.credentials.createFromMetadataGenerator(function (_params, callback) {
                var metadata = new grpc_js_1.Metadata();
                if (xToken !== undefined) {
                    metadata.add("x-token", xToken);
                }
                return callback(null, metadata);
            }));
        }
        else {
            creds = grpc_js_1.ChannelCredentials.createInsecure();
        }
        this._client = new geyser_1.GeyserClient(endpointURL.host, creds);
    }
    Client.prototype.subscribe = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.subscribe()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.subscribeOnce = function (accounts, slots, transactions, entry, blocks, blocksMeta, commitment, accountsDataSlice) {
        return __awaiter(this, void 0, void 0, function () {
            var stream;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._client.subscribe()];
                    case 1:
                        stream = _a.sent();
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                stream.write({
                                    accounts: accounts,
                                    slots: slots,
                                    transactions: transactions,
                                    entry: entry,
                                    blocks: blocks,
                                    blocksMeta: blocksMeta,
                                    commitment: commitment,
                                    accountsDataSlice: accountsDataSlice
                                }, function (err) {
                                    if (err === null || err === undefined) {
                                        resolve();
                                    }
                                    else {
                                        reject(err);
                                    }
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, stream];
                }
            });
        });
    };
    Client.prototype.ping = function (count) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            _this._client.ping({ count: count }, function (err, response) {
                                if (err === null || err === undefined) {
                                    resolve(response.count);
                                }
                                else {
                                    reject(err);
                                }
                            });
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.getLatestBlockhash = function (commitment) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            _this._client.getLatestBlockhash({ commitment: commitment }, function (err, response) {
                                if (err === null || err === undefined) {
                                    resolve(response);
                                }
                                else {
                                    reject(err);
                                }
                            });
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.getBlockHeight = function (commitment) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            _this._client.getBlockHeight({ commitment: commitment }, function (err, response) {
                                if (err === null || err === undefined) {
                                    resolve(response.blockHeight);
                                }
                                else {
                                    reject(err);
                                }
                            });
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.getSlot = function (commitment) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            _this._client.getSlot({ commitment: commitment }, function (err, response) {
                                if (err === null || err === undefined) {
                                    resolve(response.slot);
                                }
                                else {
                                    reject(err);
                                }
                            });
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.isBlockhashValid = function (blockhash, commitment) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            _this._client.isBlockhashValid({ blockhash: blockhash, commitment: commitment }, function (err, response) {
                                if (err === null || err === undefined) {
                                    resolve(response);
                                }
                                else {
                                    reject(err);
                                }
                            });
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.getVersion = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            _this._client.getVersion({}, function (err, response) {
                                if (err === null || err === undefined) {
                                    resolve(response.version);
                                }
                                else {
                                    reject(err);
                                }
                            });
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Client;
}());
exports["default"] = Client;
