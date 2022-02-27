import React,{ Component} from "react";

class Person extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        let obj = new Component();
        console.log(obj);
        return(
            <div>
                <h1>My name is :{this.props.name} and age : {this.props.age} .My Education : {this.props.edu}</h1>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

export default Person;