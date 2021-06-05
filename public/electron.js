const { app, BrowserWindow, Menu } = require('electron');
// var path = require('path');

const windows = new Set();

async function createWindow () {

  let x, y;

  const currentWindow = BrowserWindow.getFocusedWindow();
   if (currentWindow) {
     const [currentWindowX, currentWindowY] = currentWindow.getPosition();
     x = currentWindowX + 24;
    y = currentWindowY + 24;
   }
	// create and config browser window
	let newWindow = new BrowserWindow({titleBarStyle: 'hidden',
  // frame: false,
  width: 900,
  height: 700,
  minWidth: 800,
  minHeight: 600,
  x,
  y,
  backgroundColor: '#FFEBCD',
  show: false,
  //? Impossible to render images on the electron shell when using React environment instead of webpack alone.
  // icon: path.join(__dirname, 'images/favicon.png'),
  webPreferences: {
    nodeIntegration: true,
    contextIsolation: false
  }
});

	// load webpage and check development states
  	newWindow.loadURL("http://localhost:3000");

    newWindow.webContents.on('did-finish-load', () => {
      if (!newWindow) {
        throw new Error('"newWindow" is not defined');
      }
      if (process.env.START_MINIMIZED) {
        newWindow.minimize();
      } else {
        newWindow.show();
        newWindow.focus();
      }
    });
	// on close clicked
	newWindow.on('closed', () => {
    windows.delete(newWindow);
    newWindow = null;
  });
	// * enable Chromes development tools
    // win.webContents.openDevTools({mode:'detach'});
  
  newWindow.on('focus', () => {
    const MainMenu = Menu.buildFromTemplate(menu)
	  Menu.setApplicationMenu(MainMenu)
  });
  
	newWindow.once('ready-to-show', () => {
    newWindow.show()
	});

  windows.add(newWindow);
  return newWindow;
}

const isMac = process.platform === 'darwin' ? true : false;
const menu = [
	...(isMac ? [{ role: 'appMenu' }] : []),
	{
		role: 'fileMenu'
	},
	{
		role: 'editMenu'
	},
	{
		label: 'Experiments',
  submenu: [
    {
      label: 'New Window',
      accelerator: isMac ? 'Shift+Command+N' : 'Shift+Control+N',
      click: () => {
        createWindow();
      }
    }
  ]
	}
]

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (!isMac)
    app.quit();
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (windows.size === 0) createWindow();
});