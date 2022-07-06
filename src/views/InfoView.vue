<template>
<InfoMain></InfoMain>
</template>

<script>
import InfoMain from '../components/info/main.vue'

export default{
    name: 'LoginView',
    components:{
        InfoMain
    },
    
    created(){
        this.login_state()
    }, 

    methods: {
        login_state(){
            if(localStorage.token == undefined){
                alert('請先登入')
                this.$router.push({path:'/'}).catch({})
            }
        }
    }
}
</script>