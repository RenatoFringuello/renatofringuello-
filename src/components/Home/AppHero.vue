<script>
import { store } from '@/store';

import AppMainButton from '../partials/AppMainButton.vue';
import AppTitle from '../partials/AppTitle.vue';

export default {
    name:'AppHero',
    components:{
        AppMainButton,
        AppTitle
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template lang="">
    <section class="bg-dominant container-lg d-flex align-items-start justify-content-center align-items-lg-center justify-content-lg-start" id="hero">
        <div class="wrapper pt-5 pt-lg-0">
            <AppTitle content="Hi, my name is Renato." className="sub-title mb-2"/>
            <AppTitle content="I am a Full Stack Web Developer" className="main-title mb-3"/>
            <AppTitle content="and I'm a guy who like to create, learn and do sports" className="sub-title mb-4"/>
            <div>
                <AppMainButton content="Say Hi" class="me-5" type="shadow" theme="comp-dom" :isButton="false" href="mailto:renatofringuello7@gmail.com"/>
                <AppMainButton content="Download CV" type="comp" theme="underline" :isButton="false" href="files/Renato_Fringuello_CV2023.pdf" download/>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #hero{
        min-height: calc(100dvh - 120px);

        .wrapper{
            max-width: 600px;
            display: flex;
            flex-direction: column;
        }
    }
</style>