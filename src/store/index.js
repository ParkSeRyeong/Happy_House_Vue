import Vue from "vue";
import Vuex from "vuex";
import router from "@/router/index.js";
import axios from "@/util/http-common";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sido: [],
    gugun: [],
    dong: [],
    apts: [],
    apt: Object,
    //Board
    boards: [],
    board: {},
    // jisoo
    faqs: [],
    faq: {},
    //

    //User
    userInfo: null,
    isLogin: false,
    isLoginError: false,
    // main
  },
  plugins: [
    createPersistedState({
      paths: ["userInfo", "isLogin"],
    }),
  ],

  getters: {
    sido(state) {
      return state.sido;
    },
    gugun(state) {
      return state.gugun;
    },
    dong(state) {
      return state.dong;
    },
    apts(state) {
      return state.apts;
    },

    //Board
    boards(state) {
      return state.boards;
    },
    board(state) {
      return state.board;
    },

    //faq
    faqs(state) {
      return state.faqs;
    },
    faq(state) {
      return state.faq;
    },
  },
  mutations: {
    get_sido(state, payload) {
      state.sido = payload;
    },
    get_gugun(state, payload) {
      state.gugun = payload;
    },
    get_dong(state, payload) {
      state.dong = payload;
    },
    get_apts(state, payload) {
      state.apts = payload;
    },
    SELECT_APT(state, apt) {
      state.apt = apt;
    },

    //Board
    setBoards(state, payload) {
      state.boards = payload;
    },
    setBoard(state, payload) {
      state.board = payload;
    },

    //Board
    setFaqs(state, payload) {
      state.faqs = payload;
    },
    setFaq(state, payload) {
      state.faq = payload;
    },

    //BoardListItem
    DELETE_BOARD(state, board) {
      state.items.splice(state.items.indexOf(board));
    },
    // MODIFY_BOARD(state, board) {

    // },

    //User
    // 로그인이 성공
    loginSuccess(state, payload) {
      state.isLogin = true;
      state.isLoginError = false;
      state.userInfo = payload;
    },
    // 로그인이 실패
    loginError(state) {
      state.isLogin = false;
      state.isLoginError = true;
      state.userInfo = null;
    },
    logout(state) {
      state.isLogin = false;
      state.isLoginError = false;
      state.userInfo = null;
    },
  },
  actions: {
    getSido({ commit }) {
      axios.get("/map/sido").then(({ data }) => {
        commit("get_sido", data);
      });
    },
    getGugun({ commit }, sido_code) {
      axios.get("/map/gugun/" + sido_code).then(({ data }) => {
        commit("get_gugun", data);
      });
    },
    getDong({ commit }, gugun_code) {
      axios.get("/map/dong/" + gugun_code).then(({ data }) => {
        commit("get_dong", data);
      });
    },
    getApts({ commit }, dong) {
      axios.get("/map/apt/" + dong).then(({ data }) => {
        commit("get_apts", data);
      });
    },
    selectApt({ commit }, apt) {
      axios.get("/map/dealInfo/" + apt.dong + "/" + apt.aptName).then(({ data }) => {
        commit("SELECT_APT", data);
      });
    },

    //BoardListItem
    modifyBoard({ commit }, board) {
      commit("MODIFY_BOARD", board);
    },
    deleteBoard({ commit }, board) {
      commit("DELETE_BOARD", board);
    },

    //BoardList
    getBoards(context) {
      axios
        .get("/board")
        .then(({ data }) => {
          context.commit("setBoards", data);
        })
        .catch(() => {
          alert("에러발생!");
        });
    },
    getBoard(context, payload) {
      axios.get("/board/" + payload).then(({ data }) => {
        context.commit("setBoard", data);
      });
    },
    // jisoo

    getFaqs(context) {
      axios
        .get("/faq")
        .then(({ data }) => {
          context.commit("setFaqs", data);
        })
        .catch(() => {
          alert("에러발생!");
        });
    },
    getFaq(context, payload) {
      axios.get("/faq/" + payload).then(({ data }) => {
        context.commit("setFaq", data);
      });
    },
    //User
    // 로그인을 시도 -> 토큰을 반환
    login({ commit }, singninObj) {
      axios
        .post("/user/login", {
          id: singninObj.email,
          pw: singninObj.password,
        })
        .then((res) => {
          // 토큰을 로컬 스토리지에 저장
          // 로컬 스토리지에 토큰이 있다면 새로고침시 멤버 정보를 다시 요청
          const token = res.data.token;
          if (typeof token !== "undefined") {
            let obj = {
              id: res.data.id,
              pw: res.data.pw,
              name: res.data.name,
              phone: res.data.phone,
              email: res.data.email,
              postcode: res.data.postcode,
              address: res.data.address,
              extraAddress: res.data.extraAddress,
            };
            commit("loginSuccess", obj);
            localStorage.setItem("access_token", token); // 저장
            router.push({ name: "Home" }); // 홈 화면으로 이동
          } else {
            alert("아이디 혹은 패스워드가 틀렸습니다.");
          }
          //dispatch("getMemberInfo");
        })
        .catch((error) => {
          console.log(error);
          commit("loginError");
        });
    },

    logout({ commit }) {
      alert("로그아웃되었습니다.")
      commit("logout"); // store에 상태 값들을 바꿔준다.
      localStorage.removeItem("access_token"); // 토큰도 지워준다.
    },
  },
});
