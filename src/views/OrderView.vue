<template>
  <div class="container">
    <div class="title">
        <TitleBar msg="預訂頁面"></TitleBar>
    </div>

    <div class="order">
        <OrderComponents></OrderComponents>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TitleBar from '../components/title.vue'
import OrderComponents from '../components/order.vue'

export default {
  name: 'OrderView',
  components: {
    TitleBar,
    OrderComponents,
  }
}
</script>