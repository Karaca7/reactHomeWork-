import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import useCounter from './stores/counter.js'
import useOrders from './stores/order.js'
import useFurits from './stores/furits.js'

import Header from './components/Header.jsx'


function App() {

  const value=useCounter((state)=>state.count)
  const incerment =useCounter((state)=>state.incerment)
  
  const orders=useOrders((state)=>state.orders)
  const setOrder=useOrders((state)=>state.setOrders)

  const inputRef=useRef()
  const addOrder=()=>{
    setOrder(inputRef.current.value)

  }
// console.log(useCounter)
  return (
    <div className="App">
      <input type="text" ref={inputRef} />
     {
      orders.map(order=>(

        <p>{order}</p>
      ))
     }
      <button onClick={addOrder}>ekle</button>
</div>  
  )
}

export default App
