<template>
    <div>
    <div class="form-group">
      <label for="writer">작성자</label>
      <input
        type="text"
        class="form-control"
        id="writer"
        ref="writer"
        placeholder="작성자를 입력하세요."
        v-model="writer"
      />
    </div>
    <div class="form-group">
      <label for="title">제목</label>
      <input
        type="text"
        class="form-control"
        id="title"
        ref="title"
        placeholder="제목을 입력하세요."
        v-model="title"
      />
    </div>
    <div class="form-group">
      <label for="content">내용</label>
      <textarea
        type="text"
        class="form-control"
        id="contnet"
        ref="content"
        placeholder="내용을 입력하세요."
        v-model="content"
      ></textarea>
    </div>
    <div class="text-center">
      <button class="btn btn-primary">등록</button>
      <button class="btn btn-primary" @click="modifyBoard">수정</button>
      <button class="btn btn-primary" @click="moveList">목록</button>
    </div>
  </div>
</template>

<script>
export default {
    name:"BoardCreate",
    props:['item'],
    methods:{
        modifyBoard(){
            this.$store.dispatch("modifyBoard", this.item);
        },
        moveList() {
            this.$router.push('/Board');
        },
    }
}
</script>

<style>
    
</style>