<template>
  <section>
    <div
      class="hero-wrap"
      style="background-image: url('images/bg_1.jpg')"
      data-stellar-background-ratio="0.5"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-center">
          <div class="col-lg-7 col-md-6 ftco-animate d-flex align-items-end">
            <div class="text">
              <h1 class="mb-4">Find Perfect <br />우리집찾기프로젝트</h1>
              <!-- <p style="font-size: 18px;"></p> -->
              <p>
                <a
                  href="${root }/map/housemap"
                  class="btn btn-primary py-3 px-4"
                  >View all properties</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="ftco-section ftco-no-pb ftco-no-pt search-bg">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="search-wrap-1 ftco-animate p-4">
              <form action="#" class="search-property-1">
                <div class="row">
                  <div class="col-lg align-items-end">
                    <div class="form-group">
                      <label for="#">시/도</label>
                      <div class="form-field">
                        <div class="select-wrap">
                          <div class="icon">
                            <span class="fa fa-chevron-down"></span>
                          </div>
                          <select name="" id="" class="form-control">
                            <option value="">Residence</option>
                            <option value="">Offices</option>
                            <option value="">Commercial</option>
                          </select>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div class="col-lg align-items-end">
                    <div class="form-group">
                      <label for="#">Property Type</label>
                      <div class="form-field">
                        <div class="select-wrap">
                          <div class="icon">
                            <span class="fa fa-chevron-down"></span>
                          </div>
                          <select name="" id="" class="form-control">
                            <option value="">Residence</option>
                            <option value="">Offices</option>
                            <option value="">Commercial</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg align-items-end">
                    <div class="form-group">
                      <label for="#">Location</label>
                      <div class="form-field">
                        <div class="icon">
                          <span class="fa fa-search"></span>
                        </div>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Location"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg align-items-end">
                    <div class="form-group">
                      <label for="#">Price Limit</label>
                      <div class="form-field">
                        <div class="select-wrap">
                          <div class="icon">
                            <span class="fa fa-chevron-down"></span>
                          </div>
                          <select name="" id="" class="form-control">
                            <option value="">$5,000</option>
                            <option value="">$10,000</option>
                            <option value="">$50,000</option>
                            <option value="">$100,000</option>
                            <option value="">$200,000</option>
                            <option value="">$300,000</option>
                            <option value="">$400,000</option>
                            <option value="">$500,000</option>
                            <option value="">$600,000</option>
                            <option value="">$700,000</option>
                            <option value="">$800,000</option>
                            <option value="">$900,000</option>
                            <option value="">$1,000,000</option>
                            <option value="">$2,000,000</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg align-self-end">
                    <div class="form-group">
                      <div class="form-field">
                        <input
                          type="submit"
                          value="Search"
                          class="form-control btn btn-primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>

                    <div class="col-lg-8 align-self-baseline">
                        <p class="text-white  font-weight-light mb-5">우 리 집 찾 기 프 로 젝 트</p>
                        <!-- <router-link to="/search">Login</router-link> -->
                        <a class="btn btn-success btn-xl js-scroll-trigger" href="#">
                          <router-link to="/Search" style="color:white;">SEARCH!!</router-link>
                        </a>                    
                    </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <section class="section-hero section-shaped my-0 mainbg">
      <div class="shape shape-style-1 shape-primary"></div>
      <div class="container shape-container d-flex align-items-center">
        <div class="col px-0">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-7 text-center pt-lg">
              <img src="img/brand/white.png" style="width: 200px" class="img-fluid" /> -->
    <!-- <div
                class="row h-100 align-items-center justify-content-center text-center"
              >
                <div class="col-lg-10 align-self-end">
                  <h1 class="text-uppercase text-white font-weight-bold">
                    HAPPY HOUSE
                  </h1>
                 <hr class="divider my-4" /> -->
    <!--</div>
                <div class="col-lg-8 align-self-baseline">
                  <p class="text-white font-weight-light mb-5">
                    우 리 집 찾 기 프 로 젝 트
                  </p>
                   <router-link to="/search">Login</router-link> -->
    <!--<a class="btn btn-success btn-xl js-scroll-trigger" href="#">
                    <router-link to="/Search" style="color: white"
                      >SEARCH!!</router-link
                    >
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- <section id="welcome" class="overflow-hidden">
    <v-row no-gutters>
      <v-col class="hidden-sm-and-down" md="6">
        <v-img
          :src="require('@/images_happy/mainBackground.jpg')"
          height="100vh"
        />
      </v-col>

      <v-col
        class="align-content-space-between layout wrap"
        cols="12"
        md="6"
        :pa-5="$vuetify.breakpoint.smAndDown"
      >
        <base-bubble-1 style="transform: rotate(180deg) translateY(25%)" />

        <v-row align="center" justify="center">
          <v-col cols="10" md="6">
            <base-heading>Welcome!</base-heading>
            <base-text>
              Lorem ipsum dolor sit amet, consectetur ad ipiscin elit. Etiam
              vulputate augue vel felis gra vida porta. Lorem ipsum dolor sit
              amet, cons ectetur adipiscing elit.<br />
              Lorem ipsum dolor sit amet, consectetur ad ipiscin elit. Etiam
              vulputate augue vel felis gra vida porta. Lorem ipsum dolor sit
              amet, cons ectetur adipiscing elit.
            </base-text>
            <base-btn class="mt-4"> Learn More! </base-btn>
          </v-col>
        </v-row>

        <base-bubble-2
          style="transform: rotate(180deg) translate(-200px, -15%)"
        />
      </v-col>
    </v-row>-->
  </section>
</template>
<script>
export default {
  name: "",
  methods: {
    movePage() {
      this.$router.push("Search");
    },
  },
};
</script>
<style>
</style>
