<template>
    <div v-for="row in rows" :key="row">
        <form>
            <b >預定編號：</b>
            <button class="info_content" id="order_number" v-on:click="del(row.id)">{{row.id}}</button><br>
            <b >使用者：</b>
            <u class="info_content" id="order_name">{{row.order_name}}</u><br>
            <b>預定車號：</b>
            <u class="info_content" id="car_name">{{row.car_name}}</u><br>
            <b>預定日期：</b>
            <u class="info_content" id="car_name">{{row.date}}</u><br>
            <b>出車時間：</b>
            <u class="info_content" id="out_time">{{row.out_time}}時</u><br>
            <b>還車時間：</b>
            <u class="info_content" id="back_time">{{row.back_time}}時</u><br>
            <button type="submit" id="button" v-on:click="del(row.id)">取消</button><br>
            <b>-----------------------------------------------------------------</b>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default{
    name: 'InfoList',

    created() {
      this.getDataFromApi()
    },

    data() {
      return {
        // loading: false,
        rows: []
      }
    },

    methods:{
        
        getDataFromApi(){
            var req = {
                token: localStorage.token
            }

            // this.loading = true
            axios.post('https://pppppeng.pythonanywhere.com/api/orderInfo/', req).then(response => {
                // this.loading = false
                if(response.data.result == true){
                    this.rows = response.data.Order_Info
                }
                else{
                    alert(response.data.errorInfo)
                    this.$router.push({path:'/'}).catch({})
                }
                
            }).catch(error => {
                this.loading = false
                console.log(error) 
            })
        },

        del(_id){
            axios.post('https://pppppeng.pythonanywhere.com/api/delete/', {"id": _id})
            alert('取消成功')
            this.$router.go(0);
        }
    }
}

</script>

<style>
.info_form{
    margin-top: 30px;
}

.info_content{
    color: gray;
}

.info_content:hover{
    color: black;
}

#button{
    border: 0px;
    border-radius: 10px;
    color: gray;
    background-color: white;
    margin-left: 50%;
    font-size: 15px;
}
#button:hover{
    color: red;
}

#order_number{
    border: 0px;
    border-radius: 10px;
    color: gray;
    background-color: white;
    font-size: 15px;
}
#order_number:hover{
    color: red;
}
</style>