<script>
import AppTitle from '@/components/partials/AppTitle.vue';
import AppFaq from '@/components/About/AppFaq.vue';

export default {
    name:'AppAbout',
    components:{
        AppTitle,
        AppFaq,
    },
    data() {
        return {
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
                    answer:'I love programming and I don\'t like to quit some project till I didn\'t accomplished the task, even if I\'m working with a technology that I\'ve never studied before',
                },
            ],
            quotes:[
                {
                    quote:'L\'inizio è la parte più importante del lavoro',
                    author:'platone'
                },
                {
                    quote:'Devi amare ciò che fai per volerlo fare ogni giorno',
                    author:'aaliyah'
                },
                {
                    quote:'Il meglio del vivere sta in un lavoro che piace e in un amore felice',
                    author:'umberto saba'
                },
                {
                    quote:'Ogni volta che ti viene chiesto se puoi fare un lavoro, rispondi: Certo che posso! Poi datti da fare e scopri come farlo',
                    author:'theodore roosvelt'
                },
                {
                    quote:'Trova un lavoro che ti piaccia ed avrai cinque giorni in più per ogni settimana',
                    author:'h. jackson brown jr.'
                },
            ],
            // Chi sei
            // Qual è il tuo background
            // Quali sono i tuoi valori e principi
            // Perché il prodotto o servizio che offri è importante per te
            aboutMeData:[
                'Ciao, I\'m Renato and I am an italian guy who likes programming, hang out with friends and do sports. I\'m the last born of 3 ...',
                'When I\'m not programming, you can find me in the gym or playing playing football with some friends. Thanks for stopping by my portfolio!',
            ],
            activeQuoteID:0
        }
    },
    methods: {
        exRand(max, min = 0){
            return Math.floor(Math.random() * (max - min)) + min;
        }
    },
    created() {
        this.activeQuoteID = this.exRand(this.quotes.length)
    },
}
</script>

<template lang="">
    <div class="container-lg d-flex flex-column">
        <div class="mb-5">
            <div class="quote-wrapper mb-3">
                <div class="d-flex text-complementary mb-3">
                    <AppTitle content='"' class="title pe-1"/>
                    <div class="quote flex-grow-1">
                        <AppTitle :content="quotes[activeQuoteID].quote" class="title"/>
                    </div>
                    <AppTitle content='"' class="title ps-1 d-flex align-items-end"/>
                </div>
                <AppTitle :content="`- ${quotes[activeQuoteID].author}`" class="text-uppercase"/>
            </div>

            <div class="intro-wrapper ms-auto">
                <!-- img -->
                <div class="pic">
                    <img class="img-fluid ms-auto" src="@/assets/images/me.png" alt="Renato's profile pic">
                </div>
                <!-- text boxes -->
                <div class="text d-flex flex-wrap">
                    <div class="box flex-grow-1" v-for:="data in aboutMeData">{{ data }}</div>
                </div>
            </div>
        </div>
        <div>    
            <AppTitle content='Most requested questions' class="title text-center"/>
            <AppFaq :questions="questions"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    $gap : 12px;
    div{
        position: relative;   
        .intro-wrapper{
            position: relative;
            width: 100%;
            border-radius: $border-radius-1;
            background: $dominant-color;
            padding: $gap;
            
            .pic{
                display: flex;
                margin-bottom: $gap;
                
                img{
                    height: 220px;
                    max-height: 100% !important;
                    aspect-ratio: 1 / 1;
                    border-radius: 50%;
                    border:5px inset $complementary-color;
                    background-image: linear-gradient(45deg,$complementary-color, $complementary-darken-color);
                    margin: auto;
                }
            }
            .text{
                gap : $gap;
                .box{
                    width: calc((100% - $gap) / 2);
                }
            }
        }
    }

    @media screen and (min-width: 992px) {
        //lg & more
        div {
            .quote-wrapper{
                position: absolute;
                top:50px;
                z-index: 2;

                width: 400px;
                margin-bottom: 0;
            }
            .intro-wrapper{
                max-width: 700px;
                .pic img{
                    margin: 0;
                }
                .text .box{
                    width: calc((100% - ($gap * 2)) / 3);
                }
            }
        }
    }

    @media screen and (min-width: 1200px) {
        //xl & more
        div .intro-wrapper{
            max-width: 1000px;
            .pic img{
                height: 300px;
            }
        }
    }
</style>