<template>
  <div class="regist container">
    <h2 class="underline">
      게시물
      <template v-if="type == 'create'">등록</template>
      <template v-else>수정</template>
    </h2>
    <!-- <div class="form-group">
      <label for="writer">작성자</label>
      <input
        type="text"
        class="form-control"
        id="writer"
        ref="writer"
        placeholder="작성자를 입력하세요."
        v-model="writer"
      />
    </div> -->

    <div class="regist_form">
      <label for="title">제목</label>
      <input
        class="form-control"
        v-if="type == 'create'"
        type="text"
        id="title"
        name="title"
        v-model="title"
        ref="title"
        placeholder="제목을 입력하세요."
      />
      <input
        v-else
        type="text"
        id="title"
        name="title"
        v-model="title"
        ref="title"
        readonly
      /><br />
      <label for="content">내용</label><br />
      <textarea
        class="form-control"
        type="text"
        id="content"
        name="content"
        v-model="content"
        ref="content"
        rows="15"
        placeholder="내용을 입력하세요."
      ></textarea
      ><br />
      <button v-if="type == 'create'" @click="checkValue">등록</button>
      <button v-else @click="checkValue">수정</button>
      <button @click="moveList">목록</button>
    </div>

    <!-- <div class="form-group">
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
        rows="15"
        class="form-control"
        id="content"
        ref="content"
        placeholder="내용을 입력하세요."
        v-model="content"
      ></textarea>
    </div>
    <div class="text-center">
      <button v-if="type == 'create'" @click="checkValue">등록</button>
      <button v-else @click="checkValue">수정</button>
      <button @click="moveList">목록</button>
    </div>-->
  </div>
</template>

<script>
//import {mapGetters} from 'vuex';
// import moment from "moment";
import axios from "@/util/http-common";

export default {
  name: "WriteForm",
  props: {
    type: { type: String },
  },
  data() {
    return {
      title: "",
      content: "",
    };
  },
  created() {
    if (this.type === "modify") {
      axios.get(`board/${this.$route.params.no}`).then(({ data }) => {
        this.no = data.no;
        this.title = data.title;
        this.content = data.content;
      });
    }
  },
  methods: {
    // 입력값 체크하기 - 체크가 성공하면 registBoard 호출
    checkValue() {
      // 사용자 입력값 체크하기
      let err = true;
      let msg = "";
      !this.title &&
        ((msg = "제목을 입력해주세요"),
        (err = false),
        this.$refs.title.focus());
      err &&
        !this.content &&
        ((msg = "내용을 입력해주세요"),
        (err = false),
        this.$refs.content.focus());

      if (!err) alert(msg);
      // 만약, 내용이 다 입력되어 있다면 registBoard 호출
      else this.type == "create" ? this.registBoard() : this.modifyBoard();
    },
    registBoard() {
      axios
        .post("board", {
          title: this.title,
          content: this.content,
        })
        .then(({ data }) => {
          let msg = "등록 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "등록이 완료되었습니다.";
          }
          alert(msg);
          this.moveList();
        });
    },
    modifyBoard() {
      axios
        .put(`board/${this.no}`, {
          title: this.title,
          content: this.content,
          no: this.no,
        })
        .then(({ data }) => {
          let msg = "수정 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "수정이 완료되었습니다.";
          }
          alert(msg);
          this.$router.push("/board");
        });
    },
    moveList() {
      this.$router.push("/board");
    },
  },
};
</script>

<style>
h2 {
  text-align: center;
}
</style>