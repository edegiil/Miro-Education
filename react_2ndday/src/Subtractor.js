import React, { Component } from 'react';

class Subtractor extends Component{
    render(){
        return(
            <button className="btn btn-primary" onClick={this.props.counter_down}>-</button>
        )
    }
}

export default Subtractor;