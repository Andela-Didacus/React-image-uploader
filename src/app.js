import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Images from './components/images';

class App extends Component {
    render() {
        return (
            <div>
                React app
                <Images/>
            </div>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('root'));