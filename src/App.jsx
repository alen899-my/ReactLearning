import React from 'react'
import State from './components/State.jsx'
import Home from "../src/components/Home.jsx"
import Comp2 from './components/Comp2.jsx'
import Todo from "./components/Todo.jsx"
const ValidPassword=()=><h1 >IT is valid password</h1>
const InvalidPassword=()=><h1>IT is Invalid password</h1>
const Password=({isValid})=>{

 // if(isValid){
 //   return <ValidPassword />
 // }
   // return <InvalidPassword />
   return isValid? <ValidPassword/>: <InvalidPassword/>
}
const Cart=()=>{
  const items=["Iphone", "Macbook", "Ipad", "Apple Watch", "Airpods", "Apple TV"]
  return(
    <div className=''>
      <h1>cart items</h1>
      {items.length>0 && <h2>you have {items.length} items</h2>}
      <ul>
        {items.map((item)=>(
          <li key={Math.random()}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

const ButtonComp=()=>{
  const BtnSubmit=()=>console.log("clicked")
  return (
    <button onClick={BtnSubmit}>click me</button>
  )
}
const App = () => {
  return (
    <>
    <Home name={"Alen James"} age={23} />
    <Password isValid={true}/>
    <Cart />
    <ButtonComp/>
    <State/>
    <Comp2/>
    <Todo/>
    </>
  )
}

export default App