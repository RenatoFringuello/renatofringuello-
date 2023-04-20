<script>
export default {
    name:'AppSwitchToggle', 
    props:{
        themes : Array,
    },
    data() {
        return {
            themeState:false,//0
        }
    },
}
</script>

<template>
    <div class="switch-toggle" @click="$emit('changeTheme', themes[(themeState)? 0 : 1].name)">
        <label for="theme">
            {{ themes[(themeState)? 0 : 1].name }}
            <i class="fa-solid" :class="themes[(themeState)? 0 : 1].icon"></i>
        </label>
        <input type="checkbox" name="theme" id="theme" v-model="themeState">
    </div>
</template>

<style lang="scss">
    .switch-toggle{
        label{
            cursor: pointer;
            border: 1px solid;
            border-radius: 2rem;
            padding: .25rem 1rem;
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
        }
        input{
            display: none;
        }
    }
</style>