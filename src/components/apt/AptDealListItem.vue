<template>
  <b-row class="m-2">
    <b-col cols="2" class="text-center">
    </b-col>
    <b-col cols="10"> [{{ this.aptdeal.aptName }}] [{{ this.aptdeal.dealAmount }}] [{{this.aptdeal.lng}}] </b-col>
  </b-row>
</template>

<script>

export default {
  name: 'AptDealListItem',
  data() {
    return {
      isColor: false,
    };
  },
  props: {
    aptdeal: Object,
  },
  methods: {
  },
};
</script>

<style>
</style>
