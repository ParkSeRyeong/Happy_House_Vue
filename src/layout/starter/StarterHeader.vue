<template>
<<<<<<< Updated upstream
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="images_happy/logo.jpg" height=100%>
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="../index.html">
                        <img src="img/brand/blue.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <li>
                    <router-link to="/board" class="dropdown-item">게시판</router-link>
                </li>
                <li class="nav-item dropdown">
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

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center ml-lg-auto">
        <li>
          <router-link to="/board" class="dropdown-item">공지사항</router-link>
        </li>
        <li>
          <router-link to="/board" class="dropdown-item">게시판</router-link>
        </li>
      </ul>

      <!-- <li class="nav-item dropdown">
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                </li>
                <li class="nav-item dropdown">
=======
                </li> -->
      <!-- <li class="nav-item dropdown">
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                </li>
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.facebook.com/creativetim" target="_blank"
                       data-toggle="tooltip" title="Like us on Facebook">
                        <i class="fa fa-facebook-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Facebook</span>
=======
                </li>-->
      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active"><a href="#" class="nav-link">Home</a></li>
          <router-link to="/board" class="dropdown-item">공지사항</router-link>
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
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">로그인</span>
>>>>>>> Stashed changes
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.instagram.com/creativetimofficial"
                       target="_blank" data-toggle="tooltip" title="Follow us on Instagram">
                        <i class="fa fa-instagram"></i>
                        <span class="nav-link-inner--text d-lg-none">Instagram</span>
                    </a>
                </li>
<<<<<<< Updated upstream
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://twitter.com/creativetim" target="_blank"
                       data-toggle="tooltip" title="Follow us on Twitter">
                        <i class="fa fa-twitter-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Twitter</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://github.com/creativetimofficial/vue-argon-design-system"
                       target="_blank" data-toggle="tooltip" title="Star us on Github">
                        <i class="fa fa-github"></i>
                        <span class="nav-link-inner--text d-lg-none">Github</span>
                    </a>
                </li>
                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <a href="https://www.creative-tim.com/product/vue-argon-design-system" target="_blank"
                       class="btn btn-neutral btn-icon">
                <span class="btn-inner--icon">
                  <i class="fa fa-cloud-download mr-2"></i>
                </span>
                        <span class="nav-link-inner--text">Download</span>
                    </a>
                </li>
            </ul>
        </base-nav>
    </header>
=======
            </ul> -->
    </base-nav>
  </header>
>>>>>>> Stashed changes
</template>
<script>
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
  },
};
</script>
<style>
</style>
