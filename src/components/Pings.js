import React from 'react';

const electron = window.require('electron');
const ipcRenderer  = electron.ipcRenderer;

function Pings() {
  return (
    <div>
      <div className="Pings">
        <button onClick={()=>{
          ipcRenderer.send('anything-asynchronous', 'ping')
          // reply
          ipcRenderer.on('asynchronous-reply', (event, arg) => {
          console.log("Hiii",arg) // prints "Hiii pong"
          })
        }}> Async </button>

        <button onClick={()=>{
          console.log('sync',ipcRenderer.sendSync('anything-synchronous',   'ping')) 
          // prints "sync pong"
        }}> Sync </button>
      </div>
    </div>
  )
}

export default Pings
