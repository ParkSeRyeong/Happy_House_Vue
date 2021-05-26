<template>
// jisoo
  <header class="header-global">
    <base-nav class="navbar-main" transparent type="" effect="light" expand>
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img src="img/brand/white.png" />
      </router-link>

      <div class="row" slot="content-header" slot-scope="{ closeMenu }">
        <div class="col-6 collapse-brand">
          <a href="../index.html">
            <img src="img/brand/blue.png" />
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <li class="nav-item dropdown">
          <a href="#" class="nav-link" data-toggle="dropdown" role="button">
            <i class="ni ni-ui-04 d-lg-none"></i>
            <span class="nav-link-inner--text">Components</span>
          </a>
          <div class="dropdown-menu dropdown-menu-xl">
            <div class="dropdown-menu-inner">
              <a
                href="https://demos.creative-tim.com/argon-design-system/docs/getting-started/overview.html"
                class="media d-flex align-items-center"
              >
                <div
                  class="icon icon-shape bg-gradient-primary rounded-circle text-white"
                >
                  <i class="ni ni-spaceship"></i>
                </div>
                <div class="media-body ml-3">
                  <h6 class="heading text-primary mb-md-1">Getting started</h6>
                  <p class="description d-none d-md-inline-block mb-0">
                    Get started with Bootstrap, the world's most popular
                    framework for building responsive sites.
                  </p>
                </div>
              </a>
              <a
                href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html"
                class="media d-flex align-items-center"
              >
                <div
                  class="icon icon-shape bg-gradient-warning rounded-circle text-white"
                >
                  <i class="ni ni-ui-04"></i>
//
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
// main
                </div>
                <div class="media-body ml-3">
                  <h5 class="heading text-warning mb-md-1">Components</h5>
                  <p class="description d-none d-md-inline-block mb-0">
                    Learn how to use Argon compiling Scss, change brand colors
                    and more.
                  </p>
                </div>
              </a>
            </div>
// jisoo
          </div>
        </li>
        <li class="nav-item dropdown">
          <a href="#" class="nav-link" data-toggle="dropdown" role="button">
            <i class="ni ni-collection d-lg-none"></i>
            <span class="nav-link-inner--text">Examples</span>
          </a>
          <div class="dropdown-menu">
            <router-link to="/landing" class="dropdown-item"
              >Landing</router-link
            >
            <router-link to="/profile" class="dropdown-item"
              >Profile</router-link
            >
            <router-link to="/login" class="dropdown-item">Login</router-link>
            <router-link to="/register" class="dropdown-item"
              >Register</router-link
            >
          </div>
        </li>
      </ul>
      <ul class="navbar-nav align-items-lg-center ml-lg-auto">
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://www.facebook.com/creativetim"
            target="_blank"
            data-toggle="tooltip"
            title="Like us on Facebook"
          >
            <i class="fa fa-facebook-square"></i>
            <span class="nav-link-inner--text d-lg-none">Facebook</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://www.instagram.com/creativetimofficial"
            target="_blank"
            data-toggle="tooltip"
            title="Follow us on Instagram"
          >
            <i class="fa fa-instagram"></i>
            <span class="nav-link-inner--text d-lg-none">Instagram</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://twitter.com/creativetim"
            target="_blank"
            data-toggle="tooltip"
            title="Follow us on Twitter"
          >
            <i class="fa fa-twitter-square"></i>
            <span class="nav-link-inner--text d-lg-none">Twitter</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://github.com/creativetimofficial/vue-argon-design-system"
            target="_blank"
            data-toggle="tooltip"
            title="Star us on Github"
          >
            <i class="fa fa-github"></i>
            <span class="nav-link-inner--text d-lg-none">Github</span>
          </a>
        </li>
        <li class="nav-item d-none d-lg-block ml-lg-4">
          <a
            href="https://www.creative-tim.com/product/vue-argon-design-system"
            target="_blank"
            class="btn btn-neutral btn-icon"
          >
            <span class="btn-inner--icon">
              <i class="fa fa-cloud-download mr-2"></i>
            </span>
            <span class="nav-link-inner--text">Download</span>
          </a>
        </li>
      </ul>
    </base-nav>
  </header>
//

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
          <li class="nav-item"><a href="/board" class="nav-link">공지사항</a></li>
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
	        </ul> -->
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
	      

    </base-nav>
  </header>
  
// main
</template>
<script>
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";
// jisoo
//
import { mapState, mapActions } from "vuex";
//main

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
