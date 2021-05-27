<template>
  <div class="container" style="text-align: center">
    <view-detail />
  </div>
</template>

<script>
import ViewDetail from "@/components/board/include/ViewDetail.vue";

export default {
  name: "boardview",
  components: {
    ViewDetail,
  },
  created() {
    this.$store.dispatch("getBoard", `/${this.$route.query.no}`);
  },
};
</script>

<style></style>