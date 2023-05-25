<script>
import AppTagsContainer from '../partials/AppTagsContainer.vue';
import AppTitle from '@/components/partials/AppTitle.vue';

export default {
    name:'AppRowParagraphTags',
    props:{
        /**
         * this is an array of literal object with these properties : 
         * - name:String
         * - logo:String
         * - bgColor:String
         * - fgColor:String
         */
        tags:Array,
        /**
         * the title of the row paragraph
         * pass empty string or null to disable it
         */
        title:String,
        /**
         * the paragraph of the row paragraph
         * pass empty string or null to disable it
         */
        subTitle:String,
        /**
         * true = flex-row [default]
         * false = flex-row-reverse
         */
        direction:{
            type:Boolean,
            default:true,
        },
        /**
         * it contains the type of the tag
         * must be both | tag-name | tag-image
         */
        tagType:{
            type:String,
            default:'both',
        },
        /**
         * it's the number of tags per row
         */
        tagsPerRow:{
            type:Number,
            default:6
        }
    },
    components:{
        AppTitle,
        AppTagsContainer,
    }
}
</script>

<template lang="">
    <div class="row g-0" :class="direction ? 'flex-row' : 'flex-row-reverse'">
        <div class="col-12 col-md-6 p-3 d-flex flex-column justify-content-center paragraph">
            <AppTitle v-show="title != ''" class="title mb-3 text-complementary-darken" :content="title"/>
            <AppTitle class="sub-title" :content="subTitle"/>
        </div>
        <div class="col-12 col-md-6 d-flex">
            <AppTagsContainer :areCentered="true" :tags="tags" :nPerRow="tagsPerRow" :tagType="tagType"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .paragraph{
        background-color: $accent-color;
        color: $accent-comp-color;
    }
</style>