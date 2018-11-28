import React from 'react';

class Name extends React.Component{
    render(){
        return(
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h3>{this.props.name}</h3>
                <h5>{this.props.exp}</h5>
            </div>
        )
    }
}

export default Name;