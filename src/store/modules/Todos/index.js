import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,

  state() {
    return {
      currentFilter: [],
      todos: [
        {
          id: 1,
          text: 'todo number 1',
          status: 0,
        },
        {
          id: 2,
          text: 'todo number 12',
          status: 0,
        },
        {
          id: 3,
          text: 'todo number 123',
          status: 1,
        },
        {
          id: 4,
          text: 'todo number 1234',
          status: 1,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
