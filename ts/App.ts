import { app, BrowserWindow } from 'electron';
import Main from './Main';

	let mainInstance : Main;
		mainInstance = new Main();
		mainInstance.main(app, BrowserWindow);