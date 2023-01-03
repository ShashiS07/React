import React from "react";
import './textarea.css'

class TextArea extends React.Component{
    constructor(){
        super();
        this.state={
            input:"",
            Showparagraph:false,
        };
    }

    updateValue(value){
        this.setState({
            input:value
        })
    }

    changeinUpperCase(){
        this.setState({
            Showparagraph:true
        })
    }
    render(){
        return <div className="text-area">
            <textarea value={this.state.input} onChange={
                (event)=>this.updateValue(event.target.value)
            }/> <br/>
            <button onClick={
                ()=>{
                    this.changeinUpperCase()
                }
            }>Display in UpperCase</button>
            {this.state.Showparagraph && <p>{this.state.input.toUpperCase()}</p>}
        </div>
    }
}

export default TextArea