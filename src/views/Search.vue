
<template lang="html">
  <div class="fontToWhite mainbg-search" id="app">
    <b-container class="bv-example-row" >
      <b-row>
        <div class="col-md-12 pb-0 text-center">
          <h1 class="mb-4">주택 거래가검색하기</h1>
             <Roller class="fontToDark" text="Happy House"></Roller>
        </div>
      </b-row>
      <hr/>
      <apt-search-bar />
      <b-row class="map-center">
        <div id="map" class="col-lg-12 mb-4"></div>
      </b-row>
      <b-row>
        <b-col cols="6" align="left">
          <apt-list />
        </b-col>
        <b-col cols="6">
          <apt-detail />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import AptSearchBar from '@/components/apt/AptSearchBar.vue';
import AptList from '@/components/apt/AptList.vue';
import AptDetail from '@/components/apt/AptDetail.vue';
import Roller from "vue-roller";

export default {
  name: 'Apt',
  data() {
    return {
      show: true,
    };
  },
  components: {
    AptSearchBar,
    AptList,
    AptDetail,
    Roller
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement('script');
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=76a8814820fde33987eaf72b93f84526';
      document.head.appendChild(script);
    }
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
    initMap() {
      var container = document.getElementById('map');
      var options = {
        center: new kakao.maps.LatLng(37.5743822, 126.9688505),
        level: 5,
      };

      var map = new kakao.maps.Map(container, options);
      //map.setMapTypeId(kakao.maps.MapTypeId);

      var markerPosition = new kakao.maps.LatLng(37.5743822, 126.9688505);

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);

      var iwContent = '<div style="padding:5px;">Hello World!</div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다

      // 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
      });

      // 마커에 마우스오버 이벤트를 등록합니다
      kakao.maps.event.addListener(marker, 'click', function () {
        // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
        infowindow.open(map, marker);
      });
    },
  },
}

</script>

<style lang="css">
#map {
  width: 100%;
  height: 400px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
