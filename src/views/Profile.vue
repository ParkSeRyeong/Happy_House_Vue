<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0 back"></section>
    <section class="section section-skew">
      <div class="row">
        <div class="col-lg-3"></div>
        <div class="col-lg-6">
          <div class="container pt-lg-md">
            <card shadow class="card-profile mt--300" no-body>
              <div class="px-4">
                <div class="row justify-content-center">
                  <template>
                    <form role="textarea">
                      <div class="row">
                        <div class="col">
                          <span><h2>My Page</h2></span>
                        </div>
                        <div class="w-100"></div>
                        <div class="col"><span> </span></div>
                      </div>

                      <div class="row">
                        <div class="col-5">
                          <base-input
                            placeholder=" Name"
                            addon-left-icon="fa fa-user"
                            readonly
                          ></base-input>
                        </div>
                        <div class="col-7">
                          <base-input
                            class="input"
                            type="text"
                            v-model="this.userInfo.name"
                            readonly
                            style="text-align: center"
                          >
                          </base-input>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-5">
                          <base-input
                            placeholder=" ID"
                            addon-left-icon="fa fa-id-card-o"
                            readonly
                          ></base-input>
                        </div>
                        <div class="col-7">
                          <base-input
                            class="input"
                            type="text"
                            v-model="this.userInfo.id"
                            readonly
                          >
                          </base-input>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-5">
                          <base-input
                            placeholder=" PassWord"
                            addon-left-icon="ni ni-lock-circle-open"
                            readonly
                          ></base-input>
                        </div>
                        <div class="col-7">
                          <base-input
                            type="text"
                            class="input"
                            v-model="this.userInfo.pw"
                            readonly
                          >
                          </base-input>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-5">
                          <base-input
                            placeholder=" Phone"
                            addon-left-icon="fa fa-phone"
                            readonly
                          ></base-input>
                        </div>
                        <div class="col-7">
                          <base-input
                            class="input"
                            type="text"
                            v-model="this.userInfo.phone"
                            readonly
                          >
                          </base-input>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-5">
                          <base-input
                            placeholder=" Email"
                            addon-left-icon="fa fa-envelope"
                            readonly
                          ></base-input>
                        </div>
                        <div class="col-7">
                          <base-input
                            type="text"
                            class="input"
                            v-model="this.userInfo.email"
                            readonly
                          >
                          </base-input>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-5">
                          <base-input
                            placeholder=" Post CODE"
                            addon-left-icon="fa fa-location-arrow"
                            readonly
                          ></base-input>
                        </div>
                        <div class="col-7">
                          <base-input
                            type="text"
                            class="input"
                            v-model="this.userInfo.postcode"
                            readonly
                          >
                          </base-input>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-5">
                          <base-input
                            placeholder=" Address"
                            addon-left-icon="fa fa-map-marker"
                            readonly
                          ></base-input>
                        </div>
                        <div class="col-7">
                          <base-input
                            type="text"
                            class="input"
                            v-model="this.userInfo.address"
                            readonly
                          >
                          </base-input>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-5">
                          <base-input
                            placeholder=" extraAddress"
                            addon-left-icon="fa fa-map-marker"
                            readonly
                          ></base-input>
                        </div>
                        <div class="col-7">
                          <base-input
                            type="text"
                            class="input"
                            v-model="this.userInfo.extraAddress"
                            readonly
                          >
                          </base-input>
                        </div>
                      </div>

                      <div class="text-center">
                        <base-button
                          type="default"
                          class="my-4"
                          @click="modifyUser"
                          >회원 정보 수정</base-button
                        >
                        <base-button
                          type="default"
                          class="my-4"
                          @click="deleteUser"
                          >회원 탈퇴</base-button
                        >
                      </div>
                    </form>
                  </template>

                  <!-- here -->
                </div>

                <!-- hrere -->
              </div>
            </card>
          </div>
        </div>
        <div class="col-lg-4"></div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "@/util/http-common";
// import BaseInput from '../components/BaseInput.vue';

export default {
  data() {
    return {
      name: "",
      id: "",
      pw: "",
      phone: "",
      email: "",
      postcode: "",
      address: "",
      extraAddress: "",
    };
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  methods: {
    deleteUser() {
      if (confirm("해당 유저 정보는 삭제됩니다. 삭제하시겠습니까?")) {
        axios.delete(`user/?userid=${this.userInfo.id}`).then(({ data }) => {
          let msg = "삭제 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "삭제가 완료되었습니다.";
          }
          alert(msg);
          this.$store.dispatch("logout");
          this.$router.push("/");
        });
      }
    },
    modifyUser() {
      this.$router.push("/modify");
    },
  },
};
</script>

<style scoped>
.back {
  background-image: url("../images_happy/back1.jpg");
  background-size: cover;
}

.input >>> input {
  text-align: center;
}
</style>
