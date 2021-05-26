<template>
    <header class="header-global">
        <base-nav class="navbar navbar-expand-md navbar-light fixed-top bg-dark" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="images_happy/mainlogo.png" height=200%>
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-12 collapse-brand">
                    <a href="../index.html">
                        <img src="img/brand/blue.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center ml-lg-auto">
                <li>
                    <router-link to="/board" class="dropdown-item">공지사항</router-link>
                </li>
                <li>
                    <router-link to="/board" class="dropdown-item">게시판</router-link>
                </li>
            </ul>  

      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active"><a href="#" class="nav-link">Home</a></li>
          <li class="nav-item"><a href="#" class="nav-link">공지사항</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Q&A</a></li>
          <li class="nav-item"><a href="#" class="nav-link">우리동네</a></li>
        </ul>
        <!-- 여기 추가했어여 -->
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="${root}/user/login" class="nav-link">Login / Sign Up</a>
          </li>
        </ul>
      </div>
      <!-- <ul class="navbar-nav align-items-lg-center ml-lg-auto">

           <div class="collapse navbar-collapse" id="ftco-nav">
	        <ul class="navbar-nav ml-auto">
	          <li class="nav-item active"><a href="" class="nav-link">Home</a></li>
	          <li class="nav-item"><a href="" class="nav-link">공지사항</a></li>
	          <li class="nav-item"><a href="" class="nav-link">Q&A</a></li>
	          <li class="nav-item"><a href="" class="nav-link">우리동네</a></li>
	        </ul>
	        <!-- 여기 추가했어여 -->
            <div class="navbar-nav ml-auto" v-if="!isLogin">
                <li class="nav-item">
                <a href="/register" class="nav-link">
                    Sign Up
                </a>
                </li>
                <li class="nav-item">
                <a href="/login" class="nav-link"> Login </a>
                </li>
            </div>

            <div class="navbar-nav ml-auto" v-else>
                <li class="nav-item">
                <a href="/" class="nav-link"> 
                {{userInfo.name}}
                </a>
                </li>
                <li class="nav-item">
                <a href="" class="nav-link" @click="logout">
                    LogOut
                </a>
                </li>
            </div>
	      </div>

    </base-nav>
  </header>
  
</template>
<script>
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";
import { mapState, mapActions } from "vuex";

export default {
    data(){
        return{

        }
    },
    computed:{
        ...mapState(["isLogin","userInfo"])
    },
  components: {
    BaseNav,
    CloseButton,
  },
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>
<style>
</style>