<template>
  <b-container v-if="apt && apt.length != 0" class="bv-example-row mt-3">
    <table class="table mt-2">
    <thead>
          <tr>
            <th>아파트 이름</th>
            <th>가격</th>
          </tr>
        </thead>
     <tbody>   
    <apt-Deal-list-item v-for="(aptdeal, index) in apt" :key="index" :aptdeal="aptdeal" />
     </tbody>
    </table>
  </b-container>
  <b-container v-else class="bv-example-row mt-3">
    <b-row>
      <b-col><b-alert show>아파트 목록이 없습니다.</b-alert></b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';
import AptDealListItem from '@/components/apt/AptDealListItem.vue';

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
    AptDealListItem,
  }
};
</script>

<style></style>
