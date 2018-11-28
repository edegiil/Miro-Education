import React from 'react';

class Nav extends React.Component{
    render(){
        return(
            <div style={{ height: '60px', width: '600px', backgroundColor: '#8cbdff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h2 style={{ margin: '0 0 0 15px' }}>Form</h2>
                <div style={{ margin: '0 15px 0 0', display: 'flex', justifyContent: 'space-around' }}>
                    <h4 style={{ margin: '0 15px 0 0', cursor: 'pointer' }} onClick={this.props.input}>input</h4>
                    <h4 style={{ margin: 0, cursor: 'pointer' }} onClick={this.props.list}>list</h4>
                </div>
            </div>
        )
    }
}

export default Nav;