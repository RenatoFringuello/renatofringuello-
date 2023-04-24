<script>
export default {
    name:'AppTitle',
    props:{
        content:{
            type:String
        },
        /**
         * className is the content of class attribute. try main-title | title | sub-title
         */
        className:{
            type:String,
            default:''
        }
    }
}
</script>

<template lang="">
    <div :class="className">{{ content }}</div>
</template>

<style lang="scss" scoped>
    .main-title{
        color:$complementary-color;
        line-height: 1;
        font-size: clamp(3rem, 10vw, 9rem);
        margin-left: -6px;
    }
    .title{
        font-size: 2rem;   
    }
    .sub-title{
        font-size: 1.5rem;   
    }
</style>