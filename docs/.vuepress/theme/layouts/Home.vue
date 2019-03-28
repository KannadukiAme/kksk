<template>
  <div class="home">
    <Header/>
    <div class="parallax"></div>
    <div>
      <h2>parallax effect</h2>
      <article>傘を持っている少女は立ち尽くしている。</article>
    </div>
    <div class="parallax"></div>
    <Footer/>
  </div>
</template>

<style lang="stylus" scoped>
.parallax
  background-image url('../../../img/kancolle_8807.jpg')
  // opacity 0.5
  height 100vh
  background-attachment fixed
  background-position center
  background-repeat no-repeat
  background-size cover
  z-index -1
  background-position-y $headerHeight
.home
  height 100%
</style>

<script>
import Header from "@theme/components/Header.vue";
import Footer from "@theme/components/Footer.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>


