<script>
import projects from "@/json/projects.json";

import AppProjectCard from "@/components/Projects/AppProjectCard.vue";

export default {
    name:'AppProjects',
    components:{
        AppProjectCard,
    },
    data() {
        return {
            //I will remove projects using an API to get the projects from a server
            projects,
            baseGitHubUri:'https://github.com/RenatoFringuello/',
        }
    },
}
</script>

<template lang="">
    <div class="container-lg">
        <div class="row g-3 g-md-4">
            <div class="col-12 col-md-6 col-xl-4" v-for:="project in projects">
                <AppProjectCard :project="project"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>