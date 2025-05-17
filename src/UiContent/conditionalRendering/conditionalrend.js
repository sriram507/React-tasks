function ConditionalRend(props){

// if (isLoggedin){

//     return(<>
//     <h1>login successfull</h1>
//     </>)
// }
// else{
//     return(<>
//     <h1>login unsucessfull</h1>
//     </>)
// }

return props.isLoggedin?<h1>login successfull</h1>:<h1>login unsuccessfull</h1>


}

export default ConditionalRend;
