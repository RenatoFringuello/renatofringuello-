<script>
import AppTag from '@/components/partials/AppTag.vue';
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
        technologies:Array,
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
        }
    },
    components:{
        AppTag,
        AppTitle,
    }
}
</script>

<template lang="">
    <div class="row" :class="direction ? 'flex-row' : 'flex-row-reverse'">
        <div class="col-12 col-md-5 d-flex flex-column justify-content-center">
            <AppTitle v-show="title != ''" class="title mb-3 text-complementary" :content="title"/>
            <AppTitle class="sub-title mb-2" :content="subTitle"/>
        </div>
        <div class="col-12 col-md-7">
            <div class="tags-container justify-content-center pb-2 d-flex flex-wrap">
                <AppTag :technology="tech" :type="tagType" class="square" v-for:="tech in technologies"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .tag{
        &:nth-last-child(1){
            margin-right: 0;
        }
    }
</style>