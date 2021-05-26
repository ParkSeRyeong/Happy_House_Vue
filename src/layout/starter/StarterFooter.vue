<template>
<<<<<<< HEAD
  <section class="page-section mainfooter" id="contact">
    <div class="container fontToWhite">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <h2 class="mt-0">C O N T A C T</h2>
          <hr class="divider my-4" />
          <p class="text-muted mb-5">서울시 강남구 테헤란로 멀티스퀘어</p>
        </div>
      </div>
      <div class="row">
        <span class="col-lg-2"></span>
        <span class="col-lg-4 ml-auto text-center mb-5 mb-lg-5">
          <b-icon icon="telephone-fill" aria-hidden="true"></b-icon>
          <div>1544-9001</div>
        </span>
        <span class="col-lg-4 ml-auto text-center mb-5 mb-lg-5">
          <b-icon icon="envelope-fill" aria-hidden="true"></b-icon>
          <div>admin@ssafy.com</div>
        </span>
        <span class="col-lg-2"></span>
      </div>
    </div>
    <footer class="bg-dark py-5">
      <div class="container">
        <div class="small text-center text-muted">
          Copyright &copy; - SSAFY, All rights reserved.
        </div>
      </div>
    </footer>
  </section>
  <!-- Footer-->
=======
  <header class="header-global">
    <base-nav
      class="navbar navbar-expand-md navbar-light fixed-top bg-dark"
      transparent
      type=""
      effect="light"
      expand
    >
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img src="images_happy/mainlogo.png" height="200%" />
      </router-link>

      <div class="row" slot="content-header" slot-scope="{ closeMenu }">
        <div class="col-12 collapse-brand">
          <a href="../index.html">
            <img src="img/brand/blue.png" />
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <!-- <li class="nav-item dropdown">
                    <a href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <span class="nav-link-inner--text">Components</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-xl">
                        <div class="dropdown-menu-inner">
                            <a href="https://demos.creative-tim.com/argon-design-system/docs/getting-started/overview.html"
                               class="media d-flex align-items-center">
                                <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                    <i class="ni ni-spaceship"></i>
                                </div>
                                <div class="media-body ml-3">
                                    <h6 class="heading text-primary mb-md-1">Getting started</h6>
                                    <p class="description d-none d-md-inline-block mb-0">Get started with Bootstrap, the
                                        world's most popular framework for building responsive sites.</p>
                                </div>
                            </a>
                            <a href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html"
                               class="media d-flex align-items-center">
                                <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                    <i class="ni ni-ui-04"></i>
                                </div>
                                <div class="media-body ml-3">
                                    <h5 class="heading text-warning mb-md-1">Components</h5>
                                    <p class="description d-none d-md-inline-block mb-0">Learn how to use Argon
                                        compiling Scss, change brand colors and more.</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </li> -->
      <!-- <li class="nav-item dropdown">
                    <a href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Examples</span>
                    </a>
                    <div class="dropdown-menu">
                        <router-link to="/landing" class="dropdown-item">Landing</router-link>
                        <router-link to="/profile" class="dropdown-item">Profile</router-link>
                        <router-link to="/login" class="dropdown-item">Login</router-link>
                        <router-link to="/register" class="dropdown-item">Register</router-link>
                    </div>
                </li>-->
      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/board" class="nav-link">공지사항</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/board" class="nav-link">Q&A</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">우리동네</router-link>
          </li>
        </ul>
        <!-- 여기 추가했어여 -->
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="${root}/user/login" class="nav-link">Login / Sign Up</a>
          </li>
        </ul>
      </div>
      <!-- <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">로그인</span>
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">회원가입</span>
                    </a>
                </li>
            </ul> -->
    </base-nav>
  </header>
>>>>>>> 46170109b6909564f35286cf5f689bb32fb233cc
</template>
<script>
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";
export default {
<<<<<<< HEAD
  name: 'starter-footer',
  data() {
    return {
      year: new Date().getFullYear(),
    };
=======
  components: {
    BaseNav,
    CloseButton,
>>>>>>> 46170109b6909564f35286cf5f689bb32fb233cc
  },
};
</script>
<style>
</style>