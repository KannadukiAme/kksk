<template>
  <div class="nav-link">
    <router-link
      v-for="navItem in navItems"
      :to="navItem.link"
      class="nav-link__item"
    >{{navItem.text}}</router-link>
  </div>
</template>

<style lang="stylus" scoped>
.nav-link__item
  text-decoration none
  color $darkColor
  margin-right 20px
.nav-link__item:hover
  color $accentColor
  margin-bottom: -2px
  border-bottom 2px solid $accentColor
</style>


<script>
export default {
  name: "NavLink",
  computed: {
    navItems() {
      return this.$themeConfig.nav;
    }
  },
  methods: {}
};
</script>

