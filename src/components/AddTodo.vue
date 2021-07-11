<template>
  <form @submit.prevent="addTodo">
    <textarea rows="2" class="todo-body" v-model="todo" required></textarea>
    <hr class="d-10" />
    <button class="button button-primary">Add Task</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      todo: '',
    };
  },

  emits: ['addTodo'],
  methods: {
    addTodo() {
      this.$emit('addTodo', this.todo);
      this.todo = '';
    },
  },
};
</script>
