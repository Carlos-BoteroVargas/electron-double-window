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
  // Remove menu or set the Menu to null
  // win.removeMenu();
  // win.setMenu(null);
  //load the index.html from a url
  win.loadURL('http://localhost:3000');
  // Open the DevTools.
  // win.webContents.openDevTools()
}

//! creates a double window, instead of the single one above
// function createWindow () {
//   const windowOne = new BrowserWindow({
//     title:"My First App",
//     // frame:false,
//     width:500,
//     height:500,
//     maxHeight:600,
//     maxWidth:600,
//     minHeight:400,
//     minWidth:400,
//     backgroundColor:'#7B435B'
//   })
//   // load HTML file via url
//   windowOne.loadURL('https://www.electronjs.org/')
//   const windowTwo = new BrowserWindow({
//     backgroundColor:'#7B435B'
//   })
//   // load HTML file locally
//   windowTwo.loadFile('index.html')
// }

//! Creates a child-Parent set of windows
// function createWindow () {
//   const parent = new BrowserWindow({ title: "My First App" });
//   parent.loadURL('https://www.electronjs.org/');

//   let child = new BrowserWindow({
//     parent: parent,
//     modal: true, 
//     show: false
//  });
//   child.loadURL('http://localhost:3000')
//   parent.show();
//   child.once('ready-to-show', () => {   child.show() })
//  }

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

/* In this file you can include the rest of your app's specific main process
 code. You can also put them in separate files and require them here. */

ipcMain.on('anything-asynchronous', (event, arg) => {
  //execute tasks on behalf of renderer process 
      console.log(arg) // prints "ping"
  })