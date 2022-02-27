import React from "react";
import {Component} from "react";
import '../stylesheets/books.css';

class Books extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">

                        </div>
                        <div className="col-md-4">
                            <div>
                                <h3 onClick={this.props.change} >Book : {this.props.bookName}</h3>
                                <h4>Writer{this.props.writer}</h4>
                                <input type="text" onChange={this.props.inputName} />
                            </div>
                        </div>
                        <div className="col-md-4">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Books;