import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component{
    render() {
        const number = 10;
        let string = 'hello';

        return(
            <div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontSize: '40px' }}> 
                <div className="title">miro</div>
                <div>참 쉽죠?</div>
                <div>{ number }</div>
                <div>{ string }</div>
                {
                    number + 11 === 20
                    ?
                    <div>number + 10은 20이다</div>
                    :
                    <div>number + 10은 20이 아니다</div>
                }
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <Counter/>
                </div>
            </div>
        )
    }
}

export default App;