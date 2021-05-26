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
            type="light"
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
                <base-button type="neutral">
                  <img slot="icon" src="img/icons/common/github.svg" />
                  Github
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
                  class="mb-3"
                  placeholder="Name"
                  addon-left-icon="ni ni-single-02"
                  v-model="name"
                >
                </base-input>
                <base-input
                  alternative
                  class="mb-3"
                  placeholder="ID"
                  addon-left-icon="ni ni-circle-08"
                  v-model="id"
                >
                </base-input>
                <base-input
                  alternative
                  type="password"
                  placeholder="Password"
                  addon-left-icon="ni ni-lock-circle-open"
                  v-model="pw"
                >
                </base-input>
                <base-input
                  alternative
                  placeholder="Phone"
                  addon-left-icon="ni ni-mobile-button"
                  v-model="phone"
                >
                </base-input>
                <base-input
                  alternative
                  placeholder="Email"
                  addon-left-icon="ni ni-email-83"
                  v-model="email"
                >
                </base-input>
                <div>
                  <div
                    ref="searchWindow"
                    :style="searchWindow"
                    style="border: 1px solid; width: 500px; margin: 5px 0; position: relative"
                  >
                    <img
                      src="//t1.daumcdn.net/postcode/resource/images/close.png"
                      id="btnFoldWrap"
                      style="cursor: pointer; position: absolute; right: 0px; top: -1px; z-index: 1"
                      @click="searchWindow.display = 'none'"
                      alt="close"
                    />
                  </div>

                  <base-input
                    alternative
                    class="mb-2"
                    placeholder="우편번호"
                    addon-left-icon="ni ni-email-83"
                    v-model="postcode"
                  >
                  </base-input>

                  
                  <input type="button" value="우편번호 찾기" @click="execDaumPostcode" />
                  <br/>
                  <base-input
                    alternative
                    class="mb-3"
                    placeholder="주소"
                    addon-left-icon="ni ni-square-pin"
                    v-model="address"
                  >
                  </base-input>

                  <base-input
                    alternative
                    class="mb-3"
                    placeholder="상세주소"
                    addon-left-icon="ni ni-square-pin"
                    v-model="extraAddress"
                  >
                  </base-input>
                </div>

                <base-checkbox>
                  <span
                    >I agree with the
                    <a href="#">Privacy Policy</a>
                  </span>
                </base-checkbox>
                <div class="text-center">
                  <base-button type="primary" class="my-4" @click="checkValue"
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

export default {
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
      const currentScroll = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
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
                this.extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
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
      !this.name && ((msg = "이름을 입력해주세요"), (err = false), this.$refs.name.focus());
      err && !this.id && ((msg = "아이디를 입력해주세요"), (err = false), this.$refs.id.focus());
      err && !this.pw && ((msg = "비밀번호를 입력해주세요"), (err = false), this.$refs.pw.focus());
      err &&
        !this.phone &&
        ((msg = "전화번호를 입력해주세요"), (err = false), this.$refs.phone.focus());
      err &&
        !this.email &&
        ((msg = "E-mail을 입력해주세요"), (err = false), this.$refs.email.focus());
      err &&
        !this.postcode &&
        ((msg = "주소를 확인해주세요"), (err = false), this.$refs.postcode.focus());
      err &&
        !this.extraAddress &&
        ((msg = "주소를 확인해주세요"), (err = false), this.$refs.extraAddress.focus());

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
          address_sido: this.address,
          address_gugun: this.address,
          address_dong: this.address,
          interest_sido: this.address,
          interest_gugun: this.address,
          interest_dong: this.address,
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
