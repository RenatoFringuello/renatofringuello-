<script>
import { store } from "@/store";

export default {
    name:'AppTag',
    props:{
        technology:Object,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template lang="">
    <div class="tag d-flex" :style="`background:${technology.bgColor}; color:${technology.fgColor}`"
         :title="technology.name">
        <div class="d-none d-sm-block d-md-none d-lg-block text-capitalize fw-bold">
            {{ technology.name }}
        </div>
        <div class="d-block d-sm-none d-md-block d-lg-none m-auto">
            <img :src="store.getImageSnap('technologies', technology.logo)" :alt="technology.name">
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .tag{                    
        padding: .30rem .75rem;
        background-color: $accent-color;
        color: $accent-comp-color;
        border-radius: $border-radius-3;
        font-size: .8rem;
        width: calc((100% - (.5rem * 5)) / 6);
        
        margin-top: .5rem;
        &:not(:nth-child(6n)){
            margin-right: .5rem;
        }
        
        img{
            @include image(contain, center, 100%, 35px);
        }
    }

    @media screen and (min-width:576px) and (max-width:767px), (min-width:992px){
        //when the screen is min 567px AND max 767px (sm) OR min is 992px (lg and more)        
        .project-card .info-card .tags-container .tag{                    
            width:auto;
            height:auto;
            margin: .5rem .5rem 0 0;
        }
    }
</style>