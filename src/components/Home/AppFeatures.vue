<script>
import { store } from '@/store';

import AppCard from '@/components/partials/AppCard.vue';

export default {
    name:'AppFeatures',
    components:{
        AppCard,
    },
    data() {
        return {
            store,
            cards:[
                {
                    icon:'fa-solid fa-graduation-cap',
                    title:'education',
                    subTitle:'boolean careers',
                    contents:['I\'ve learnt basics of web development during the 6 month crash course at Boolean'],
                },
                {
                    icon:'fa-solid fa-language',
                    title:'languages',
                    subTitle:'',
                    contents:[
                        'I\'m learning english to do the exam to get the IELTS C1 certification.',
                        'My level in other langueages',
                        '_Italian_flag : Native',
                        '_English_flag : B1',
                    ],
                }
            ]
        }
    }
}
</script>

<template lang="">
    <section class="container-lg bg-danger py-5">
        <div class="row">
            <div class="col-12 col-lg-8">
                <div class="row g-3">
                    <div class="col-12 col-sm-6" v-for:="card in cards">
                        <AppCard :card="card" />
                        <!-- <AppCard :icon="card.icon" :title="card.title" :sub-title="card.subTitle" /> -->
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4 d-flex">
                <img class="m-auto" :src="store.getImageSnap('','me.png')" alt="">
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
img{
    @include image(contain, center, auto, auto)
}
</style>