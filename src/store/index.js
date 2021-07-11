import { createStore } from 'vuex';
import todosModule from './modules/Todos/index.js';

export default createStore({
  modules: {
    todos: todosModule,
  },
});
