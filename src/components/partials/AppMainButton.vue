<script>
export default {
    name:'AppMainButton',
    props:{
        content:{
            type:String
        },
        isButton:{
            type:Boolean,
            default:true
        },
        type:{
            type:String,
            default:'filled'
        },
        theme:{
            type:String,
            default:'black-white'
        },
        href:{
            type:String,
            default:''
        }
    },
}
</script>

<template lang="">
    <button v-if="isButton" class="main-action archivo-black-font text-uppercase" :class="[type, theme]">{{ content }}</button>
    <a v-else class="main-action archivo-black-font text-uppercase" :class="[type, theme]" :href="href">{{ content }}</a>
</template>

<style lang="scss" scoped>
    .main-action{
        text-decoration: none;
        display: inline-block;
        padding: .5rem 1rem;
        position: relative;

        //types
        &.underline{
            background-color: #0000;
            border:2px solid #0000!important;
            border-bottom:2px solid !important;
            transition: all .5s ease-in-out;
            &:hover{
                border:2px solid !important;
            }

            //colors
            &.comp{
                color: $complementary-color !important;
            }
            &.accent{
                color: $accent-comp-color !important;
            }
        }
        &.filled{
            transition: all .8s ease-in;
            &:hover{
                border-radius: 3rem;
            }
            //colors
            &.comp-dom{
                background-color: $complementary-color;
                color: $dominant-color !important;
            }
            &.accent{
                background-color:  $accent-comp-color;
                color:  $accent-color !important;
            }
        }
        &.shadow{
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
            &.accent{
                background-color:  $accent-comp-color;
                color:  $accent-color !important;
                &::after{
                    content: '';
                    border:2px solid $accent-comp-color;
                }
            }
        }
       
    }
</style>