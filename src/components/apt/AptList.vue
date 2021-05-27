<template>
  <b-container v-if="apts && apts.length != 0" class="bv-example-row mt-3 bgwhite">
    <table class="table mt-2 tcenter">
      <thead>
        <tr>
          <th>아파트 이름</th>
          <th>시공 연도</th>
        </tr>
      </thead>
      <tbody>
        <apt-list-item v-for="(apt, index) in apts" :key="index" :apt="apt" />
      </tbody>
      <!-- <tbody>
        <apt-list-item 
        v-for="(apt, index) in apts" 
        :key="index" 
        :aptName="apt.aptName"
        :buildYear="apt.buildYear"
        />
      </tbody> -->
    </table>
  </b-container>
  <b-container v-else class="bv-example-row mt-3">
    <b-row>
      <sequential-entrance>
        <div class="box centerize tcenter">
          아파트 목록이 없습니다.
        </div>
      </sequential-entrance>
    </b-row>
    
  </b-container>
  
</template>

<script>
import { mapState } from 'vuex';
import AptListItem from '@/components/apt/AptListItem.vue';

export default {
  name: 'AptList',
  data() {
    return {};
  },
  components: {
    AptListItem,
  },
  created: {
    apts: [],
  },
  computed: {
    ...mapState(['apts']),
  },
};
</script>

<style>
.box {
  border-radius: 10px;
  background-color: rgb(187, 197, 230);
  color:black;
  width: 100%;
  height: 100%;
  margin: 1rem;
}
</style>
