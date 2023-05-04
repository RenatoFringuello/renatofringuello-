<script>
import { store } from "@/store";

import AppMainButton from "@/components/partials/AppMainButton.vue";
import AppScrollAnimation from "@/components/partials/AppScrollAnimation.vue";

export default {
    name:'AppProjects',
    components:{
        AppMainButton,
        AppScrollAnimation,
    },
    data() {
        return {
            store,
            //I had to to this because the backoffice isn't ready so I can't do api call to get the data
            technologies:[
                {
                    name: 'html 5',
                    logo: ''
                },
                {
                    name: 'css 3',
                    logo: ''
                },
                {
                    name: 'bootstrap',
                    logo: ''
                },
                {
                    name: 'scss',
                    logo: ''
                },
                {
                    name: 'js ES6',
                    logo: ''
                },
                {
                    name: 'axios',
                    logo: ''
                },
                {
                    name: 'vue 3',
                    logo: ''
                },
                {
                    name: 'php 8',
                    logo: ''
                },
                {
                    name: 'laravel 9',
                    logo: ''
                },
                {
                    name: 'npm',
                    logo: ''
                },
                {
                    name: 'composer',
                    logo: ''
                },
            ],
            projects:[
                {
                    name:'discord',
                    snapshots:[
                        '1.png',
                        '2.png',
                        '3.png',
                        'full.png',
                    ],
                    description:'This is a front-end project where I developed a full home page repica of the Discord website. During this exercise I had to recreate the same template I received from the web designer',
                    technologies:[1,2,3],
                    projectRepo:'htmlcss-discord'
                },
            ], 
            baseGitHubUri:'https://github.com/RenatoFringuello/',
            isHintActive: true,
        }
    },
    methods: {
        getImageSnap(project){
            return require(`@/assets/images/projects/${project.name}/${project.name}_${project.snapshots[project.snapshots.length -1]}`);
        }
    },
}
</script>

<template lang="">
    <div class="container-lg">
        <div class="carousel">
            <div class="item project-card position-relative" :class="(isHintActive)?'overflow-hidden' : 'overflow-auto'" v-for:="project in projects">
                <img class="img-fluid" :src="getImageSnap(project)" alt="">
                <div class="hint position-absolute p-5 top-0 start-0" :class="(isHintActive)?'d-block' : 'd-none'">
                    <div class="d-flex flex-column justify-content-between w-100 h-100">
                        <div class="d-flex flex-column align-items-center">
                            <div class="mb-3">
                                Scroll up | down 
                            </div>
                            <AppScrollAnimation class="mb-3 d-none d-lg-flex" scrollType="mouse mouse-up-down"/>
                            <AppScrollAnimation class="mb-3 d-flex d-lg-none" scrollType="phone phone-up-down"/>
                            <div>
                                to see the full page snapshot
                            </div>
                        </div>                        
                        <div class="d-flex">
                            <div class="m-auto text-center">
                                <div class="mb-2">
                                    Scroll left | right
                                </div>
                                <AppScrollAnimation class="mb-3 d-none d-lg-flex" scrollType="mouse mouse-left-right"/>
                                <AppScrollAnimation class="mb-3 d-flex d-lg-none" scrollType="phone phone-left-right"/>
                                <div>
                                    to see previews of other projects
                                </div>
                            </div>
                        </div>                        
                        <div class="d-flex">
                            <AppMainButton content="Ok, I get it" class="m-auto white-black" @click="isHintActive = false"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .carousel{
        @include carousel(100%, 100%, 'false');
        padding: 2rem 0;
        .project-card{
            overflow-y: auto;
            height: 100vh;
            max-height: 80vh;
            .hint{
                width: 100%;
                height: 100%;
                background-color: #000a;
            }
        }
    }
    
    @media screen and (max-width:767px) {
        .carousel .project-card{
            max-height: 70vh;
        }
    }
</style>