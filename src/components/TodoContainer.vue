<template>
  <div>
    <h2 class="add-todo__title">{{ title }}</h2>
    <ul class="todos" v-if="todos && todos.length > 0">
      <the-todo
        :todos="todos"
        :done="done"
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
      ></the-todo>
    </ul>
    <h2 v-else>No todos...</h2>
  </div>
</template>

<script>
import TheTodo from '../components/TheTodo.vue';

export default {
  components: {
    TheTodo,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    todos: {
      type: Array,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
