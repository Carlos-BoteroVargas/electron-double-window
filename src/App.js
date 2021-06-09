import React, { Component } from "react";
import Button from "./components/Button";
import "./App.css";
import Alerts from './components/Alerts';
const electron = window.require('electron');
const remote = electron.remote;
const { BrowserWindow, dialog, Menu } = remote;

// const { ipcRenderer } = require('electron');
// ipcRenderer.send('anything-asynchronous', 'ping')

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
        <h1>Demo for Peaches
        <h6>This is the body</h6></h1>
        <div>
          <div class="count">
            <h3>Count:</h3>
            <h1>{count}</h1>
          </div>
          <div class="buttons">
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
            </div>
    </>  
    );
  }
}