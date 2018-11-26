import React, { Component } from 'react';
import Display from './Display';
import Adder from './Adder';
import Subtractor from './Subtractor';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            number: 0
        }
    }

    counter_up = () => {
        this.setState({ number: this.state.number + 1 });
    }

    counter_down = () => {
        this.setState({ number: this.state.number - 1 });
    }

    render(){
        return(
            <div className="outer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '800px', height: '500px', backgroundColor: '#eee', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Display number={this.state.number}/>
                    <div style={{ display: 'flex', marginTop: '30px', width: '200px', justifyContent: 'space-around' }}>
                        <Adder counter_up={this.counter_up}/>
                        <Subtractor counter_down={this.counter_down}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;

//LifeCycle
/*
    constructor() : 컴포넌트가 새로 만들어질때 마다 호출

    renter() : 컴포넌트 화면 띄우기

    componentDidMount() : 컴포넌트가 화면에 나타나게 됬을때

    shouldComponentUpdate(nextProps, nextState) : 컴포넌트가 변화가 생겨야 할때

    componentDidUpdate(prevProps, prevState) : 업데이트 되고 render 호출하고 발생
*/