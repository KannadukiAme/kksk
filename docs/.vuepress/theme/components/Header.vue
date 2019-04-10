<template>
  <header class="header">
    <Logo class="header__logo"/>
    <NavLink class="header__navlist"/>
  </header>
</template>

<style lang="stylus">
.header
  width 100%
  position fixed
  background-color #FFF
  top 0
  border-bottom 1px solid $lightColor
  display grid
  grid-template-columns 100px auto
  padding $headerSpaceBetween 0
  .header__logo
    margin-left $headerSpaceBetween
  .header__navlist
    justify-self end
    align-self center
    margin-right $headerSpaceBetween
</style>

<script>
import Logo from "@theme/components/Logo.vue";
import NavLink from "@theme/components/NavLink.vue";
export default {
  components: {
    Logo,
    NavLink
  }
};
</script>
