<script>
/**
 * It's the a general swtich toggle with the icon in the thumb
 */
export default {
    name:'AppSwitchToggle', 
    emits:['toggle'],
    props:{
        /**
         * the full font awesome's class for the i tag
         */
        icon : {
            type:String,
            default:''
        },
        /**
         * the class Name to give to the label, used to set it to 'theme-toggle'
         */
        className:{
            type:String,
            default:''
        },
        /**
         * the name and id attribute of the checkbox
         */
        checkName:{
            type:String
        },
    },
    data() {
        return {
            state:false,//0
        }
    },
}
</script>

<template>
    <input class="container_toggle" type="checkbox" :id="checkName" :name="checkName" v-model="state">
    <label :for="checkName" :class="className" @click="$emit('toggle', !state)">
        <i :class="icon"></i>
    </label>
</template>

<style lang="scss" scoped>
    input[type=checkbox] {
        display: none;
    }

    label {
        &.theme-toggle{
            background: $complementary-color !important;
        }
        cursor: pointer;
        width: 55px;
        height: 30px;
        background: $secondary-color;
        margin: 0 0 0 auto;
        -webkit-border-radius: 100px;
        -moz-border-radius: 100px;
        border-radius: 100px;
        position: relative;
        
        i{
            display: grid;
            place-content: center;
            font-size: 15px;
            background: #fff;
            color: #000;
            width: 20px;
            height: 20px;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
            position: absolute;
            top: 5px;
            left: 4px;
            transition: cubic-bezier(0.68, -0.05, 0.27, 01.05) 320ms;
        }
    }

    input:checked + label {
        background: $complementary-color;
        i{
            left: calc(100% - 5px);
            -webkit-transform: translateX(-100%);
            -moz-transform: translateX(-100%);
            -ms-transform: translateX(-100%);
            -o-transform: translateX(-100%);
            transform: translateX(-100%);
        }
    }
</style>