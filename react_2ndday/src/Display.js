import React, { Component } from 'react';

class Display extends Component{
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.number < 0){
            return false;
        }
        return true;
    }

    render() {
        return(
            <div style={{ width: '150px', height: '50px', backgroundColor: '#888', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>
                {this.props.number}
            </div>
        )
    }
}

export default Display;