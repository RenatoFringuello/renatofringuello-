<script>
import { store } from "@/store";

import AppMainButton from "@/components/partials/AppMainButton.vue";
import AppScrollAnimation from "@/components/partials/AppScrollAnimation.vue";

export default {
    name:'AppCarousel',
    props:{
        /**
         * it's the boolean value to toggle the hint of scrolling of the carousel
         */
        isHintActive:{
            type:Boolean,
        },
        /**
         * it's the list of imgs relative path
         * ex. [discord/discord_1.png, discord/discord_2.png, discord/discord_full.png]
         */
        imgs:{
            type:Array,
        },
        /**
         * the folder name in images that contains the snapshots
         * ex. working with projects snapshots => 'projects'
         */
        imgsLocation:{
            type:String
        }
    },
    components:{
        AppMainButton,
        AppScrollAnimation,
    },
    data() {
        return {
            store,
            hintActive : false,
        }
    },
    created(){
        this.hintActive = this.isHintActive;
    }
}
</script>

<template lang="">
    <div class="carousel position-relative" :class="(hintActive)?'overflow-hidden' : 'overflow-auto'">
        <!-- hint -->
        <div class="hint position-absolute p-5 top-0" :class="(hintActive)?'d-block' : 'd-none'">
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
                    <AppMainButton content="Ok, I get it" class="m-auto white-black" @click="changeState(false)"/>
                </div>
            </div>
        </div>
        <!-- item -->
        <div class="item mx-3" v-for:="(imgPath, i) in imgs">
            <img class="img-fluid" :src="store.getImageSnap(imgsLocation, imgPath)" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .carousel{
        @include carousel(100%, 100%, 'false');
        margin: 2rem 0;
        height: 100vh;
        max-height: 80vh;
        border-radius: $border-radius-2;
        
        .hint{
            width: 100%;
            height: 100%;
            background-color: #000a;
            left:1rem;
        }
        .item{
            overflow-y: auto;
            height: 100%;
        }
    }
    
    @media screen and (max-width:767px) {
        .carousel{
            max-height: 70vh;
        }
    }
</style>