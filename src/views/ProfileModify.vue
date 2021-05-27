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
                          <span><h2>정보 수정</h2></span>
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
                            type="text"
                            v-model="name"
                            readonly
                            class="input"
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
                            type="text"
                            v-model="id"
                            readonly
                            class="input"
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
                          <base-input type="text" v-model="pw" class="input">
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
                          <base-input type="text" v-model="phone" class="input">
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
                          <base-input type="text" v-model="email" calss="input">
                          </base-input>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-3">
                          <base-input
                            placeholder=" Post CODE"
                            addon-left-icon="fa fa-location-arrow"
                            readonly
                          ></base-input>
                        </div>
                        <div class="col-5">
                          <base-input
                            alternative
                            class="mb-2 input"
                            placeholder=" 우편번호"
                            v-model="postcode"
                          >
                          </base-input>
                        </div>
                        <div class="col-4">
                          <base-input
                            type="button"
                            value="우편번호 찾기"
                            @click="execDaumPostcode"
                          />
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
                            v-model="address"
                            class="input"
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
                            v-model="extraAddress"
                            class="input"
                          >
                          </base-input>
                        </div>
                      </div>

                      <div class="text-center">
                        <base-button
                          type="default"
                          class="my-4"
                          @click="checkValue"
                          >수정 완료!</base-button
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
import axios from "@/util/http-common";

export default {
  data() {
    return {
      name: this.$store.state.userInfo.name,
      id: this.$store.state.userInfo.id,
      pw: this.$store.state.userInfo.pw,
      phone: this.$store.state.userInfo.phone,
      email: this.$store.state.userInfo.email,
      postcode: this.$store.state.userInfo.postcode,
      address: this.$store.state.userInfo.address,
      extraAddress: this.$store.state.userInfo.extraAddress,
    };
  },
  methods: {
    execDaumPostcode() {
      const currentScroll = Math.max(
        document.body.scrollTop,
        document.documentElement.scrollTop
      );
      // eslint-disable-next-line
      new daum.Postcode({
        onComplete: (data) => {
          if (data.userSelectedType === "R") {
            this.address = data.roadAddress;
          } else {
            this.address = data.jibunAddress;
          }
          if (data.userSelectedType === "R") {
            if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
              this.extraAddress += data.bname;
            }
            if (data.buildingName !== "" && data.apartment === "Y") {
              this.extraAddress +=
                this.extraAddress !== ""
                  ? `, ${data.buildingName}`
                  : data.buildingName;
            }
            if (this.extraAddress !== "") {
              this.extraAddress = ` (${this.extraAddress})`;
            }
          } else {
            this.extraAddress = "";
          }
          this.postcode = data.zonecode;
          this.$refs.extraAddress.focus();
          this.searchWindow.display = "none";
          document.body.scrollTop = currentScroll;
        },
        onResize: (size) => {
          this.searchWindow.height = `${size.height}px`;
        },
        width: "100%",
        height: "100%",
      }).open();
    },
    checkValue() {
      // 사용자 입력값 체크하기
      let err = true;
      let msg = "";
      !this.pw && ((msg = "비밀번호를 입력해주세요"), (err = false)),
        err &&
          !this.phone &&
          ((msg = "전화번호를 입력해주세요"), (err = false)),
        err && !this.email && ((msg = "E-mail을 입력해주세요"), (err = false)),
        err && !this.postcode && ((msg = "주소를 확인해주세요"), (err = false)),
        err &&
          !this.extraAddress &&
          ((msg = "주소를 확인해주세요"), (err = false));

      if (!err) alert(msg);
      // 만약, 내용이 다 입력되어 있다면 registBoard 호출
      else this.registBoard();
    },
    registBoard() {
      axios
        .put("/user/mypage", {
          name: this.name,
          id: this.id,
          pw: this.pw,
          phone: this.phone,
          email: this.email,
          postcode: this.postcode,
          address: this.address,
          extraAddress: this.extraAddress,
        })
        .then(({ data }) => {
          let msg = "등록 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "등록이 완료되었습니다. 다시 로그인 해주세요";
          }
          alert(msg);
          if (data === "success") {
            this.$store.dispatch("logout");
            this.$router.push("/");
          } else this.$router.push("/profile");
        });
    },
  },
};
</script>

<style>
#disabled {
  background-color: rgb(89, 83, 83);
}

.back {
  background-image: url("../images_happy/back1.jpg");
  background-size: cover;
}

.input >>> input {
  text-align: center;
}
</style>
