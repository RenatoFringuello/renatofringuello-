<script>
import { store } from "@/store";

import AppTitle from "@/components/partials/AppTitle.vue";
import AppTagsContainer from "@/components/partials/AppTagsContainer.vue";

// import AppTag from "@/components/partials/AppTag.vue";

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
        AppTitle,
        AppTagsContainer,
        // AppTag,
    },
    data() {
        return {
            store,
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
            <AppTagsContainer :tags="store.getTechs(project.technologies)" />
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
                    border-radius: $border-radius-2;
                }
            }
            .tags-container{
                position: relative;//to put it above description::before
            }
        }

        img.snapshot{
            @include image(cover,top);
        }
    }
    
    @media screen and (min-width:992px){
        //when the screen is min 992px (lg and more)        
        .project-card:hover{
            transform: scale(1.05);
        }
    }
</style>