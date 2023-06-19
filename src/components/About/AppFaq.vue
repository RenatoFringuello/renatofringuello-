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
    <section class="container-lg py-5">
        <div class="faq-wrapper">
            <div class="faq-box" v-for:="(question,i) in questions">
                <!-- question -->
                <div class="faq-question d-flex justify-content-between">
                    <div>{{ question.question }}</div>
                    <div class="chevron-wrapper d-flex" @click="toggleSwitch(i)">
                        <i class="m-auto fa-solid" :class="(openQuestionId == i) ?'fa-circle-chevron-down' :'fa-circle-chevron-up'" ></i>
                    </div>
                </div>
                <!-- answer -->
                <div class="faq-answer" :class="(openQuestionId == i) ?'open' :'closed'">
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
        &:first-child .faq-question{
            border-top:1px solid #888;
        }
        .faq-question{
            border-bottom:1px solid #888;
            > div{
                padding: 1rem;
            }
            i{
                cursor: pointer;
            }
        }
        .faq-answer{
            background-color: $complementary-color;
            color: $accent-comp-color;
            transition: 1.3s ease-in-out;
            overflow: hidden;
            height: auto;
            max-height: 100vh;
            &.closed{
                max-height: 0;
            }

            div{
                padding: 1rem;
            }
        }
    }
}


    @media screen and (min-width: 992px) {
        .faq-wrapper{
            max-width: 700px;
            margin:0 auto;
        }
    }
</style>