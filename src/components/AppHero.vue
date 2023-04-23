<script>
import AppMainButton from './partials/AppMainButton.vue';
export default {
    name:'AppHero',
    components:{
        AppMainButton
    },
    methods: {
        sendEmail(){
            window.location = 'mailto:renatofringuello7@gmail.com';
        }
    },
}
</script>

<template lang="">
    <section id="hero">
        <div class="container-lg">
            <div class="row">
                <div class="col-12 col-lg-6">
                    <div class="wrapper">
                        <div class="my-auto">
                            <div class="main-title mb-3">Renato Fringuello</div>
                            <div class="subTitle mb-5">Hi my name is Renato and I am a Full-stack Web Developer, based in Sassari</div>
                            <AppMainButton content="Say Hi" @click="sendEmail()"/>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="wrapper">
                        <img src="@/assets/logo.png" class="img-fluid m-auto">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #hero{
        .row{
            min-height: 80vh;

            .wrapper{
                height: 100%;
                display: flex;
                flex-direction: column;

                .main-title{
                    color:$complementary-color;
                    line-height: 1;
                    font-size: clamp(3rem, 10vw, 9rem);
                }
            }
        }
    }
</style>