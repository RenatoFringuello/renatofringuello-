<script>
import { store } from '@/store';

import AppProjectInfo from "@/components/Projects/AppProjectInfo.vue";
import AppProjectCard from "@/components/Projects/AppProjectCard.vue";
import AppCarousel from "@/components/partials/AppCarousel.vue";

export default {
    name:'AppProjects',
    components:{
        AppProjectCard,
        AppCarousel,
        AppProjectInfo,
    },
    data() {
        return {
            store,
            projectActiveId : 0,
            carouselId : 'project-carousel',
        }
    },
}
</script>

<template lang="">
    <!-- list of projects cards-->
    <div class="container-lg">
        <div class="row g-3 g-md-4">
            <div class="col-12 col-md-6 col-xl-4" v-for:="(project,i) in store.projects">
                <AppProjectCard :project="project" @click="store.goToCarousel(carouselId); projectActiveId = i"/>
            </div>
        </div>
    </div>
    <!-- carousel -->
    <div class="d-flex mt-4" :id="carouselId">
        <div class="m-auto container-lg">
            <AppCarousel :isHintActive="true" imgsLocation="projects" :imgs="store.projects[projectActiveId].snapshots"/>
        </div>
    </div>
    <!-- project info -->
    <div class="container-lg py-4">
        <AppProjectInfo :project="store.projects[projectActiveId]"/>
    </div>
</template>

<style lang="scss" scoped>
#project-carousel{
    height: 100dvh;
    background-color: $accent-color;
}
</style>