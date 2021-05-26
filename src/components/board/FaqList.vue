<template>
  <div>
    <h1 class="underline">자주하는 질문</h1>
    <div class="text-right">
      <button class="btn btn-primary" @click="movePage">
        1:1 질문 등록하기
      </button>
    </div>
    <div v-if="faqs.length">
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
        <list-row-faq
          v-for="(faq, index) in faqs"
          :key="`${index}_items`"
          :no="faq.no"
          :title="faq.title"
          :writer="faq.writer"
          :regtime="faq.regtime"
        />
      </table>
    </div>
    <div v-else>게시글이 없습니다.</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListRowFaq from "@/components/board/include/ListRowFaq.vue";
// import BoardCreate from "@/components/board/BoardCreate.vue";

export default {
  name: "faqList",
  components: {
    ListRowFaq,
    // BoardCreate,
  },
  computed: {
    ...mapGetters(["faqs"]),
  },
  created() {
    this.$store.dispatch("getFaqs");
  },
  methods: {
    movePage() {
      this.$router.push({ name: "faq-create" });
    },
  },
};
</script>

<style>
</style>