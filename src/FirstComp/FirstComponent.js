import React, { Component } from 'react';

class FirstComponent extends Component {
    render() {
        return (
            <div>
                First Component {this.props.title}
            </div>
        );
    }
}

export default FirstComponent;