<script>
export default {
    name:'AppFaq',
    props:{
        /**
         * must be an array of literal objects with these properties
         * - question
         * - answer
         */
        questions:{
            type:Array,
        }
    },
    data() {
        return {
            openQuestionId:-1,
        }
    },
    methods:{
        /**
         * toggle the answer box
         * @param {Number} index - index of the question
         */
        toggleSwitch(index){
            this.openQuestionId = (this.openQuestionId == index) ?-1 :index;
        }
    }
}
</script>

<template lang="">
    <section class="container-lg py-5 color-scheme-b">
        <div class="faq-wrapper">
            <div class="faq-box" v-for:="(question,i) in questions">
                <!-- question -->
                <div class="faq-question d-flex justify-content-between">
                    <div>{{ question.question }}</div>
                    <i class="fa-solid" :class="(openQuestionId == i) ?'fa-circle-chevron-down' :'fa-circle-chevron-up'" @click="toggleSwitch(i)"></i>
                </div>
                <!-- answer -->
                <div class="faq-answer d-flex" :class="(openQuestionId == i) ?'open' :'closed'">
                    <div>
                        {{ question.answer }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section{
    border-radius: $border-radius-1;

    .faq-box{
        background-color: $complementary-color;
        &:first-child .faq-question{
            border-top:1px solid #888;
        }
        .faq-question{
            background-color: $accent-color;
            border-bottom:1px solid #888;
            *{
                padding: 1rem;
            }
            i{
                cursor: pointer;
                line-height: 1.5rem;
            }
        }
        .faq-answer{
            transition: 1.3s ease-in-out;
            overflow: hidden;
            height: auto;
            max-height: 100vh;
            &.closed{
                max-height: 0;
            }

            div{
                margin:auto 0;
                padding: 1rem;
            }
        }
    }
}


    @media screen and (min-width: 992px) {
        .faq-wrapper{
            max-width: 600px;
            margin:0 auto;
        }
    }
</style>