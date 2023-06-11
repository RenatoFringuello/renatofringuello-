<script>
import { store } from "@/store";

import AppTitle from "@/components/partials/AppTitle.vue";
import AppTagsContainer from "@/components/partials/AppTagsContainer.vue";

export default {
    name:'AppProjectInfo',
    props:{
        /**
         * this is a literal object with these properties : 
         * - name:String
         * - snapshots:Array
         * - description:String
         * - technologies:Array
         * - projectRepos:Array
         */
        project:Object,
    },
    components:{
        AppTitle,
        AppTagsContainer,
    },
    data() {
        return {
            store,
            baseGitHubUri:'https://github.com/RenatoFringuello/',
        }
    },
}
</script>

<template lang="">
    <div class="info-card d-flex flex-column justify-content-between">
        <div class="description mb-3">
            <AppTitle :content="project.name" class="title text-capitalize archivo-black-font mb-1"/>
            <div class="d-flex flex-wrap mb-3">
                <a :href="baseGitHubUri + repo" target="_blank" class="link link-blank me-3" v-for:="repo in project.repos">
                    <AppTitle  :content="repo" class="sub-title archivo-black-font"/>
                </a>
            </div>
            <!-- add a full descirption maybe with the process of the project-->
            <AppTitle :content="`${project.description}.`"/>
        </div>
        <AppTagsContainer class="d-flex d-sm-none" tagType="tag-image" :tags="this.store.getTechs(this.project.technologies)" :tagsPerRow="6"/>
        <AppTagsContainer class="d-none d-sm-flex d-lg-none" tagType="tag-image" :tags="this.store.getTechs(this.project.technologies)" :tagsPerRow="10"/>
        <AppTagsContainer class="d-none d-lg-flex" tagType="tag-image" :tags="this.store.getTechs(this.project.technologies)" :tagsPerRow="14"/>
    </div>
</template>

<style lang="scss" scoped>
    .info-card{
        width: 100%;
        height: 100%;
        color: $accent-comp-color;
        background: $complementary-color;
        padding: 1rem;
        border-radius: $border-radius-2;

        .description{
            a{
                color: $dominant-color !important;
            }
        }
    }
</style>