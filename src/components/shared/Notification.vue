<template lang="pug">
    .columns.is-centered.is-mobile
      .column.is-half
        .notification.has-text-centered(:class="this.state")
          slot(name="body") No notification
</template>

<script>
export default {
  name: "Notification",
  props: {
    state: ""
  }
};
</script>

<style lang="scss" scoped>
.notification {
  margin-top: 32px;
}
</style>