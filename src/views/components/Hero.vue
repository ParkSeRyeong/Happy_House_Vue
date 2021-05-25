<template>
  <section
    class="section-hero section-shaped my-0 mainbg" >
    <div class="shape shape-style-1 shape-primary">

    </div>
    <div class="container shape-container d-flex align-items-center">
      <div class="col px-0">
        <div class="row justify-content-center align-items-center">
          <div class="col-lg-7 text-center pt-lg">
            <!-- <img src="img/brand/white.png" style="width: 200px" class="img-fluid" /> -->
            <div class="row h-100 align-items-center justify-content-center text-center">
                    <div class="col-lg-10 align-self-end">
                        <h1 class="text-uppercase text-white font-weight-bold">HAPPY HOUSE</h1>
                        <div id="demo">
                          <button v-on:click="show = !show">
                            Toggle
                          </button>
                          <transition name="fade">
                            <p v-if="show">hello</p>
                          </transition>
                        </div>
                        <!-- <hr class="divider my-4" /> -->
                    </div>
                    <div class="col-lg-8 align-self-baseline">
                        <p class="text-white font-weight-light mb-5">우 리 집 찾 기 프 로 젝 트</p>
                        <!-- <router-link to="/search">Login</router-link> -->
                        <a class="btn btn-success btn-xl js-scroll-trigger" href="#">
                          <router-link to="/Search" style="color:white;">SEARCH!!</router-link>
                        </a>                    
                    </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>

  
</template>
<script>
import Roller from "vue-roller";
import Vue from "vue";

export default {
  name:"",
  methods: {
    components:{
      Roller
    },
    movePage() {
      this.$router.push('Search');
    }
  }
};

new Vue({
  el: '#demo',
  data: {
    show: true
  }
})
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
