<script>
import { store } from '@/store';

import AppTitle from '@/components/partials/AppTitle.vue';
import AppCard from '@/components/partials/AppCard.vue';

export default {
    name:'AppFeatures',
    components:{
        AppCard,
        AppTitle,
    },
    data() {
        return {
            store,
            cards:[
                {
                    icon:'fa-solid fa-graduation-cap',
                    title:'education',
                    subTitle:'boolean careers',
                    contents:[
                        'I\'ve learnt basics of web development during the 6 month crash course at _link[https://boolean.careers,Boolean Careers].',
                        'Come check my exercises/projects on my _link[https://github.com/RenatoFringuello,GitHub].'
                    ],
                },
                {
                    icon:'fa-solid fa-language',
                    title:'languages',
                    subTitle:'',
                    contents:[
                        'I\'m learning english to do the exam to get the IELTS C1 certification.',
                        'My level in other langueages',
                        '_flag[https://flagsapi.com/XX/flat/64.png,IT] : Native',
                        '_flag[https://flagsapi.com/XX/flat/64.png,GB] : B1',
                    ],
                },
                {
                    icon:'fa-solid fa-people-group',
                    title:'teamwork',
                    subTitle:'boolean careers',
                    contents:[
                        'During my studies at _link[https://boolean.careers,Boolean Careers] I\'ve also learnt some team-working soft skill.',
                        'I\'ve had the chance to develop this skill in years because I\'m a football player since 5 y/o',
                    ],
                },
                {
                    icon:'fa-solid fa-lightbulb',
                    title:'problem solving',
                    subTitle:'',
                    contents:[
                        'I had the opportunity to develop solving skills during:',
                        '- my high school programming studies',
                        '- at _link[https://boolean.careers,Boolean Careers]',
                        '- with real working experiences.',
                    ],
                }
            ]
        }
    }
}
</script>

<template lang="">
    <section class="container-lg py-5">
        <AppTitle content="general skills" className="title text-center text-uppercase pb-5 fw-800 text-complementary"/>
        <!-- cards -->
        <div class="row g-3">
            <div class="col-12 col-sm-6 col-xl-3" v-for:="card in cards">
                <AppCard :card="card" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
</style>