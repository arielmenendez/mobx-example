import { useState } from 'react';
import TodoList from './components/TodoList';
import todoStore from './mobx/todoStore';

const App = () => {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    todoStore.addTodo({
      text: newTodo,
      completed: false,
    });
    setNewTodo('');
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <TodoList />
    </div>
  );
};

export default App;
