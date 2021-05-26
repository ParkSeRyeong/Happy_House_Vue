<template>
  <section class="section section-shaped section-lg my-0">
    <div class="shape shape-style-1 mainbg">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <card
            type="light"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class="border-0"
          >
            <template>
              <div class="text-center mb-3">
                <large>Sign up with</large>
              </div>
              <div class="btn-wrapper text-center">
                <base-button type="neutral">
                  <img slot="icon" src="img/icons/common/github.svg" />
                  Github
                </base-button>

                <base-button type="neutral">
                  <img slot="icon" src="img/icons/common/google.svg" />
                  Google
                </base-button>
              </div>
            </template>
            <template>
              <div class="text-center text-muted mb-4">
                <small>Or sign up with credentials</small>
              </div>
              <form role="form">
                <base-input
                  alternative
                  type="text"
                  name="id"
                  v-model="id"
                  placeholder=" ID"
                  addon-left-icon="ni ni-circle-08"
                ></base-input>
                <base-input
                  alternative
                  type="password"
                  name="pw"
                  v-model="pw"
                  placeholder=" Password"
                  addon-left-icon="ni ni-lock-circle-open"
                ></base-input>
                <base-input
                  alternative
                  type="text"
                  name="name"
                  v-model="name"
                  placeholder=" Username"
                  addon-left-icon="ni ni-single-02"
                ></base-input>
                <base-input
                  alternative
                  type="email"
                  name="email"
                  v-model="email"
                  placeholder=" Email"
                  addon-left-icon="ni ni-email-83"
                ></base-input>
                <base-input
                  alternative
                  type="phone"
                  name="phone"
                  v-model="phone"
                  placeholder=" Phone"
                  addon-left-icon="ni ni-mobile-button"
                ></base-input>
                
              <!-- 
                <base-input
                  alternative
                  type="text"
                  name="address"
                  v-model="address"
                  placeholder=" Address"
                  addon-left-icon="ni ni-square-pin"
                ></base-input> -->

                <b-container class="mb-3">
                  <label for="address">Address</label>
                  <b-row class="centerize mt-4 mb-4">
                    <b-col cols="4"
                      ><small>시</small>
                      <b-form-select id="sido1" v-model="SidoCode1" @change="getGugunCode">
                        <option
                          v-for="(option, index) in sido"
                          :key="index"
                          :value="option.sido_code"
                        >
                          {{ option.sido_name }}
                        </option>
                      </b-form-select>
                    </b-col>

                    <b-col cols="4"
                      ><small>구/군</small>
                      <b-form-select id="gugun1" v-model="GugunCode1" @change="getDongCode">
                        <option
                          v-for="(option, index) in gugun"
                          :key="index"
                          :value="option.gugun_code"
                        >
                          {{ option.gugun_name }}
                        </option>
                      </b-form-select>
                    </b-col>

                    <b-col cols="4"
                      ><small>동</small>
                      <b-form-select id="dong1" v-model="Dong1" @change="getAptName">
                        <option v-for="(option, index) in dong" :key="index" :value="option.dong">
                          {{ option.dong }}
                        </option>
                      </b-form-select>
                    </b-col>
                  </b-row>
                </b-container>

                <b-container class="mb-3">
                  <label for="myarea">MyArea</label>
                  <b-row class="centerize mt-4 mb-4">
                    <b-col cols="4"
                      ><small>시</small>
                      <b-form-select id="sido1" v-model="SidoCode1" @change="getGugunCode">
                        <option
                          v-for="(option, index) in sido"
                          :key="index"
                          :value="option.sido_code"
                        >
                          {{ option.sido_name }}
                        </option>
                      </b-form-select>
                    </b-col>

                    <b-col cols="4"
                      ><small>구/군</small>
                      <b-form-select id="gugun1" v-model="GugunCode1" @change="getDongCode">
                        <option
                          v-for="(option, index) in gugun"
                          :key="index"
                          :value="option.gugun_code"
                        >
                          {{ option.gugun_name }}
                        </option>
                      </b-form-select>
                    </b-col>

                    <b-col cols="4"
                      ><small>동</small>
                      <b-form-select id="dong1" v-model="Dong1" @change="getAptName">
                        <option v-for="(option, index) in dong" :key="index" :value="option.dong">
                          {{ option.dong }}
                        </option>
                      </b-form-select>
                    </b-col>
                  </b-row>
                </b-container>

                <base-checkbox>
                  <span
                    >I agree with the
                    <a href="#">Privacy Policy</a>
                  </span>
                </base-checkbox>
                <div class="text-center">
                  <base-button type="primary" class="my-4">Sign Up</base-button>
                </div>
              </form>
            </template>
          </card>
        </div>
      </div>
    </div>
  </section>
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

<style></style>
