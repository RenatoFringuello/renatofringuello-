<script>
import { store } from '@/store'

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
    data() {
        return {
            store,
        }
    },
}
</script>

<template lang="">
    <div class="main-card d-flex flex-column justify-content-between">
        <!-- icon -->
        <i v-if="card.icon != ''" class="icon mb-2" :class="card.icon"></i>
        <div class="position-relative">
            <div class="text-end text-capitalize">
                <!-- titles -->
                <AppTitle v-if="card.title != ''" :content="card.title" className="title mb-1"/>
                <AppTitle v-if="card.subTitle != ''" :content="card.subTitle" className="sub-title mb-3"/>
            </div>
        </div>
        <div class="position-relative">
            <!-- content -->
            <p v-html="store.getContent(content)" class="m-0" v-for:="content in card.contents"></p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .main-card{
        overflow: hidden;
        background-color: $dominant-color;
        border-radius: $border-radius-1;
        padding:1rem;
        height: 100%;
        position: relative;

        i.icon,
        .title{
            background:-webkit-linear-gradient(45deg, $complementary-color, $complementary-darken-color); 
            -webkit-background-clip: text; 
            background-clip: text; 
            -webkit-text-fill-color: transparent;
        }
        i.icon{
            font-size: 6rem;
            
            position: absolute;
            top:0;
            left:0;
            transform: rotate(-30deg);
            opacity: .6;
        }
        .title{
            line-height: 2.2rem !important;
        }
        // with :deep(<inner-selector>) we can use scoped style to give element appended with v-html
        p:deep(img.flag){
            max-width: 30px;
        }
        p:deep(a.link){
            ::after:hover{
                content: '';
                animation: swing 1s;
            }
        }
    }
</style>