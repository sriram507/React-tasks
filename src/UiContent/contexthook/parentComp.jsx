import React, { createContext, useState } from 'react'
import ChildComp1 from './childComp1';



export const userInfo=createContext();
export const productInfo=createContext();

export default function ParentComp() {

    const[user,setUser]=useState("John");
    const[products,setProducts]=useState({
        p_id:1,
        p_name:"mobile",
        p_price:"36000",
        p_model:"2025",
    });
  return (
    <div>
        <productInfo.Provider value={products}>
<userInfo.Provider value={user}>

<ChildComp1 />
</userInfo.Provider>
</productInfo.Provider>
    </div>
  )
}
