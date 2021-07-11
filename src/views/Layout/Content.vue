<template>
  <div>
    <h1>Hello!</h1>
    <p class="lead">
      You have <span class="welcome-message">{{ todoCount }} tasks</span> today
    </p>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    todoCount() {
      const todos = this.$store.getters['todos/todos'];
      return todos.filter((todo) => todo.status === 0).length;
    },
  },
};
</script>
