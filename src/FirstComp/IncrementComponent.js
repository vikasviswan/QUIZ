import React, { Component } from 'react';

class IncrementComponent extends Component {
    constructor(){
        super();
        this.state = {
            count:0
        }
    }
    IncrementCount=()=>
    {
        this.setState ({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                count :- {this.state.count}
                <button onClick={this.IncrementCount}> Increment </button>
            </div>
        );
    }
}

export default IncrementComponent;