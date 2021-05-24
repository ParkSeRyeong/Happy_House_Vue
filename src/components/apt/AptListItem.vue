<template>
  <b-row
    class="m-2"
    @click="chooseApt"
    @mouseover="colorChange(true)"
    @mouseout="colorChange(false)"
    :class="{ 'mouse-over-bgcolor': isColor }"
  >
    <b-col cols="2" class="text-center">
    </b-col>
    <b-col cols="10"> [{{ this.apt.aptName }}] {{ this.apt.buildYear }}</b-col>
  </b-row>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AptListItem',
  data() {
    return {
      isColor: false,
    };
  },
  props: {
    apt: Object,
  },
  
  methods: {
    ...mapActions(['selectApt']),
    choo(){

    },
    chooseApt() {
      this.selectApt(this.apt);

      /* global kakao */
      var container = document.getElementById('map');
      var options = {
          center: new kakao.maps.LatLng(this.apt.lat, this.apt.lng),
          level: 6
      };

      var map = new kakao.maps.Map(container, options);

      map.panTo(options.center);
              
      var marker = new kakao.maps.Marker({
       position: options.center
       });
       marker.setMap(map);

      }
  }
}
</script>

<style scoped>
.mouse-over-bgcolor {
  background-color: lightblue;
}
</style>
