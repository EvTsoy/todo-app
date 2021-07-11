<template>
  <div class="add-todo">
    <add-todo @addTodo="addTodo"></add-todo>
    <filter-panel @category="category"></filter-panel>

    <todo-container
      v-if="categorySelected !== '1'"
      :todos="filteredTodos(0)"
      title="Todo:"
    ></todo-container>

    <hr class="d-1" />

    <todo-container
      v-if="categorySelected !== '0'"
      title="Completed:"
      done
      :todos="filteredTodos(1)"
    ></todo-container>
  </div>
</template>

<script>
import AddTodo from '../components/AddTodo.vue';
import FilterPanel from '../components/FilterPanel.vue';
import TodoContainer from '../components/TodoContainer.vue';

export default {
  components: {
    AddTodo,
    FilterPanel,
    TodoContainer,
  },

  data() {
    return {
      searchItem: '',
      categorySelected: 'all',
    };
  },

  created() {
    if (localStorage.getItem('category')) {
      this.categorySelected = JSON.parse(localStorage.getItem('category'));
    }
    this.loadTodos();
  },

  computed: {
    filteredTodos() {
      return (status) => {
        const todos = this.$store.getters['todos/todos'];
        const filter = this.$store.getters['todos/currentFilter'];

        let findName = new RegExp(filter.searchTerm, 'i');
        return todos.filter(
          (todo) => todo.text.match(findName) && todo.status === status
        );
      };
    },
  },

  methods: {
    loadTodos() {
      this.$store.dispatch('todos/loadTodos');
    },

    category(e) {
      this.categorySelected = e;
    },

    addTodo(e) {
      this.$store.dispatch('todos/addTodo', {
        text: e,
        status: 0,
      });
    },
  },
};
</script>
