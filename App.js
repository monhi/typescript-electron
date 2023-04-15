"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var Main_1 = require("./Main");
var mainInstance;
mainInstance = new Main_1.default();
mainInstance.main(electron_1.app, electron_1.BrowserWindow);
//# sourceMappingURL=App.js.map