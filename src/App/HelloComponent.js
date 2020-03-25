import React from 'react';
import ReactDOM from 'react-dom';



class StatefullComponent extends React.Component{
    render(){
        return <p>Statefull Component</p>
    }
}

ReactDOM.render(<StatefullComponent/>, document.getElementById('root'));