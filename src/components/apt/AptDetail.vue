<template>
  <b-container v-if="apt && apt.length != 0" class="bv-example-row mt-3 bgwhite">
    <!-- <table class="table mt-2 tcenter">
    <thead>
          <tr>
            <th>아파트 정보</th>
            <th>가격</th>
          </tr>
        </thead>
     <tbody>   
    <apt-Deal-list-item v-for="(aptdeal, index) in apt" :key="index" :aptdeal="aptdeal" />
     </tbody>
    </table> -->
    <div class="box bgwhite aptBox">으아아앙아</div>
    <apt-deal-list-item/>
  </b-container>
  <b-container v-else class="bv-example-row mt-3">
    <b-row>
      <b-col><b-alert show>아파트 목록이 없습니다.</b-alert></b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';
import AptDealListItem from './AptDealListItem.vue';

export default {
  name: 'AptDetail',
  data(){
    return{
      
    };
  },
  created:{
    apt:[],
  },
  computed: {
    ...mapState(['apt']),
  },
  components: {
    AptDealListItem
  }
};
</script>

<style></style>
