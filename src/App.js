import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles.css';
import './Components/Footer'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import MainContent from './Components/MainContent';
import TodoItem from "./Components/TodoItem"
import ContactCard from "./Components/ContactCard"
import Joke from './Components/Joke';
import productsData from './Components/vSchoolProducts';
import Product from './Components/Product'
import todoListData from './Components/todoListData'
import Conditional from './Components/Conditional'
import UserLoginOut from './Components/UserLoginOut'
import MemeGenerator from './MemeGenerater/MemeGenerator'
import Header from './MemeGenerater/Header'
import { render } from '@testing-library/react';

// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <MainContent/>  
//       <Footer/>
//     </div>
//   );
// }

// function App(){
//   const todoComponent = todoListData.map((item)=>
//   <TodoItem
//   key = {item.id}
//   todoItem = {item}
// />
//   )
//   return(
//     <div>
//      {todoComponent}
//     </div>
//   )
// }


// function App(){
//   return(
//     <div className="todo-list">
//    <ContactCard 
//        imgUrl = "https://placekitten.com/200/300" 
//        name="bhagyaraj" 
//        phn="4242422424" 
//        email="ergergew@.com"
//        />
//    <ContactCard imgUrl = "https://placekitten.com/200/300" 
//        name="bhagyaraj" 
//        phn="4242422424" 
//        email="ergergew@.com"
//        />
//    <ContactCard imgUrl = "https://placekitten.com/200/300" 
//        name="bhagyaraj" 
//        phn="4242422424" 
//        email="ergergew@.com"
//        />
//    <ContactCard imgUrl = "https://placekitten.com/200/300" 
//        name="bhagyaraj" 
//        phn="4242422424" 
//        email="ergergew@.com"
//        />
//    </div>
//   )
// }

// function App(){
//   return(
//     <div>
//       <Joke question="question1" punchline = "punchline1"/>
//       <Joke question="question2" punchline = "punchline21"/>
//       <Joke punchline = "punchline3"/>
//       <Joke question="question4" punchline = "punchline1"/>
//       <Joke question="question1" punchline = "punchline1"/>
//     </div>
//   )
// }

// function App(){
//   const productsComponents = productsData.map((productsItem)=> 
//   <Product 
//   key = {productsItem.id}
//   product = {productsItem}
//   />)
//   return(
//     <div>
//     {productsComponents}
//     </div>
//   )
// }
// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {
//       name:"raj",
//       age : "27"
//     }
//   }
//   render(){
//     return(
//       <div>
//       <h1>{this.state.name} </h1>
//       <h3>{this.state.age} years old</h3>
//       </div>
//     )
//   }
// }

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = { isLoggedIn : true}
//   }
//   render(){
//     return(
//       <div>
//         <h1>You are currently logged {this.state.isLoggedIn?"in":"out"}</h1>
//       </div>
//     )
//   }
// }


// class App extends React.Component{

//   constructor(){
//     super()
//     this.state = {
//       todos:todoListData
      
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }
// handleChange(id){
// this.setState(prevState=>{
//   const updatedTodos = prevState.todos.map(todo=>{
//     if(todo.id === id){
//       todo.completed = !todo.completed
//     }
//     return todo
//   })
//   return{
//   todos : updatedTodos
//   }
// })

// }
//   render(){
//     const todoItems = this.state.todos.map(item=>
//       <TodoItem 
//       key = {item.id}
//       item = {item}
//       handleChange = {this.handleChange}/>
//       )
//     return(
//       <div className="todo-list">
//         {todoItems}
//       </div>
//     )
//   }
// }
// class App extends React.Component{
//   constructor()
//   {
//     super()
//     this.state = {
//       isLoading : false
//     }
//   }
//   componentDidMount(){
//     setTimeout(() => {
//       this.setState({
//         isLoading:true
//       })
      
//     }, 3500);
//   }
  
// render(){
//   return(
//     <div>
//       <Conditional isLoading = {this.state.isLoading}/>
//     </div>

//   )
// }
// }
// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       isLoggedin:false
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick(){
//     this.setState((prevState)=>{
//       return { 
//        isLoggedin:!prevState.isLoggedin
       
//   }
// })
    
//   }
//   render(){
//     return(
// <UserLoginOut 
// isUserLogin = {this.state.isLoggedin}
// handleClick = {this.handleClick}

// />
//     )
//   }
// }

// class App extends React.Component{
  
//   constructor(){
//     super()
//     this.state = {
//       loading:false,
//       character:{}
//     }
//   }

//   componentDidMount(){
//     this.setState({loading:true})
//     fetch("http://jsonplaceholder.typicode.com/todos")
//     .then(response=>response.json())
//     .then(data=>{                                                                                         
//     this.setState({
//       loading:false,
//      character:data
     
  
//   })
// })
// }
//   render(){
//     console.log("raf",this.state.character[1].title)
//     const text = this.state.loading?"Loading...":this.state.character.title

     
//     return(
//      <div>
      
//        <p>{text}</p>
//      </div>
//     )
//   }
// }

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {
//       firstName:"",
//       lastName:"",
//       age:"",
//       gender:"",
//       location:"",
//       dietaryRestrictions:{
//         isVegan:false,
//         isVeg:true,
//         isNonVeg:false
//       }
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }
//   handleChange(event){
//     const {name,value,type,checked} = event.target
//     type === "checkbox"?this.setState({
  
//         [name]:checked
      
//     }):
//     this.setState({
    
//       [name]:value
//     }

//     )}
//   render(){
//     return(
//       <main>
  
//         <form onSubmit="handleSubmit">
//           <input name = "firstName" type = "text" value = {this.state.firstName} onChange = {this.handleChange} placeholder = "First Name"></input> <br/>
//           <input name = "lastName" type = "text" value = {this.state.lastName} onChange = {this.handleChange} placeholder = "Last Name"></input><br/>
//           <input name = "age" type = "text"   value = {this.state.age}onChange = {this.handleChange} placeholder = "Age"></input><br/>
//           <label>Select Gender:<br/>
//           <label><input type = "radio" name="gender" value="male" onChange={this.handleChange} />Male</label><br/>
//           <label><input type = "radio" name="gender" value="female" onChange={this.handleChange} />Female</label>
//           </label>
//           <br/>
//           <select
//           name="location"
//           onChange = {this.handleChange}>
//             <option>Newyork</option>
//             <option>Hyderabad</option>
//             <option>Kansas City</option>
//             <option>Manchester</option>
//           </select><br/>
//           <label>
//           <input type="checkbox" name="isVegan" onChange={this.handleChange} checked={this.state.isVegan}></input>isVegan
//           </label><br/>
//           <label>
//           <input type="checkbox" name="isVeg" onChange={this.handleChange} checked={this.state.isVeg}></input>isVeg
//           </label><br/>
//           <label>
//           <input type="checkbox" name="isNonVeg" onChange={this.handleChange} checked={this.state.isNonVeg}></input>isNonVeg
//           </label><br/>
//           <button>Submit</button>
//         </form>
//         <br/>
//         <hr/>
  
//         <p>{this.state.firstName} {this.state.lastName} age is {this.state.age} {this.state.gender} {this.state.location} {this.state.isNonVeg} </p>
      
//       </main>
//     )
//   }
// }

function App(){
 
  return(
<div>
  <Header/>
 
</div>
  )
}
export default App

