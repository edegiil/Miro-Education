import React from 'react';
import Name from './Name';

class List extends React.Component{
    render(){
        return(
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            {
                this.props.master.map((master, i) => {
                    return(
                        <Name key={i} name={master.name} exp={master.exp}/>
                    )
                })
            }
            </div>
        )
    }
}

export default List;