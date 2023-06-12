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
                    answer:'I\'m a great choice just because I love programming and I don\'t like to quit some project till I didn\'t accomplished the task, even if I\'m working with a technology that I\'ve never studied before',
                },
            ]
        }
    },
}
</script>

<template lang="">
    <div class="container-lg">
        <AppTitle content="This is me" class="title"/>
        <AppFaq :questions="questions"/>
    </div>
</template>

<style lang="scss" scoped>
    
</style>