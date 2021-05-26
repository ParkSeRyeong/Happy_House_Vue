<template>
  <div>
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
  props:{
    
  },
  created() {
    this.$store.dispatch("getBoard", `/${this.$route.query.no}`);
  },
};
</script>

<style></style>