import React from 'react';
import './App.css';
import Todos from './components/Todos'
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      <Todos />
      <Form />
    </div>
  );
}

export default App;
