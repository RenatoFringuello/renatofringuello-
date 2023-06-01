<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: "App",
  components: { AppHeader, AppFooter },
}
</script>

<template>
  <AppHeader/>
  <main>  
    <router-view></router-view>
  </main>
  <AppFooter/>
</template>

<style lang="scss">
  /* non scrivessi nulla non funzionerebbero i file scss globali 
  lasciare anche il lang */

</style>
