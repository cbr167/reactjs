import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'




/**
 * function Apps(){
  return(
  <h1 style={{color:"#FF8C00"}}>Header</h1> 
  )
} 
const Apps = ()=><div>This is just to see how lamda can we written</div>
 */

// class App extends React.Component{

//   render(){
//     return(
//       <div>
//         <Header username="raj"/>
//         <Greeting username = "cbr"/>
//       </div>
//     )
//   }
// }

// class Greeting extends React.Component{
       
//   render(){
//       const date = new Date()
//       const hours =  date.getHours()
//       let timeOfDay
//       if(hours<12){
//         timeOfDay = "morning"
//       } else if(hours<17){
//         timeOfDay = "afternoon"
//       } else{
//         timeOfDay = "night"

//       }  
//       return(
//         <div>
//           <h1>Good{timeOfDay} to you {this.props.username}</h1>
//         </div>

//     )
//   }
// }
// class Header extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>Welcome,{this.props.username}</h1>
//       </div>
//     )
    
//   }
// }

ReactDOM.render( 
  <App/>
,
  document.getElementById('root')
);


