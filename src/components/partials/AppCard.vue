<script>
import AppTitle from './AppTitle.vue';

export default {
    name:'AppCard',
    props:{
        icon:{
            type:String,
            default:''
        },
        title:{
            type:String,
            default:''
        },
        subTitle:{
            type:String,
            default:''
        }
    },
    components:{
        AppTitle,
    }
}
</script>

<template lang="">
    <div class="main-card d-flex flex-column justify-content-between">
        <div class="d-flex flex-wrap justify-content-between">
            <i v-if="icon != ''" class="icon mb-2" :class="icon"></i>
            <div class="text-md-end text-capitalize">
                <AppTitle v-if="title != ''" :content="title" className="title mb-1"/>
                <AppTitle v-if="subTitle != ''" :content="subTitle" className="sub-title mb-3"/>
            </div>
        </div>
        <slot></slot>
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