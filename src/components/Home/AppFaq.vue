<script>
export default {
    name:'AppFaq',
    data() {
        return {
            openQuestionId:-1,
            questions:[
                {
                    question:'Which one do you prefer, Frontend or Backend?',
                    answer:'I don\'t have a specific choice, but I prefer Frontend just because I\'m searching for my first work experience so I prefer the "easier" one just to understand more the world behind the software developer life and learn good habits to write a very well organized code',
                },
                {
                    question:'Are you available to transfer?',
                    answer:'Yes, I am',
                },
                {
                    question:'What is your greatest strength?',
                    answer:'I\'m great to listen people and I\'m good at completing what I start',
                },
                {
                    question:'What is your worst weakness?',
                    answer:'I\'m not the best speaker to motivate someone or to sell something',
                },
                {
                    question:'Why should we hire you?',
                    answer:'I\'m a great choice just because I love programming and I don\'t like to quit some project till I didn\'t accomplished the task, even if I\'m working with a technology that I\'ve never studied before',
                },
            ]
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
    .faq-box{
        background-color: $complementary-color;
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

    @media screen and (min-width: 992px) {
        .faq-wrapper{
            max-width: 600px;
            margin:0 auto;
        }
    }
</style>