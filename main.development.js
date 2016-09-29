import {app, BrowserWindow, Menu, shell} from 'electron';

let mainWindow = null;

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit();
});

app.on('ready', () => {

    mainWindow = new BrowserWindow({
        //show:false,
        width:500,
        height:500
    });

    mainWindow.loadURL(`file://${__dirname}/src/app.html`);

    mainWindow.on('close', () => {
        mainWindow = null;
    });
});