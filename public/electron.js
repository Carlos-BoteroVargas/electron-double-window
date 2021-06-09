const { app, BrowserWindow, Menu } = require('electron');
const { ipcMain } = require('electron')

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 750,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule:true,
      contextIsolation: false
    }
  })
  //load the index.html from a url
  win.loadURL('http://localhost:3000');

  // Open the DevTools.
  win.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
// TODO: app.whenReady().then(createWindow);

app.whenReady().then(()=>{
  createWindow()
      const template = [
              {
                    label:'Open Google',
                    click: function(){
                              let win = new BrowserWindow({width:500,height:200})
                              win.loadURL('https://www.google.com')
                          }
              },
              {
                    label:'View',
              },
              {
                    label:'options',
                    submenu:[
                              {role:'selectall'},
                              {role:'reload'}
                          ]
              },
              {
                    label: 'with Separator',
                    submenu:[
                        {role:'copy'},
                        // creates a divider between two options
                        {type:'separator'},
                        {role:'paste'},
                    ]
              }
      ]
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

/* All the IPC MAIN and RENDERER info will live down here.
   If it gets too heavy, will modularize elswhere */


ipcMain.on('anything-asynchronous', (event, arg) => {
  console.log("heyyyy",arg) // prints "heyyyy ping"
      event.reply('asynchronous-reply', 'asynchronous pong - when paged by react')
  });

ipcMain.on('anything-synchronous', (event, arg) => {
  console.log(arg) // prints "ping on loading the page"
  event.returnValue = 'I just returned a pong (automatic when synched calls)' 
  // returns a value to renderer process
})


