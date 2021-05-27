<template>
  <section class="section section-shaped section-lg my-0">
    <div class="shape shape-style-1 bg-gradient-default">
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
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class="border-0"
          >
            <template>
              <div class="text-muted text-center mb-3">
                <small>Sign in with</small>
              </div>
              <div class="btn-wrapper text-center">
                <base-button type="neutral" href="https://github.com/ParkSeRyeong/Happy_House.git">
                  <img slot="icon" src="img/icons/common/github.svg" />
                  Github
                </base-button>
              </div>
            </template>
            <template>
              <form role="form">
                <base-input
                  alternative
                  class="mb-3"
                  placeholder="ID"
                  addon-left-icon="ni ni-email-83"
                  v-model="email"
                >
                </base-input>
                <base-input
                  alternative
                  type="password"
                  placeholder="Password"
                  addon-left-icon="ni ni-lock-circle-open"
                  v-model="password"
                >
                </base-input>
                <base-checkbox> Remember me </base-checkbox>
                <div class="text-center">
                  <base-button
                    type="primary"
                    class="my-4"
                    @click="
                      login({
                        email: email,
                        password: password,
                      })
                    "
                    >Sign In</base-button
                  >
                </div>
              </form>
            </template>
          </card>
          <div class="row mt-3">
            <div class="col-6">
              <a href="" class="text-light">
                <small>Forgot password?</small>
              </a>
            </div>
            <div class="col-6 text-right">
              <a href="/register" class="text-light">
                <small>Create new account</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapState(["isLogin", "isLoginError"]),
  },
  methods: {
    ...mapActions(["login"]),
  },
};
</script>

<style></style>
