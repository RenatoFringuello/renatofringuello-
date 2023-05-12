<script>
import { store } from "@/store";
import projects from "@/json/projects.json";
import technologies from "@/json/technologies.json";

import AppTitle from "@/components/partials/AppTitle.vue";

export default {
    name:'AppProjects',
    components:{
        AppTitle,
    },
    data() {
        return {
            store,
            //I had to to this because the backoffice isn't ready so I can't do api call to get the data
            technologies,
            projects,
            baseGitHubUri:'https://github.com/RenatoFringuello/',
        }
    },
}
</script>

<template lang="">
    <div class="container-lg">
        <div class="row g-3 g-md-4">
            <div class="col-12 col-md-6 col-lg-4" v-for:="project in projects">
                <div class="project-card position-relative">
                    <div class="info-card position-absolute bottom-0 d-flex flex-column justify-content-between">
                        <div class="description">
                            <AppTitle :content="project.name" class="title text-capitalize archivo-black-font"/>
                            <AppTitle :content="project.description"/>
                        </div>
                        <div class="tags-container d-flex flex-wrap">
                            <div class="tag d-flex me-2 mt-2"  :style="`background:${technologies[techId].bgColor}; color:${technologies[techId].fgColor}`"
                                v-for:="techId in project.technologies" :title="technologies[techId].name">
                                <div class="d-none d-lg-block text-capitalize fw-bold">
                                    {{ technologies[techId].name }}
                                </div>
                                <div class="d-block d-lg-none m-auto">
                                    <img :src="store.getImageSnap('technologies', technologies[techId].logo)" :alt="technologies[techId].name">
                                </div>
                            </div>
                        </div>
                    </div>
                    <img class="snapshot" :src="store.getImageSnap('projects', project.snapshots[project.snapshots.length-1])" :alt="`${project.name}'s snapshot'`">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .project-card{
        height: 300px;
        max-height: 300px;
        overflow: hidden;
        transition: .5s ease-in-out;
        border-radius: $border-radius-2;

        &:hover{
            .description:hover,
            .description:hover + .tags-container{
                opacity: 0;
            }
            box-shadow: 0 0 5px 5px #0002;
        }

        .info-card{
            width: 100%;
            height: 100%;
            color: $accent-color;;
            cursor: pointer;
            padding: 1rem;
            
            .description,
            .tags-container{
                transition: .5s ease-in-out;
            }
            .description{
                position: relative;
                z-index: 0;//to put it at the same level of tags-container
                &::before{
                    content: '';
                    z-index: -1;//to put it 1 level under its relative .description
                    position: absolute;
                    background: #0007;
                    top:0;
                    left:0;
                    transform: translate(-1rem,-1rem);// 1 rem is the padding of .info-card
                    width: 100vw;
                    height: 100vh;
                }
            }
            .tags-container{
                position: relative;//to put it above description::before
                .tag{                    
                    padding: .30rem .75rem;
                    background-color: $accent-color;
                    color: $accent-comp-color;
                    border-radius: $border-radius-3;
                    font-size: .8rem;
                    
                    img{
                        width:25px ;
                    }
                }
            }
        }

        img.snapshot{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
        }
    }
    @media screen and (min-width:992px) {
        .project-card:hover{
            transform: scale(1.05);
        }
    }
</style>