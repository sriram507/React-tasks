import React from "react";

function profileCard(props){
    return(
        <div>
            {/* <h1>profileCard</h1> */}
            <h1>Hello {props.name} from {props.city} - {props.role}</h1>
        </div>
    )
}
export default profileCard;

