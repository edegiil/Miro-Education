import React, { Component } from 'react';

class Counter extends Component{
    state = {
        number: 0
    }

    counter_up = () => {
        this.setState({ number: this.state.number + 1 });
    }

    counter_down = () => {
        this.setState({ number: this.state.number - 1 });
    }

    render(){
        return(
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ height: '50px', width: '50px', backgroundColor: '#888', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{ this.state.number }</div>
                    <div style={{ height: '50px', width: '50px', backgroundColor: '#888', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{ this.state.number * 2 }</div>
                    <div style={{ height: '50px', width: '50px', backgroundColor: '#888', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{ this.state.number / 2 }</div>
                    <button type="button" className="btn btn-success" style={{ height: '50px', width: '50px' }} onClick={this.counter_up}>+</button>
                    <button type="button" className="btn btn-danger" style={{ height: '50px', width: '50px' }} onClick={this.counter_down}>-</button>
                </div>
                {/* 실습코드 */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h2>{ this.state.number >= 10 ? '첫번째 카운터가 10 이상' : undefined }</h2>
                    <h2>{ this.state.number * 2 >= 10 ? '두번째 카운터가 10 이상' : undefined }</h2>
                    <h2>{ this.state.number / 2 >= 10 ? '세번째 카운터가 10 이상' : undefined }</h2>
                </div>
            </div>
        )
    }
}

export default Counter;

// 오늘의 실습
/*
    카운터 밑에
    첫번째 카운터가 10 이상이 되면 "첫번째 카운터가 10이상" 출력되고
    두번째 카운터가 10 이상이 되면 "두번째 카운터가 10이상" 출력되고
    세번째 카운터가 10 이상이 되면 "세번째 카운터가 10이상" 출력
*/