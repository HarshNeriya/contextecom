import React, { createContext, useState } from 'react'
let cartContext=createContext();
export default function Maincontext(props) {
    let[carts,setcarts]=useState([
        
    ])
  return (
    <cartContext.Provider value={
{
    carts,
    setcarts
}
    }>
        {props.children}

    </cartContext.Provider>
  )
}
export{cartContext}
