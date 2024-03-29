import { v4 } from 'uuid';

const fakeDatabase = {
  todos: [
    {
      id: v4(),
      text: 'hey',
      completed: true,
    },
    {
      id: v4(),
      text: 'ho',
      completed: true,
    },
    {
      id: v4(),
      text: "let's go",
      completed: false,
    },
  ],
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = filter => delay(500).then(() => {
  switch (filter) {
    case 'all':
      return fakeDatabase.todos;
    case 'completed':
      return fakeDatabase.todos.filter(todoState => todoState.completed);
    case 'active':
      return fakeDatabase.todos.filter(todoState => !todoState.completed);
    default:
      throw new Error(`Unknown filter ${filter}`);
  }
});

export const addTodo = text => delay(500).then(() => {
  const todo = {
    id: v4(),
    completed: false,
    text,
  };
  fakeDatabase.todos.push(todo);
  return todo;
});

export const toggleTodo = id => delay(500).then(() => {
  const todo = fakeDatabase.todos.find(t => t.id === id);
  todo.completed = !todo.completed;
  return todo;
});
