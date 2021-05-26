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
                  <base-input type="text" v-model="name" readonly> </base-input>
                  <base-input type="text" v-model="id" readonly> </base-input>
                  <base-input type="text" v-model="pw"> </base-input>
                  <base-input type="text" v-model="phone"> </base-input>
                  <base-input type="text" v-model="email"> </base-input>
                  <base-input type="text" v-model="postcode"> </base-input>
                  <input type="button" value="우편번호 찾기" @click="execDaumPostcode" />

                  <base-input type="text" v-model="address"> </base-input>
                  <base-input type="text" v-model="extraAddress"> </base-input>

                  <div class="text-center">
                    <base-button type="primary" class="my-4" @click="checkValue"
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
      !this.pw && ((msg = "비밀번호를 입력해주세요"), (err = false)),
        err && !this.phone && ((msg = "전화번호를 입력해주세요"), (err = false)),
        err && !this.email && ((msg = "E-mail을 입력해주세요"), (err = false)),
        err && !this.postcode && ((msg = "주소를 확인해주세요"), (err = false)),
        err && !this.extraAddress && ((msg = "주소를 확인해주세요"), (err = false));

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

<style></style>
