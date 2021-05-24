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
    board:{}
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

     //BoardView
    MODIFY_BOARD(state, board) {
      state.boards = state.boards.map((boardItem) => {
        if (boardItem === board) {
          return {
            no: board.no,
            title: board.title,
            writer: board.writer,
            regtime: board.regtime,
            content:board.content,
          }
        }
        return boardItem;
      });
    },
    DELETE_BOARD(state, board) {
      state.boards.splice(state.boards.indexOf(board));
    },
    SUBMIT_BOARD(state, boardItem) {
      state.boards.push(boardItem);
    },
    
  },
  actions: {
    getSido({commit}) {
      axios.get('/map/sido').then(({ data }) => {
        commit("get_sido", data);
      });
    },
    getGugun({commit}, sido_code) {
      axios.get('/map/gugun/'+sido_code).then(({ data }) => {
        commit("get_gugun", data);
      });
    },
    getDong({commit}, gugun_code) {
      axios.get('/map/dong/'+gugun_code).then(({ data }) => {
        commit("get_dong", data);
      });
    },
    getApts({commit}, dong) {
      axios.get('/map/apt/'+ dong).then(({ data }) => {
        commit("get_apts", data);
      });
    },
    selectApt({ commit }, apt) {
      commit('SELECT_APT', apt);
    },

    //BoardView
    modifyBoard({ commit }, board) {
      commit("MODIFY_BOARD", board);
    },
    deleteBoard({ commit }, board) {
      commit("DELETE_BOARD", board);
    },

    submitBoard({ commit }, boardItem) {
      commit("SUBMIT_BOARD", boardItem);
    },

    //BoardList
    getBoards(context) {
      axios.get("/api/board")
        .then(({data}) => {
          context.commit("setBoards", data);
        })
        .catch((error) => {
          console.dir(error);
          alert("에러발생!!!");
        });
    },
    getBoard(context, payload) {
      axios.get(payload).then(({data}) => {
        context.commit("setBoard", data);
      });
    }
  }
});