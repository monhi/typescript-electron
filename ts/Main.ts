import { BrowserWindow } from 'electron';

export default class Main {
    public mainWindow: Electron.BrowserWindow;
    public application: Electron.App;
    public myBrowserWindow: typeof BrowserWindow;
    public onWindowAllClosed() 
	{
        if ( process.platform !== 'darwin' )
		{
            this.application.quit();
        }
    }

    public onClose() {
        // Dereference the window object. 
        this.mainWindow = null;
    }

    public onReady() 
	{
        this.mainWindow = new BrowserWindow(
		{ 
			width: 800, 
			height: 600,
			fullscreen: true,
			//frame: false,
			webPreferences: 
			{
				devTools: true, // false if you want to remove dev tools access for the user		
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
		console.log('file://' + __dirname + '/index.html');
        this.mainWindow.on('closed', this.onClose.bind(this));
    }
	
	public OnWebContentsCreated(webContentsCreatedEvent, contents) 
	{
	  if (contents.getType() === 'webview') 
	  {
		contents.on('new-window', function (newWindowEvent, url) 
		{
		  console.log('block');
		  //newWindowEvent.preventDefault();
		  this.mainWindow.loadURL(url);
		});
	  }
	}	
	
	

    public main(app: Electron.App, browserWindow: typeof BrowserWindow) {
        // we pass the Electron.App object and the  
        // Electron.BrowserWindow into this function 
        // so this class has no dependencies. This 
        // makes the code easier to write tests for 
        this.myBrowserWindow = browserWindow;
        this.application = app;
        this.application.on('window-all-closed', this.onWindowAllClosed.bind(this));
        this.application.on('ready', this.onReady.bind(this));
		this.application.on('web-contents-created',this.OnWebContentsCreated.bind(this));
    }
}