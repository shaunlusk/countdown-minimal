import React from 'react';
import { TestWidget } from './app/components/test-widget/test-widget';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TestWidget name="Shaun" />
      </header>
    </div>
  );
}

export default App;
