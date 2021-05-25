<template>
  <div>
    <view-detail></view-detail>
  </div>
</template>

<script>
alert("boardv")
import ViewDetail from "@/components/board/include/ViewDetail.vue";

export default {
  name: "BoardView",
  data(){
    return{

    }
  },
  components: {
    ViewDetail,
  },
  props:{
    
  },
  created() {
    //this.getBoard(no);
  },
};
</script>

<style></style>