import React, { Component } from "react";
import Button from "./components/Button";
import "./App.css";
import Alerts from './components/Alerts';
import Pings from './components/Pings';
const electron = window.require('electron');
// const remote = electron.remote;
// const { BrowserWindow, dialog, Menu } = remote;
const ipcRenderer  = electron.ipcRenderer;

// const { ipcRenderer } = require('electron');
// console.log(ipcRenderer.sendSync('anything-synchronous', 'ping')) // prints "pong"
// ipcRenderer.send('anything-asynchronous', 'ping')
// ipcRenderer.on('asynchronous-reply', (event, arg) => {
//     console.log("Hiii",arg) // prints "Hiii pong"
// });

console.log(ipcRenderer.sendSync('anything-synchronous', 'ping on loading the page')) // prints "pong"

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    let { count } = this.state;
    return (
    <>
      <div className="app">
        <h1>Demo for Peaches</h1>
        <div>
          <div className="count">
            <h3>Count:</h3>
            <h1>{count}</h1>
          </div>
          <div className="buttons">
            <Button title={"-"} action={this.decrementCount} />
            <Button title={"+"} action={this.incrementCount} />
          </div>
          <br /><br /><br />
        </div>
      </div>
      <div align='center'>
        <hr width='70%' />
        <h1>Look at the Menu!</h1>
        {/* <button onClick={()=>{
            const template = [ 
            {
                label:'Open Website',
                click: function(){
                let win = new BrowserWindow({
                  width:600,
                  height:500,
                  // frame:false,
                })
                win.loadURL('https://www.electronjs.org/')
                }
            }
            ]
            const menu = Menu.buildFromTemplate(template)
            Menu.setApplicationMenu(menu)
        }}>Change Menu</button> */}
        <Alerts />
        <hr width='50%' />
        <Pings />
      </div>
    </>  
    );
  }
}