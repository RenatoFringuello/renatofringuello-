<script>
import AppTitle from '../partials/AppTitle.vue';
import AppMainButton from '../partials/AppMainButton.vue';

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
            <div class="col-12 col-md-5 position-relative pb-5">
                <div class="py-5 px-3">
                    <AppTitle content="More than +10 projects" className="title pb-3 fw-800 text-complementary-darken"/>
                    <AppTitle class="mb-3" className="sub-title" content="See the projects I developed during my studies in the Boolean Accademy Course 'Full-Stack Web Developer'"/>
                    <router-link to="projects">
                        <AppMainButton content="Project Highlight" theme="black-white" type="shadow"/>
                    </router-link>
                </div>
                <img class="snap" src="@/assets/images/projects/boolflix/boolflix_1.png" alt="Boolflix Project snapshot1">
            </div>
            <div class="col-12 col-md-7 position-relative p-0">
                <img class="snap" src="@/assets/images/projects/boolzapp/boolzapp_1.png" alt="Boolzapp Project snapshot1">
                <img class="snap" src="@/assets/images/projects/discord/discord_full.png" alt="Discord Project snapshot_full">
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section{
    margin-bottom:5rem;
}
.snap{
    @include image(cover, top, 100%, 100%, 100%, 65vh);
    
    &:nth-child(2){//select all 2nds child
        max-height: 30vh;
        width: 45%;
        position: absolute;
        
        &:nth-of-type(1){//first of type (the last from right, the one under the button)
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
@media screen and (min-width:992px) {
    //lg & more
    .snap{
        margin-top: -50px;
        &:nth-child(2){//select all 2nds child
            max-height: 45vh;
        }
    }
}
</style>