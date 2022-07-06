<template>
<div class="navbar">
    <nav class="nav_link">
        <img align="left" alt="Vue logo" src="../../assets/logo.png" style="width:20px; height:20px">

        <div v-if="state">
          <router-link v-on:click="logout()" to="/login">登出</router-link> |
          <router-link to="/order">預定</router-link> | 
          <router-link to="/info">訂單</router-link>
        </div>

        <div v-else>
          <router-link to="/login" >登入</router-link> |
        </div>

    </nav>
</div>
</template>

<script>
export default{
    name: "NavbarMain",

    created(){
      this.login_state()
    },

    data(){
      return{
        state: false
      }
    },

    methods:{
      login_state(){
        // localStorage.setItem('token', '555')
        if(localStorage.token != undefined){
          this.state = true
        }
      },

      logout(){
        localStorage.removeItem('token')
        this.$router.go(0)
      }
    }
}
</script>

<style scoped>
.navbar{
    box-shadow: 3px 3px 0 0px rgb(230, 230, 230);
    border-radius:10px;
    width:80%;
    margin:10px auto;
}

.nav_link{
    text-align: right;
}


nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
