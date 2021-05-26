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

// main

import MyPage from "../views/MyPage.vue";


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
// jisoo
        footer: AppFooter
      },
//
        footer: Footer
      },
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: Header,
        default: Login,
        footer: Footer
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: Header,
        default: Register,
        footer: Footer
      }
// main
    },
    {
      path: "/mypage",
      name: "mypage",
      components: {
        header: Header,
        default: MyPage,
        footer: Footer,
      },
    },
    {
      path: "/search",
      name: "search",
      components: {
        //header: Header,
        default: Search,
        //  footer: Footer
      },
    },
    {
      path: "/board",
      name: "board",
      components: {
        header: AppHeader,
        default: Board,
        footer: AppFooter
      },
      children: [
        {
          path: "",
          name: "board-list",
          component: () => import("@/components/board/BoardList.vue")
        },
        {
          path: "create",
          name: "board-create",
          component: () => import("@/components/board/BoardCreate.vue")
        },
        {
          path: "view",
          name: "board-view",
          component: () => import("@/components/board/BoardView.vue")
        },
        {
          path: "modify/:no",
          name: "board-modify",
          component: () => import("@/components/board/BoardModify.vue")
        },
      ],
      redirect: () => {
        return "/board";
      }
    },
    {
      path: "/faq",
      name: "faq",
      components: {
        header: AppHeader,
        default: Board,
        footer: AppFooter
      },
      children: [
        {
          path: "",
          name: "faq-list",
          component: () => import("@/components/board/FaqList.vue")
        },
        {
          path: "create",
          name: "faq-create",
          component: () => import("@/components/board/BoardCreate.vue")
        },
        {
          path: "view",
          name: "faq-view",
          component: () => import("@/components/board/FaqView.vue")
        },
        {
          path: "modify/:no",
          name: "faq-modify",
          component: () => import("@/components/board/BoardModify.vue")
        },

      ],
      redirect: () => {
        return "/faq";
      }
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
  ]
});
