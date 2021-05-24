<template>
    <div class="regist container">
         <h2 class="underline">게시물 
            <template v-if="type == 'create'">등록</template>
            <template v-else >수정</template>
        </h2>
    <div class="form-group">
      <label for="writer">작성자</label>
      <input type="text" class="form-control" id="writer" ref="writer" placeholder="작성자를 입력하세요." v-model="writer"/>
    </div>
    <div class="form-group">
      <label for="title">제목</label>
      <input type="text" class="form-control" id="title" ref="title" placeholder="제목을 입력하세요." v-model="title"/>
    </div>
    <div class="form-group">
      <label for="content">내용</label>
      <textarea type="text" rows="15" class="form-control" id="content" ref="content" placeholder="내용을 입력하세요." v-model="content"></textarea>
    </div>
    <div class="text-center">
      <button v-if="type == 'create'" class="btn btn-primary" @click="submitBoard">등록</button>
      <button v-else class="btn btn-primary" @click="submitBoard">수정</button>
      <button class="btn btn-primary" @click="moveList">목록</button>
    </div>
  </div>
</template>

<script>
//import {mapGetters} from 'vuex';
import moment from 'moment';

export default {
    name: "WriteForm",
    data() {
        return{
            board:{
              no: '',
              regtime: '',
              writer: '',
              title: '',
              content: '',
            }
        }
    },
    methods: {
        submitBoard(){
          const boardItem={
            no:this.no,
            writer:this.writer,
            title:this.title,
            content:this.content,
            regtime:this.regtime

          };
            this.$store.dispatch('submitBoard', boardItem);
            this.moveList();
        },
        moveList() {
            this.$router.push('/board');
        },
        getFormatDate(regtime) {
          return moment(new Date(regtime)).format('YYYY.MM.DD HH:mm:ss');
        },
    },
}
</script>

<style>
 h2{
   text-align: center;
 };
   
</style>