<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
    <section class="section section-skew">
      <div class="container">
        <card shadow class="card-profile mt--300" no-body>
          <div class="px-4">
            <div class="row justify-content-center">
              <template>
                <form role="textarea">
                  ID :
                  <base-input type="text" v-model="this.userInfo.name" readonly> </base-input>
                  <base-input type="text" v-model="this.userInfo.id" readonly> </base-input>
                  <base-input type="text" v-model="this.userInfo.pw" readonly> </base-input>
                  <base-input type="text" v-model="this.userInfo.phone" readonly> </base-input>
                  <base-input type="text" v-model="this.userInfo.email" readonly> </base-input>
                  <base-input type="text" v-model="this.userInfo.postcode" readonly> </base-input>
                  <base-input type="text" v-model="this.userInfo.address" readonly> </base-input>
                  <base-input type="text" v-model="this.userInfo.extraAddress" readonly>
                  </base-input>

                  <div class="text-center">
                    <base-button type="primary" class="my-4" @click="modifyUser"
                      >회원 정보 수정</base-button
                    >
                    <base-button type="primary" class="my-4" @click="deleteUser"
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
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "@/util/http-common";

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

<style></style>
