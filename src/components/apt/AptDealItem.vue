<template>
  <b-row>
    <b-col cols="2" class="text-center">
    </b-col>
    <b-col cols="10"> [{{ this.apt.aptName }}] {{ this.apt.buildYear }}</b-col>
  </b-row>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AptListItem',
  data() {
    return {
      isColor: false,
    };
  },
  props: {
    apt: Object,
  },
  methods: {
    // chooseApt() {
    //   // this.$emit('select-apt', this.apt);
    //   this.$store.dispatch('selectApt', this.apt);
    // },
    ...mapActions(['selectApt']),
    chooseApt() {
      this.selectApt(this.apt);
    }
  },
};
</script>

<style scoped>
</style>
