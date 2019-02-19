import React, { Component } from 'react';

import Trainer from './trainer/trainer';

import './App.css';

class App extends Component {
  state={
    trainer:{name:'SARTHAK AGARWAL' , course:'REACTJS'},
    showTrainer : false,
    trainers:[
      {id:'abc111' ,name:'SARTHAK' , course:'MERN'},
      {id:'abx112' , name:'RESHABH' , course:'ANGULAR'},
      {id:'abc234' ,name:'MEHUL' , course:'REACTJS'}
    ],
    isBold: true ,
    isColors:true
  }

  toggleTrainerHandler  = () => {
    console.log("I AM CLICKED");
    const isTrainerVisible = this.state.showTrainer;
    this.setState({
    showTrainer : !isTrainerVisible
    });
  }

  deleteTrainerHandler = (tIndex)=> {
    alert('HELLO YOU CLICKED'+" "+ tIndex);
    const trainerList=this.state.trainers;
    trainerList.splice(tIndex,1);
    this.setState({
     trainers:trainerList
    });
  }

  render() {
    const myStyle ={
      backgroundColor:'blue' ,
      padding: '10px' ,
      border: '5px solid yellow',
      color: 'white' 
    } 

    let trainers = null; 
    if(this.state.showTrainer===true){
      trainers =(
     <div>
     {
       this.state.trainers.map((t,index) => {
         return <Trainer name={t.name} course={t.course} 
         deleteOnClick={this.deleteTrainerHandler.bind(this,index)}></Trainer>
       })
     }
     </div>
      )
     // trainer = (
      // <div>
      // <Trainer name={this.state.trainer.name} 
      // course={this.state.trainer.course}></Trainer>
     //  </div>
      //)
      myStyle.backgroundColor='yellow';
    }

     
     const myClasses = [ ];
     if(this.state.isBold){
       myClasses.push('color-cls');
     }
     if(this.state.trainers.length <=1){
       myClasses.push('bold-cls');
       myStyle.backgroundColor='red';
     }


    return (
      <div className="App">
       <h1>WELCOME TO REACT APP</h1>
       <p className={myClasses.join(' ')}>HELLO , WELCOME TO REACT COMMUNITY</p>
       <button onClick = {this.toggleTrainerHandler} style={myStyle}>
       TOGGLE TRAINER SWITCH</button>
       {trainers}

          
      </div>
    );

  }
}

export default App;
