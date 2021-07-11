export default {
  loadTodos(state, todos) {
    return (state.todos = todos);
  },

  addTodo(state, todo) {
    state.todos.push(todo);
  },

  patchTodo(state, todo) {
    const objIndex = state.todos.findIndex((t) => t.id === todo.id);
    if (objIndex !== -1) state.todos.splice(objIndex, 1, todo);
  },

  deleteTodo(state, todo) {
    const objIndex = state.todos.findIndex((t) => t.id === todo.id);
    if (objIndex !== -1) state.todos.splice(objIndex, 1);
  },

  applyFilter(state, filter) {
    state.currentFilter = filter;
  },
};
