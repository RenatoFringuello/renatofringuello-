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
                    name:'home',//home must be the first, beacuse of the logo router-link
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

            this.setMetaThemeColor();
        },
        /**
         * set the content of the meta tag name="theme-color" to match the header gradient
         */
        setMetaThemeColor(){
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
        },
        /**
         * open | close the nav bar after an amount of milliseconds
         * @param {boolean} state open = true | closed = false
         * @param {int} millis the delay before change state - default = 0ms
         */
        navbarStateTo(state, millis = 0){
            setTimeout(()=>{
                this.isNavbarOpen = state;
            }, millis)
        }
    },
    created() {
        this.setMetaThemeColor();
    },
}
</script>

<template lang="">
    <header class="fixed-top">
        <nav class="navbar navbar-expand-fluid" :class="(this.isDarkTheme) ?'navbar-dark' :''">
            <div class="container-lg position-relative">
                <div class="text-capitalize">{{ $route.name }}</div>
                <router-link class="navbar-brand position-absolute translate-middle top-50 start-50" :to="{name:navLinks[0].name}">
                    <img src="@/assets/logo.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top">
                </router-link>
                <button class="navbar-toggler border-0" @click="navbarStateTo(!isNavbarOpen)" type="button" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <!-- links -->
            <div class="container-lg">
                <div class="navbar-collapse" :class="(isNavbarOpen)?'open':'closed' " id="navbarNav">
                    <ul class="navbar-nav text-end">
                        <li class="nav-item" :class="($route.name == navLink.name)? 'active fw-bold' : ''" v-for:="navLink in navLinks">
                            <router-link class="transition text-capitalize" @click="navbarStateTo(false, 150)" :to="{name:navLink.name}">
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
    
    #navbarNav{
        transition: all .7s ease-in;
        overflow-y: hidden;
        &.open{
            max-height: 500px;
        }
        &.closed{
            max-height: 0;
        }
    }
}
</style>