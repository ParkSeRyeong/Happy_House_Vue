import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Header from "../layout/starter/StarterHeader";
import Footer from "../layout/starter/StarterFooter";
import Search from "../views/Search.vue";
import Board from "../views/Board.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      components: {
        header: Header,
        default: Home,
        footer: Footer
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
        header: Header,
        default: Board,
        footer: Footer
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
