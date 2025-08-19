import React from 'react';
import { useContext } from 'react';
import {userInfo} from './parentComp';
import ChildComp3 from './childComp3';
import { productInfo } from './parentComp';

export default function ChildComp2() {
    const value=(useContext(userInfo))
    const products=(useContext(productInfo))
    console.log(products)
  return (
    <div>

{/* <h1> Hello</h1>
<h1>{value}</h1> */}
<ChildComp3 />
    </div>
    
  )
}
