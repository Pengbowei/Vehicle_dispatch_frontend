<template>
<div v-if="loading">
    <figure>
        <img class="animated-gif" src="../../assets/loding.gif"/>
    </figure>
</div>

<div v-else>
    <div v-for="row in rows" :key="row" class="info_content">
        <b >預定編號：</b>
        <u v-on:click="del(row.id)">{{row.id}}</u><br>
        <b >使用者：</b>
        <u id="order_name">{{row.order_name}}</u><br>
        <b>預定車號：</b>
        <u id="car_name">{{row.car_name}}</u><br>
        <b>預定日期：</b>
        <u id="car_name">{{row.date}}</u><br>
        <b>出車時間：</b>
        <u id="out_time">{{row.out_time}}時</u><br>
        <b>還車時間：</b>
        <u id="back_time">{{row.back_time}}時</u><br>
        <button type="submit" id="button" v-on:click="del(row.id)">取消</button><br>
    </div>
</div>

</template>

<script>
import axios from 'axios'

export default{
    name: 'InfoView',
    data(){
        return{
            loading: true,
            data: [],
        }
    },

    created(){
        this.get_orderlist()
    },

    methods:{
        get_orderlist(){
            var req = {
                token: localStorage.token
            }

            axios.post('https://pppppeng.pythonanywhere.com/api/orderInfo/', req).then(response => {
                if(response.data.result == true){
                    this.rows = response.data.Order_Info
                    this.loading = false
                }
                else{
                    alert(response.data.errorInfo)
                    this.loading = false
                }
            })
        },
        del(_id){
            this.loading = true
            axios.post('https://pppppeng.pythonanywhere.com/api/delete/', {"id": _id}).then(response => {
                if(response.data.result == 'ok'){
                    this.$router.go(0)
                }
            })
        }
    }
}
</script>

<style>
.info_content{
    color: gray;
    box-shadow: 3px 3px 0 0px rgb(230, 230, 230);
    background-color: rgb(245, 245, 245);
    border-radius:10px;
    width: 60%;
    height: 50%;
    margin: 10px auto;
}

.info_content button{
    border: 0px;
    border-radius: 10px;
    color: gray;
    background-color: white;
    margin-left: 50%;
    margin-bottom: 10px;
    font-size: 15px;
}
.info_content button:hover{
    color: red;
}
</style>