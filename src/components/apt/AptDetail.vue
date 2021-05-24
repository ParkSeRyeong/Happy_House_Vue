<template>
  <b-container class="bv-example-row">
    <div> src > components > apt > AptDetail.vue > line 3, apt-detail  </div>
    <b-row>
    </b-row>
    <b-row class="mb-2 mt-1">
      <b-col><img src="" alt=""/></b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="secondary">일련번호 : {{ $store.apt.aptName }}</b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="primary">아파트 이름 : {{ apt.aptName }}</b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="info">법정동 : {{ this.apt.aptName }}</b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="warning">층수 : {{ this.apt }}층</b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="danger"
          >거래금액 : {{ (apt.거래금액.replace(',', '') * 10000) | price }}원</b-alert
        >
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'AptDetail',
  computed: {
    ...mapState(['apt']),
    
  },
  filters: {
    price(value) {
      if (!value) return value;
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
  
};
</script>

<style></style>
