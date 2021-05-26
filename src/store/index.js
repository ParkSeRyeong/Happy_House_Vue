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
    faqs: [],
    faq: {}
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
    },

    //faq
    faqs(state) {
      return state.faqs;
    },
    faq(state) {
      return state.faq;
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
  }
});
