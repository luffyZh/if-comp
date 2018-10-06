import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IfComp from './IfComponent';
// import IfComp from 'if-comp';


class App extends Component {
  render() {
    const InnerIfComp = () => (
      <IfComp 
        expression={true}
        trueComp={<h3>嵌套组件为真</h3>}
        false={<h3>嵌套组件为假</h3>}
      />
    )
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className='container'>
            <div className='box'>
              <h2>非嵌套组件</h2>
              <IfComp 
                expression={false}
                trueComp={<h3>表达式为真</h3>}
                falseComp={<h3>表达式为假</h3>}
              />
            </div>
            <div className='box'>
              <h2>嵌套组件</h2>
              <IfComp 
                expression={false}
                trueComp={<h3>表达式为真</h3>}
                falseComp={<div>表达式为假<InnerIfComp /></div>}
              />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
