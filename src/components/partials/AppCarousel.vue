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
        /**
         * get extra classes from image name to assign [full e/o smartphone | tablet | desktop]
         * e.i. for a project I'm using a smartphone snapshot and it will add a class with this name which give a max-width of 500px to the image
         * @param {*} imgPath - the path of the image from the imgLocation
         * @returns {*} a string with the classes extracted 
         */
        getExtraClasses(imgPath){
            const fullCheck = (imgPath.includes('full'))? 'full' : '';
            const deviceCheck = (imgPath.includes('smartphone'))? 'smartphone' : (imgPath.includes('tablet'))? 'tablet' : 'desktop';
            return `${fullCheck} ${deviceCheck}`;
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
                        </div>
                    </div>
                </div>                        
                <div class="d-flex">
                    <AppMainButton content="Ok, I get it" class="m-auto white-black" @click="hintActive = false"/>
                </div>
            </div>
        </div>
        <!-- item -->
        <div class="item d-flex mx-3" v-for:="(imgPath, i) in imgs">
            <img :src="store.getImageSnap(imgsLocation, imgPath)" :alt="imgPath" :class="getExtraClasses(imgPath)" class="m-auto">
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .carousel{
        @include carousel(auto, 70vh, 'false');
        margin: 2rem 0;
        border-radius: $border-radius-2;
        > div{
            border-radius: inherit;
        }
        
        .hint{
            width: 100%;
            height: 100%;
            background-color: #000a;
            color:white;
            left:1rem;
        }
        .item{
            overflow-y: auto;
            img{
                border-radius: inherit;
                @include image(contain, center, auto, auto);
                &.full{
                    max-height:none;
                }
            }
        }
    }
    
    @media screen and (min-width:576px) {
        //sm & more
        .carousel .item img .smartphone{
            max-width:500px;
        }
    }
    @media screen and (min-width:768px) {
        //md & more
        .carousel{
            height: 85vh;
        }
    }
    @media screen and (min-width:992px) {
        //lg & more
        .carousel .item img .tablet{
            max-width:905px;
        }
    }
</style>