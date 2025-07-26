import React,{Children} from 'react'

export default function ButtonComp(props) {
    const {name, onClick }=props;
  return (
    <div>
        <button
        onClick={onClick}
        style={{backgroundColor:"orange",borderColor:"transparent",padding:"10px",borderRadius:"15px"}}> 
        {name}</button>
    </div>
  )
}

