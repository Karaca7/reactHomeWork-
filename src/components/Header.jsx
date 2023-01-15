import React from "react";
import { render } from "react-dom";
import useCounter from "../stores/counter.js";

class Header extends React.Component {



   constructor () {
    super();
    this.value=useCounter.getState().count
    useCounter.subscribe((state)=>this.value=state.count)

    //  useCounter.subscribe((state)=>this.value=state.count)
    // this.value()
  }
  render() {
   
    return <h1>{this.value}</h1>
    // return <button onClick={useCounter.getState().incerment()}>tıkla</button>;
  }
}

// function Header(){
// const data=  useCounter((state) => state.count);


//   return <h1>{data}</h1>

// }

export default Header;
