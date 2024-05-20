import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const root = ReactDom.createRoot(document.getElementById("root"));

class Toggle extends Component{
    constructor(props){
        super(props);
        this.state = {show: true};
    }

toggleApp = () => {
    this.setState({show: !this.state.show});
};

    render(){
        return(
        <>
        <button onClick={this.toggleApp}>Toggle App component</button>
        {this.state.show && <App/>}
        </>
        )
    }
}
root.render(<Toggle/>);

