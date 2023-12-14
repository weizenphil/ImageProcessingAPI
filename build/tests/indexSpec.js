"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
var path_1 = __importDefault(require("path"));
var supertest_1 = __importDefault(require("supertest"));
var utilities_1 = __importDefault(require("../utilities/utilities"));
/**
 * Test endpoint response
 **/
describe('1. Test endpoint response', function () {
    it('1.1 Gets the /api/images endpoint', function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, supertest_1.default)(index_1.default).get('/api/images').query({
                            filename: 'test',
                            width: '100',
                            height: '100',
                            test: 'yes'
                        })];
                    case 1:
                        response = _a.sent();
                        expect(response.status).toEqual(200);
                        return [2 /*return*/];
                }
            });
        });
    });
});
/**
 * Test image processing functionality
 **/
describe('2. Test image processing', function () {
    it('2.1 Expect resizeImage to not throw an error', function () { return __awaiter(void 0, void 0, void 0, function () {
        var imgPath, filePath;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    imgPath = "".concat(path_1.default.join(__dirname, '../../assets/full/'), "palmtunnel.jpg");
                    filePath = "".concat(path_1.default.join(__dirname, '../../assets/thumb/'), "test_thumb_100_100.jpg");
                    //Attempt to resize the image based on the user sizes
                    return [4 /*yield*/, (0, utilities_1.default)(imgPath, 100, 100, filePath)];
                case 1:
                    //Attempt to resize the image based on the user sizes
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('2.2 Expect resizeImage to throw an error', function () { return __awaiter(void 0, void 0, void 0, function () {
        var imgPath, filePath, error, e_1, expectedError;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    imgPath = "".concat(path_1.default.join(__dirname, '../../assets/full/'), "dont-exist.jpg");
                    filePath = "".concat(path_1.default.join(__dirname, '../../assets/thumb/'), "test_thumb_100_100.jpg");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    //Attempt to resize the image based on the user sizes
                    return [4 /*yield*/, (0, utilities_1.default)(imgPath, 100, 100, filePath)];
                case 2:
                    //Attempt to resize the image based on the user sizes
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    error = e_1;
                    return [3 /*break*/, 4];
                case 4:
                    expectedError = new Error('failed to resize image');
                    expect(error).toEqual(expectedError);
                    return [2 /*return*/];
            }
        });
    }); });
});
