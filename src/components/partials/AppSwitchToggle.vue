<script>
export default {
    name:'AppSwitchToggle', 
    props:{
        icon : {
            type:String,
            default:'fa-solid fa-circle-exclamation'
        }
    },
    data() {
        return {
            themeState:false,//0
        }
    },
}
</script>

<template>
    <div class="switch-toggle" @click="$emit('changeTheme', !themeState)">
        <input class="container_toggle" type="checkbox" id="switch" name="theme" v-model="themeState">
        <label for="switch">
            <i :class="icon"></i>
        </label>
    </div> 
</template>

<style lang="scss" scoped>
    .switch-toggle{
        input[type=checkbox] {
            display: none;
        }

        label {
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
            background: $text-link-color;
            i{
                left: calc(100% - 5px);
                -webkit-transform: translateX(-100%);
                -moz-transform: translateX(-100%);
                -ms-transform: translateX(-100%);
                -o-transform: translateX(-100%);
                transform: translateX(-100%);
            }
        }
    }
</style>