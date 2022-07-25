<template>
  <section>
    <app-header />
    <router-view />
    <app-footer />
  </section>
</template>

<script>
import appHeader from "./cmps/app-header.cmp.vue";
import appFooter from "./cmps/app-footer.cmp.vue";
export default {
  name: "main-app",
  props: [],
  components: {
    appHeader,
    appFooter,
  },
  created() {
    this.$store.dispatch('loadPosts')
  },
}
</script>


<style>
</style>
