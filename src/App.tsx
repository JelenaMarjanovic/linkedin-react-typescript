import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Message from './Message';

const initialState = {
  name: 'React',
  message: 'TypeScript is great!',
};

type State = Readonly<typeof initialState>;

class App extends Component<any, State> {
  readonly state: State = initialState;

  render() {
    const { name, message } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Message name={name} message={message} />
        </header>
      </div>
    );
  }
}

export default App;
