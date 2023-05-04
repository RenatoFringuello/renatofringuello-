<script>
export default {
    name:'AppScrollAnimation',
    props:{
        scrollType:{
            type:String,
        }
    }
}
</script>

<template lang="">
    <div class="scroll-box d-flex">
        <div :class="scrollType" class="m-auto">
        </div> 
    </div>
</template>

<style lang="scss" scoped>
.scroll-box{
    $size : 40px;
    $thickness : 2px;
    $duration : 1.2s;

    min-height: calc($size * 2);

    > div::after,
    > .mouse-left-right::before{
        //fa-solid for all the direct child of scrollbox (mouse::after, mouse-left-right::before and phone::after)
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        display: var(--fa-display,inline-block);
        font-family: "Font Awesome 6 Free";
        font-style: normal;
        font-variant: normal;
        font-weight: 900;
        line-height: 1;
        text-rendering: auto;
        position: absolute;

    }
    .mouse{
        width: $size;
        height: calc($size * 1.8);
        border: $thickness solid;
        border-radius: $size;
        position: relative;
        &::after{
            content: '';
            border: calc($thickness / 2) solid;
            border-radius: $thickness;
            transform: translate(-50%, 0%);
            top: 10px;
            left:50%;
            animation: upToDown $duration linear infinite alternate;
        }
        &.mouse-left-right{
            left:15%;
        }
        &.mouse-left-right::before{
            content: '\f151\10Shift';
            transform: translate(-50%, -50%);
            top: 50%;
            left:-150%;
            font-size: calc($size * 0.6);
        }
    }
    
    .phone{
        margin-top: 15px !important;
        aspect-ratio : 1/1;
        border: $thickness solid;
        border-radius: 50%;
        position: relative;
        animation: touch $duration linear infinite;
        
        &::after{            
            content: '\f25a';
            font-size: 2.7rem;
            transform: translate(-14px, -5px);
            top:50%;
            left: 50%;
        }
        &.phone-up-down::after{
            animation: dragUpToDown $duration linear infinite;
        }
        &.phone-left-right::after{
            animation: dragLeftToRight $duration linear infinite;
        }
    }
}
</style>