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
            navLinks:[
                {
                    name:'home',
                    icon:'fa-solid fa-house'
                }
            ]
        }
    },    
    methods: {
        /**
         * change the theme of the website by changing the class of the html tag
         * @param {boolean} isDark - true to activate dark mode
         */
        changeTheme(isDark){
            // console.log(isDark);
            this.isDarkTheme = isDark;

            this.transition();
            document.documentElement.setAttribute('data-theme', (isDark) ? 'dark' : 'light');

            //change the meta theme-color color
            let color = getComputedStyle(document.documentElement).getPropertyValue('--primary-darken-color');
            document.getElementById('metaThemeColor').setAttribute('content', color);
        },
        /**
         *  enable transition for all just for 1 sec
         */
        transition(){
            document.documentElement.classList.add('transition');
            window.setTimeout(() => {
                document.documentElement.classList.remove('transition');
            }, 1000)
        }
    },
    created() {
        this.changeTheme(false);
    },
}
</script>

<template lang="">
    <header>
        <nav class="navbar navbar-expand-fluid" :class="(isDarkTheme) ?'navbar-dark' :''">
            <div class="container-lg position-relative">
                <h1 class="m-0 text-capitalize">{{ $route.name}}</h1>
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
                        <li class="nav-item" v-for:="navLink in navLinks">
                            <router-link class="transition active text-capitalize fw-bold" :to="{name:navLink.name}">
                                {{ navLink.name }}
                                <i :class="navLink.icon"></i>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <AppSwitchToggle @change-theme="changeTheme" 
                                emitName="changeTheme" checkName="theme"
                                icon="fa-solid fa-moon" className="theme-toggle"/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header{
    background: linear-gradient($primary-darken-color, #0000);
    li{
        padding:.4rem 0;
        a{
            padding:.4rem 0;
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