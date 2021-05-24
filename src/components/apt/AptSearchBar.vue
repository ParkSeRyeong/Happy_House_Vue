<template>
  <div>
    시 : 
    <select id="sido" v-model="SidoCode" @change="getGugunCode">
      <option v-for="(option, index) in sido" :key="index" :value="option.sido_code">
        {{option.sido_name}}
      </option>
    </select>
    구 군 : 
    <select id="gugun" v-model="GugunCode" @change="getDongCode">
      <option v-for="(option, index) in gugun" :key="index" :value="option.gugun_code">
        {{option.gugun_name}}
      </option>
    </select>
    동 : 
    <select id="dong" v-model="Dong" @change="getAptName">
      <option v-for="(option, index) in dong" :key="index" :value="option.dong">
        {{option.dong}}
      </option>
    </select>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'SearchBar',
  data() {
    return {
      SidoCode: '',
      GugunCode:'',
      Dong:''
    }
  },
  computed:{
    ...mapGetters(['sido','gugun','dong'])
  },
  created() {
    this.$store.dispatch("getSido");
  },
  methods:{
    getGugunCode(){
      this.$store.dispatch("getGugun",this.SidoCode);
    },
    getDongCode(){
      this.$store.dispatch("getDong",this.GugunCode);
    },
    getAptName(){
      this.$store.dispatch("getApts",this.Dong);
    },
  }
};
</script>

<style></style>
