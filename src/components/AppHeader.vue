<script>
import AppSwitchToggle from './partials/AppSwitchToggle.vue';

export default {
    name:'AppeHeader',
    components:{
        AppSwitchToggle,
    },
    data() {
        return {
            
        }
    },    
    methods: {
        changeTheme(theme){
            // console.log(theme);
            this.$emit('changeTheme', theme);
        }
    },
}
</script>

<template lang="">
    <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container-lg">
                <h1>Location</h1>
                <a class="navbar-brand" href="#">
                    <img src="@/assets/logo.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top">
                </a>
                <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li>
                            <AppSwitchToggle @change-theme="changeTheme" :themes="[
                                                        {
                                                            name:'light', 
                                                            icon:'fa-sun'
                                                        },
                                                        {
                                                            name:'dark', 
                                                            icon:'fa-moon'
                                                        },
                                                    ]"/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss">
    
</style>