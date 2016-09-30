import {app, BrowserWindow, Menu, shell} from 'electron';

let mainWindow = null;

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit();
});

app.on('ready', () => {

    mainWindow = new BrowserWindow({
        width: 900,
        height: 1250,
        show: false
    });

    mainWindow.loadURL(`file://${__dirname}/src/app.html`);

    mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.show();
        mainWindow.focus();
    });

    mainWindow.on('close', () => {
        mainWindow = null;
    });
});