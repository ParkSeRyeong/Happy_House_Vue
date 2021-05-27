<template>
  <div class="text-center container">
    <h2 class="underline">FAQ</h2>
    <br />
    <table class="table table-striped">
      <tr>
        <th>번호</th>
        <td>{{ faq.no }}</td>
      </tr>
      <tr>
        <th>글쓴이</th>
        <td>{{ faq.writer }}</td>
      </tr>
      <tr>
        <th>제목</th>
        <td>{{ faq.title }}</td>
      </tr>
      <tr>
        <th>날짜</th>
        <td>{{ getFormatDate(faq.regtime) }}</td>
      </tr>
      <tr height="30px">
        <th colspan="2">내용</th>
      </tr>
      <tr class="mt-5">
        <td colspan="2">{{ faq.content }}</td>
      </tr>
    </table>

    <br />
    <br />
    <div class="text-center">
      <router-link to="/faq" class="btn" type="info">목록</router-link>
      <router-link :to="`/faq/modify/${faq.no}`" class="btn" type="info"
        >수정</router-link
      >
      <a href="#" class="btn" type="info" @click="deleteFaq">삭제</a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import http from "@/util/http-common";
import moment from "moment";

export default {
  name: "ViewDetailFaq",
  // data() {
  //   return {
  //     no: "",
  //     writer: "",
  //     title: "",
  //     regtime: "",
  //     content: "",
  //   };
  // },
  computed: {
    ...mapGetters(["faq"]),
  },
  methods: {
    deleteFaq() {
      if (confirm("해당 글은 삭제됩니다. 삭제하시겠습니까?")) {
        http.delete(`faq/${this.faq.no}`).then(({ data }) => {
          let msg = "삭제 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "삭제가 완료되었습니다.";
          }
          alert(msg);
          this.$router.push("/faq");
        });
      }
    },
    numberWithCommas(x) {
      if (x) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    enterToBr(str) {
      if (str) return str.replace(/(?:\r\n|\r|\n)/g, "<br />");
    },
    getFormatDate(regtime) {
      return moment(new Date(regtime)).format("YYYY.MM.DD");
    },
  },
};
</script >

<style scoped>
.regist {
  padding: 10px;
}
.regist_form {
  text-align: left;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
input,
textarea,
.view {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #787878;
  font-size: medium;
}
</style>