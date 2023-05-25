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
        areCentered:{
            type:Boolean,
            default:false
        }
    },
    components:{
        AppTag,
    },
    computed:{
        getCenteredStyle(){
            return (this.areCentered) ? 'p-2 m-auto justify-content-center' : '';
        }
    }
}
</script>

<template lang="">
    <div class="tags-container d-flex flex-wrap w-100 align-items-center" :class="getCenteredStyle">
        <AppTag :tagsLength="tags.length" :index="i" :nPerRow="tagsPerRow" :tagContent="tag" :type="tagType" v-for:="(tag, i) in tags"/>
    </div>
</template>

<style lang="scss" scoped>
    
</style>