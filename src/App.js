import React from 'react';
import './App.less';

function App(props) {
  return (
    <div className="App">
      {props.children}
    </div>
  );
}

export default App;
