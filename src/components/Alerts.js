import React from 'react';
import "../App.css";
const electron = window.require('electron');
// const {shell} = window.require('electron');
const remote = electron.remote
const {dialog} = remote

const Alerts = ()=>{
  return(
  <div className='alerts'>
  {/* type:none */}
    <button onClick={()=>{
       dialog.showMessageBox({
          type:'none',
          title:'None',
          message:'Message Box: Type None'
        }
        ).then(result=>{
          console.log(result)
        })
    }}>Message Box:None</button>


  {/* type:info with buttons */}
    <button onClick={()=>{
    dialog.showMessageBox({
        type:'info',
        title:'Info',
        message:'First Info',
        buttons:['Howdy?','Alright']
    }
    ).then(result=>{
       console.log(result.response)
    })
    }}>Message Box:info with buttons</button>


  {/* type:error with detail */}
    <button onClick={()=>{
        dialog.showMessageBox({
            type:'error',
            title:'Error',
            message:'First Error',
            detail:'This isnt an error,just a demo'
        }
        ).then(result=>{
            console.log(result)
        })
    }}>Message Box: error with detail</button>


  {/* type:warning with checkboxlabel */}
    <button onClick={()=>{
      dialog.showMessageBox({
          type:'warning',
          title:'Warning',
          message:'First Warning',
          checkboxLabel:'Are you sure to proceed',
          buttons:['Go']
      }
      ).then(result=>{
          console.log(result.response,result.checkboxChecked)
      })
    }}>Message Box: warning with checkbox</button>
  </div>
  )
}

export default Alerts