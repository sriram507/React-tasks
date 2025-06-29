import React from "react";
import Child1 from "../Child1/Child1";
import ConditionalRend from "../conditionalRendering/conditionalrend";
import AdminComp from "../AdminComponent/AdminComp";
import UserComp from "../UserComponet/UserComp";


function Parent(props) {
  // return (<>
  //     {/* <h1>parentcomp</h1> */}
  //     {/* <Child1 c1="for childone from parent" c2="for childtwo from parent" /> */}
    
  //     <ConditionalRend isLoggedin={true} />
     
  //    </>)

return props.login==="user"?<UserComp/>:<AdminComp/>

}
export default Parent;



