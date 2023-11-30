import React from 'react';

function App() {
  //create a component with a title, input field, and 2 button
  return (
    <div className="App">
      <h1>Todo List</h1>
      <input type="text" placeholder="Enter todo"/>
      <button>Add</button>
      <button>Clear</button>
    </div>
  );
}

export default App;
