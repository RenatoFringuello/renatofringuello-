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
    <section class="container-fluid px-0 color-scheme-b">
        <div class="row g-0 flex-md-row-reverse">
            <div class="col-12 col-md-5 position-relative d-flex flex-column justify-content-between">
                <div class="py-5 px-3">
                    <AppTitle content="More than +10 projects" className="title pb-3 fw-800 text-complementary-darken"/>
                    <AppTitle class="mb-3" className="sub-title" content="See the projects I developed during my studies in the Boolean Accademy Course 'Full-Stack Web Developer'"/>
                    <router-link to="projects">
                        <AppMainButton content="Project Highlight" theme="accent" type="shadow"/>
                    </router-link>
                </div>
                <div class="img-wrapper row g-0">
                    <div class="col-12 col-lg-6">
                        <img class="snap" src="@/assets/images/projects/boolflix/boolflix_1.png" alt="Boolflix Project snapshot1">
                    </div>
                    <div class="col-12 col-lg-6">
                        <img class="snap" src="@/assets/images/projects/boolzapp/boolzapp_1.png" alt="Boolzapp Project snapshot1">
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-7 position-relative p-0">
                <img class="snap" src="@/assets/images/projects/discord/discord_full.png" alt="Discord Project snapshot_full">
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .img-wrapper{
        .snap{
            @include image(cover, top, 100%, 100%, 100%, 200px);
        }
    }
    .snap{
        @include image(cover, top, 100%, 100%, 100%, 200px);
    }

    @media screen and (min-width: 768px) {
        .snap{
            @include image(cover, top, 100%, 100%, 100%, 80vh);
        }
    }
</style>