<script>
export default {
    name:'AppMainButton',
    props:{
        content:{
            type:String
        },
    }
}
</script>

<template lang="">
    <button>{{ content }}</button>
</template>

<style lang="scss" scoped>
    button{
        background-color: $complementary-color;
        color: $dominant-color !important;
        padding: .5rem 2rem;
        position: relative;

        &:hover::after{
            top:0px;
            left:0px;
        }
        
        &::after{
            content: '';
            position: absolute;
            z-index: -1;
            top:10px;
            left:10px;
            height: 100%;
            width: 100%;
            border:2px solid $complementary-color;
            transition: all .5s ease-in-out;
        }
    }
</style>