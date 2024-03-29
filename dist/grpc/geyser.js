"use strict";
exports.__esModule = true;
exports.GeyserClient = exports.GeyserService = exports.IsBlockhashValidResponse = exports.IsBlockhashValidRequest = exports.GetVersionResponse = exports.GetVersionRequest = exports.GetSlotResponse = exports.GetSlotRequest = exports.GetBlockHeightResponse = exports.GetBlockHeightRequest = exports.GetLatestBlockhashResponse = exports.GetLatestBlockhashRequest = exports.PongResponse = exports.PingRequest = exports.SubscribeUpdatePong = exports.SubscribeUpdatePing = exports.SubscribeUpdateEntry = exports.SubscribeUpdateBlockMeta = exports.SubscribeUpdateBlock = exports.SubscribeUpdateTransactionInfo = exports.SubscribeUpdateTransaction = exports.SubscribeUpdateSlot = exports.SubscribeUpdateAccountInfo = exports.SubscribeUpdateAccount = exports.SubscribeUpdate = exports.SubscribeRequestPing = exports.SubscribeRequestAccountsDataSlice = exports.SubscribeRequestFilterEntry = exports.SubscribeRequestFilterBlocksMeta = exports.SubscribeRequestFilterBlocks = exports.SubscribeRequestFilterTransactions = exports.SubscribeRequestFilterSlots = exports.SubscribeRequestFilterAccountsFilterMemcmp = exports.SubscribeRequestFilterAccountsFilter = exports.SubscribeRequestFilterAccounts = exports.SubscribeRequest_EntryEntry = exports.SubscribeRequest_BlocksMetaEntry = exports.SubscribeRequest_BlocksEntry = exports.SubscribeRequest_TransactionsEntry = exports.SubscribeRequest_SlotsEntry = exports.SubscribeRequest_AccountsEntry = exports.SubscribeRequest = exports.commitmentLevelToJSON = exports.commitmentLevelFromJSON = exports.CommitmentLevel = exports.protobufPackage = void 0;
/* eslint-disable */
var grpc_js_1 = require("@grpc/grpc-js");
var Long = require("long");
var _m0 = require("protobufjs/minimal");
var solana_storage_1 = require("./solana-storage");
exports.protobufPackage = "geyser";
var CommitmentLevel;
(function (CommitmentLevel) {
    CommitmentLevel[CommitmentLevel["PROCESSED"] = 0] = "PROCESSED";
    CommitmentLevel[CommitmentLevel["CONFIRMED"] = 1] = "CONFIRMED";
    CommitmentLevel[CommitmentLevel["FINALIZED"] = 2] = "FINALIZED";
    CommitmentLevel[CommitmentLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CommitmentLevel = exports.CommitmentLevel || (exports.CommitmentLevel = {}));
function commitmentLevelFromJSON(object) {
    switch (object) {
        case 0:
        case "PROCESSED":
            return CommitmentLevel.PROCESSED;
        case 1:
        case "CONFIRMED":
            return CommitmentLevel.CONFIRMED;
        case 2:
        case "FINALIZED":
            return CommitmentLevel.FINALIZED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return CommitmentLevel.UNRECOGNIZED;
    }
}
exports.commitmentLevelFromJSON = commitmentLevelFromJSON;
function commitmentLevelToJSON(object) {
    switch (object) {
        case CommitmentLevel.PROCESSED:
            return "PROCESSED";
        case CommitmentLevel.CONFIRMED:
            return "CONFIRMED";
        case CommitmentLevel.FINALIZED:
            return "FINALIZED";
        case CommitmentLevel.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.commitmentLevelToJSON = commitmentLevelToJSON;
function createBaseSubscribeRequest() {
    return {
        accounts: {},
        slots: {},
        transactions: {},
        blocks: {},
        blocksMeta: {},
        entry: {},
        commitment: undefined,
        accountsDataSlice: [],
        ping: undefined
    };
}
exports.SubscribeRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        Object.entries(message.accounts).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.SubscribeRequest_AccountsEntry.encode({ key: key, value: value }, writer.uint32(10).fork()).ldelim();
        });
        Object.entries(message.slots).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.SubscribeRequest_SlotsEntry.encode({ key: key, value: value }, writer.uint32(18).fork()).ldelim();
        });
        Object.entries(message.transactions).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.SubscribeRequest_TransactionsEntry.encode({ key: key, value: value }, writer.uint32(26).fork()).ldelim();
        });
        Object.entries(message.blocks).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.SubscribeRequest_BlocksEntry.encode({ key: key, value: value }, writer.uint32(34).fork()).ldelim();
        });
        Object.entries(message.blocksMeta).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.SubscribeRequest_BlocksMetaEntry.encode({ key: key, value: value }, writer.uint32(42).fork()).ldelim();
        });
        Object.entries(message.entry).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.SubscribeRequest_EntryEntry.encode({ key: key, value: value }, writer.uint32(66).fork()).ldelim();
        });
        if (message.commitment !== undefined) {
            writer.uint32(48).int32(message.commitment);
        }
        for (var _i = 0, _a = message.accountsDataSlice; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.SubscribeRequestAccountsDataSlice.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.ping !== undefined) {
            exports.SubscribeRequestPing.encode(message.ping, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubscribeRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    var entry1 = exports.SubscribeRequest_AccountsEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.accounts[entry1.key] = entry1.value;
                    }
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    var entry2 = exports.SubscribeRequest_SlotsEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.slots[entry2.key] = entry2.value;
                    }
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    var entry3 = exports.SubscribeRequest_TransactionsEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.transactions[entry3.key] = entry3.value;
                    }
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    var entry4 = exports.SubscribeRequest_BlocksEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.blocks[entry4.key] = entry4.value;
                    }
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    var entry5 = exports.SubscribeRequest_BlocksMetaEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.blocksMeta[entry5.key] = entry5.value;
                    }
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    var entry8 = exports.SubscribeRequest_EntryEntry.decode(reader, reader.uint32());
                    if (entry8.value !== undefined) {
                        message.entry[entry8.key] = entry8.value;
                    }
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.commitment = reader.int32();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.accountsDataSlice.push(exports.SubscribeRequestAccountsDataSlice.decode(reader, reader.uint32()));
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.ping = exports.SubscribeRequestPing.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            accounts: isObject(object.accounts)
                ? Object.entries(object.accounts).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = exports.SubscribeRequestFilterAccounts.fromJSON(value);
                    return acc;
                }, {})
                : {},
            slots: isObject(object.slots)
                ? Object.entries(object.slots).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = exports.SubscribeRequestFilterSlots.fromJSON(value);
                    return acc;
                }, {})
                : {},
            transactions: isObject(object.transactions)
                ? Object.entries(object.transactions).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = exports.SubscribeRequestFilterTransactions.fromJSON(value);
                    return acc;
                }, {})
                : {},
            blocks: isObject(object.blocks)
                ? Object.entries(object.blocks).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = exports.SubscribeRequestFilterBlocks.fromJSON(value);
                    return acc;
                }, {})
                : {},
            blocksMeta: isObject(object.blocksMeta)
                ? Object.entries(object.blocksMeta).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = exports.SubscribeRequestFilterBlocksMeta.fromJSON(value);
                    return acc;
                }, {})
                : {},
            entry: isObject(object.entry)
                ? Object.entries(object.entry).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = exports.SubscribeRequestFilterEntry.fromJSON(value);
                    return acc;
                }, {})
                : {},
            commitment: isSet(object.commitment) ? commitmentLevelFromJSON(object.commitment) : undefined,
            accountsDataSlice: Array.isArray(object === null || object === void 0 ? void 0 : object.accountsDataSlice)
                ? object.accountsDataSlice.map(function (e) { return exports.SubscribeRequestAccountsDataSlice.fromJSON(e); })
                : [],
            ping: isSet(object.ping) ? exports.SubscribeRequestPing.fromJSON(object.ping) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        obj.accounts = {};
        if (message.accounts) {
            Object.entries(message.accounts).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.accounts[k] = exports.SubscribeRequestFilterAccounts.toJSON(v);
            });
        }
        obj.slots = {};
        if (message.slots) {
            Object.entries(message.slots).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.slots[k] = exports.SubscribeRequestFilterSlots.toJSON(v);
            });
        }
        obj.transactions = {};
        if (message.transactions) {
            Object.entries(message.transactions).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.transactions[k] = exports.SubscribeRequestFilterTransactions.toJSON(v);
            });
        }
        obj.blocks = {};
        if (message.blocks) {
            Object.entries(message.blocks).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.blocks[k] = exports.SubscribeRequestFilterBlocks.toJSON(v);
            });
        }
        obj.blocksMeta = {};
        if (message.blocksMeta) {
            Object.entries(message.blocksMeta).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.blocksMeta[k] = exports.SubscribeRequestFilterBlocksMeta.toJSON(v);
            });
        }
        obj.entry = {};
        if (message.entry) {
            Object.entries(message.entry).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.entry[k] = exports.SubscribeRequestFilterEntry.toJSON(v);
            });
        }
        message.commitment !== undefined &&
            (obj.commitment = message.commitment !== undefined ? commitmentLevelToJSON(message.commitment) : undefined);
        if (message.accountsDataSlice) {
            obj.accountsDataSlice = message.accountsDataSlice.map(function (e) {
                return e ? exports.SubscribeRequestAccountsDataSlice.toJSON(e) : undefined;
            });
        }
        else {
            obj.accountsDataSlice = [];
        }
        message.ping !== undefined && (obj.ping = message.ping ? exports.SubscribeRequestPing.toJSON(message.ping) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.SubscribeRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseSubscribeRequest();
        message.accounts = Object.entries((_a = object.accounts) !== null && _a !== void 0 ? _a : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = exports.SubscribeRequestFilterAccounts.fromPartial(value);
            }
            return acc;
        }, {});
        message.slots = Object.entries((_b = object.slots) !== null && _b !== void 0 ? _b : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = exports.SubscribeRequestFilterSlots.fromPartial(value);
            }
            return acc;
        }, {});
        message.transactions = Object.entries((_c = object.transactions) !== null && _c !== void 0 ? _c : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = exports.SubscribeRequestFilterTransactions.fromPartial(value);
            }
            return acc;
        }, {});
        message.blocks = Object.entries((_d = object.blocks) !== null && _d !== void 0 ? _d : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = exports.SubscribeRequestFilterBlocks.fromPartial(value);
            }
            return acc;
        }, {});
        message.blocksMeta = Object.entries((_e = object.blocksMeta) !== null && _e !== void 0 ? _e : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = exports.SubscribeRequestFilterBlocksMeta.fromPartial(value);
            }
            return acc;
        }, {});
        message.entry = Object.entries((_f = object.entry) !== null && _f !== void 0 ? _f : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = exports.SubscribeRequestFilterEntry.fromPartial(value);
            }
            return acc;
        }, {});
        message.commitment = (_g = object.commitment) !== null && _g !== void 0 ? _g : undefined;
        message.accountsDataSlice =
            ((_h = object.accountsDataSlice) === null || _h === void 0 ? void 0 : _h.map(function (e) { return exports.SubscribeRequestAccountsDataSlice.fromPartial(e); })) || [];
        message.ping = (object.ping !== undefined && object.ping !== null)
            ? exports.SubscribeRequestPing.fromPartial(object.ping)
            : undefined;
        return message;
    }
};
function createBaseSubscribeRequest_AccountsEntry() {
    return { key: "", value: undefined };
}
exports.SubscribeRequest_AccountsEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.SubscribeRequestFilterAccounts.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubscribeRequest_AccountsEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = exports.SubscribeRequestFilterAccounts.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? exports.SubscribeRequestFilterAccounts.fromJSON(object.value) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? exports.SubscribeRequestFilterAccounts.toJSON(message.value) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.SubscribeRequest_AccountsEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSubscribeRequest_AccountsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (object.value !== undefined && object.value !== null)
            ? exports.SubscribeRequestFilterAccounts.fromPartial(object.value)
            : undefined;
        return message;
    }
};
function createBaseSubscribeRequest_SlotsEntry() {
    return { key: "", value: undefined };
}
exports.SubscribeRequest_SlotsEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.SubscribeRequestFilterSlots.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubscribeRequest_SlotsEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = exports.SubscribeRequestFilterSlots.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? exports.SubscribeRequestFilterSlots.fromJSON(object.value) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? exports.SubscribeRequestFilterSlots.toJSON(message.value) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.SubscribeRequest_SlotsEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSubscribeRequest_SlotsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (object.value !== undefined && object.value !== null)
            ? exports.SubscribeRequestFilterSlots.fromPartial(object.value)
            : undefined;
        return message;
    }
};
function createBaseSubscribeRequest_TransactionsEntry() {
    return { key: "", value: undefined };
}
exports.SubscribeRequest_TransactionsEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.SubscribeRequestFilterTransactions.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubscribeRequest_TransactionsEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = exports.SubscribeRequestFilterTransactions.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? exports.SubscribeRequestFilterTransactions.fromJSON(object.value) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? exports.SubscribeRequestFilterTransactions.toJSON(message.value) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.SubscribeRequest_TransactionsEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSubscribeRequest_TransactionsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (object.value !== undefined && object.value !== null)
            ? exports.SubscribeRequestFilterTransactions.fromPartial(object.value)
            : undefined;
        return message;
    }
};
function createBaseSubscribeRequest_BlocksEntry() {
    return { key: "", value: undefined };
}
exports.SubscribeRequest_BlocksEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.SubscribeRequestFilterBlocks.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubscribeRequest_BlocksEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = exports.SubscribeRequestFilterBlocks.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? exports.SubscribeRequestFilterBlocks.fromJSON(object.value) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? exports.SubscribeRequestFilterBlocks.toJSON(message.value) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.SubscribeRequest_BlocksEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSubscribeRequest_BlocksEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (object.value !== undefined && object.value !== null)
            ? exports.SubscribeRequestFilterBlocks.fromPartial(object.value)
            : undefined;
        return message;
    }
};
function createBaseSubscribeRequest_BlocksMetaEntry() {
    return { key: "", value: undefined };
}
exports.SubscribeRequest_BlocksMetaEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.SubscribeRequestFilterBlocksMeta.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubscribeRequest_BlocksMetaEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = exports.SubscribeRequestFilterBlocksMeta.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? exports.SubscribeRequestFilterBlocksMeta.fromJSON(object.value) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? exports.SubscribeRequestFilterBlocksMeta.toJSON(message.value) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.SubscribeRequest_BlocksMetaEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSubscribeRequest_BlocksMetaEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (object.value !== undefined && object.value !== null)
            ? exports.SubscribeRequestFilterBlocksMeta.fromPartial(object.value)
            : undefined;
        return message;
    }
};
function createBaseSubscribeRequest_EntryEntry() {
    return { key: "", value: undefined };
}
exports.SubscribeRequest_EntryEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.SubscribeRequestFilterEntry.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubscribeRequest_EntryEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = exports.SubscribeRequestFilterEntry.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? exports.SubscribeRequestFilterEntry.fromJSON(object.value) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? exports.SubscribeRequestFilterEntry.toJSON(message.value) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.SubscribeRequest_EntryEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSubscribeRequest_EntryEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (object.value !== undefined && object.value !== null)
            ? exports.SubscribeRequestFilterEntry.fromPartial(object.value)
            : undefined;
        return message;
    }
};
function createBaseSubscribeRequestFilterAccounts() {
    return { account: [], owner: [], filters: [] };
}
exports.SubscribeRequestFilterAccounts = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.account; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        for (var _b = 0, _c = message.owner; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.uint32(26).string(v);
        }
        for (var _d = 0, _e = message.filters; _d < _e.length; _d++) {
            var v = _e[_d];
            exports.SubscribeRequestFilterAccountsFilter.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubscribeRequestFilterAccounts();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.account.push(reader.string());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.owner.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.filters.push(exports.SubscribeRequestFilterAccountsFilter.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            account: Array.isArray(object === null || object === void 0 ? void 0 : object.account) ? object.account.map(function (e) { return String(e); }) : [],
            owner: Array.isArray(object === null || object === void 0 ? void 0 : object.owner) ? object.owner.map(function (e) { return String(e); }) : [],
            filters: Array.isArray(object === null || object === void 0 ? void 0 : object.filters)
                ? object.filters.map(function (e) { return exports.SubscribeRequestFilterAccountsFilter.fromJSON(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.account) {
            obj.account = message.account.map(function (e) { return e; });
        }
        else {
            obj.account = [];
        }
        if (message.owner) {
            obj.owner = message.owner.map(function (e) { return e; });
        }
        else {
            obj.owner = [];
        }
        if (message.filters) {
            obj.filters = message.filters.map(function (e) { return e ? exports.SubscribeRequestFilterAccountsFilter.toJSON(e) : undefined; });
        }
        else {
            obj.filters = [];
        }
        return obj;
    },
    create: function (base) {
        return exports.SubscribeRequestFilterAccounts.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseSubscribeRequestFilterAccounts();
        message.account = ((_a = object.account) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.owner = ((_b = object.owner) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        message.filters = ((_c = object.filters) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.SubscribeRequestFilterAccountsFilter.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseSubscribeRequestFilterAccountsFilter() {
    return { memcmp: undefined, datasize: undefined, tokenAccountState: undefined };
}
exports.SubscribeRequestFilterAccountsFilter = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.memcmp !== undefined) {
            exports.SubscribeRequestFilterAccountsFilterMemcmp.encode(message.memcmp, writer.uint32(10).fork()).ldelim();
        }
        if (message.datasize !== undefined) {
            writer.uint32(16).uint64(message.datasize);
        }
        if (message.tokenAccountState !== undefined) {
            writer.uint32(24).bool(message.tokenAccountState);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubscribeRequestFilterAccountsFilter();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.memcmp = exports.SubscribeRequestFilterAccountsFilterMemcmp.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.datasize = longToString(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.tokenAccountState = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            memcmp: isSet(object.memcmp) ? exports.SubscribeRequestFilterAccountsFilterMemcmp.fromJSON(object.memcmp) : undefined,
            datasize: isSet(object.datasize) ? String(object.datasize) : undefined,
            tokenAccountState: isSet(object.tokenAccountState) ? Boolean(object.tokenAccountState) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.memcmp !== undefined &&
            (obj.memcmp = message.memcmp ? exports.SubscribeRequestFilterAccountsFilterMemcmp.toJSON(message.memcmp) : undefined);
        message.datasize !== undefined && (obj.datasize = message.datasize);
        message.tokenAccountState !== undefined && (obj.tokenAccountState = message.tokenAccountState);
        return obj;
    },
    create: function (base) {
        return exports.SubscribeRequestFilterAccountsFilter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseSubscribeRequestFilterAccountsFilter();
        message.memcmp = (object.memcmp !== undefined && object.memcmp !== null)
            ? exports.SubscribeRequestFilterAccountsFilterMemcmp.fromPartial(object.memcmp)
            : undefined;
        message.datasize = (_a = object.datasize) !== null && _a !== void 0 ? _a : undefined;
        message.tokenAccountState = (_b = object.tokenAccountState) !== null && _b !== void 0 ? _b : undefined;
        return message;
    }
};
function createBaseSubscribeRequestFilterAccountsFilterMemcmp() {
    return { offset: "0", bytes: undefined, base58: undefined, base64: undefined };
}
exports.SubscribeRequestFilterAccountsFilterMemcmp = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.offset !== "0") {
            writer.uint32(8).uint64(message.offset);
        }
        if (message.bytes !== undefined) {
            writer.uint32(18).bytes(message.bytes);
        }
        if (message.base58 !== undefined) {
            writer.uint32(26).string(message.base58);
        }
        if (message.base64 !== undefined) {
            writer.uint32(34).string(message.base64);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubscribeRequestFilterAccountsFilterMemcmp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.offset = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.bytes = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.base58 = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.base64 = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            offset: isSet(object.offset) ? String(object.offset) : "0",
            bytes: isSet(object.bytes) ? bytesFromBase64(object.bytes) : undefined,
            base58: isSet(object.base58) ? String(object.base58) : undefined,
            base64: isSet(object.base64) ? String(object.base64) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.offset !== undefined && (obj.offset = message.offset);
        message.bytes !== undefined &&
            (obj.bytes = message.bytes !== undefined ? base64FromBytes(message.bytes) : undefined);
        message.base58 !== undefined && (obj.base58 = message.base58);
        message.base64 !== undefined && (obj.base64 = message.base64);
        return obj;
    },
    create: function (base) {
        return exports.SubscribeRequestFilterAccountsFilterMemcmp.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseSubscribeRequestFilterAccountsFilterMemcmp();
        message.offset = (_a = object.offset) !== null && _a !== void 0 ? _a : "0";
        message.bytes = (_b = object.bytes) !== null && _b !== void 0 ? _b : undefined;
        message.base58 = (_c = object.base58) !== null && _c !== void 0 ? _c : undefined;
        message.base64 = (_d = object.base64) !== null && _d !== void 0 ? _d : undefined;
        return message;
    }
};
function createBaseSubscribeRequestFilterSlots() {
    return { filterByCommitment: undefined };
}
exports.SubscribeRequestFilterSlots = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.filterByCommitment !== undefined) {
            writer.uint32(8).bool(message.filterByCommitment);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubscribeRequestFilterSlots();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.filterByCommitment = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { filterByCommitment: isSet(object.filterByCommitment) ? Boolean(object.filterByCommitment) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.filterByCommitment !== undefined && (obj.filterByCommitment = message.filterByCommitment);
        return obj;
    },
    create: function (base) {
        return exports.SubscribeRequestFilterSlots.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSubscribeRequestFilterSlots();
        message.filterByCommitment = (_a = object.filterByCommitment) !== null && _a !== void 0 ? _a : undefined;
        return message;
    }
};
function createBaseSubscribeRequestFilterTransactions() {
    return {
        vote: undefined,
        failed: undefined,
        signature: undefined,
        accountInclude: [],
        accountExclude: [],
        accountRequired: []
    };
}
exports.SubscribeRequestFilterTransactions = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.vote !== undefined) {
            writer.uint32(8).bool(message.vote);
        }
        if (message.failed !== undefined) {
            writer.uint32(16).bool(message.failed);
        }
        if (message.signature !== undefined) {
            writer.uint32(42).string(message.signature);
        }
        for (var _i = 0, _a = message.accountInclude; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(26).string(v);
        }
        for (var _b = 0, _c = message.accountExclude; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.uint32(34).string(v);
        }
        for (var _d = 0, _e = message.accountRequired; _d < _e.length; _d++) {
            var v = _e[_d];
            writer.uint32(50).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubscribeRequestFilterTransactions();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.vote = reader.bool();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.failed = reader.bool();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.signature = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.accountInclude.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.accountExclude.push(reader.string());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.accountRequired.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            vote: isSet(object.vote) ? Boolean(object.vote) : undefined,
            failed: isSet(object.failed) ? Boolean(object.failed) : undefined,
            signature: isSet(object.signature) ? String(object.signature) : undefined,
            accountInclude: Array.isArray(object === null || object === void 0 ? void 0 : object.accountInclude) ? object.accountInclude.map(function (e) { return String(e); }) : [],
            accountExclude: Array.isArray(object === null || object === void 0 ? void 0 : object.accountExclude) ? object.accountExclude.map(function (e) { return String(e); }) : [],
            accountRequired: Array.isArray(object === null || object === void 0 ? void 0 : object.accountRequired) ? object.accountRequired.map(function (e) { return String(e); }) : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.vote !== undefined && (obj.vote = message.vote);
        message.failed !== undefined && (obj.failed = message.failed);
        message.signature !== undefined && (obj.signature = message.signature);
        if (message.accountInclude) {
            obj.accountInclude = message.accountInclude.map(function (e) { return e; });
        }
        else {
            obj.accountInclude = [];
        }
        if (message.accountExclude) {
            obj.accountExclude = message.accountExclude.map(function (e) { return e; });
        }
        else {
            obj.accountExclude = [];
        }
        if (message.accountRequired) {
            obj.accountRequired = message.accountRequired.map(function (e) { return e; });
        }
        else {
            obj.accountRequired = [];
        }
        return obj;
    },
    create: function (base) {
        return exports.SubscribeRequestFilterTransactions.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseSubscribeRequestFilterTransactions();
        message.vote = (_a = object.vote) !== null && _a !== void 0 ? _a : undefined;
        message.failed = (_b = object.failed) !== null && _b !== void 0 ? _b : undefined;
        message.signature = (_c = object.signature) !== null && _c !== void 0 ? _c : undefined;
        message.accountInclude = ((_d = object.accountInclude) === null || _d === void 0 ? void 0 : _d.map(function (e) { return e; })) || [];
        message.accountExclude = ((_e = object.accountExclude) === null || _e === void 0 ? void 0 : _e.map(function (e) { return e; })) || [];
        message.accountRequired = ((_f = object.accountRequired) === null || _f === void 0 ? void 0 : _f.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseSubscribeRequestFilterBlocks() {
    return { accountInclude: [], includeTransactions: undefined, includeAccounts: undefined, includeEntries: undefined };
}
exports.SubscribeRequestFilterBlocks = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.accountInclude; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        if (message.includeTransactions !== undefined) {
            writer.uint32(16).bool(message.includeTransactions);
        }
        if (message.includeAccounts !== undefined) {
            writer.uint32(24).bool(message.includeAccounts);
        }
        if (message.includeEntries !== undefined) {
            writer.uint32(32).bool(message.includeEntries);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubscribeRequestFilterBlocks();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.accountInclude.push(reader.string());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.includeTransactions = reader.bool();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.includeAccounts = reader.bool();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.includeEntries = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            accountInclude: Array.isArray(object === null || object === void 0 ? void 0 : object.accountInclude) ? object.accountInclude.map(function (e) { return String(e); }) : [],
            includeTransactions: isSet(object.includeTransactions) ? Boolean(object.includeTransactions) : undefined,
            includeAccounts: isSet(object.includeAccounts) ? Boolean(object.includeAccounts) : undefined,
            includeEntries: isSet(object.includeEntries) ? Boolean(object.includeEntries) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.accountInclude) {
            obj.accountInclude = message.accountInclude.map(function (e) { return e; });
        }
        else {
            obj.accountInclude = [];
        }
        message.includeTransactions !== undefined && (obj.includeTransactions = message.includeTransactions);
        message.includeAccounts !== undefined && (obj.includeAccounts = message.includeAccounts);
        message.includeEntries !== undefined && (obj.includeEntries = message.includeEntries);
        return obj;
    },
    create: function (base) {
        return exports.SubscribeRequestFilterBlocks.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseSubscribeRequestFilterBlocks();
        message.accountInclude = ((_a = object.accountInclude) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.includeTransactions = (_b = object.includeTransactions) !== null && _b !== void 0 ? _b : undefined;
        message.includeAccounts = (_c = object.includeAccounts) !== null && _c !== void 0 ? _c : undefined;
        message.includeEntries = (_d = object.includeEntries) !== null && _d !== void 0 ? _d : undefined;
        return message;
    }
};
function createBaseSubscribeRequestFilterBlocksMeta() {
    return {};
}
exports.SubscribeRequestFilterBlocksMeta = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubscribeRequestFilterBlocksMeta();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    create: function (base) {
        return exports.SubscribeRequestFilterBlocksMeta.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseSubscribeRequestFilterBlocksMeta();
        return message;
    }
};
function createBaseSubscribeRequestFilterEntry() {
    return {};
}
exports.SubscribeRequestFilterEntry = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubscribeRequestFilterEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    create: function (base) {
        return exports.SubscribeRequestFilterEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseSubscribeRequestFilterEntry();
        return message;
    }
};
function createBaseSubscribeRequestAccountsDataSlice() {
    return { offset: "0", length: "0" };
}
exports.SubscribeRequestAccountsDataSlice = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.offset !== "0") {
            writer.uint32(8).uint64(message.offset);
        }
        if (message.length !== "0") {
            writer.uint32(16).uint64(message.length);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubscribeRequestAccountsDataSlice();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.offset = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.length = longToString(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            offset: isSet(object.offset) ? String(object.offset) : "0",
            length: isSet(object.length) ? String(object.length) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.offset !== undefined && (obj.offset = message.offset);
        message.length !== undefined && (obj.length = message.length);
        return obj;
    },
    create: function (base) {
        return exports.SubscribeRequestAccountsDataSlice.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseSubscribeRequestAccountsDataSlice();
        message.offset = (_a = object.offset) !== null && _a !== void 0 ? _a : "0";
        message.length = (_b = object.length) !== null && _b !== void 0 ? _b : "0";
        return message;
    }
};
function createBaseSubscribeRequestPing() {
    return { id: 0 };
}
exports.SubscribeRequestPing = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.id !== 0) {
            writer.uint32(8).int32(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubscribeRequestPing();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.id = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { id: isSet(object.id) ? Number(object.id) : 0 };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        return obj;
    },
    create: function (base) {
        return exports.SubscribeRequestPing.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSubscribeRequestPing();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseSubscribeUpdate() {
    return {
        filters: [],
        account: undefined,
        slot: undefined,
        transaction: undefined,
        block: undefined,
        ping: undefined,
        pong: undefined,
        blockMeta: undefined,
        entry: undefined
    };
}
exports.SubscribeUpdate = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.filters; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        if (message.account !== undefined) {
            exports.SubscribeUpdateAccount.encode(message.account, writer.uint32(18).fork()).ldelim();
        }
        if (message.slot !== undefined) {
            exports.SubscribeUpdateSlot.encode(message.slot, writer.uint32(26).fork()).ldelim();
        }
        if (message.transaction !== undefined) {
            exports.SubscribeUpdateTransaction.encode(message.transaction, writer.uint32(34).fork()).ldelim();
        }
        if (message.block !== undefined) {
            exports.SubscribeUpdateBlock.encode(message.block, writer.uint32(42).fork()).ldelim();
        }
        if (message.ping !== undefined) {
            exports.SubscribeUpdatePing.encode(message.ping, writer.uint32(50).fork()).ldelim();
        }
        if (message.pong !== undefined) {
            exports.SubscribeUpdatePong.encode(message.pong, writer.uint32(74).fork()).ldelim();
        }
        if (message.blockMeta !== undefined) {
            exports.SubscribeUpdateBlockMeta.encode(message.blockMeta, writer.uint32(58).fork()).ldelim();
        }
        if (message.entry !== undefined) {
            exports.SubscribeUpdateEntry.encode(message.entry, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubscribeUpdate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.filters.push(reader.string());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.account = exports.SubscribeUpdateAccount.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.slot = exports.SubscribeUpdateSlot.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.transaction = exports.SubscribeUpdateTransaction.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.block = exports.SubscribeUpdateBlock.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.ping = exports.SubscribeUpdatePing.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.pong = exports.SubscribeUpdatePong.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.blockMeta = exports.SubscribeUpdateBlockMeta.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.entry = exports.SubscribeUpdateEntry.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            filters: Array.isArray(object === null || object === void 0 ? void 0 : object.filters) ? object.filters.map(function (e) { return String(e); }) : [],
            account: isSet(object.account) ? exports.SubscribeUpdateAccount.fromJSON(object.account) : undefined,
            slot: isSet(object.slot) ? exports.SubscribeUpdateSlot.fromJSON(object.slot) : undefined,
            transaction: isSet(object.transaction) ? exports.SubscribeUpdateTransaction.fromJSON(object.transaction) : undefined,
            block: isSet(object.block) ? exports.SubscribeUpdateBlock.fromJSON(object.block) : undefined,
            ping: isSet(object.ping) ? exports.SubscribeUpdatePing.fromJSON(object.ping) : undefined,
            pong: isSet(object.pong) ? exports.SubscribeUpdatePong.fromJSON(object.pong) : undefined,
            blockMeta: isSet(object.blockMeta) ? exports.SubscribeUpdateBlockMeta.fromJSON(object.blockMeta) : undefined,
            entry: isSet(object.entry) ? exports.SubscribeUpdateEntry.fromJSON(object.entry) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.filters) {
            obj.filters = message.filters.map(function (e) { return e; });
        }
        else {
            obj.filters = [];
        }
        message.account !== undefined &&
            (obj.account = message.account ? exports.SubscribeUpdateAccount.toJSON(message.account) : undefined);
        message.slot !== undefined && (obj.slot = message.slot ? exports.SubscribeUpdateSlot.toJSON(message.slot) : undefined);
        message.transaction !== undefined &&
            (obj.transaction = message.transaction ? exports.SubscribeUpdateTransaction.toJSON(message.transaction) : undefined);
        message.block !== undefined && (obj.block = message.block ? exports.SubscribeUpdateBlock.toJSON(message.block) : undefined);
        message.ping !== undefined && (obj.ping = message.ping ? exports.SubscribeUpdatePing.toJSON(message.ping) : undefined);
        message.pong !== undefined && (obj.pong = message.pong ? exports.SubscribeUpdatePong.toJSON(message.pong) : undefined);
        message.blockMeta !== undefined &&
            (obj.blockMeta = message.blockMeta ? exports.SubscribeUpdateBlockMeta.toJSON(message.blockMeta) : undefined);
        message.entry !== undefined && (obj.entry = message.entry ? exports.SubscribeUpdateEntry.toJSON(message.entry) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.SubscribeUpdate.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSubscribeUpdate();
        message.filters = ((_a = object.filters) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.account = (object.account !== undefined && object.account !== null)
            ? exports.SubscribeUpdateAccount.fromPartial(object.account)
            : undefined;
        message.slot = (object.slot !== undefined && object.slot !== null)
            ? exports.SubscribeUpdateSlot.fromPartial(object.slot)
            : undefined;
        message.transaction = (object.transaction !== undefined && object.transaction !== null)
            ? exports.SubscribeUpdateTransaction.fromPartial(object.transaction)
            : undefined;
        message.block = (object.block !== undefined && object.block !== null)
            ? exports.SubscribeUpdateBlock.fromPartial(object.block)
            : undefined;
        message.ping = (object.ping !== undefined && object.ping !== null)
            ? exports.SubscribeUpdatePing.fromPartial(object.ping)
            : undefined;
        message.pong = (object.pong !== undefined && object.pong !== null)
            ? exports.SubscribeUpdatePong.fromPartial(object.pong)
            : undefined;
        message.blockMeta = (object.blockMeta !== undefined && object.blockMeta !== null)
            ? exports.SubscribeUpdateBlockMeta.fromPartial(object.blockMeta)
            : undefined;
        message.entry = (object.entry !== undefined && object.entry !== null)
            ? exports.SubscribeUpdateEntry.fromPartial(object.entry)
            : undefined;
        return message;
    }
};
function createBaseSubscribeUpdateAccount() {
    return { account: undefined, slot: "0", isStartup: false };
}
exports.SubscribeUpdateAccount = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.account !== undefined) {
            exports.SubscribeUpdateAccountInfo.encode(message.account, writer.uint32(10).fork()).ldelim();
        }
        if (message.slot !== "0") {
            writer.uint32(16).uint64(message.slot);
        }
        if (message.isStartup === true) {
            writer.uint32(24).bool(message.isStartup);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubscribeUpdateAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.account = exports.SubscribeUpdateAccountInfo.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.slot = longToString(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.isStartup = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            account: isSet(object.account) ? exports.SubscribeUpdateAccountInfo.fromJSON(object.account) : undefined,
            slot: isSet(object.slot) ? String(object.slot) : "0",
            isStartup: isSet(object.isStartup) ? Boolean(object.isStartup) : false
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.account !== undefined &&
            (obj.account = message.account ? exports.SubscribeUpdateAccountInfo.toJSON(message.account) : undefined);
        message.slot !== undefined && (obj.slot = message.slot);
        message.isStartup !== undefined && (obj.isStartup = message.isStartup);
        return obj;
    },
    create: function (base) {
        return exports.SubscribeUpdateAccount.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseSubscribeUpdateAccount();
        message.account = (object.account !== undefined && object.account !== null)
            ? exports.SubscribeUpdateAccountInfo.fromPartial(object.account)
            : undefined;
        message.slot = (_a = object.slot) !== null && _a !== void 0 ? _a : "0";
        message.isStartup = (_b = object.isStartup) !== null && _b !== void 0 ? _b : false;
        return message;
    }
};
function createBaseSubscribeUpdateAccountInfo() {
    return {
        pubkey: new Uint8Array(0),
        lamports: "0",
        owner: new Uint8Array(0),
        executable: false,
        rentEpoch: "0",
        data: new Uint8Array(0),
        writeVersion: "0",
        txnSignature: undefined
    };
}
exports.SubscribeUpdateAccountInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pubkey.length !== 0) {
            writer.uint32(10).bytes(message.pubkey);
        }
        if (message.lamports !== "0") {
            writer.uint32(16).uint64(message.lamports);
        }
        if (message.owner.length !== 0) {
            writer.uint32(26).bytes(message.owner);
        }
        if (message.executable === true) {
            writer.uint32(32).bool(message.executable);
        }
        if (message.rentEpoch !== "0") {
            writer.uint32(40).uint64(message.rentEpoch);
        }
        if (message.data.length !== 0) {
            writer.uint32(50).bytes(message.data);
        }
        if (message.writeVersion !== "0") {
            writer.uint32(56).uint64(message.writeVersion);
        }
        if (message.txnSignature !== undefined) {
            writer.uint32(66).bytes(message.txnSignature);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubscribeUpdateAccountInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.pubkey = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.lamports = longToString(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.owner = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.executable = reader.bool();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.rentEpoch = longToString(reader.uint64());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.data = reader.bytes();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.writeVersion = longToString(reader.uint64());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.txnSignature = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            pubkey: isSet(object.pubkey) ? bytesFromBase64(object.pubkey) : new Uint8Array(0),
            lamports: isSet(object.lamports) ? String(object.lamports) : "0",
            owner: isSet(object.owner) ? bytesFromBase64(object.owner) : new Uint8Array(0),
            executable: isSet(object.executable) ? Boolean(object.executable) : false,
            rentEpoch: isSet(object.rentEpoch) ? String(object.rentEpoch) : "0",
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
            writeVersion: isSet(object.writeVersion) ? String(object.writeVersion) : "0",
            txnSignature: isSet(object.txnSignature) ? bytesFromBase64(object.txnSignature) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pubkey !== undefined &&
            (obj.pubkey = base64FromBytes(message.pubkey !== undefined ? message.pubkey : new Uint8Array(0)));
        message.lamports !== undefined && (obj.lamports = message.lamports);
        message.owner !== undefined &&
            (obj.owner = base64FromBytes(message.owner !== undefined ? message.owner : new Uint8Array(0)));
        message.executable !== undefined && (obj.executable = message.executable);
        message.rentEpoch !== undefined && (obj.rentEpoch = message.rentEpoch);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array(0)));
        message.writeVersion !== undefined && (obj.writeVersion = message.writeVersion);
        message.txnSignature !== undefined &&
            (obj.txnSignature = message.txnSignature !== undefined ? base64FromBytes(message.txnSignature) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.SubscribeUpdateAccountInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseSubscribeUpdateAccountInfo();
        message.pubkey = (_a = object.pubkey) !== null && _a !== void 0 ? _a : new Uint8Array(0);
        message.lamports = (_b = object.lamports) !== null && _b !== void 0 ? _b : "0";
        message.owner = (_c = object.owner) !== null && _c !== void 0 ? _c : new Uint8Array(0);
        message.executable = (_d = object.executable) !== null && _d !== void 0 ? _d : false;
        message.rentEpoch = (_e = object.rentEpoch) !== null && _e !== void 0 ? _e : "0";
        message.data = (_f = object.data) !== null && _f !== void 0 ? _f : new Uint8Array(0);
        message.writeVersion = (_g = object.writeVersion) !== null && _g !== void 0 ? _g : "0";
        message.txnSignature = (_h = object.txnSignature) !== null && _h !== void 0 ? _h : undefined;
        return message;
    }
};
function createBaseSubscribeUpdateSlot() {
    return { slot: "0", parent: undefined, status: 0 };
}
exports.SubscribeUpdateSlot = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.slot !== "0") {
            writer.uint32(8).uint64(message.slot);
        }
        if (message.parent !== undefined) {
            writer.uint32(16).uint64(message.parent);
        }
        if (message.status !== 0) {
            writer.uint32(24).int32(message.status);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubscribeUpdateSlot();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.slot = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.parent = longToString(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.status = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            slot: isSet(object.slot) ? String(object.slot) : "0",
            parent: isSet(object.parent) ? String(object.parent) : undefined,
            status: isSet(object.status) ? commitmentLevelFromJSON(object.status) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.slot !== undefined && (obj.slot = message.slot);
        message.parent !== undefined && (obj.parent = message.parent);
        message.status !== undefined && (obj.status = commitmentLevelToJSON(message.status));
        return obj;
    },
    create: function (base) {
        return exports.SubscribeUpdateSlot.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseSubscribeUpdateSlot();
        message.slot = (_a = object.slot) !== null && _a !== void 0 ? _a : "0";
        message.parent = (_b = object.parent) !== null && _b !== void 0 ? _b : undefined;
        message.status = (_c = object.status) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBaseSubscribeUpdateTransaction() {
    return { transaction: undefined, slot: "0" };
}
exports.SubscribeUpdateTransaction = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.transaction !== undefined) {
            exports.SubscribeUpdateTransactionInfo.encode(message.transaction, writer.uint32(10).fork()).ldelim();
        }
        if (message.slot !== "0") {
            writer.uint32(16).uint64(message.slot);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubscribeUpdateTransaction();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.transaction = exports.SubscribeUpdateTransactionInfo.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.slot = longToString(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            transaction: isSet(object.transaction) ? exports.SubscribeUpdateTransactionInfo.fromJSON(object.transaction) : undefined,
            slot: isSet(object.slot) ? String(object.slot) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.transaction !== undefined &&
            (obj.transaction = message.transaction ? exports.SubscribeUpdateTransactionInfo.toJSON(message.transaction) : undefined);
        message.slot !== undefined && (obj.slot = message.slot);
        return obj;
    },
    create: function (base) {
        return exports.SubscribeUpdateTransaction.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSubscribeUpdateTransaction();
        message.transaction = (object.transaction !== undefined && object.transaction !== null)
            ? exports.SubscribeUpdateTransactionInfo.fromPartial(object.transaction)
            : undefined;
        message.slot = (_a = object.slot) !== null && _a !== void 0 ? _a : "0";
        return message;
    }
};
function createBaseSubscribeUpdateTransactionInfo() {
    return { signature: new Uint8Array(0), isVote: false, transaction: undefined, meta: undefined, index: "0" };
}
exports.SubscribeUpdateTransactionInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.signature.length !== 0) {
            writer.uint32(10).bytes(message.signature);
        }
        if (message.isVote === true) {
            writer.uint32(16).bool(message.isVote);
        }
        if (message.transaction !== undefined) {
            solana_storage_1.Transaction.encode(message.transaction, writer.uint32(26).fork()).ldelim();
        }
        if (message.meta !== undefined) {
            solana_storage_1.TransactionStatusMeta.encode(message.meta, writer.uint32(34).fork()).ldelim();
        }
        if (message.index !== "0") {
            writer.uint32(40).uint64(message.index);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubscribeUpdateTransactionInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.signature = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.isVote = reader.bool();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.transaction = solana_storage_1.Transaction.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.meta = solana_storage_1.TransactionStatusMeta.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.index = longToString(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(0),
            isVote: isSet(object.isVote) ? Boolean(object.isVote) : false,
            transaction: isSet(object.transaction) ? solana_storage_1.Transaction.fromJSON(object.transaction) : undefined,
            meta: isSet(object.meta) ? solana_storage_1.TransactionStatusMeta.fromJSON(object.meta) : undefined,
            index: isSet(object.index) ? String(object.index) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.signature !== undefined &&
            (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array(0)));
        message.isVote !== undefined && (obj.isVote = message.isVote);
        message.transaction !== undefined &&
            (obj.transaction = message.transaction ? solana_storage_1.Transaction.toJSON(message.transaction) : undefined);
        message.meta !== undefined && (obj.meta = message.meta ? solana_storage_1.TransactionStatusMeta.toJSON(message.meta) : undefined);
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    create: function (base) {
        return exports.SubscribeUpdateTransactionInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseSubscribeUpdateTransactionInfo();
        message.signature = (_a = object.signature) !== null && _a !== void 0 ? _a : new Uint8Array(0);
        message.isVote = (_b = object.isVote) !== null && _b !== void 0 ? _b : false;
        message.transaction = (object.transaction !== undefined && object.transaction !== null)
            ? solana_storage_1.Transaction.fromPartial(object.transaction)
            : undefined;
        message.meta = (object.meta !== undefined && object.meta !== null)
            ? solana_storage_1.TransactionStatusMeta.fromPartial(object.meta)
            : undefined;
        message.index = (_c = object.index) !== null && _c !== void 0 ? _c : "0";
        return message;
    }
};
function createBaseSubscribeUpdateBlock() {
    return {
        slot: "0",
        blockhash: "",
        rewards: undefined,
        blockTime: undefined,
        blockHeight: undefined,
        parentSlot: "0",
        parentBlockhash: "",
        executedTransactionCount: "0",
        transactions: [],
        updatedAccountCount: "0",
        accounts: [],
        entriesCount: "0",
        entries: []
    };
}
exports.SubscribeUpdateBlock = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.slot !== "0") {
            writer.uint32(8).uint64(message.slot);
        }
        if (message.blockhash !== "") {
            writer.uint32(18).string(message.blockhash);
        }
        if (message.rewards !== undefined) {
            solana_storage_1.Rewards.encode(message.rewards, writer.uint32(26).fork()).ldelim();
        }
        if (message.blockTime !== undefined) {
            solana_storage_1.UnixTimestamp.encode(message.blockTime, writer.uint32(34).fork()).ldelim();
        }
        if (message.blockHeight !== undefined) {
            solana_storage_1.BlockHeight.encode(message.blockHeight, writer.uint32(42).fork()).ldelim();
        }
        if (message.parentSlot !== "0") {
            writer.uint32(56).uint64(message.parentSlot);
        }
        if (message.parentBlockhash !== "") {
            writer.uint32(66).string(message.parentBlockhash);
        }
        if (message.executedTransactionCount !== "0") {
            writer.uint32(72).uint64(message.executedTransactionCount);
        }
        for (var _i = 0, _a = message.transactions; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.SubscribeUpdateTransactionInfo.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.updatedAccountCount !== "0") {
            writer.uint32(80).uint64(message.updatedAccountCount);
        }
        for (var _b = 0, _c = message.accounts; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.SubscribeUpdateAccountInfo.encode(v, writer.uint32(90).fork()).ldelim();
        }
        if (message.entriesCount !== "0") {
            writer.uint32(96).uint64(message.entriesCount);
        }
        for (var _d = 0, _e = message.entries; _d < _e.length; _d++) {
            var v = _e[_d];
            exports.SubscribeUpdateEntry.encode(v, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubscribeUpdateBlock();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.slot = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.blockhash = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.rewards = solana_storage_1.Rewards.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.blockTime = solana_storage_1.UnixTimestamp.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.blockHeight = solana_storage_1.BlockHeight.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.parentSlot = longToString(reader.uint64());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.parentBlockhash = reader.string();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.executedTransactionCount = longToString(reader.uint64());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.transactions.push(exports.SubscribeUpdateTransactionInfo.decode(reader, reader.uint32()));
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.updatedAccountCount = longToString(reader.uint64());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.accounts.push(exports.SubscribeUpdateAccountInfo.decode(reader, reader.uint32()));
                    continue;
                case 12:
                    if (tag !== 96) {
                        break;
                    }
                    message.entriesCount = longToString(reader.uint64());
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.entries.push(exports.SubscribeUpdateEntry.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            slot: isSet(object.slot) ? String(object.slot) : "0",
            blockhash: isSet(object.blockhash) ? String(object.blockhash) : "",
            rewards: isSet(object.rewards) ? solana_storage_1.Rewards.fromJSON(object.rewards) : undefined,
            blockTime: isSet(object.blockTime) ? solana_storage_1.UnixTimestamp.fromJSON(object.blockTime) : undefined,
            blockHeight: isSet(object.blockHeight) ? solana_storage_1.BlockHeight.fromJSON(object.blockHeight) : undefined,
            parentSlot: isSet(object.parentSlot) ? String(object.parentSlot) : "0",
            parentBlockhash: isSet(object.parentBlockhash) ? String(object.parentBlockhash) : "",
            executedTransactionCount: isSet(object.executedTransactionCount) ? String(object.executedTransactionCount) : "0",
            transactions: Array.isArray(object === null || object === void 0 ? void 0 : object.transactions)
                ? object.transactions.map(function (e) { return exports.SubscribeUpdateTransactionInfo.fromJSON(e); })
                : [],
            updatedAccountCount: isSet(object.updatedAccountCount) ? String(object.updatedAccountCount) : "0",
            accounts: Array.isArray(object === null || object === void 0 ? void 0 : object.accounts)
                ? object.accounts.map(function (e) { return exports.SubscribeUpdateAccountInfo.fromJSON(e); })
                : [],
            entriesCount: isSet(object.entriesCount) ? String(object.entriesCount) : "0",
            entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries) ? object.entries.map(function (e) { return exports.SubscribeUpdateEntry.fromJSON(e); }) : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.slot !== undefined && (obj.slot = message.slot);
        message.blockhash !== undefined && (obj.blockhash = message.blockhash);
        message.rewards !== undefined && (obj.rewards = message.rewards ? solana_storage_1.Rewards.toJSON(message.rewards) : undefined);
        message.blockTime !== undefined &&
            (obj.blockTime = message.blockTime ? solana_storage_1.UnixTimestamp.toJSON(message.blockTime) : undefined);
        message.blockHeight !== undefined &&
            (obj.blockHeight = message.blockHeight ? solana_storage_1.BlockHeight.toJSON(message.blockHeight) : undefined);
        message.parentSlot !== undefined && (obj.parentSlot = message.parentSlot);
        message.parentBlockhash !== undefined && (obj.parentBlockhash = message.parentBlockhash);
        message.executedTransactionCount !== undefined && (obj.executedTransactionCount = message.executedTransactionCount);
        if (message.transactions) {
            obj.transactions = message.transactions.map(function (e) { return e ? exports.SubscribeUpdateTransactionInfo.toJSON(e) : undefined; });
        }
        else {
            obj.transactions = [];
        }
        message.updatedAccountCount !== undefined && (obj.updatedAccountCount = message.updatedAccountCount);
        if (message.accounts) {
            obj.accounts = message.accounts.map(function (e) { return e ? exports.SubscribeUpdateAccountInfo.toJSON(e) : undefined; });
        }
        else {
            obj.accounts = [];
        }
        message.entriesCount !== undefined && (obj.entriesCount = message.entriesCount);
        if (message.entries) {
            obj.entries = message.entries.map(function (e) { return e ? exports.SubscribeUpdateEntry.toJSON(e) : undefined; });
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    create: function (base) {
        return exports.SubscribeUpdateBlock.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var message = createBaseSubscribeUpdateBlock();
        message.slot = (_a = object.slot) !== null && _a !== void 0 ? _a : "0";
        message.blockhash = (_b = object.blockhash) !== null && _b !== void 0 ? _b : "";
        message.rewards = (object.rewards !== undefined && object.rewards !== null)
            ? solana_storage_1.Rewards.fromPartial(object.rewards)
            : undefined;
        message.blockTime = (object.blockTime !== undefined && object.blockTime !== null)
            ? solana_storage_1.UnixTimestamp.fromPartial(object.blockTime)
            : undefined;
        message.blockHeight = (object.blockHeight !== undefined && object.blockHeight !== null)
            ? solana_storage_1.BlockHeight.fromPartial(object.blockHeight)
            : undefined;
        message.parentSlot = (_c = object.parentSlot) !== null && _c !== void 0 ? _c : "0";
        message.parentBlockhash = (_d = object.parentBlockhash) !== null && _d !== void 0 ? _d : "";
        message.executedTransactionCount = (_e = object.executedTransactionCount) !== null && _e !== void 0 ? _e : "0";
        message.transactions = ((_f = object.transactions) === null || _f === void 0 ? void 0 : _f.map(function (e) { return exports.SubscribeUpdateTransactionInfo.fromPartial(e); })) || [];
        message.updatedAccountCount = (_g = object.updatedAccountCount) !== null && _g !== void 0 ? _g : "0";
        message.accounts = ((_h = object.accounts) === null || _h === void 0 ? void 0 : _h.map(function (e) { return exports.SubscribeUpdateAccountInfo.fromPartial(e); })) || [];
        message.entriesCount = (_j = object.entriesCount) !== null && _j !== void 0 ? _j : "0";
        message.entries = ((_k = object.entries) === null || _k === void 0 ? void 0 : _k.map(function (e) { return exports.SubscribeUpdateEntry.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseSubscribeUpdateBlockMeta() {
    return {
        slot: "0",
        blockhash: "",
        rewards: undefined,
        blockTime: undefined,
        blockHeight: undefined,
        parentSlot: "0",
        parentBlockhash: "",
        executedTransactionCount: "0"
    };
}
exports.SubscribeUpdateBlockMeta = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.slot !== "0") {
            writer.uint32(8).uint64(message.slot);
        }
        if (message.blockhash !== "") {
            writer.uint32(18).string(message.blockhash);
        }
        if (message.rewards !== undefined) {
            solana_storage_1.Rewards.encode(message.rewards, writer.uint32(26).fork()).ldelim();
        }
        if (message.blockTime !== undefined) {
            solana_storage_1.UnixTimestamp.encode(message.blockTime, writer.uint32(34).fork()).ldelim();
        }
        if (message.blockHeight !== undefined) {
            solana_storage_1.BlockHeight.encode(message.blockHeight, writer.uint32(42).fork()).ldelim();
        }
        if (message.parentSlot !== "0") {
            writer.uint32(48).uint64(message.parentSlot);
        }
        if (message.parentBlockhash !== "") {
            writer.uint32(58).string(message.parentBlockhash);
        }
        if (message.executedTransactionCount !== "0") {
            writer.uint32(64).uint64(message.executedTransactionCount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubscribeUpdateBlockMeta();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.slot = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.blockhash = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.rewards = solana_storage_1.Rewards.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.blockTime = solana_storage_1.UnixTimestamp.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.blockHeight = solana_storage_1.BlockHeight.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.parentSlot = longToString(reader.uint64());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.parentBlockhash = reader.string();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.executedTransactionCount = longToString(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            slot: isSet(object.slot) ? String(object.slot) : "0",
            blockhash: isSet(object.blockhash) ? String(object.blockhash) : "",
            rewards: isSet(object.rewards) ? solana_storage_1.Rewards.fromJSON(object.rewards) : undefined,
            blockTime: isSet(object.blockTime) ? solana_storage_1.UnixTimestamp.fromJSON(object.blockTime) : undefined,
            blockHeight: isSet(object.blockHeight) ? solana_storage_1.BlockHeight.fromJSON(object.blockHeight) : undefined,
            parentSlot: isSet(object.parentSlot) ? String(object.parentSlot) : "0",
            parentBlockhash: isSet(object.parentBlockhash) ? String(object.parentBlockhash) : "",
            executedTransactionCount: isSet(object.executedTransactionCount) ? String(object.executedTransactionCount) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.slot !== undefined && (obj.slot = message.slot);
        message.blockhash !== undefined && (obj.blockhash = message.blockhash);
        message.rewards !== undefined && (obj.rewards = message.rewards ? solana_storage_1.Rewards.toJSON(message.rewards) : undefined);
        message.blockTime !== undefined &&
            (obj.blockTime = message.blockTime ? solana_storage_1.UnixTimestamp.toJSON(message.blockTime) : undefined);
        message.blockHeight !== undefined &&
            (obj.blockHeight = message.blockHeight ? solana_storage_1.BlockHeight.toJSON(message.blockHeight) : undefined);
        message.parentSlot !== undefined && (obj.parentSlot = message.parentSlot);
        message.parentBlockhash !== undefined && (obj.parentBlockhash = message.parentBlockhash);
        message.executedTransactionCount !== undefined && (obj.executedTransactionCount = message.executedTransactionCount);
        return obj;
    },
    create: function (base) {
        return exports.SubscribeUpdateBlockMeta.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseSubscribeUpdateBlockMeta();
        message.slot = (_a = object.slot) !== null && _a !== void 0 ? _a : "0";
        message.blockhash = (_b = object.blockhash) !== null && _b !== void 0 ? _b : "";
        message.rewards = (object.rewards !== undefined && object.rewards !== null)
            ? solana_storage_1.Rewards.fromPartial(object.rewards)
            : undefined;
        message.blockTime = (object.blockTime !== undefined && object.blockTime !== null)
            ? solana_storage_1.UnixTimestamp.fromPartial(object.blockTime)
            : undefined;
        message.blockHeight = (object.blockHeight !== undefined && object.blockHeight !== null)
            ? solana_storage_1.BlockHeight.fromPartial(object.blockHeight)
            : undefined;
        message.parentSlot = (_c = object.parentSlot) !== null && _c !== void 0 ? _c : "0";
        message.parentBlockhash = (_d = object.parentBlockhash) !== null && _d !== void 0 ? _d : "";
        message.executedTransactionCount = (_e = object.executedTransactionCount) !== null && _e !== void 0 ? _e : "0";
        return message;
    }
};
function createBaseSubscribeUpdateEntry() {
    return { slot: "0", index: "0", numHashes: "0", hash: new Uint8Array(0), executedTransactionCount: "0" };
}
exports.SubscribeUpdateEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.slot !== "0") {
            writer.uint32(8).uint64(message.slot);
        }
        if (message.index !== "0") {
            writer.uint32(16).uint64(message.index);
        }
        if (message.numHashes !== "0") {
            writer.uint32(24).uint64(message.numHashes);
        }
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        if (message.executedTransactionCount !== "0") {
            writer.uint32(40).uint64(message.executedTransactionCount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubscribeUpdateEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.slot = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.index = longToString(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.numHashes = longToString(reader.uint64());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.hash = reader.bytes();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.executedTransactionCount = longToString(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            slot: isSet(object.slot) ? String(object.slot) : "0",
            index: isSet(object.index) ? String(object.index) : "0",
            numHashes: isSet(object.numHashes) ? String(object.numHashes) : "0",
            hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(0),
            executedTransactionCount: isSet(object.executedTransactionCount) ? String(object.executedTransactionCount) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.slot !== undefined && (obj.slot = message.slot);
        message.index !== undefined && (obj.index = message.index);
        message.numHashes !== undefined && (obj.numHashes = message.numHashes);
        message.hash !== undefined &&
            (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array(0)));
        message.executedTransactionCount !== undefined && (obj.executedTransactionCount = message.executedTransactionCount);
        return obj;
    },
    create: function (base) {
        return exports.SubscribeUpdateEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseSubscribeUpdateEntry();
        message.slot = (_a = object.slot) !== null && _a !== void 0 ? _a : "0";
        message.index = (_b = object.index) !== null && _b !== void 0 ? _b : "0";
        message.numHashes = (_c = object.numHashes) !== null && _c !== void 0 ? _c : "0";
        message.hash = (_d = object.hash) !== null && _d !== void 0 ? _d : new Uint8Array(0);
        message.executedTransactionCount = (_e = object.executedTransactionCount) !== null && _e !== void 0 ? _e : "0";
        return message;
    }
};
function createBaseSubscribeUpdatePing() {
    return {};
}
exports.SubscribeUpdatePing = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubscribeUpdatePing();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    create: function (base) {
        return exports.SubscribeUpdatePing.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseSubscribeUpdatePing();
        return message;
    }
};
function createBaseSubscribeUpdatePong() {
    return { id: 0 };
}
exports.SubscribeUpdatePong = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.id !== 0) {
            writer.uint32(8).int32(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSubscribeUpdatePong();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.id = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { id: isSet(object.id) ? Number(object.id) : 0 };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        return obj;
    },
    create: function (base) {
        return exports.SubscribeUpdatePong.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSubscribeUpdatePong();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBasePingRequest() {
    return { count: 0 };
}
exports.PingRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.count !== 0) {
            writer.uint32(8).int32(message.count);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePingRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.count = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { count: isSet(object.count) ? Number(object.count) : 0 };
    },
    toJSON: function (message) {
        var obj = {};
        message.count !== undefined && (obj.count = Math.round(message.count));
        return obj;
    },
    create: function (base) {
        return exports.PingRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBasePingRequest();
        message.count = (_a = object.count) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBasePongResponse() {
    return { count: 0 };
}
exports.PongResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.count !== 0) {
            writer.uint32(8).int32(message.count);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePongResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.count = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { count: isSet(object.count) ? Number(object.count) : 0 };
    },
    toJSON: function (message) {
        var obj = {};
        message.count !== undefined && (obj.count = Math.round(message.count));
        return obj;
    },
    create: function (base) {
        return exports.PongResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBasePongResponse();
        message.count = (_a = object.count) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseGetLatestBlockhashRequest() {
    return { commitment: undefined };
}
exports.GetLatestBlockhashRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.commitment !== undefined) {
            writer.uint32(8).int32(message.commitment);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetLatestBlockhashRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.commitment = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { commitment: isSet(object.commitment) ? commitmentLevelFromJSON(object.commitment) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.commitment !== undefined &&
            (obj.commitment = message.commitment !== undefined ? commitmentLevelToJSON(message.commitment) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.GetLatestBlockhashRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetLatestBlockhashRequest();
        message.commitment = (_a = object.commitment) !== null && _a !== void 0 ? _a : undefined;
        return message;
    }
};
function createBaseGetLatestBlockhashResponse() {
    return { slot: "0", blockhash: "", lastValidBlockHeight: "0" };
}
exports.GetLatestBlockhashResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.slot !== "0") {
            writer.uint32(8).uint64(message.slot);
        }
        if (message.blockhash !== "") {
            writer.uint32(18).string(message.blockhash);
        }
        if (message.lastValidBlockHeight !== "0") {
            writer.uint32(24).uint64(message.lastValidBlockHeight);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetLatestBlockhashResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.slot = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.blockhash = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.lastValidBlockHeight = longToString(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            slot: isSet(object.slot) ? String(object.slot) : "0",
            blockhash: isSet(object.blockhash) ? String(object.blockhash) : "",
            lastValidBlockHeight: isSet(object.lastValidBlockHeight) ? String(object.lastValidBlockHeight) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.slot !== undefined && (obj.slot = message.slot);
        message.blockhash !== undefined && (obj.blockhash = message.blockhash);
        message.lastValidBlockHeight !== undefined && (obj.lastValidBlockHeight = message.lastValidBlockHeight);
        return obj;
    },
    create: function (base) {
        return exports.GetLatestBlockhashResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseGetLatestBlockhashResponse();
        message.slot = (_a = object.slot) !== null && _a !== void 0 ? _a : "0";
        message.blockhash = (_b = object.blockhash) !== null && _b !== void 0 ? _b : "";
        message.lastValidBlockHeight = (_c = object.lastValidBlockHeight) !== null && _c !== void 0 ? _c : "0";
        return message;
    }
};
function createBaseGetBlockHeightRequest() {
    return { commitment: undefined };
}
exports.GetBlockHeightRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.commitment !== undefined) {
            writer.uint32(8).int32(message.commitment);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetBlockHeightRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.commitment = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { commitment: isSet(object.commitment) ? commitmentLevelFromJSON(object.commitment) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.commitment !== undefined &&
            (obj.commitment = message.commitment !== undefined ? commitmentLevelToJSON(message.commitment) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.GetBlockHeightRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetBlockHeightRequest();
        message.commitment = (_a = object.commitment) !== null && _a !== void 0 ? _a : undefined;
        return message;
    }
};
function createBaseGetBlockHeightResponse() {
    return { blockHeight: "0" };
}
exports.GetBlockHeightResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.blockHeight !== "0") {
            writer.uint32(8).uint64(message.blockHeight);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetBlockHeightResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.blockHeight = longToString(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { blockHeight: isSet(object.blockHeight) ? String(object.blockHeight) : "0" };
    },
    toJSON: function (message) {
        var obj = {};
        message.blockHeight !== undefined && (obj.blockHeight = message.blockHeight);
        return obj;
    },
    create: function (base) {
        return exports.GetBlockHeightResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetBlockHeightResponse();
        message.blockHeight = (_a = object.blockHeight) !== null && _a !== void 0 ? _a : "0";
        return message;
    }
};
function createBaseGetSlotRequest() {
    return { commitment: undefined };
}
exports.GetSlotRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.commitment !== undefined) {
            writer.uint32(8).int32(message.commitment);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetSlotRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.commitment = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { commitment: isSet(object.commitment) ? commitmentLevelFromJSON(object.commitment) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.commitment !== undefined &&
            (obj.commitment = message.commitment !== undefined ? commitmentLevelToJSON(message.commitment) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.GetSlotRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetSlotRequest();
        message.commitment = (_a = object.commitment) !== null && _a !== void 0 ? _a : undefined;
        return message;
    }
};
function createBaseGetSlotResponse() {
    return { slot: "0" };
}
exports.GetSlotResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.slot !== "0") {
            writer.uint32(8).uint64(message.slot);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetSlotResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.slot = longToString(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { slot: isSet(object.slot) ? String(object.slot) : "0" };
    },
    toJSON: function (message) {
        var obj = {};
        message.slot !== undefined && (obj.slot = message.slot);
        return obj;
    },
    create: function (base) {
        return exports.GetSlotResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetSlotResponse();
        message.slot = (_a = object.slot) !== null && _a !== void 0 ? _a : "0";
        return message;
    }
};
function createBaseGetVersionRequest() {
    return {};
}
exports.GetVersionRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetVersionRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    create: function (base) {
        return exports.GetVersionRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseGetVersionRequest();
        return message;
    }
};
function createBaseGetVersionResponse() {
    return { version: "" };
}
exports.GetVersionResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetVersionResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.version = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { version: isSet(object.version) ? String(object.version) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.version !== undefined && (obj.version = message.version);
        return obj;
    },
    create: function (base) {
        return exports.GetVersionResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetVersionResponse();
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseIsBlockhashValidRequest() {
    return { blockhash: "", commitment: undefined };
}
exports.IsBlockhashValidRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.blockhash !== "") {
            writer.uint32(10).string(message.blockhash);
        }
        if (message.commitment !== undefined) {
            writer.uint32(16).int32(message.commitment);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseIsBlockhashValidRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.blockhash = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.commitment = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            blockhash: isSet(object.blockhash) ? String(object.blockhash) : "",
            commitment: isSet(object.commitment) ? commitmentLevelFromJSON(object.commitment) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.blockhash !== undefined && (obj.blockhash = message.blockhash);
        message.commitment !== undefined &&
            (obj.commitment = message.commitment !== undefined ? commitmentLevelToJSON(message.commitment) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.IsBlockhashValidRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseIsBlockhashValidRequest();
        message.blockhash = (_a = object.blockhash) !== null && _a !== void 0 ? _a : "";
        message.commitment = (_b = object.commitment) !== null && _b !== void 0 ? _b : undefined;
        return message;
    }
};
function createBaseIsBlockhashValidResponse() {
    return { slot: "0", valid: false };
}
exports.IsBlockhashValidResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.slot !== "0") {
            writer.uint32(8).uint64(message.slot);
        }
        if (message.valid === true) {
            writer.uint32(16).bool(message.valid);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseIsBlockhashValidResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.slot = longToString(reader.uint64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.valid = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            slot: isSet(object.slot) ? String(object.slot) : "0",
            valid: isSet(object.valid) ? Boolean(object.valid) : false
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.slot !== undefined && (obj.slot = message.slot);
        message.valid !== undefined && (obj.valid = message.valid);
        return obj;
    },
    create: function (base) {
        return exports.IsBlockhashValidResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseIsBlockhashValidResponse();
        message.slot = (_a = object.slot) !== null && _a !== void 0 ? _a : "0";
        message.valid = (_b = object.valid) !== null && _b !== void 0 ? _b : false;
        return message;
    }
};
exports.GeyserService = {
    subscribe: {
        path: "/geyser.Geyser/Subscribe",
        requestStream: true,
        responseStream: true,
        requestSerialize: function (value) { return Buffer.from(exports.SubscribeRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.SubscribeRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(exports.SubscribeUpdate.encode(value).finish()); },
        responseDeserialize: function (value) { return exports.SubscribeUpdate.decode(value); }
    },
    ping: {
        path: "/geyser.Geyser/Ping",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.PingRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.PingRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(exports.PongResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return exports.PongResponse.decode(value); }
    },
    getLatestBlockhash: {
        path: "/geyser.Geyser/GetLatestBlockhash",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(exports.GetLatestBlockhashRequest.encode(value).finish());
        },
        requestDeserialize: function (value) { return exports.GetLatestBlockhashRequest.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(exports.GetLatestBlockhashResponse.encode(value).finish());
        },
        responseDeserialize: function (value) { return exports.GetLatestBlockhashResponse.decode(value); }
    },
    getBlockHeight: {
        path: "/geyser.Geyser/GetBlockHeight",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.GetBlockHeightRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.GetBlockHeightRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(exports.GetBlockHeightResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return exports.GetBlockHeightResponse.decode(value); }
    },
    getSlot: {
        path: "/geyser.Geyser/GetSlot",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.GetSlotRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.GetSlotRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(exports.GetSlotResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return exports.GetSlotResponse.decode(value); }
    },
    isBlockhashValid: {
        path: "/geyser.Geyser/IsBlockhashValid",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.IsBlockhashValidRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.IsBlockhashValidRequest.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(exports.IsBlockhashValidResponse.encode(value).finish());
        },
        responseDeserialize: function (value) { return exports.IsBlockhashValidResponse.decode(value); }
    },
    getVersion: {
        path: "/geyser.Geyser/GetVersion",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.GetVersionRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.GetVersionRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(exports.GetVersionResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return exports.GetVersionResponse.decode(value); }
    }
};
exports.GeyserClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.GeyserService, "geyser.Geyser");
var tsProtoGlobalThis = (function () {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function bytesFromBase64(b64) {
    if (tsProtoGlobalThis.Buffer) {
        return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
    }
    else {
        var bin = tsProtoGlobalThis.atob(b64);
        var arr = new Uint8Array(bin.length);
        for (var i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (tsProtoGlobalThis.Buffer) {
        return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
    }
    else {
        var bin_1 = [];
        arr.forEach(function (byte) {
            bin_1.push(String.fromCharCode(byte));
        });
        return tsProtoGlobalThis.btoa(bin_1.join(""));
    }
}
function longToString(long) {
    return long.toString();
}
// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
