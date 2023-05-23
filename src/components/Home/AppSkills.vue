<script>
import {store} from '@/store';

import AppTag from '@/components/partials/AppTag.vue';

export default {
    name:'AppSkills',
    components:{
        AppTag,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template lang="">
    <section class="container-lg bg-success" id="skills">
        <div class="row">
            <div class="col-12 col-md-5 bg-danger">.</div>
            <div class="col-12 col-md-7 bg-primary">
                <div class="tags-container justify-content-center pb-2 d-flex flex-wrap">
                    <AppTag :technology="tech" type="tag-image" class="square" v-for:="(tech, i) in store.technologies"/>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #skills{
        padding-top: 8rem;

        .tag{
            &:nth-last-child(1){
                margin-right: 0;
            }
        }
    }
</style>