<script>
import { store } from "@/store";

// import AppCarousel from "@/components/partials/AppCarousel.vue";
import AppTitle from "@/components/partials/AppTitle.vue";

export default {
    name:'AppProjects',
    components:{
        // AppCarousel,
        AppTitle,
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
                        'discord/discord_1.png',
                        'discord/discord_2.png',
                        'discord/discord_3.png',
                        'discord/discord_full.png',
                    ],
                    description:'This is a front-end project where I developed a full home page repica of the Discord website. During this exercise I had to recreate the same template I received from the web designer',
                    technologies:[1,2,3],
                    projectRepo:'htmlcss-discord'
                },
                {
                    name:'discord',
                    snapshots:[
                        'discord/discord_1.png',
                        'discord/discord_2.png',
                        'discord/discord_3.png',
                        'discord/discord_full.png',
                    ],
                    description:'This is a front-end project where I developed a full home page repica of the Discord website. During this exercise I had to recreate the same template I received from the web designer',
                    technologies:[1,2,3],
                    projectRepo:'htmlcss-discord'
                },
            ], 
            baseGitHubUri:'https://github.com/RenatoFringuello/',
        }
    }
}
</script>

<template lang="">
    <div class="container-lg">
        <div class="row g-3 g-md-4">
            <div class="col-12 col-md-6 col-lg-4" v-for:="project in projects">
                <div class="project-card position-relative">
                    <div class="info-card p-3 position-absolute bottom-0 d-flex flex-column justify-content-between">
                        <div>
                            <AppTitle :content="project.name" class="title archivo-black-font"/>
                            <AppTitle :content="project.description"/>
                        </div>
                        <div class="d-flex flex-wrap">
                            <div class="tag me-2" v-for:="techId in project.technologies">
                                <div class="d-none d-lg-block">
                                    {{ technologies[techId].name }}
                                </div>
                                <div class="d-block d-lg-none">
                                    {{ technologies[techId].logo }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <img class="img-fluid" :src="store.getImageSnap('projects', project.name, ['full.png'])" alt="">
                </div>
            </div>
        </div>
        <!-- <AppCarousel isHintActiveP="true" :imgs="projects[0].snapshots" imgsLocation="projects"/> -->
    </div>
</template>

<style lang="scss" scoped>
    .project-card{
        max-height: 300px;
        overflow: hidden;
        transition: .5s ease-in-out;

        &:hover{
            .info-card{
                opacity: 0;
            }
            box-shadow: 0 0 5px 5px #0002;
        }

        .info-card{
            width: 100%;
            height: 100%;
            color: white;
            background: #0007;
            opacity: 1;
            transition: .5s ease-in-out;
            cursor: pointer;

            .tag{
                border: 1px solid;
                border-radius: 3rem;
                padding: .25rem .75rem;
            }
        }
    }
    @media screen and (min-width:992px) {
        .project-card:hover{
            transform: scale(1.05);
        }
    }
</style>