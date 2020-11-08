import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const firstValue: string = 'React';
  const secondValue: number = 2020;
  const thirdValue: boolean = true;
  const fourthValue: number[] = [3, 5, 7];
  const fifthValue: Array<string> = ['React', 'Vue', 'Angular'];
  const tuple: [string, number] = ['React', 2020];

  const warning = (): void => {
    console.log('Warning!');
  }

  const values: Array<any> = [
    firstValue,
    secondValue,
    thirdValue,
    fourthValue,
    fifthValue,
    tuple
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {values.map((value, index) => (
          <p key={index}>
            This value {value} is of {typeof value} value!
          </p>
        ))}
        {warning()}
      </header>
    </div>
  );
}

export default App;
