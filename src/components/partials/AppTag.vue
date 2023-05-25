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
        },
        /**
         * represent the number of tags in each row [default = 6]
         */
        nPerRow:{
            type:Number,
            default:6
        },
        /**
         * it's the index position of the tag in the tags list [default = 0 - in case of no list]
         */
        index:{
            type:Number,
            default:0
        },
        /**
         * it's the tags list count [default = 0 - in case of no list]
         */
        tagsLength:{
            type:Number,
            default:0
        }
    },
    data() {
        return {
            store,
            /**
             * if the tag is in the first row or not
             * true = the tag to create is in the first row (its position index is less than nPerRow)
             * false = the tag position index is bigger than nPerRow
             */
            isInFirstRow:true,
            /**
             * if the tag is in the first row or not
             * true = the tag to create is the last of the row (its position index + 1 is a multiple of nPerRow OR when it's the last of all tags even if not a multiple)
             * false = the tag isn't the last of its row
             */
            isLastOfRow:true,
        }
    },
    computed:{
        /**
         * set the background color
         * set the margin for tag that aren't in the first row or last of the row
         */
        getTagStyle(){
            let marginTop = (!this.isInFirstRow) ? '.5rem' : '0';
            let marginRight = (!this.isLastOfRow) ? '.5rem' : '0';
            return `
                background : ${this.tagContent.bgColor};
                margin-top : ${marginTop};
                margin-right : ${marginRight};`;
        },
        /**
         * calculate the width of the tag (in case it type is 'tag-image') based on nPerRow;
         */
        getWidth(){
            return { width: `calc((100% - (.5rem * ${this.nPerRow - 1})) / ${this.nPerRow})` };
        },
        /**
         * set the text color (for type tag-name)
         */
        getTagNameStyle(){
            return { color : this.tagContent.fgColor };
        }
    },
    mounted() {
        this.isInFirstRow = (this.index < this.nPerRow);//get if the tag is in the first row
        this.isLastOfRow = ((this.index+1) % this.nPerRow == 0 || this.index == this.tagsLength - 1);//get if the tag is the last of its row (multiple of nPerRow) or the last at all
    },
}
</script>

<template lang="">
    <div v-if="type == 'both'" class="tag d-flex" :class="type" :style="[getTagStyle, getWidth]"
         :title="tagContent.name">
        <div class="d-none d-sm-block d-md-none d-lg-block text-capitalize fw-bold" :style="getTagNameStyle">
            <!-- when sm or from lg forward show this -->
            {{ tagContent.name }}
        </div>
        <div class="d-block d-sm-none d-md-block d-lg-none m-auto">
            <!-- when xs or md-->
            <img :src="store.getImageSnap('technologies', tagContent.logo)" :alt="tagContent.name">
        </div>
    </div>
    <div v-else class="tag d-flex" :class="type" :style="[getTagStyle, getWidth]"
         :title="tagContent.name">
        <div v-if="type == 'tag-name'" class="text-capitalize fw-bold" :style="getTagNameStyle">
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
        aspect-ratio: 1/1;
        
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