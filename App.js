
import { Component } from "react";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {count:0}
    }
    increment = () => {
        this.setState({count: this.state.count + 1})
    };
    render(){
      console.log("inside render");
      return(
        <div>
            <p>Button clicked {this.state.count} times</p>
            <button onClick={this.increment}> Click me</button>
        </div>
      )
    }
}
export default App;