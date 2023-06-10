<script>
import AppTitle from './AppTitle.vue';

export default {
    name:'AppCard',
    props:{
        /**
         * the card object with these properties:
         * - icon:String
         * - title:String
         * - subTitle:String
         * - content:String
         */
        card:{
            type:Object,
        }
    },
    components:{
        AppTitle,
    },
    methods:{
        /**
         * catch the keywords from the content and return an image based on the keyword
         * @param {String} content 
         */
        getContent(content){//cerca un modo per mostrare le flags
            let flag, level, hasFlag;
            
            //catch the flag content
            if(content.includes('_flag')){
                hasFlag = true;
                //get nationality
                flag = content.includes('It') ? 'IT' : 'GB';
                //get language level
                level = content.split('flag')[1];
            }

            return (hasFlag)
                ? `<img class="flag" src="https://flagsapi.com/${flag}/flat/64.png" alt="${flag} Flag">${level}`
                : content ;
        }
    }
}
</script>

<template lang="">
    <div class="main-card d-flex flex-column justify-content-between">
        <div class="d-flex flex-wrap justify-content-between">
            <!-- icon -->
            <i v-if="card.icon != ''" class="icon mb-2" :class="card.icon"></i>
            <!-- titles -->
            <div class="text-md-end text-capitalize">
                <AppTitle v-if="card.title != ''" :content="card.title" className="title mb-1"/>
                <AppTitle v-if="card.subTitle != ''" :content="card.subTitle" className="sub-title mb-3"/>
            </div>
        </div>
        <!-- content -->
        <p v-html="getContent(content)" class="m-0" v-for:="content in card.contents"></p>
    </div>
</template>

<style lang="scss" scoped>
    .main-card{
        background-color: $dominant-color;
        border-radius: $border-radius-1;
        padding:1rem;
        height: 100%;

        i.icon,
        .title{
            background:-webkit-linear-gradient(45deg, $complementary-color, $complementary-darken-color); 
            -webkit-background-clip: text; 
            background-clip: text; 
            -webkit-text-fill-color: transparent;
        }
        i.icon{
            font-size: 3.5rem;
        }
        .title{
            line-height: 2.2rem !important;
        }
    }
</style>