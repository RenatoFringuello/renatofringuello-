<script>
import {store} from '@/store';

import AppRowParagraphTags from '@/components/Skills/AppRowParagraphTags.vue';

export default {
    name:'AppSkills',
    components:{
        AppRowParagraphTags,
    },
    data() {
        return {
            store,
            skillsTechs:[
                'html 5',
                'css 3',
                'bootstrap',
                'sass',
                'js ES6',
                'axios',
                'vue 3',
                'php 8',
                'laravel 9',
                'node JS',
                'npm',
                'composer',
                'vite',
                'mySQL',
                'c#',
                'adobe photoshop',
            ],
            learningTechs:[
                'tailwind',
            ],
            versionTechs:[
                'git',
                'github'
            ]
        }
    },
    methods:{
        getTechs(techsToFind){
            return store.technologies.filter(tech => techsToFind.includes(tech.name));
        }
    }
}
</script>

<template lang="">
    <section class="" id="skills">
        <AppRowParagraphTags :technologies="getTechs(skillsTechs)" tagType="tag-image" title="Skills" subTitle="I studied Full Stack Web Development as self-taught first then I get the Boolean course where I had the opportunity to learn the basics of front-end and back-end web development"/>
        <AppRowParagraphTags :technologies="getTechs(learningTechs)" tagType="tag-image" :direction="false" title="Learning" subTitle="Now I'm currently learning these technologies"/>
        <AppRowParagraphTags :technologies="getTechs(versionTechs)" tagType="tag-image" title="Versioning" subTitle="During my studies I learned what git is and some basic commands to work in team"/>
    </section>
</template>

<style lang="scss" scoped>
    #skills{
        padding-top: 8rem;
    }
</style>