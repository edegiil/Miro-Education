import React, { Component } from 'react';

class Adder extends Component{
    render(){
        return(
            <button className="btn btn-primary" onClick={this.props.counter_up}>+</button>
        )
    }
}

export default Adder;