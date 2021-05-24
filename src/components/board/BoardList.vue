<template>
    <div>
        <div class="text-right container">
            <button class="btn btn-primary" @click="movePage">게시물 등록</button>
        </div>
        <br>
        <div v-if="boards.length" class="container">
        <table class="table table-bordered table-condensed">
            <colgroup>
                <col :style="{ width: '5%' }" />
                <col :style="{ width: '50%' }" />
                <col :style="{ width: '10%' }" />
                <col :style="{ width: '25%' }" />
            </colgroup>
            <thead>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>날짜</th>
            </tr>
            </thead>
            <tbody>
            <list-row
                v-for="(board, index) in boards"
                :key="`${index}_items`"
                :no="board.no"
                :title="board.title"
                :writer="board.writer"
                :regtime="board.regtime"
            />
            </tbody>
        </table>
        </div>
        <div v-else class="text-center">게시글이 없습니다.</div>
            
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListRow from "@/components/board/include/ListRow.vue";


export default {
    name:'BoardList',
    
    components:{
        ListRow,
    },
    computed:{
        ...mapGetters(["boards"])
    },
    created(){
        this.$store.dispatch("getBoards");
    },
    methods: {
        movePage() {
            this.$router.push("/board/create");
        },
    },
}
</script>

<style scoped>
table thead th{
    padding: 10px;
    font-weight:bold;
    vertical-align: top;
    color:#369;
    border-bottom:3px solid #036;
    text-align: center;
};
</style>