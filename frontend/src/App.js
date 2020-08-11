import React from 'react';

import TodoList from './components/TodoList';

const todos = [
  {
    id: "123",
    text: "text",
    completed: false,
  },
  {
    id: "123",
    text: "second task",
    completed: false,
  },
  {
    id: "123",
    text: "third task",
    completed: false,
  },
]

function App() {
  return (
    <div className="App">
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
