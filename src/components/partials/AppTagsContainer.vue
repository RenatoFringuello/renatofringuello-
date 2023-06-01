<script>
import AppTag from '@/components/partials/AppTag.vue';

export default {
    name:'AppTagsContainer',
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
        },
        /**
         * it's a boolean value that when is true gives justifi-content-center and m-auto classes to the container
         */
        areCentered:{
            type:Boolean,
            default:false
        },
        /**
         * it's the maximum number of rows 
         */
        maxNRow:{
            type:Number,
            default:0
        }
    },
    components:{
        AppTag,
    },
    data() {
        return {
            seeMoreTag:{
                name:'see more',
                logo:'seeMore.svg',
                bgColor:'$accent-color',
                fgColor:'$accent-comp-color',
            },
        }
    },
    computed:{
        /**
         * if areCentered is true the tags will be displayed centered
         */
        getCenteredStyle(){
            return (this.areCentered) ? 'p-2 m-auto justify-content-center' : '';
        },
        /**
         * return the list of tags in the range of maxNRow * tagsPerRow, with the seemore tag if needed
         */
        verifiedTags(){
            return (this.tags.length > this.tagsPerRow * this.maxNRow && this.maxNRow != 0) 
                //true : return a list of tags till the max with the see more at end if requested
                ? [... this.tags.filter((tags,i) => i < (this.tagsPerRow * this.maxNRow -1)), this.seeMoreTag] 
                //false : change anything
                : this.tags;
        }
    },
}
</script>

<template lang="">
    <div class="tags-container d-flex flex-wrap align-items-center w-100" :class="getCenteredStyle" >
        <AppTag :tagsLength="tags.length" :index="i" :nPerRow="tagsPerRow" :tagContent="tag" :type="tagType" v-for:="(tag,i) in verifiedTags"/>
    </div>
</template>

<style lang="scss" scoped>
</style>