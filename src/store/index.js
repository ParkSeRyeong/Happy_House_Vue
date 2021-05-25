import Vue from 'vue';
import Vuex from 'vuex';
import axios from "@/util/http-common";

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
    //User
    userInfo: {},
    isLogin: false,
    isLoginError: false,
  },
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
    }
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
      axios.get('/map/sido').then(({ data }) => {
        commit("get_sido", data);
      });
    },
    getGugun({ commit }, sido_code) {
      axios.get('/map/gugun/' + sido_code).then(({ data }) => {
        commit("get_gugun", data);
      });
    },
    getDong({ commit }, gugun_code) {
      axios.get('/map/dong/' + gugun_code).then(({ data }) => {
        commit("get_dong", data);
      });
    },
    getApts({ commit }, dong) {
      axios.get('/map/apt/' + dong).then(({ data }) => {
        commit("get_apts", data);
      });
    },
    selectApt({ commit }, apt) {
      axios.get('/map/dealInfo/' + apt.dong + '/' + apt.aptName).then(({ data }) => {
        commit('SELECT_APT', data);
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
      axios.get("/api/board")
        .then(({ data }) => {
          console.log(data),
            context.commit("setBoards", data);
        })
        .catch((error) => {
          console.dir(error);
          alert("에러발생!!!");
        });
    },
    getBoard({ commit }, no) {
      axios.get("/api/board/view" + no).then(({ data }) => {
        alert("asdfasdfa")
          commit("setBoard", data);
      });
    },

    //User
    // 로그인을 시도 -> 토큰을 반환
    login({ commit, dispatch }, singninObj) {
      axios
        .post("/user/login", {
          email: singninObj.email,
          password: singninObj.password,
        })
        .then((res) => {
          alert("success")
          // 토큰을 로컬 스토리지에 저장
          // 로컬 스토리지에 토큰이 있다면 새로고침시 멤버 정보를 다시 요청
          let token = res.data.token;
          localStorage.setItem("access_token", token); // 저장
          dispatch("getMemberInfo");
        })
        .catch((error) => {
          console.log(error);
          commit("loginError");
        });
    },

    // logout({ commit }) {
    //   commit("logout"); // store에 상태 값들을 바꿔준다.
    //   localStorage.removeItem("access_token"); // 토큰도 지워준다.
    //   router.push({ name: "Home" });
    // },

    // 새로고침이 될때마다 실행이 되게끔
    getMemberInfo({ commit }) {
      // 로컬 스토리지에 저장되어 있는 토큰을 불러온다.
      let config = {
        headers: {
          "access-toketn": localStorage.getItem("access_token"),
        },
      };
      // 반환된 토큰을 사용해 유저 정보를 받아온다
      // 새로 고침 -> 토큰만 가지고 멤버 정보를 요청
      if (localStorage.getItem("access_token")) {
        axios
          .get("https://reqres.in/api/users/2", config)
          .then((response) => {
            let obj = {
              avatar: response.data.data.avatar,
              email: response.data.data.email,
              first_name: response.data.data.first_name,
              id: response.data.data.id,
              last_name: response.data.data.last_name,
            };
            commit("loginSuccess", obj);
          })
          .catch((err) => {
            console.log(err);
            commit("loginError");
          });
      }
    },

  }
});