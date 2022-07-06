<template>
<div>
    <OrderMain></OrderMain>
</div>
</template>

<script>
import OrderMain from '../components/order/main.vue'
export default{
    name: 'OrderView',
    
    components: {
        OrderMain
    },
    
    created(){
        this.login_state()
    }, 

    methods: {
        login_state(){
            if(localStorage.token == undefined){
                alert('請先登入')
                this.$router.push({path:'/login'}).catch({})
            }
        }
    }
}
</script>