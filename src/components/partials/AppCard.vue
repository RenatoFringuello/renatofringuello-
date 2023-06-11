<script>
import AppTitle from './AppTitle.vue';

export default {
    name:'AppCard',
    props:{
        /**
         * the card object with these properties:
         * - icon:String
         * - title:String
         * - subTitle:String
         * - content:String
         */
        card:{
            type:Object,
        }
    },
    components:{
        AppTitle,
    },
    methods:{
        /**
         * catch the keywords from the content and return specialContent based on the keywords
         * use _key[link, title]
         * (keys: _link, _flag)
         * example: _flag[https://flagsapi.com/XX/flat/64.png,IT] => title (IT) will replace XX
         * @param {String} content 
         */
        getContent(content){
            //catch the escape content
            if(content.includes('_flag') || content.includes('_link')){
                //verify them all
                const types = ['_flag', '_link']
                types.forEach((type)=>{
                    content = this.getEscape(type, content)
                })
            }

            return content
        },
        /**
         * it detect escapes custom tag like [_flag | _link] and generate an HTML element with the data inside the square brakets
         * 
         * es(i want a itallian flag)
         * _flag[https://flagsapi.com/XX/flat/64.png,IT] 'XX' will be replaced by 'IT'
         * @param {String} type - [_flag | _link]
         * @param {String} content - a string with some escapes (or not)
         */
        getEscape(type, content){
            let specialContent = '';
            //to math everything that start with _<type>[*] where type => [_flag | _link]
            let regex = new RegExp(`${type}\\[(.*?)\\]`)

            //split escaped content by non escaped content
            content.split(regex)
                .forEach((str)=> {
                    //if don't match a _??? AND a img src AND str contains 'http'
                    if((!str.match(/_(.*?)\[(.*?)\]/) && !str.match(/src="(.*?)"/)) && str.includes('http')) {
                        // extract data 
                        let data = str.split(',')
                        //create a img | link a
                        str = (type == '_flag')
                            ? `<img class="flag" src="${data[0].replace('XX',data[1])}" alt="${data[1]} Flag">`
                            : `<a class="link link-blank" href="${data[0]}" target="_blank">${data[1]}</a>`
                    }
                    //concatenate all content matched and not matched
                    specialContent += str
                });

            //return the result
            return specialContent
        }
    }
}
</script>

<template lang="">
    <div class="main-card d-flex flex-column justify-content-between">
        <!-- icon -->
        <i v-if="card.icon != ''" class="icon mb-2" :class="card.icon"></i>
        <div class="position-relative">
            <div class="text-end text-capitalize">
                <!-- titles -->
                <AppTitle v-if="card.title != ''" :content="card.title" className="title mb-1"/>
                <AppTitle v-if="card.subTitle != ''" :content="card.subTitle" className="sub-title mb-3"/>
            </div>
        </div>
        <div class="position-relative">
            <!-- content -->
            <p v-html="getContent(content)" class="m-0" v-for:="content in card.contents"></p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .main-card{
        overflow: hidden;
        background-color: $dominant-color;
        border-radius: $border-radius-1;
        padding:1rem;
        height: 100%;
        position: relative;

        i.icon,
        .title{
            background:-webkit-linear-gradient(45deg, $complementary-color, $complementary-darken-color); 
            -webkit-background-clip: text; 
            background-clip: text; 
            -webkit-text-fill-color: transparent;
        }
        i.icon{
            font-size: 6rem;
            
            position: absolute;
            top:0;
            left:0;
            transform: rotate(-30deg);
            opacity: .6;
        }
        .title{
            line-height: 2.2rem !important;
        }
        // with :deep(<inner-selector>) we can use scoped style to give element appended with v-html
        p:deep(img.flag){
            max-width: 30px;
        }
    }
</style>