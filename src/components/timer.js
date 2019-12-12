
import React from 'react';


const seconds = (x) => (Math.floor((x / 1000) % 60) < 10) ?"0" + Math.floor((x / 1000) % 60) :Math.floor((x / 1000) % 60);
const minutes = (x) => (Math.floor((x / (1000 * 60)) % 60) <10) ?"0" + Math.floor((x / (1000 * 60)) % 60) :Math.floor((x / (1000 * 60)) % 60);
const hours = (x) => (Math.floor((x / (1000 * 60 * 60)) % 24)<10) ?"0" + Math.floor((x / (1000 * 60 * 60)) % 24) :Math.floor((x / (1000 * 60 * 60)) % 24);

class Timer extends React.Component {
 constructor(props){
     super(props)
      this.state = {timeStarted: false, timeStopped: true, clock:0, change:'Start'}        
       }
handleTime = () => {
  
 if (this.state.timeStopped){
       this.timer = setInterval(()=>{
       this.setState({timeStarted:true, timeStopped:false, change:'pause'});
     
     if (this.state.timeStarted){
         this.setState({clock: this.state.clock +1000})         
    }
         },1000)
   }
 if(this.state.timeStarted){
  this.setState({ timeStarted: false, timeStopped:true, change:'Start'});
  clearInterval(this.timer);
 }
}
stopTime = () => {
 
  this.setState({clock:0, change:'Start'});
  clearInterval(this.timer);
}       
             
 render(){
   return(
   <div>
       <div className="time">
           <div className="center"><h1>{hours(this.state.clock)}</h1> <p>Hour</p></div> <h1>:</h1>
           <div className="center"><h1>{minutes(this.state.clock)}</h1><p>Minute</p></div><h1>:</h1>
           <div className="center"><h1>{seconds(this.state.clock)}</h1><p>Second</p></div>
        </div ><br/>  
        <div className="time">
               <button onClick={this.handleTime}>{this.state.change}</button>
               <button onClick={this.stopTime}>Reset</button>
        </div>       
   </div>
 )}
}

export default Timer;




