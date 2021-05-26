<template>
  <section class="page-section mainfooter" id="contact">
    <div class="container fontToWhite">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <h2 class="mt-0">C O N T A C T</h2>
          <hr class="divider my-4" />
          <p class="text-muted mb-5">서울시 강남구 테헤란로 멀티스퀘어</p>
        </div>
      </div>
      <div class="row">
        <span class="col-lg-2"></span>
        <span class="col-lg-4 ml-auto text-center mb-5 mb-lg-5">
          <b-icon icon="telephone-fill" aria-hidden="true"></b-icon>
          <div>1544-9001</div>
        </span>
        <span class="col-lg-4 ml-auto text-center mb-5 mb-lg-5">
          <b-icon icon="envelope-fill" aria-hidden="true"></b-icon>
          <div>admin@ssafy.com</div>
        </span>
        <span class="col-lg-2"></span>
      </div>
    </div>
    <footer class="bg-dark py-5">
      <div class="container">
        <div class="small text-center text-muted">
          Copyright &copy; - SSAFY, All rights reserved.
        </div>
      </div>
    </footer>
  </section>
  <!-- Footer-->
</template>
<script>
export default {
  name: 'starter-footer',
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style>
</style>
