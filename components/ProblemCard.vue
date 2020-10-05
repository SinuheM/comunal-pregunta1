<template>
    <div>
        <div class="issue issue-open" :class="statusClass" @click="$emit('click', problem.id)">
            <div class="detail">
                <h3>{{problem.problem_subtype.name}}</h3>
                <span class="datetime">
                    {{parseDate}}
                </span>
                <br>
                <span class="place">{{problem.location.name}} | {{problem.location_space.name}}</span>
            </div>
            <div class="status">
                <div class="state">
                    <span v-if="problem.problem_state.id == 'rev'">
                        <i class="icn icn-rev"></i>
                        Reporte en revisión
                    </span>
                    <span v-if="problem.problem_state.id == 'open'">
                        <i class="icn icn-send"></i>
                        Reporte enviado
                    </span>
                    <span v-if="problem.problem_state.id == 'closed'">
                        <i class="icn icn-solved"></i>
                        Reporte solucionado
                    </span>
                </div>
                <div class="messages" v-if="problem.problem_state.id == 'rev'">
                    <span>{{problem.comments}}</span>
                    <i class="icn icn-message"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import moment from 'moment';
import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
        };
    },
    props: ['problem'],
    computed: {
        statusClass: function() {
            return 'issue-' + this.problem.problem_state.id;
        },
        parseDate: function() {
            let date = moment(this.problem.created_at);
            if(date.isSame(moment(), 'day')){
                return date.format("[HOY] | hh:mm A");;
            }
            return date.format("DD/MM/YYYY | hh:mm A");;
        }
    },
    methods: {
    },
}
</script>

<style>
    .issue{
        list-style-type: none;
        width: 380px;
        transition: all .5s;
        cursor: pointer;
    }
    .issue:hover{
        background: #eee;
    }
    .issue .detail{
        padding: 24px 27px 9px;
    }
    .issue .status{
        padding: 9px 27px 11px;
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #F3F3F3;
        border-bottom: 1px solid #F3F3F3;
    }
    .issue span{
        font-size: 14px;
        color: #8E8E93;
    }
    .issue h3{
        font-size: 18px;
        margin: 0;
        margin-bottom: 9px;
    }
    .issue.issue-closed .status span{
        color: #000;
    }
    .issue.issue-rev .status span{
        color: #00A8CD;
    }
</style>