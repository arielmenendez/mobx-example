import { makeAutoObservable, reaction, action } from 'mobx';

class TodoStore {
  todos = [];

  constructor() {
    makeAutoObservable(this);
    this.loadFromLocalStorage();

    // Automatically save to localStorage whenever the todos array changes
    reaction(
      () => this.todos.slice(), // Ensure we get a new array reference
      (todos) => {
        localStorage.setItem('todos', JSON.stringify(todos));
      }
    );
  }

  addTodo = action((todo) => {
    this.todos.push(todo);
  });

  removeTodo = action((index) => {
    this.todos.splice(index, 1);
  });

  get completedTodosCount() {
    return this.todos.filter((todo) => todo.completed).length;
  }

  loadFromLocalStorage() {
    const todos = localStorage.getItem('todos');
    if (todos) {
      this.todos = JSON.parse(todos);
    }
  }
}

const todoStore = new TodoStore();
export default todoStore;
