import React from "react";

let a = 2
class HeadingComponentbyclass extends React.Component {
    constructor() {
        super();
        this.state={
            a:2
        }
        this.updateVariableValue()
    }
    updateVariableValue() {
        setInterval(() => {
            this.setState({
                a:this.state.a+1,
            })

        }, 1000);
    }
    render() {
        return <div>
            <h2> Class Component --+ {this.props.title}</h2> <br />
            <p>value--{this.state.a}</p>
        </div>
    }
}

export default HeadingComponentbyclass;