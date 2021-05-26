<template>
    <div>

        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <h1 class="display-3  text-white">공지사항</h1>
                                <p class="lead  text-white">이곳에서 공지사항을 확인해주세요!!</p>
                                <div class="btn-wrapper">
                                    <b-button tag="a"
                                                 class="mb-3 mb-sm-0"
                                                 variant="primary"
                                                 @click="movePage">
                                        게시물 등록
                                    </b-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>

        <div v-if="boards.length">
        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <list-row v-for="(board, index) in boards" 
                                :key="`${index}_items`"
                                :no="board.no"
                                :title="board.title"
                                :writer="board.writer"
                                :regtime="board.regtime"
                            />
                             <!--   
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-check-bold" type="primary" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase"><router-link :to="`board/view?no=${no}`" class="fontToWhite">{{ title }}</router-link></h6>
                                    <p class="description mt-3">{{writer}}</p>
                                    <p class="description mt-3">{{getFormatDate(regtime)}}</p>
                                    <base-button tag="a" href="#" type="primary" class="mt-4">
                                        View detail
                                    </base-button>
                                </card>
                            </div>
                            -->
                            </div>
                        </div>
                    </div>
                   </div>
                </section>
            </div>
         

            <div v-else class="fontToWhite">
                <section class="section section-lg pt-lg-0 mt--200">
                    <div class="container">
                    게시글이 없습니다.
                    </div>
                </section>
            </div>

    </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListRow from "@/components/board/include/ListRow.vue";
//import moment from "moment";

export default {

  name: "boardList",
  components: {
    ListRow,
    // BoardCreate,
  },
  data() {
    return {
      write_type: this.write_type,
    };
  },

   name: "boardlist",
//   props: {
//     no: Number,
//     title: String,
//     writer: String,
//     regtime: String,
//     content: String,
//   },
components:{
    ListRow
},

  computed: {
    ...mapGetters(["boards"]),
  },
  created() {
    this.$store.dispatch("getBoards");
  },
  methods: {
    movePage() {
      this.$router.push({ name: "board-create" });
    },
    // getFormatDate(regtime) {
    //   return moment(new Date(regtime)).format("YYYY.MM.DD");
    // },
  },
};
</script>

<style></style>