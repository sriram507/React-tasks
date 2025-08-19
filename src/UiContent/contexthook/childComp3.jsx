import React from 'react';
import { useContext } from 'react';
import { userInfo } from './parentComp';
import { productInfo } from './parentComp';


export default function ChildComp3() {

const data=useContext(productInfo)
  return (
    <div>
        <h1>{data.p_name}</h1>
        <h2>{data.p_price}</h2>
        <h3>{data.p_model}</h3>

        </div>
  )
}
