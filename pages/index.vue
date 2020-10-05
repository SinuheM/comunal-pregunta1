<template>
    <main>
        <div class="header-page">
            <div class="container">
                <h1>Mis problemas</h1>
                <TheNav /> 
            </div>
        </div>
        <div class="issues">
            <div class="container">
                <div class="list-issues">
                    <ProblemCard v-for="(problem, index) in problems" :key="index" :problem="problem" @click="getMessages" />
                </div>
                <div class="message-issues">
                    <ProblemMessage :problem="selected" />
                </div>
                <!-- <ProblemCard />
                <ProblemCard /> -->
            </div>
        </div>
    </main>
</template>
<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        // page component definitions
        head() {
            return {
                title: "Mis problemas"
            };
        },
        data() {
            return {
            };
        },
        computed: {
            ...mapState({ 
                problems: state => state.problems.list,
                selected: state => state.problems.selected
            })
        },
        methods: {
            ...mapActions('problems', ['login','get','getProblem']),
            async getMessages(id){
                await this.getProblem(id);
            }
        },
        async created() {
            await this.login();
            this.get();
            /* const res = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            this.users = res.data; */
        }
    }
</script>
<style>
    .header-page{
        border-top: 1px solid #ccc;
        box-shadow: 3px 3px 10px -1px rgba(0,0,0,0.25);
    }
    .issues{
        background: #FAFAFA;
        padding: 24px 0 50px;
    }
    .issues .container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .list-issues, .message-issues{
        height: 500px;
        overflow-y: auto;
        -webkit-box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.25);
        -moz-box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.25);
        box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.25);
        background: #fff;
        border-radius: 6px;
    }
    .list-issues{
        width: 380px;
        margin-right: 18px;
    }
    .message-issues{
        width: auto;
        flex-grow: 1;
    }
</style>