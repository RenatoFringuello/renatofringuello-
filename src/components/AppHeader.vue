<script>
import AppSwitchToggle from './partials/AppSwitchToggle.vue';

export default {
    name:'AppeHeader',
    components:{
        AppSwitchToggle,
    },
    data() {
        return {
            isDarkTheme : false,
            isNavbarOpen : false,
        }
    },    
    methods: {
        changeTheme(isDark){
            // console.log(isDark);
            this.isDarkTheme = isDark;
            if(isDark) {
                this.transition();
                document.documentElement.setAttribute('data-theme', 'dark');
            } else {
                this.transition();
                document.documentElement.setAttribute('data-theme', 'light');
            }
        }, 
        transition(){
            document.documentElement.classList.add('transition');
            window.setTimeout(() => {
                document.documentElement.classList.remove('transition');
            }, 1000)
        }
    },
}
</script>

<template lang="">
    <header>
        <nav class="navbar navbar-expand-fluid" :class="(isDarkTheme) ?'navbar-dark' :''">
            <div class="container-lg position-relative">
                <h1 class="m-0">Home</h1>
                <a class="navbar-brand position-absolute translate-middle top-50 start-50" href="#">
                    <img src="@/assets/logo.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top">
                </a>
                <button class="navbar-toggler border-0" @click="isNavbarOpen = !isNavbarOpen" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="container-lg">
                <div class="navbar-collapse" :class="(isNavbarOpen)?'':'collapse' " id="navbarNav">
                    <ul class="navbar-nav text-end">
                        <li class="nav-item">
                            <a class="transition active" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="transition" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="transition" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <AppSwitchToggle class="transition" @change-theme="changeTheme" icon="fa-solid fa-moon"/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header{
    background: linear-gradient(#0003, #0000);
    li{
        padding:.4rem 0;
        a{
            text-decoration: none;
            display:inline;
            border-bottom: 2px solid #0000;
        }
        &:hover{
            a{
                border-bottom: 2px solid;
            }
        }
    }
}
</style>