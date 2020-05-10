<template lang="pug">
  nav.level.has-background-dark.is-mobile
      .has-text-centered
        .field.has-addons
          p.control.has-icons-left
            input.input.is-medium(
              type="text",
              placeholder="Buscar..."
              v-model="searchQuery",
              @keyup.enter="search"
            )
            span.icon.is-small.is-left
              font-awesome-icon(icon="search")
          .field.is-grouped
            p.control
              button.btn-search.button.is-success.is-medium(@click="search") Buscar
            p.control
              button.button.is-danger.is-medium(@click="deleteSearch") &times;

</template>

<script>
export default {
  name: "NavBar",

  data () {
    return {
      searchQuery: ""
    };
  },

  methods: {
    search () {
      this.$emit("search", this.searchQuery);
    },
    deleteSearch () {
      this.searchQuery = "";
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  justify-content: center;
}

input::placeholder {
  font-size: 18px;
}

.level {
  padding: 1rem;
}

.btn-search {
  border-radius: 0 5px 5px 0;
}
</style>
