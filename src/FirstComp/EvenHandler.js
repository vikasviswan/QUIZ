import React, { Component } from 'react';

class EvenHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    changeValue = (event)=> {
     this.setState({
        value: event.target.value
    })
}

handleOnChange = (event) => {
    this.setState({
        value: event.target.value
    })
}

render(){
    return (
        <div>
            <>
            {this.state.value}
            first <input type="text" value={this.state.value} onChange={(event) => this.changeValue(event)}></input>
            <input type="text" value={this.state.value} onChange={(event) => this.handleOnChange(event)}></input>
            </>
        </div>
        )
}
}


export default EvenHandler;