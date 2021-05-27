<template>
   <!-- <tr class="m-2" >
    <td>{{ this.aptdeal.aptName }}</td>
    <td>{{ this.aptdeal.dealAmount }}</td>
  </tr> -->
  
  <sequential-entrance>
        <div class="box centerize tcenter">
          <div class="tcenter">
            <h5>{{ this.aptdeal.aptName }}</h5><hr>
            <div>거래가 : {{ this.aptdeal.dealAmount }}</div>
            <div>지번 : {{ this.aptdeal.jibun }}</div>
            <div>면적 : {{ this.aptdeal.area }}평</div>
          </div>
        </div>
      </sequential-entrance>
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
  }
};
</script>

<style>

</style>
