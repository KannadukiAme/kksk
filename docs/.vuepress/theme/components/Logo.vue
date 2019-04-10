<template>
  <div class="logo">
    <span>{{title}}</span>
  </div>
</template>

<style lang="stylus" scoped></style>

<script>
export default {
  name: "Logo",
  computed: {
    title() {
      return this.$title;
    }
  }
};
</script>

