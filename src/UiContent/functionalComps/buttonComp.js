// import React,{Children} from 'react'

// export default function ButtonComp(props) {
//     const {name, onClick }=props;
//   return (
//     <div>
//         <button
//         onClick={onClick}
//         style={{backgroundColor:"orange",borderColor:"transparent",padding:"10px",borderRadius:"15px"}}> 
//         {name}</button>
//     </div>
//   )
// }


import React from 'react';

export default function ButtonComp({ name, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        style={{
          backgroundColor: 'orange',
          color: 'white',
          border: 'none',
          padding: '10px 15px',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        {name}
      </button>
    </div>
  );
}

