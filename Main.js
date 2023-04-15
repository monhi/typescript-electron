"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.onWindowAllClosed = function () {
        if (process.platform !== 'darwin') {
            this.application.quit();
        }
    };
    Main.prototype.onClose = function () {
        // Dereference the window object. 
        this.mainWindow = null;
    };
    Main.prototype.onReady = function () {
        this.mainWindow = new electron_1.BrowserWindow({
            width: 800,
            height: 600,
            fullscreen: true,
            //frame: false,
            webPreferences: {
                devTools: true,
                plugins: true,
                experimentalFeatures: true,
                allowRunningInsecureContent: true,
                webviewTag: true,
                nodeIntegration: true,
                contextIsolation: false
                //path.join(__dirname, "../preload.js"), // required for print function			  
            }
        });
        this.mainWindow.loadURL('file://' + __dirname + '/index.html');
        this.mainWindow.on('closed', this.onClose.bind(this));
    };
    Main.prototype.OnWebContentsCreated = function (webContentsCreatedEvent, contents) {
        if (contents.getType() === 'webview') {
            contents.on('new-window', function (newWindowEvent, url) {
                console.log('block');
                //newWindowEvent.preventDefault();
                this.mainWindow.loadURL(url);
            });
        }
    };
    Main.prototype.main = function (app, browserWindow) {
        // we pass the Electron.App object and the  
        // Electron.BrowserWindow into this function 
        // so this class has no dependencies. This 
        // makes the code easier to write tests for 
        this.myBrowserWindow = browserWindow;
        this.application = app;
        this.application.on('window-all-closed', this.onWindowAllClosed.bind(this));
        this.application.on('ready', this.onReady.bind(this));
        this.application.on('web-contents-created', this.OnWebContentsCreated.bind(this));
    };
    return Main;
}());
exports.default = Main;
//# sourceMappingURL=Main.js.map