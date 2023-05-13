<script>
import { store } from "@/store";
import technologies from "@/json/technologies.json";

import AppTitle from "@/components/partials/AppTitle.vue";

export default {
    name:'AppProjectCard',
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
        AppTitle
    },
    data() {
        return {
            store,
            //I will remove technologies using an API to get the technologies from a server
            technologies,
        }
    },
}
</script>

<template lang="">
    <div class="project-card position-relative">
        <div class="info-card position-absolute bottom-0 d-flex flex-column justify-content-between">
            <div class="description">
                <AppTitle :content="project.name" class="title text-capitalize archivo-black-font"/>
                <AppTitle :content="`${project.description}.`"/>
            </div>
            <div class="tags-container d-flex flex-wrap">
                <div class="tag d-flex" :style="`background:${technologies[techId].bgColor}; color:${technologies[techId].fgColor}`"
                    v-for:="techId in project.technologies" :title="technologies[techId].name">
                    <div class="d-none d-sm-block d-md-none d-lg-block text-capitalize fw-bold">
                        {{ technologies[techId].name }}
                    </div>
                    <div class="d-block d-sm-none d-md-block d-lg-none m-auto">
                        <img :src="store.getImageSnap('technologies', technologies[techId].logo)" :alt="technologies[techId].name">
                    </div>
                </div>
            </div>
        </div>
        <img class="snapshot" :src="store.getImageSnap('projects', project.snapshots[project.snapshots.length-1])" :alt="`${project.name}'s snapshot'`">
    </div>
</template>

<style lang="scss" scoped>
    .project-card{
        height: 350px;
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
            color: white;
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
                    background: #000000a8;
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
                    width: calc((100% - (.5rem * 5)) / 6);
                    height: 45px;

                    margin-top: .5rem;
                    &:not(:nth-child(6n)){
                        margin-right: .5rem;
                    }
                    
                    img{
                        width: 25px;
                    }
                }
            }
        }

        img.snapshot{
            @include image(cover,top);
        }
    }
    
    @media screen and (min-width:576px) and (max-width:767px), (min-width:992px){
        //when the screen is min 567px AND max 767px (sm) OR min is 992px (lg and more)        
        .project-card .info-card .tags-container .tag{                    
            width:auto;
            height:auto;
            margin: .5rem .5rem 0 0;
        }
    }
    @media screen and (min-width:992px){
        //when the screen is min 992px (lg and more)        
        .project-card:hover{
            transform: scale(1.05);
        }
    }
</style>