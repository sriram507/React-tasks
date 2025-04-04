import React,{Component} from "react";
class Notifications  extends Component{
    render(){
        return(
            <div>
                <h1>Notifications card</h1>
                <p>{this.props.name} has {this.props.type} your post</p>
            </div>
        )
    }
}
export default Notifications;


