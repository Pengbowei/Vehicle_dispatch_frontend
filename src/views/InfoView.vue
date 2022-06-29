<template>
  <div class="container">
    <div class="title">
        <TitleBar msg="預定清單"></TitleBar>
    </div>

    <div class="info">
        <InfoList></InfoList>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TitleBar from '../components/title.vue'
import InfoList from '../components/info.vue'

export default {
  name: 'InfoView',
  components: {
    TitleBar,
    InfoList,
  }
}
</script>