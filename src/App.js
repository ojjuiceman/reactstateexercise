import React, { Component } from 'react';
import Rando from './Rando';
import Button from './Button';
import BrokenClick from './BrokenClick';
import RollDice from './RollDice';
import './App.css';

class App extends Component {
    render() {
        return <div className='App'>
            <RollDice />
        </div>;
    }
}

export default App;