import React, { Component } from "react";
import Button from "./components/Button";
import "./App.css";
import Alerts from './components/Alerts';
import Pings from './components/Pings';
const electron = window.require('electron');
const ipcRenderer  = electron.ipcRenderer;

// prints "pong" on loading the page, teling IPC Main that we're ready to play ball
console.log(ipcRenderer.sendSync('anything-synchronous', 'ping on loading the page')) 

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

        <Alerts />
        <hr width='50%' />
        <Pings />
      </div>
    </>  
    );
  }
}