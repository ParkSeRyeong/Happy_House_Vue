<template>
   <div>
     <vie-detail></vie-detail>
   </div>
</template>

<script>
import ViewDetail from "@/components/board/include/ViewDetail.vue";

export default {
    name:"BoardView",
    components:{
      ViewDetail
    },
    created() {
      this.$store.dispatch("getBoard", `/${this.$route.query.no}`);
  }
};
</script>

<style></style>