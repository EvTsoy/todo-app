<template>
  <li class="todo-item" :class="{ active: active }">
    <div @click="toggleActionsTab" v-if="!isEditing">
      <img
        src="../assets/images/todo.svg"
        alt=""
        class="todoimg"
        v-if="!done"
      />
      <img src="../assets/images/done.svg" alt="" class="todoimg" v-else />
      <p :class="[{ done: done }]">
        {{ todoText }}
      </p>
    </div>

    <input class="todo-input" type="text" v-model="todoText" v-else />

    <div class="todo-item__actions" v-if="!done">
      <a class="button-sm button-edit" @click.prevent="editTodo">
        {{ isEditing ? 'Save' : 'Edit' }}
      </a>
      <a class="button-sm button-delete" @click.prevent="deleteTodo">
        Delete
      </a>
      <a class="button-sm button-ready" @click.prevent="completeTodo">
        Complete
      </a>
    </div>

    <div class="todo-item__actions" v-else>
      <a class="button-sm button-edit" @click.prevent="restoreTodo">
        Restore
      </a>
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      isEditing: false,
      todoText: this.todo.text,
    };
  },

  props: {
    todo: {
      type: Object,
    },
    done: {
      type: Boolean,
    },
  },

  methods: {
    toggleActionsTab() {
      this.active = !this.active;
    },

    editTodo() {
      if (this.isEditing) {
        this.$store.dispatch('todos/patchTodo', {
          ...this.todo,
          text: this.todoText,
        });
        this.isEditing = false;
      } else {
        this.isEditing = true;
      }
    },

    deleteTodo() {
      if (confirm('are you sure')) {
        this.$store.dispatch('todos/deleteTodo', this.todo);
      }
    },

    completeTodo() {
      this.$store.dispatch('todos/patchTodo', {
        ...this.todo,
        status: 1,
      });
    },

    restoreTodo() {
      this.$store.dispatch('todos/patchTodo', {
        ...this.todo,
        status: 0,
      });
    },
  },
};
</script>
