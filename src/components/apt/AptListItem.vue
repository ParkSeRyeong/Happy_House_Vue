<template>
  <!-- <b-row
    class="m-2"
    @click="chooseApt"
    @mouseover="colorChange(true)"
    @mouseout="colorChange(false)"
    :class="{ 'mouse-over-bgcolor': isColor }"
  >
    <b-col> [{{ this.apt.aptName }}]</b-col>
    <b-col> {{ this.apt.buildYear }}</b-col>
  </b-row> -->
  <tr class="m-2" 
    @click="chooseApt"
    @mouseover="colorChange(true)"
    @mouseout="colorChange(false)"
    :class="{ 'mouse-over-bgcolor': isColor }"
    >

    <td>{{this.apt.aptName}}</td>
    <td>{{this.apt.buildYear}}</td>
  </tr>
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
  methods: {
    // chooseApt() {
    //   // this.$emit('select-apt', this.apt);
    //   this.$store.dispatch('selectApt', this.apt);
    // },
    ...mapActions(['selectApt']),
    chooseApt() {
      alert("클릭!");
      this.selectApt(this.apt);
    },
    colorChange(flag) {
      this.isColor = flag;
    },
  },
}
}
</script>

<style scoped>
.mouse-over-bgcolor {
  background-color: lightblue;
}
</style>