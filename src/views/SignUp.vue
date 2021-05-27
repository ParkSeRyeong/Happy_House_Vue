<template>
  <div class="mainbg-search" id="app">
    <b-container class="bv-example-row">
      <b-row>
        <div class="col-md-12 ftco-animate pb-0 text-center">
          <h1 class="mb-4 bread fontToWhite">회원가입</h1>
        </div>
      </b-row>
      <hr />
      <b-row>
        <div class="container">
          <form id="signup-form">
            <div class="form-group">
              <label for="id">ID</label>
              <b-form-input type="text" name="id" v-model="id" />
            </div>
            <div class="form-group">
              <label for="pw">Password</label>
              <b-form-input type="password" name="pw" v-model="pw" />
            </div>
            <div class="form-group">
              <label for="name">Username</label>
              <b-form-input type="text" name="name" v-model="name" />
            </div>

            <b-container class="mb-3">
              <label for="name">Address</label>
              <b-row class="centerize mt-4 mb-4">
                <b-col cols="1 centerize">시 :</b-col>
                <b-col cols="3">
                  <b-form-select
                    id="sido1"
                    v-model="SidoCode1"
                    @change="getGugunCode"
                  >
                    <option
                      v-for="(option, index) in sido"
                      :key="index"
                      :value="option.sido_code"
                    >
                      {{ option.sido_name }}
                    </option>
                  </b-form-select>
                </b-col>
                <b-col cols="1 centerize">구 군 :</b-col>
                <b-col cols="3">
                  <b-form-select
                    id="gugun1"
                    v-model="GugunCode1"
                    @change="getDongCode"
                  >
                    <option
                      v-for="(option, index) in gugun"
                      :key="index"
                      :value="option.gugun_code"
                    >
                      {{ option.gugun_name }}
                    </option>
                  </b-form-select>
                </b-col>
                <b-col cols="1 centerize"> 동 :</b-col>
                <b-col cols="3">
                  <b-form-select
                    id="dong1"
                    v-model="Dong1"
                    @change="getAptName"
                  >
                    <option
                      v-for="(option, index) in dong"
                      :key="index"
                      :value="option.dong"
                    >
                      {{ option.dong }}
                    </option>
                  </b-form-select>
                </b-col>
              </b-row>
            </b-container>

            <b-container class="mb-3">
              <label for="name">My Area</label>
              <b-row class="centerize mt-4 mb-4">
                <b-col cols="1 centerize">시 :</b-col>
                <b-col cols="3">
                  <b-form-select
                    id="sido2"
                    v-model="SidoCode2"
                    @change="getGugunCode"
                  >
                    <option
                      v-for="(option, index) in sido"
                      :key="index"
                      :value="option.sido_code"
                    >
                      {{ option.sido_name }}
                    </option>
                  </b-form-select>
                </b-col>
                <b-col cols="1 centerize">구 군 :</b-col>
                <b-col cols="3">
                  <b-form-select
                    id="gugun2"
                    v-model="GugunCode2"
                    @change="getDongCode"
                  >
                    <option
                      v-for="(option, index) in gugun"
                      :key="index"
                      :value="option.gugun_code"
                    >
                      {{ option.gugun_name }}
                    </option>
                  </b-form-select>
                </b-col>
                <b-col cols="1 centerize">동 :</b-col>
                <b-col cols="3">
                  <b-form-select
                    id="dong2"
                    v-model="Dong2"
                    @change="getAptName"
                  >
                    <option
                      v-for="(option, index) in dong"
                      :key="index"
                      :value="option.dong"
                    >
                      {{ option.dong }}
                    </option>
                  </b-form-select>
                </b-col>
              </b-row>
            </b-container>

            <div class="form-group">
              <label for="phone">Phone</label>
              <b-form-input type="phone" name="phone" v-model="phone" />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <b-form-input type="email" name="email" v-model="email" />
            </div>
            <div class="form-group text-right">
              <button class="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </b-row>
    </b-container>
  </div>
</template>
  



<script>
import { mapGetters } from "vuex";
export default {
  name: "SignUp",
  data() {
    return {
      SidoCode1: "",
      GugunCode1: "",
      Dong1: "",
      SidoCode2: "",
      GugunCode2: "",
      Dong2: "",
    };
  },
  computed: {
    ...mapGetters(["sido", "gugun", "dong"]),
  },
  created() {
    this.$store.dispatch("getSido");
  },
  methods: {
    getGugunCode() {
      this.$store.dispatch("getGugun", this.SidoCode1);
      this.$store.dispatch("getGugun", this.SidoCode2);
    },
    getDongCode() {
      this.$store.dispatch("getDong", this.GugunCode1);
      this.$store.dispatch("getDong", this.GugunCode2);
    },
    getAptName() {
      this.$store.dispatch("getApts", this.Dong1);
      this.$store.dispatch("getApts", this.Dong2);
    },
  },
};
</script>

<style scoped>
#signup-form {
  text-align: left;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
input {
  width: 100%;
  padding: 20px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #787878;
  font-size: medium;
}
</style>
