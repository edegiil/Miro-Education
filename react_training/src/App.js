import React from 'react';
import Nav from './Nav';
import Box from './Box';

class App extends React.Component{
    constructor(props){
        super(props);
        // alert('지금부터 시작');
        this.state = {
            phase: true
        }
    }

    setPhaseInput = () => {
        this.setState({ phase: true });
    }

    setPhaseList = () => {
        this.setState({ phase: false });
    }

    render(){
        return(
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ height: '300px'}}></div>
                <Nav input={this.setPhaseInput} list={this.setPhaseList}/>
                <Box phase={this.state.phase}/>
                <div style={{ height: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '30px' }}>
                    <h3>실습 - 위의 박스를 만드시오</h3>
                    <p>컴포넌트 구조는 다음과 같이</p>
                </div>
            </div>
        )
    }
}

export default App;