import { observer } from 'mobx-react-lite';
import todoStore from '../mobx/todoStore';

const TodoList = observer(() => {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todoStore.todos.map((todo, index) => (
          <li key={index}>
            {todo.text}
            <button onClick={() => todoStore.removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>Completed Todos: {todoStore.completedTodosCount}</div>
    </div>
  );
});

export default TodoList;
