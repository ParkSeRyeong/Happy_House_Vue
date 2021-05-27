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
                    :text="'SIGN UP.....'"
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
            </template>
            <template>
              <div class="text-center text-muted mb-4">
                <small>Or sign up with credentials</small>
              </div>
              <form role="form">
                <base-input
                  alternative
                  class="mb-3"
                  placeholder=" Name"
                  addon-left-icon="fa fa-user"
                  ref="name"
                  v-model="name"
                >
                </base-input>
                <base-input
                  alternative
                  class="mb-3"
                  placeholder=" ID"
                  addon-left-icon="fa fa-id-card-o"
                  v-model="id"
                  ref="id"
                >
                </base-input>
                <base-input
                  alternative
                  type="password"
                  placeholder=" Password"
                  addon-left-icon="ni ni-lock-circle-open"
                  v-model="pw"
                  ref="pw"
                >
                </base-input>
                <base-input
                  alternative
                  placeholder=" Phone"
                  addon-left-icon="fa fa-phone"
                  v-model="phone"
                  ref="phone"
                >
                </base-input>
                <base-input
                  alternative
                  placeholder=" Email"
                  addon-left-icon="fa fa-envelope"
                  v-model="email"
                  ref="email"
                >
                </base-input>
                <div>
                  <div
                    ref="searchWindow"
                    :style="searchWindow"
                    style="
                      border: 1px solid;
                      width: 500px;
                      margin: 5px 0;
                      position: relative;
                    "
                  >
                    <img
                      src="//t1.daumcdn.net/postcode/resource/images/close.png"
                      id="btnFoldWrap"
                      style="
                        cursor: pointer;
                        position: absolute;
                        right: 0px;
                        top: -1px;
                        z-index: 1;
                      "
                      @click="searchWindow.display = 'none'"
                      alt="close"
                    />
                  </div>
                  <div class="row">
                    <div class="col-8">
                      <base-input
                        alternative
                        class="mb-2"
                        placeholder=" 우편번호"
                        addon-left-icon="fa fa-location-arrow"
                        v-model="postcode"
                        ref="postcode"
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
                  <base-input
                    alternative
                    class="mb-3"
                    placeholder=" 주소"
                    addon-left-icon="fa fa-map-marker"
                    v-model="address"
                    ref="address"
                  >
                  </base-input>

                  <base-input
                    alternative
                    class="mb-3"
                    placeholder=" 상세주소를 입력해주세요"
                    addon-left-icon="fa fa-map-marker"
                    v-model="extraAddress"
                    ref="extraAddress"
                  >
                  </base-input>
                </div>

                <base-checkbox id="agree" v-model="agree">
                  <span
                    >I agree with the
                    <a href="#">Privacy Policy</a>
                  </span>
                </base-checkbox>
                <div class="text-center">
                  <base-button
                    type="default"
                    class="my-4"
                    @click="checkValue()"
                    size="lg"
                    >Create account</base-button
                  >
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
import axios from "@/util/http-common";
import BaseButton from "../components/BaseButton.vue";

export default {
  components: { BaseButton },
  data() {
    return {
      searchWindow: {
        display: "none",
        height: "300px",
      },
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
      !this.name && ((msg = "이름을 입력해주세요"), (err = false)),
        err && !this.id && ((msg = "아이디를 입력해주세요"), (err = false)),
        err && !this.pw && ((msg = "비밀번호를 입력해주세요"), (err = false)),
        err &&
          !this.phone &&
          ((msg = "전화번호를 입력해주세요"), (err = false)),
        err && !this.email && ((msg = "E-mail을 입력해주세요"), (err = false)),
        err && !this.postcode && ((msg = "주소를 확인해주세요"), (err = false)),
        err &&
          !this.extraAddress &&
          ((msg = "주소를 확인해주세요"), (err = false)),
        err && !this.agree && ((msg = "정책에 동의해주세요"), (err = false));

      if (!err) alert(msg);
      // 만약, 내용이 다 입력되어 있다면 registBoard 호출
      else this.registBoard();
    },
    registBoard() {
      axios
        .post("/user/regist", {
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
            msg = "등록이 완료되었습니다.";
          }
          alert(msg);
          this.moveList();
        });
    },
    moveList() {
      this.$router.push("/login");
    },
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
  text-align: center;
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