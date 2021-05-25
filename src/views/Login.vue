<template>
  <div class="mainbg-search">
    <b-container class="bv-example-row">
      <b-row>
      <div class="col-md-12  ftco-animate pb-0 text-center">
        <h1 class="mb-4 bread fontToWhite">로그인</h1>
      </div>
      </b-row>
      <hr>
      <b-row>
        <div class="container login">
        <form id="login-form">
        <div class="form-group">
          <label for="id">ID</label>
          <b-form-input type="text" name="id" v-model="id" />
        </div>
        <div class="form-group">
          <label for="pw">Password</label>
          <b-form-input type="password" name="pw" v-model="pw" />
        </div>
        <div class="form-group text-right">
          <button class="btn btn-primary">Login</button>
        </div>
        </form>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.login{
  padding-top: 0;
  padding-bottom:30px;
}
#login-form{
  text-align: left;
  border-radius: 5px;
  background-color: #f2f2f2;
  margin: 5px 40px;
  padding: 20px;
}  
.form-group{
  margin: 5px 25px;
}
</style>