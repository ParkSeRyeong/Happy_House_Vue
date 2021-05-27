import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
// import Header from "../layout/starter/StarterHeader";
// import Footer from "../layout/starter/StarterFooter";
import Search from "../views/Search.vue";
import Board from "../views/Board.vue";
//jisoo
import AppHeader from "../layout/AppHeader";
import AppFooter from "../layout/AppFooter";
//
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Profile from "../views/Profile.vue";
import Modify from "../views/ProfileModify.vue";
// main

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "Home",
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter
      }

    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter,
      },
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter,
      },
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter,
      },
    },
    {
      path: "/modify",
      name: "modify",
      components: {
        header: AppHeader,
        default: Modify,
        footer: AppFooter,
      },

    },
    {
      path: "/search",
      name: "search",
      components: {
        header: AppHeader,
        default: Search,
        footer: AppFooter,
      },
    },
    {
      path: "/board",
      name: "board",
      components: {
        header: AppHeader,
        default: Board,
        footer: AppFooter,
      },
      children: [
        {
          path: "",
          name: "board-list",
          component: () => import("@/components/board/BoardList.vue"),
        },
        {
          path: "create",
          name: "board-create",
          component: () => import("@/components/board/BoardCreate.vue"),
        },
        {
          path: "view",
          name: "board-view",
          component: () => import("@/components/board/BoardView.vue"),
        },
        {
          path: "modify/:no",
          name: "board-modify",
          component: () => import("@/components/board/BoardModify.vue"),
        },
      ],
      redirect: () => {
        return "/board";
      },
    },
    {
      path: "/faq",
      name: "faq",
      components: {
        header: AppHeader,
        default: Board,
        footer: AppFooter,
      },
      children: [
        {
          path: "",
          name: "faq-list",
          component: () => import("@/components/board/FaqList.vue"),
        },
        {
          path: "create",
          name: "faq-create",
          component: () => import("@/components/board/BoardCreate.vue"),
        },
        {
          path: "view",
          name: "faq-view",
          component: () => import("@/components/board/FaqView.vue"),
        },
        {
          path: "modify/:no",
          name: "faq-modify",
          component: () => import("@/components/board/BoardModify.vue"),
        },
      ],
      redirect: () => {
        return "/faq";
      },
    },
    // { -------------------------- search detail
    //   path: "/",
    //   name: "Home",
    //   components: {
    //     header: Header,
    //     default: Home,
    //     footer: Footer
    //   },
    // },
  ],
});
