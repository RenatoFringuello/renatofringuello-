<script>
import AppTitle from './partials/AppTitle.vue';
import AppMainButton from './partials/AppMainButton.vue';

export default {
    name:'AppProjectsPreview',
    components:{
        AppTitle,
        AppMainButton,
    }
}
</script>

<template lang="">
    <section class="container-fluid overflow-x-hidden color-scheme-b">
        <div class="row flex-md-row-reverse">
            <div class="col-12 col-md-5 position-relative">
                <div class="py-5 px-3">
                    <AppTitle content="More than +10 projects" className="title fw-800 archivo-black-font text-complementary-darken"/>
                    <AppTitle class="mb-3" className="sub-title" content="See the projects I developed during my studies in the Boolean Accademy Course 'Full-Stack Web Developer'"/>
                    <router-link to="projects">
                        <AppMainButton content="Project Highlight"/>
                    </router-link>
                </div>
                <img class="snap" src="@/assets/images/boolflix/boolflix_1.png" alt="Boolflix Project snapshot1">
            </div>
            <div class="col-12 col-md-7 bg-danger position-relative p-0">
                <img class="snap" src="@/assets/images/boolzapp/boolzapp_1.png" alt="Boolzapp Project snapshot1">
                <img class="snap" src="@/assets/images/discord/discord_full.png" alt="Discord Project snapshot_full">
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.snap{
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
    max-height: 65vh;
    max-width: 100%; 
    
    &:nth-child(2){//select all 2nd child
        max-height: 45vh;
        width: 45%;
        position: absolute;
        
        &:nth-of-type(1){//first of type (the last displayed)
            top: calc(100% - 20px);
            left:-5%;
            z-index: 2;
            height: auto;
        }
        &:nth-of-type(2){//second of type (the middle one)
            top: 45%;
            left: 47%;
        }
    }
}
</style>