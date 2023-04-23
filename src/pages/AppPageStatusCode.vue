<script>
export default {
    name:'AppPageStatusCode',
    data() {
        return {
            statusCodes:[
                {
                    code:'400',
                    name:'Bad Request',
                    description:'The request can\'t be satisfied because of synthax errors'
                },
                {
                    code:'401',
                    name:'Unouthorized',
                    description:'Authentication is possible but it\'s failed'
                },
                {
                    code:'403',
                    name:'Forbidden',
                    description:'The request is legit but the server refuse to provide it'
                },
                {
                    code:'404',
                    name:'Not found',
                    description:'The page requested didn\'t exist yet'
                },
                {
                    code:'429',
                    name:'Too Many request',
                    description:'The client has done too many request in a small amount of time.'
                },
            ]
        }
    },
    methods: {
        /**
         * return the data (name | description) of the status code to find
         * @param {String} code 
         * @param {boolean} isName default = true
         */
        getStatusData(code, isName = true){
            const statusCode =  this.statusCodes.filter((statusCode)=>{return (statusCode.code == code)})[0];
            if(isName){
                return statusCode.name;
            }
            else{
                return statusCode.description;
            }
        }
    },
}
</script>

<template lang="">    
    <div class="container-lg">
        <div class="message text-center mt-5">
            <div class="error-code">{{ $route.name }}</div>
            <div class="fs-2 fw-bold">{{ getStatusData($route.name) }}</div>
            <div class="fs-4 my-text-secondary">{{ getStatusData($route.name, false) }}.</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .error-code{
        color:$complementary-color;
        line-height: 1;
        font-size: clamp(9rem, 25vw, 16rem);
        text-shadow: clamp(7px, 1vw, 10px) clamp(7px, 1vw, 10px) 0 $accent-color;
    }
</style>