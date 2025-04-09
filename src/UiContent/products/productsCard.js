import Button from 'react-bootstrap/Button';
import React from "react";
function ProductCard(props){
    return(
        <div>
            <Button variant='warning'>{props.children[2]}</Button>
            <button>Click me</button>

            {props.children[1]}
        </div>
    )
}
export default ProductCard;
