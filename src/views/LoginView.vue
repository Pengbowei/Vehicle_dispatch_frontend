<template>
  <div class="container">
    <div class="title">
      <TitleBar msg="登入頁面"></TitleBar>
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <login_com></login_com>
  </div>
</template>

<script>
// @ is an alias to /src
import login_com from '../components/login.vue'
import TitleBar from '../components/title.vue'

export default {
  name: 'LoginView',
  components: {
    login_com,
    TitleBar
  }
}
</script>
