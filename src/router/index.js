import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
// import Header from "../layout/starter/StarterHeader";
// import Footer from "../layout/starter/StarterFooter";
import Search from "../views/Search.vue";
import Board from "../views/Board.vue";
import AppHeader from "../layout/AppHeader";
import AppFooter from "../layout/AppFooter";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter
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
// eslint - disable - next - line no - unused - vars
// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes,
// });

// export default router;
