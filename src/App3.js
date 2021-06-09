import React from 'react';
const electron = window.require('electron');
const {shell} = window.require('electron');
const remote = electron.remote
const {dialog} = remote

const App = ()=>{
    return(
        
      <button onClick={()=>{
          dialog.showOpenDialog({
            title:'Open Dialogue',
                message:'First Dialog',
             filters: [
             { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
             { name: 'Movies', extensions: ['mkv', 'avi', 'mp4'] },
             { name: 'Custom File Type', extensions: ['as'] },
             { name: 'All Files', extensions: ['*'] }
           ]
         }
          ).then(result=>{
            shell.openPath(result.filePaths[0])
            console.log(result.filePaths[0]);
            })
        }}>
          Open Dialog to Select a file
         </button>

    )
}

export default App