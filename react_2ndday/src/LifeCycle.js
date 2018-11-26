import React, { Component } from 'react';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log('constructor 실행');
        this.state = {
            number: 0
        }
    }
    componentDidMount() {
        console.log('componentDidMount 실행');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 5 의 배수라면 리렌더링 하지 않음
        console.log('shouldComponentUpdate 실행');
        if (nextState.number % 5 === 0){
            return false;
        } 
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate 실행');
    }

    handleIncrease = () => {
        this.setState({ number: this.state.number + 1 });
    }

    handleDecrease = () => {
        this.setState({ number: this.state.number - 1 });
    }

    render() {
        return ( 
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h3>5의 배수가 될때는 값이 반영되지 않게 하시오.</h3>
                <div style={{ fontWeight: 'bold', fontSize: '30px' }}>{this.state.number}</div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className="btn btn-primary" onClick={this.handleIncrease}>+</button>
                    <button className="btn btn-primary" onClick={this.handleDecrease}>-</button>
                </div>
            </div>
        )
    }
}

export default LifeCycle;