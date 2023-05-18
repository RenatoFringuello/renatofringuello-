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
    methods: {
        getOrientationClass(imgPath){
            return (imgPath.includes('full')? 'full' : (imgPath.includes('portrait')) ? 'portrait' : 'landscape');
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
                            to see previews of other snapshot
                            to see previews of other snapshot
                        </div>
                    </div>
                </div>                        
                <div class="d-flex">
                    <AppMainButton content="Ok, I get it" class="m-auto white-black" @click="hintActive = false"/>
                </div>
            </div>
        </div>
        <!-- item -->
        <div class="item d-flex mx-3" v-for:="(imgPath, i) in imgs" ref="snaps">
            <img :src="store.getImageSnap(imgsLocation, imgPath)" :alt="imgPath" :class="getOrientationClass(imgPath)" class="m-auto">
            <!-- <img :src="store.getImageSnap(imgsLocation, imgPath)" :alt="imgPath" :class="(!imgPath.includes('full'))?'not-full' : ''" class="m-auto"> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .carousel{
        @include carousel(100%, 85vh, 'false');
        margin: 2rem 0;
        border-radius: $border-radius-2;
        
        .hint{
            width: 100%;
            height: 100%;
            background-color: #000a;
            color:white;
            left:1rem;
            border-radius: inherit;
        }
        .item{
            overflow-y: auto;
            
            img{
                border-radius: $border-radius-2;
                &.full{
                    width: 100%;
                }
                &.landscape{
                    @include image(contain, center, 100%, auto)
                }
                &.portrait{
                    @include image(contain, center, auto, 100%)
                }
            }
        }
    }
    
    @media screen and (max-width:767px) {
        //xs or sm
        .carousel{
            max-height: 70vh;
        }
    }
    @media screen and (max-width:1200px) {
        //from xs to lg
        .carousel .item img.not-full{
            @include image(contain, center, 100%, auto)
        }
    }
</style>