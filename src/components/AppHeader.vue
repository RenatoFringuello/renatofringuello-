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
                },
                {
                    name:'projects',
                    icon:'fa-solid fa-compass-drafting'
                },
                {
                    name:'about',
                    icon:'fa-solid fa-circle-info'
                },
            ]
        }
    },    
    methods: {
        /**
         * set the theme to dark|light state with a temporary transition effect and then set the meta theme-color
         * @param {boolean} state 
         */
        setTheme(state){
            this.transition();
            this.isDarkTheme = state;
            document.documentElement.setAttribute('data-theme', (this.isDarkTheme) ? 'dark' : 'light');
            // console.log(this.isDarkTheme);

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
        //change the meta theme-color color
        let color = getComputedStyle(document.documentElement).getPropertyValue('--primary-darken-color');
        document.getElementById('metaThemeColor').setAttribute('content', color);
    },
}
</script>

<template lang="">
    <header class="sticky-bottom">
        <nav class="navbar navbar-expand-fluid" :class="(this.isDarkTheme) ?'navbar-dark' :''">
            <div class="container-lg position-relative">
                <h1 class="m-0 text-capitalize">{{ $route.name }}</h1>
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
                        <li class="nav-item" :class="($route.name == navLink.name)? 'active fw-bold' : ''" v-for:="navLink in navLinks">
                            <router-link class="transition text-capitalize" :to="{name:navLink.name}">
                                {{ navLink.name }}
                                <i :class="navLink.icon"></i>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <AppSwitchToggle @toggle="setTheme" checkName="theme"
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
        &.active{
            font-size: 1.5rem;
            padding:.5rem 0;
        }
        &:not(.active) a:hover{/* every a but the a of .active */
            padding:.4rem 0;
            border-bottom: 2px solid;
            
            font-size: 1.3rem;
        }
        a{
            text-decoration: none;
            padding:.15rem 0;
            border-bottom: 2px solid #0000;
        }
    }
}
</style>