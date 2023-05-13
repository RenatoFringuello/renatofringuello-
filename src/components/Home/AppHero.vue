<script>
import AppMainButton from '../partials/AppMainButton.vue';
import AppTitle from '../partials/AppTitle.vue';

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
                        <AppTitle content="Hi, my name is Renato." className="sub-title mb-2"/>
                        <AppTitle content="I am a Full Stack Web Developer" className="main-title archivo-black-font mb-2"/>
                        <div class="mb-4">
                            <div class="row">
                                <div class="col-12 col-lg-7">
                                    <AppTitle content="and I'm a guy who like to create, learn and do sports" className="sub-title"/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <AppMainButton content="Say Hi" class="comp-dom" @click="sendEmail()"/>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="wrapper">
                        <img src="@/assets/images/logo.png" class="img-fluid mx-auto">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #hero{
        .row.hero{
            min-height: 600px;

            .wrapper{
                height: 100%;
                display: flex;
                flex-direction: column;
                padding-top: 120px;
            }
        }
    }
</style>