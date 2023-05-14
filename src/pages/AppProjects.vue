<script>
import projects from "@/json/projects.json";

import AppProjectCard from "@/components/Projects/AppProjectCard.vue";
import AppCarousel from "@/components/partials/AppCarousel.vue";

export default {
    name:'AppProjects',
    components:{
        AppProjectCard,
        AppCarousel,
    },
    data() {
        return {
            //I will remove projects using an API to get the projects from a server
            projects,
            projectActiveId : 0,
            carouselId : 'project-carousel',
            baseGitHubUri:'https://github.com/RenatoFringuello/',
        }
    },
    methods:{
        goToCarousel(projectId){
            this.projectActiveId = projectId;
            const carousel = document.getElementById(this.carouselId);
            carousel.scrollIntoView();
            carousel.childNodes[0].scrollTo(0,0);
        }
    }
}
</script>

<template lang="">
    <div class="container-lg">
        <div class="row g-3 g-md-4">
            <div class="col-12 col-md-6 col-xl-4" v-for:="(project,i) in projects">
                <AppProjectCard :project="project" @click="goToCarousel(i)"/>
            </div>
            <div class="col-12 d-flex" :id="carouselId">
                <AppCarousel class="m-auto" :isHintActive="true" imgsLocation="projects" :imgs="projects[projectActiveId].snapshots"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#project-carousel{
    height: 100vh;
}
</style>