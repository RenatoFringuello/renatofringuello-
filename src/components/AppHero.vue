<script>
import AppMainButton from './partials/AppMainButton.vue';
import AppTitle from './partials/AppTitle.vue';

export default {
    name:'AppHero',
    components:{
        AppMainButton,
        AppTitle
    },
    methods: {
        sendEmail(){
            window.location = 'mailto:renatofringuello7@gmail.com';
        }
    },
}
</script>

<template lang="">
    <section class="bg-dominant" id="hero">
        <div class="container-lg">
            <div class="row hero">
                <div class="col-12 col-md-8">
                    <div class="wrapper">
                        <div class="my-auto">
                            <AppTitle content="Renato Fringuello" className="main-title archivo-black-font mb-3"/>
                            <div class="ms-5">
                                <div class="mb-4">
                                    <div class="row">
                                        <div class="col-12 col-lg-7">
                                            <AppTitle content="Hi my name is Renato and I am a Full-stack Web Developer, based in Sassari" className="sub-title"/>
                                        </div>
                                    </div>
                                </div>
                                <AppMainButton content="Say Hi" class="comp-dom" @click="sendEmail()"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="wrapper profile-pic">
                        <img src="@/assets/images/logo.png" class="img-fluid m-auto">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #hero{
        .row.hero{
            min-height: 80vh;

            .wrapper{
                height: 100%;
                display: flex;
                flex-direction: column;
            }
        }
    }
</style>