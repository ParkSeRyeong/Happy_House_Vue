<template>

  <b-container v-if="apt.일련번호" class="bv-example-row">
    <b-row>
      <b-col
        ><h3>{{ apt.아파트 }}</h3></b-col
      >
    </b-row>
    <b-row class="mb-2 mt-1">
      <b-col><img src="" alt=""/></b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="secondary">일련번호 : {{ apt.일련번호 }}</b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>

        <b-alert show variant="primary">아파트 이름 : {{ apt.AptName }}</b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>

        <b-alert show variant="info">법정동 : {{ apt.법정동 }}</b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>

        <b-alert show variant="warning">층수 : {{ apt.층 }}층</b-alert>
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
