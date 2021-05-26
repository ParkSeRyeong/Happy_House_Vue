<template>
  <div>
    <view-detail-faq />
  </div>
</template>

<script>
import ViewDetailFaq from "@/components/board/include/ViewDetailFaq.vue";

export default {
  name: "faqview",
  components: {
    ViewDetailFaq,
  },
  created() {
    this.$store.dispatch("getFaq", `/${this.$route.query.no}`);
  },
};
</script>

<style></style>