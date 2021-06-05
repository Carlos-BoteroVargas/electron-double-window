const { app, BrowserWindow } = require('electron');
// var path = require('path');

let win;

async function createWindow () {
	// create and config browser window
	win = new BrowserWindow({titleBarStyle: 'hidden',
  // frame: false,
  width: 1281,
  height: 800,
  minWidth: 800,
  minHeight: 600,
  backgroundColor: '#FFEBCD',
  show: false,
  // icon: path.join(__dirname, 'images/favicon.png'),
  webPreferences: {
    nodeIntegration: true,
    contextIsolation: false
  }
});

	// load webpage and check development states
  	win.loadURL("http://localhost:3000");
	// on close clicked
	win.on('closed', () => win = null);
	// * enable Chromes development tools
    // win.webContents.openDevTools({mode:'detach'});

	win.once('ready-to-show', () => {
		win.show()
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin')
    app.quit();
});

app.on('activate', () => {
  if (win === null)
    createWindow();
});