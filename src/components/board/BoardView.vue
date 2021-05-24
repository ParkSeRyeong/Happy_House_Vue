<template>
  <div>
    ㅇㄹㅇㄹ
    <view-detail></view-detail>
  </div>
</template>

<script>
alert("boardview");
import ViewDetail from "@/components/board/include/ViewDetail.vue";

export default {
  name: "BoardView",
  components: {
    ViewDetail,
  },
  created() {
    this.$store.dispatch("getBoard", `/${this.$route.params.no}`);
  },
};
</script>

<style></style>