<script>
export default {
    name:'AppMainButton',
    props:{
        content:{
            type:String
        },
        type:{
            type:String,
            default:'filled'
        },
        theme:{
            type:String,
            default:'black-white'
        }
    }
}
</script>

<template lang="">
    <button class="main-button archivo-black-font text-uppercase" :class="[type, theme]">{{ content }}</button>
</template>

<style lang="scss" scoped>
    button{
        padding: .5rem 2rem;
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
            &.black{
                color: black !important;
            }
            &.white{
                color: white !important;
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
            &.black-white{
                background-color:  black;
                color:  white !important;
            }
            &.white-black{
                background-color:  white;
                color:  black !important;
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
            &.black-white{
                background-color:  black;
                color:  white !important;
                &::after{
                    content: '';
                    border:2px solid black;
                }
            }
            &.white-black{
                background-color:  white;
                color:  black !important;
                &::after{
                    content: '';
                    border:2px solid white;
                }
            }
        }
       
    }
</style>