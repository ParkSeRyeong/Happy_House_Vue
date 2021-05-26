<template>
   <tr class="m-2" >
    <td>{{ this.aptdeal.aptName }}</td>
    <td>{{ this.aptdeal.dealAmount }}</td>
  </tr>
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
