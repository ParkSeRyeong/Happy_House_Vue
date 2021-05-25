<template>
  <div>
    <div class="text-right">
      <button class="btn btn-primary" @click="movePage">게시물 등록</button>
    </div>
    <div v-if="boards.length">
      <table class="table table-bordered table-condensed">
        <colgroup>
          <col :style="{ width: '5%' }" />
          <col :style="{ width: '50%' }" />
          <col :style="{ width: '10%' }" />
          <col :style="{ width: '25%' }" />
        </colgroup>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>날짜</th>
        </tr>
        <list-row
          v-for="(board, index) in boards"
          :key="`${index}_items`"
          :no="board.no"
          :title="board.title"
          :writer="board.writer"
          :regtime="board.regtime"
        />
      </table>
    </div>
    <div v-else>게시글이 없습니다.</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListRow from "@/components/board/include/ListRow.vue";
// import BoardCreate from "@/components/board/BoardCreate.vue";

export default {
  name: "BoardList",
  components: {
    ListRow,
    // BoardCreate,
  },
  computed: {
    ...mapGetters(["boards"]),
  },
  created() {
    this.$store.dispatch("getBoards");
  },
  methods: {
    movePage() {
      this.$router.push("/create");
    },
  },
};
</script>

<style>
</style>