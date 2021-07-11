const URL = `//todo-8d723-default-rtdb.firebaseio.com`;
export default {
  async loadTodos({ commit }) {
    const res = await fetch(`${URL}/todos.json`);
    const data = await res.json();

    const todos = [];

    for (const key in data) {
      const todo = {
        id: key,
        status: data[key].status,
        text: data[key].text,
      };
      todos.push(todo);
    }
    commit('loadTodos', todos);
  },

  async addTodo({ commit }, todo) {
    const res = await fetch(`${URL}/todos.json`, {
      method: 'POST',
      body: JSON.stringify(todo),
    });
    const data = await res.json();
    commit('addTodo', {
      ...todo,
      id: data.name,
    });
  },

  async patchTodo({ commit }, todo) {
    const res = await fetch(`${URL}/todos/${todo.id}.json`, {
      method: 'PUT',
      body: JSON.stringify(todo),
    });

    if (res.ok) {
      commit('patchTodo', todo);
    }
  },

  async deleteTodo({ commit }, todo) {
    const res = await fetch(`${URL}/todos/${todo.id}.json`, {
      method: 'DELETE',
    });
    if (res.ok) {
      commit('deleteTodo', todo);
    }
  },

  applyFilter({ commit }, filter) {
    commit('applyFilter', filter);
  },
};
