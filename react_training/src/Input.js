import React from 'react';

class Input extends React.Component{
    render(){
        return(
            <div>
                <div class="form-group" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <input type="text" className="form-control" id="input" aria-describedby="emailHelp" placeholder="운영진 이름" style={{ marginBottom: '10px' }}/>
                    <textarea type="text" className="form-control" id="input" aria-describedby="emailHelp" placeholder="설명"/>
                    <button type="button" class="btn btn-outline-primary btn-sm" style={{ marginTop: '20px' }}>작성</button>
                </div>
            </div>
        )
    }
}

export default Input;