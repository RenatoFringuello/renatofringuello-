<script>
import AppHero from "../components/Home/AppHero.vue";
import AppProjectsPreview from "../components/Home/AppProjectsPreview.vue";
import AppSkills from "../components/Home/AppSkills.vue";

export default {
    name:'AppHome',
    components:{
        AppHero,
        AppProjectsPreview,
        AppSkills,
    }
}
</script>

<template lang="">
    <AppHero />
    <AppProjectsPreview />
    <AppSkills />
</template>

<style lang="scss" scoped>
    
</style>