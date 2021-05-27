<template>
  <section class="section section-shaped section-lg my-0 back">
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
              <div class="row">
                <div class="col-1"></div>
                <div class="col-10">
                  <vue-typer
                    :text="'LOGIN.....'"
                    :repeat="Infinity"
                    :shuffle="false"
                    initial-action="typing"
                    :pre-type-delay="70"
                    :type-delay="70"
                    :pre-erase-delay="2000"
                    :erase-delay="250"
                    erase-style="select-all"
                    :erase-on-complete="false"
                    caret-animation="blink"
                  ></vue-typer>
                </div>
                <div class="col-1"></div>
              </div>
              <br />
            </template>
            <template>
              <form role="form">
                <base-input
                  alternative
                  class="mb-3"
                  placeholder=" ID"
                  addon-left-icon="fa fa-id-card-o"
                  v-model="email"
                >
                </base-input>
                <base-input
                  alternative
                  type="password"
                  placeholder=" Password"
                  addon-left-icon="ni ni-lock-circle-open"
                  v-model="password"
                >
                </base-input>
                <base-checkbox> Remember me </base-checkbox>
                <div class="text-center">
                  <base-button
                    type="default"
                    class="my-4"
                    size="lg"
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

<style scoped>
.back {
  background-image: url("../images_happy/back1.jpg");
  background-size: cover;
}
.vue-typer {
  color: #ffffff;
  text-align: center;
}

.vue-typer .custom.char.typed {
  color: #ffffff;
}
.vue-typer .custom.char.selected {
  color: #607d8b;
  background-color: transparent;
  text-decoration: line-through;
}

.vue-typer .custom.caret {
  display: none;
}
</style>
