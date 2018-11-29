import React from 'react';
import List from './List';
import Input from './Input';

class Box extends React.Component{
    state = {
        master: [{ name: '김형진', exp: '회장' }, { name: '배이산', exp: '부회장' }, { name: '문희조', exp: '비선실세' }, { name: '박기덕', exp: '말단' }, { name: '김수현', exp: '말단' }],
        name: '',
        exp: ''            
    }

    addPeople = () => {
        this.state.master.push({ name: this.state.name, exp: this.state.exp });
        alert('작성되었습니다.');
        this.setState({ name: '', exp: '' });
    }

    nameInput = (e) => {
        this.setState({ name: e.target.value });
    }

    expInput = (e) => {
        this.setState({ exp: e.target.value });
    }

    render(){
        return(
            <div style={{ height: '350px', width: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#b2d3ff' }}>
            {
                this.props.phase
                ?
                <Input name={this.nameInput} exp={this.expInput} add={this.addPeople}/>
                :
                <List master={this.state.master}/>
            }
            </div>
        )
    }
}

export default Box;