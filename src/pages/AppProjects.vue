<script>
import { store } from "@/store";

import AppCarousel from "@/components/partials/AppCarousel.vue";

export default {
    name:'AppProjects',
    components:{
        AppCarousel,
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
        }
    }
}
</script>

<template lang="">
    <div class="container-lg">
        <AppCarousel isHintActiveP="true" :projects="projects"/>
    </div>
</template>

<style lang="scss" scoped>
    
</style>