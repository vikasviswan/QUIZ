import React, { Component } from 'react';

class ChildComponent extends Component {
    componentWillUnmount(){
        alert("componentWillUnmount called");
    }
    render() {
        return (
            <div>
                <h3>Child component </h3>
            </div>
        );
    }
}

export {ChildComponent} ;