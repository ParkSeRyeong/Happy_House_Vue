<template>
  <div>
    <table class="table table-bordered w-50">
      <tr>
        <th>번호</th>
        <td>{{ no }}</td>
      </tr>
      <tr>
        <th>글쓴이</th>
        <td>{{ writer }}</td>
      </tr>
      <tr>
        <th>제목</th>
        <td>{{ title }}</td>
      </tr>
      <tr>
        <th>날짜</th>
        <td>{{ getFormatDate(regtime) }}</td>
      </tr>
      <tr>
        <td colspan="2">
          {{ content }}
        </td>
      </tr>
    </table>

    <br />
    <div class="text-center">
      <button class="btn btn-primary">목록</button>
      <button class="btn btn-primary" @click="modifyBoard">수정</button>
      <button class="btn btn-primary" @click="deleteBoard">삭제</button>
    </div>
  </div>
</template>

<script>
alert("viewdetail");
import { mapGetters } from "vuex";

export default {
  name: "ViewDetail",
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
    ...mapGetters(["board"]),
  },
};
</script>

<style></style>