import { Component } from "react";
import withCounter from "./withCounter";
class ClickCounter extends Component {
    render(){
        const {name}=this.props;
        return(
            <>
            <h1 id="Counter-title" className="mt-4">{name}</h1>
            <div>
                <h2 className="cursor-pointer bg-sky-200 text-center p-4 text-2xl" onClick={this.props.increaseCount}>{this.props.count}</h2>
            </div>
            </>
        )
    }
}

// eslint-disable-next-line react-refresh/only-export-components
export default withCounter(ClickCounter);