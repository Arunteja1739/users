import React, { Component } from 'react';
import './index.scss';
// import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css';
import Home from './components/Home';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { data: null };
    }

    render() {
        return (
            <div>
                <Home />
            </div>
        );
    }
}

export default App;