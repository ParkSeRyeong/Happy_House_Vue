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
    <b-row>
      <h4 class="centerize">아파트 상세 정보</h4><hr>
      <!-- <sequential-entrance>
        <div class="box centerize"> -->
           <apt-Deal-list-item v-for="(aptdeal, index) in apt" :key="index" :aptdeal="aptdeal" />
        <!-- </div>
      </sequential-entrance> -->
      
    </b-row>
  </b-container>
  <b-container v-else class="bv-example-row mt-3">
    <b-row>
       <sequential-entrance>
        <div class="box centerize">
          아파트 목록이 없습니다.
        </div>
      </sequential-entrance>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';
import AptDealListItem from './AptDealListItem.vue';
import SequentialEntrance from 'vue-sequential-entrance';

export default {
  name: 'AptDetail',
  data() {
    return {};
  },
  created: {
    apt: [],
  },
  computed: {
    ...mapState(['apt']),
  },
  components: {
    AptDealListItem,
    SequentialEntrance
  },
};
</script>

<style>
.box {
  /* border-radius: 10px; */
  background-color: rgb(220, 240, 243);
  color:black;
  width: 100%;
  height: 100%;
  margin: 1rem;
}
</style>
