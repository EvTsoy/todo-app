<template>
  <div class="filters">
    <div class="form-filters">
      <div class="form-group">
        <label for="title">Search by name</label>
        <input
          type="text"
          id="title"
          class="form-control"
          v-model="searchTerm"
        />
      </div>

      <div class="form-group">
        <label for="category">Category</label>
        <select
          v-model="category"
          class="form-control"
          @change="categoryChange"
        >
          <option
            v-for="(option, index) in options"
            :key="`option-${index}`"
            :value="option.value"
          >
            {{ option.text }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: '',
      category: 'all',
      options: [
        { text: 'All', value: 'all' },
        { text: 'Incomplete', value: '0' },
        { text: 'Completed', value: '1' },
      ],
    };
  },

  created() {
    if (localStorage.getItem('category')) {
      this.category = JSON.parse(localStorage.getItem('category'));
    }
  },

  watch: {
    searchTerm(value) {
      const filter = {
        searchTerm: value,
      };
      this.$store.dispatch('todos/applyFilter', filter);
    },
  },

  methods: {
    categoryChange(e) {
      localStorage.setItem('category', JSON.stringify(e.target.value));
      this.$emit('category', e.target.value);
    },
  },
};
</script>
