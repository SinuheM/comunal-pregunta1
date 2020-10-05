<template>
    <div>
        <div class="issue-messages">
            <ul class="messages">
                <li class="message" :class="'message-'+message.type" v-for="(message, index) in problem.messages" :key="index">
                    <span>{{message}}</span>
                </li>
            </ul>
            <div class="new-message">
                <input type="text" placeholder="Escribe un nuevo mensaje...">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
        };
    },
    props: ['problem'],
    computed: {
        
    },
    methods: {
    },
}
</script>

<style>
    .issue-messages{
        padding: 24px 18px;
        display: flex;
        height: 450px;
        flex-direction: column;
        justify-content: space-between;
    }
    .issue-messages input{
        padding: 12px 15px;
        border: 1px solid #F0F0F0;
        border-radius: 6px;
        width: calc(100% - 75px)
    }
    .issue-messages .messages{
        display: flex;
        list-style: none;
        padding: 0; margin: 0;
        flex-direction: column;
    }
    .issue-messages .message{
        margin: 8px 0;
    }
    .issue-messages .message span{
        padding: 5px 8px;
        border: 1px solid #ddd;
        max-width: 200px;
        display: inline-block;
        border-radius: 5px;
    }
    .issue-messages .messages .message-get{
        text-align: left;
    }
    .issue-messages .messages .message-send{
        text-align: right;
    }
</style>