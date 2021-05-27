<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type="" effect="light" expand>
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img src="img/brand/white.png" alt="logo" />
      </router-link>
      <div class="row" slot="content-header" slot-scope="{ closeMenu }">
        <div class="col-6 collapse-brand">
          <a
            href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
          >
            <img src="../images_happy/logo.png" />
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <router-link to="/" class="dropdown-item">Home</router-link>
        <base-dropdown tag="li" class="nav-item">
          <a
            slot="title"
            href="#"
            class="nav-link"
            data-toggle="dropdown"
            role="button"
          >
            <i class="ni ni-collection d-lg-none"></i>
            <span class="nav-link-inner--text">Notice</span>
          </a>
          <router-link to="/board" class="dropdown-item">공지사항</router-link>
          <router-link to="/faq" class="dropdown-item">FAQ</router-link>
          <router-link to="/qna" class="dropdown-item"
            >1:1 질문하기</router-link
          >
        </base-dropdown>
        <base-dropdown tag="li" class="nav-item">
          <a
            slot="title"
            href="#"
            class="nav-link"
            data-toggle="dropdown"
            role="button"
          >
            <i class="ni ni-collection d-lg-none"></i>
            <span class="nav-link-inner--text">MyArea</span>
          </a>
          <router-link to="/myarea" class="dropdown-item"
            >우리 지역 둘러보기</router-link
          >
          <router-link to="/myarea" class="dropdown-item"
            >우리 지역 게시판</router-link
          >
        </base-dropdown>
      </ul>

      <ul class="navbar-nav align-items-lg-center ml-lg-auto">
        <div class="navbar-nav ml-auto" v-if="!isLogin">
          <li class="nav-item">
            <a href="/register" class="nav-link"> Sign Up </a>
          </li>
          <li class="nav-item">
            <a href="/login" class="nav-link"> Login </a>
          </li>
        </div>

        <div class="navbar-nav ml-auto" v-else>
          <li class="nav-item">
            <a href="/profile" class="nav-link">
              {{ userInfo.name }}
            </a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link" @click="logout"> LogOut </a>
          </li>
        </div>

        <li class="nav-item d-none d-lg-block ml-lg-4">
          <a
            href="https://github.com/ParkSeRyeong/Happy_House.git"
            target="_blank"
            rel="noopener"
            class="btn btn-neutral btn-icon"
          >
            <span class="btn-inner--icon">
              <i class="fa fa-github"></i>
            </span>
            <span class="nav-link-inner--text"> Our Github</span>
          </a>
        </li>
      </ul>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";
import { mapState} from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["isLogin", "userInfo"]),
  },
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown,
  },
  methods: {
   logout() {
      this.$store.dispatch("logout");
      this.$router.push("../");
    },
  },
};
</script>
<style></style>
