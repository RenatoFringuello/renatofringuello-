<script>
import AppHero from "../components/Home/AppHero.vue";
import AppProjectsPreview from "../components/Home/AppProjectsPreview.vue";
import AppFeatures from "../components/Home/AppFeatures.vue";
import AppSkills from "../components/Home/AppSkills.vue";
import AppFaq from "../components/Home/AppFaq.vue";

export default {
    name:'AppHome',
    components:{
        AppHero,
        AppProjectsPreview,
        AppFeatures,
        AppSkills,
        AppFaq,
    }
}
</script>

<template lang="">
    <AppHero />
    <AppProjectsPreview />
    <AppFeatures />
    <AppSkills />
    <AppFaq />
</template>

<style lang="scss" scoped>
    
</style>