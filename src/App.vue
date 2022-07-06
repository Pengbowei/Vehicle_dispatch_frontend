<template>
  <NavbarMain></NavbarMain>
<router-view/>

</template>

<script>
import NavbarMain from './components/navbar/main.vue'

export default{
  components:{
    NavbarMain
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
