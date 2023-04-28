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
    <button class="main-button archivo-black-font text-uppercase">{{ content }}</button>
</template>

<style lang="scss" scoped>
    button{
        padding: .5rem 2rem;
        position: relative;
        
        &:hover::after{
            top:0px;
            left:0px;
        }
        
        &::after{
            content: '';
            position: absolute;
            top:10px;
            left:10px;
            height: 100%;
            width: 100%;
            transition: all .5s ease-in-out;
        }
        //colors
        &.comp-dom{
            background-color: $complementary-color;
            color: $dominant-color !important;

            &::after{
                content: '';
                border:2px solid $complementary-color;
            }
        }
        &.black-white{
            background-color: $accent-comp-color;
            color: $accent-color !important;

            &::after{
                content: '';
                border:2px solid $accent-comp-color;
            }
        }
        &.white-black{
            background-color: $accent-color;
            color: $accent-comp-color !important;

            &::after{
                content: '';
                border:2px solid $accent-color;
            }
        }
    }
</style>