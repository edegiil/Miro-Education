import React from 'react';
import List from './List';
import Input from './Input';

class Box extends React.Component{
    state = {
        master1: '김형진',
        master2: '배이산',
        master3: '문희조',
        master4: '박기덕',
        master5: '김수현',
    }

    render(){
        return(
            <div style={{ height: '350px', width: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#b2d3ff' }}>
            {
                this.props.phase
                ?
                <Input/>
                :
                <List master1={this.state.master1} master2={this.state.master2} master3={this.state.master3} master4={this.state.master4} master5={this.state.master5}/>
            }
            </div>
        )
    }
}

export default Box;