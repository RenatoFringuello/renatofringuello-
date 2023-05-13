<script>
import AppHeader from './components/partials/AppHeader.vue';

export default {
  name: "App",
  components: { AppHeader },
}
</script>

<template>
  <AppHeader/>
  <main>  
    <router-view></router-view>
  </main>
</template>

<style lang="scss">
  /* non scrivessi nulla non funzionerebbero i file scss globali 
  lasciare anche il lang */

</style>
