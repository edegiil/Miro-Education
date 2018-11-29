import React from 'react';

class Input extends React.Component{
    render(){
        return(
            <div>
                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <input type="text" className="form-control" id="input" aria-describedby="emailHelp" placeholder="이름" style={{ marginBottom: '10px' }} onChange={(e) => this.props.name(e)}/>
                    <textarea type="text" className="form-control" id="input" aria-describedby="emailHelp" placeholder="설명" onChange={(e) => this.props.exp(e)}/>
                    <button type="button" className="btn btn-outline-primary btn-sm" style={{ marginTop: '20px' }} onClick={this.props.add}>작성</button>
                </div>
            </div>
        )
    }
}

export default Input;