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
                <div style={{ height: '150px'}}></div>
                <Nav input={this.setPhaseInput} list={this.setPhaseList}/>
                <Box phase={this.state.phase}/>
                <div style={{ height: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '30px' }}>
                    <h3>실습 - 위의 박스를 만드시오</h3>
                    <p>자바스크립트 배열을 검색해서 사용(구글 검색 - '자바스크립트 배열', '자바스크립트 map')</p>
                    <p>컴포넌트 구조는 다음과 같이</p>
                    <img alt="explanation" src="https://lh3.googleusercontent.com/-pWMkTSbI9FA/W_7AKxs7kdI/AAAAAAAADd0/DS-IyrMs--0shXCH01zbFyOFHeuFf3FpgCJoC/w530-h530-n-rw/photo.jpg" style={{ height: '150px', width: 'auto' }}></img>
                </div>
            </div>
        )
    }
}

export default App;