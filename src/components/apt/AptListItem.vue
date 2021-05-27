<template>
  <!-- <b-row
    class="m-2"
    @click="chooseApt"
    @mouseover="colorChange(true)"
    @mouseout="colorChange(false)"
    :class="{ 'mouse-over-bgcolor': isColor }"
  >
    <b-col> [{{ this.apt.aptName }}]</b-col>
    <b-col> {{ this.apt.buildYear }}</b-col>
  </b-row> -->
  <tr class="m-2" 
    @click="chooseApt"
    @mouseover="colorChange(true)"
    @mouseout="colorChange(false)"
    :class="{ 'mouse-over-bgcolor': isColor }"
    >

    <td>{{this.apt.aptName}}</td>
    <td>{{this.apt.buildYear}}</td>
  </tr>
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
    apt: Object
  },
  methods: {
    ...mapActions(['selectApt']),
    
    chooseApt() {
      this.selectApt(this.apt);

      /* global kakao */
      var container = document.getElementById('map');
      var options = {
          center: new kakao.maps.LatLng(this.apt.lat, this.apt.lng),
          level: 3
      };

      var map = new kakao.maps.Map(container, options);

      map.panTo(options.center);
              
      var marker = new kakao.maps.Marker({
       position: options.center
       });
       marker.setMap(map);

      },
      colorChange(flag) {
      this.isColor = flag;
    },
  },
}

</script>

<style scoped>
.mouse-over-bgcolor {
  background-color: lightblue;
}
</style>