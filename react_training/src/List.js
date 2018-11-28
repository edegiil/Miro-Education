import React from 'react';
import Name from './Name';

class List extends React.Component{
    render(){
        return(
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Name name={this.props.master1} exp={this.props.exp1}/>
            </div>
        )
    }
}

export default List;