<script>
import AppHeader from './components/AppHeader.vue';

export default {
    name: "App",
    components: { AppHeader },
    data() {
      return {
        currentTheme:'light',
        themes:['light', 'dark']
      }
    },
    methods: {
      
    },
}
</script>

<template>
  <div :class="currentTheme" id="body">
    <Transition name="theme">
      <div class="wrapper-theme">
        <AppHeader @change-theme="(theme) => currentTheme = theme"/>
        <main>  
        </main>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss">
  /* non scrivessi nulla non funzionerebbero i file scss globali 
     lasciare anche il lang */

</style>
