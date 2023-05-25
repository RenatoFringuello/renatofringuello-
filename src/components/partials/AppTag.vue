<script>
import { store } from "@/store";

export default {
    name:'AppTag',
    props:{
        /**
         * this is a literal object with these properties : 
         * - name:String
         * - logo:String
         * - bgColor:String
         * - fgColor:String
         */
        tagContent:Object,
        /**
         * there are 3 types: tag-image | tag-name | both
         */
        type:{
            type:String,
            default:'both'
        }
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template lang="">
    <div v-if="type == 'both'" class="tag d-flex" :class="type" :style="`background:${tagContent.bgColor};`"
         :title="tagContent.name">
        <div class="d-none d-sm-block d-md-none d-lg-block text-capitalize fw-bold" :style="`color:${tagContent.fgColor}`">
            <!-- when sm or from lg forward show this -->
            {{ tagContent.name }}
        </div>
        <div class="d-block d-sm-none d-md-block d-lg-none m-auto">
            <!-- when xs or md-->
            <img :src="store.getImageSnap('technologies', tagContent.logo)" :alt="tagContent.name">
        </div>
    </div>
    <div v-else class="tag d-flex" :class="type" :style="`background:${tagContent.bgColor};`"
         :title="tagContent.name">
        <div v-if="type == 'tag-name'" class="text-capitalize fw-bold" :style="`color:${tagContent.fgColor}`">
            <!-- when sm or from lg forward show this -->
            {{ tagContent.name }}
        </div>
        <div v-else class="m-auto">
            <!-- when xs or md-->
            <img :src="store.getImageSnap('technologies', tagContent.logo)" :alt="tagContent.name">
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .tag{                    
        padding: .30rem .75rem;
        background-color: $accent-color;
        color: $accent-comp-color;
        border-radius: $border-radius-3;
        font-size: .8rem;
        width: calc((100% - (.5rem * 5)) / 6);
        aspect-ratio: 1/1;
        
        &:not(:nth-child(-n + 6)){
            margin-top: .5rem;
        }
        &:not(:nth-child(6n)){
            //give margin to all the tags but the multiple of 6
            margin-right: .5rem ;
        }
        &:nth-last-child(1){
            //to center the last row when has lest than 6 tags
            margin-right: 0;
        }
        
        &.link{
            box-shadow: 0 2px 2px 2px #0004;
            transition: .5s ease-in-out;
            cursor: pointer;
            &:hover{
                box-shadow: 0 2px 2px 2px #0000;
            }
        }
        
        img{
            @include image(contain, center, 100%, 100%, none, 90px);
        }
    }

    @media screen and (min-width:576px) and (max-width:767px), (min-width:992px){
        //when the screen is min 567px AND max 767px (sm) OR min is 992px (lg and more)        
        .tag.both,
        .tag.tag-name{
            width: auto !important;
            height:auto !important;
            margin-top: .5rem ;
            margin-right:.5rem ;
            aspect-ratio: auto;
        }
    }
</style>