import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const firstValue: string = 'React';
  const secondValue: number = 2020;
  const thirdValue: boolean = true;
  const fourthValue: number[] = [3, 5, 7];
  const fifthValue: Array<string> = ['React', 'Vue', 'Angular'];

  const values: Array<any> = [firstValue, secondValue, thirdValue, fourthValue, fifthValue];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {values.map(value => (
          <p>
            This value {value} is of {typeof value} value!
          </p>
        ))}
      </header>
    </div>
  );
}

export default App;
