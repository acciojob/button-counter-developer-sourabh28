import React, { Component } from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import App from "./App";

/**class App extends Component{
    constructor(props){
        super(props);
        this.state = {count : 0};
    }
    render(){
        console.log("inside render")
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button
                onClick={() => this.setState({count: this.state.count + 1})}
                    >Increment</button>
            </div>
        )
    }
}
*/
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
    <App/>
    </React.StrictMode>
);