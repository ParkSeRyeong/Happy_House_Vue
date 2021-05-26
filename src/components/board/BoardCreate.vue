<template>
  <div>
    <write-form type="create" />
  </div>
</template>

<script>
import WriteForm from "@/components/board/include/WriteForm.vue";

export default {
  name: "boardcreate",
  // props: ["item"],
  // methods: {
  //   modifyBoard() {
  //     this.$store.dispatch("modifyBoard", this.item);
  //   },
  //   moveList() {
  //     this.$router.push("/Board");
  //   },
  // },
  components: {
    WriteForm,
  },
};
</script>

<style>
</style>