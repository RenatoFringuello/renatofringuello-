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
div{
    line-height: 1;
    &.main-title{
        color:$complementary-color;
        font-size: clamp(3rem, 6vw, 4rem);
        margin-left: -0px;
        font-family: 'Archivo Black';
    }
    &.title{
        font-size: 2rem;
        font-family: 'Archivo Black';
    }
    &.sub-title{
        font-size: 1.3rem;
        line-height: 1.1 !important;
    }
}

</style>