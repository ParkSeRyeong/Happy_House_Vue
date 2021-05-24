<template>

    <div class="container" id="view_detail">
      <div class="text-right">
              <button class="btn btn-primary" @click="moveList">목록</button>
      </div>
      <br>
      
    <table class="table table-bordered table-condensed">
      <tr>
        <th>번호</th>
        <td>{{ board.no }}</td>
      </tr>
      <tr>
        <th>글쓴이</th>
        <td>{{ board.writer }}</td>
      </tr>
      <tr>
        <th>제목</th>
        <td>{{ board.title }}</td>
      </tr>
      <tr>
        <th>날짜</th>
        <td>{{ getFormatDate(board.regtime) }}</td>
      </tr>
      <tr>
        <th>내용</th>
        <td colspan="10">{{ board.content }}</td>
      </tr>
    </table>

    <br />
    <div class="text-center">

      <button class="btn btn-primary" @click="modifyBoard">수정</button>
      <button class="btn btn-primary" @click="deleteBoard">삭제</button>
    </div>
   </div>
</template>

<script>
import { mapGetters } from "vuex";

import moment from 'moment';

export default {
    name:"ViewDetail",
    data:function(){
      return{
        board:{}
      }
    },
    computed:{
      ...mapGetters(["board"])
    },
    methods:{
      modifyBoard(){
        this.$store.dispatch("modifyBoard", this.board);
      },
      deleteBoard(){
        this.$store.dispatch("deleteBoard", this.board);
      },
      moveList(){
         this.$router.push('/board');
      },
      getFormatDate(regtime) {
        return moment(new Date(regtime)).format('YYYY.MM.DD HH:mm:ss');
      },
      enterToBr(str) {
        if (str) return str.replace(/(?:\r\n|\r|\n)/g, "<br />");
      }
    }
}
</script>


<style scoped>
#view_detail{
    text-align: center;
}
.detail_form {
  text-align: left;
  border-radius: 5px;
  padding: 20px;
}
input,
textarea,
.view {
  width: 100%;
  padding: 20px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
   color: #787878;
  font-size: medium;
}
</style>
