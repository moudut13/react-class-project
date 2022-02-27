import React from "react";
import './App.css';
import { Component} from "react";
import Person from "./Components/Person";
import Books from "./Components/Books";

/*function App() {
  return (
    <div className="App">
      <h1> Shuvo Ahmad </h1>
    </div>
  );
}*/

class App extends Component {
    constructor() {
        super();
        this.state = {
            book : [
                {bookName : 'In Search of Lost Time',Writer : 'Marcel Proust'},
                {bookName : 'Ulysses',Writer : 'James Joyce'},
                {bookName : 'Moby Dick',Writer : 'Herman Melville'},
                {bookName : 'War and Peace',Writer : 'Leo Tolstoy'},
            ],
            now : 'shuvo'
        }
    }

    onShuvo = (sa) =>{
        this.setState({
            book : [
                {bookName : sa,Writer : 'Proust'},
                {bookName : '7899',Writer : 'James'},
                {bookName : 'Moby',Writer : 'Melville'},
                {bookName : 'War and 1971',Writer : 'Tolstoy'},
            ]
        });
    }

    changeShuvo = event =>{
        this.setState({
            book : [
                {bookName : event.target.value,Writer : 'Proust'},
                {bookName : '7899',Writer : 'James'},
                {bookName : 'Moby',Writer : 'Melville'},
                {bookName : 'War and 1971',Writer : 'Tolstoy'},
            ]
        })
    }

    render() {
        //let obj = new Component();
        //console.log(obj);
        return(
            <div className="App">
                <div>
                    <h1> Shuvo Ahmad </h1>
                    <Person name="Ahmad" age="23" edu="BSc" >Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Person>
                </div>
                <div>
                    <h1>Book List</h1>
                    <button onClick={() => this.onShuvo(this,'6537')}>Change State</button>
                    <input type="text" onChange={this.changeShuvo} />
                    <Books bookName={this.state.book[0].bookName} writer={this.state.book[0].Writer} />
                    <Books bookName={this.state.book[1].bookName} writer={this.state.book[1].Writer} inputName={this.changeShuvo}/>
                    <Books bookName={this.state.book[2].bookName} writer={this.state.book[2].Writer} />
                    <Books bookName={this.state.book[3].bookName} writer={this.state.book[3].Writer} change={this.onShuvo.bind(this,'9087')} />
                </div>
            </div>
        );
    }
}

export default App;
