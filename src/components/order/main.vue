<template>
<div v-if="loading">
    <figure>
        <img class="animated-gif" src="../../assets/loding.gif"/>
    </figure>
</div>
<div v-else>
    <div v-if="car_data" class="search">

        <p style="color:red">{{errorInfo}}</p>

        <div class="select">
            <b>選擇預約車輛： </b>
            <select id="car">
                <option v-for="i in rows" :key="i">{{i}}</option>
            </select>
        </div>

        <div class="select">
            <b>輸入使用用途：</b>
            <input type="text" id="useful">
        </div>

        <div class="select">
            <button v-on:click="sent_order()">預定</button>
        </div>

    </div>

    <div v-else class="search">

        <div class="select">
            <b>選擇預約日期： </b>
            <input type="date" id="date"><br> 
        </div>

        <div class="select">
            <b>選擇出車時間： </b>
            <select id="out">
                <option v-for="i in time" :key="i">{{i}}</option>
            </select>
        </div>

        <div class="select">
            <b>選擇還車時間： </b>
            <select id="back" >
                <option v-for="i in time" :key="i">{{i}}</option>
            </select>
        </div>

        <div class="select">
            <button v-on:click="search_car()">尋找</button>
        </div>

    </div>
</div>
</template>

<script>
import axios from 'axios'
export default{
    name: 'OrderMain',
    
    data(){
        return{
            loading: true,
            car_data: false,
            errorInfo: "",
            date: "",
            out: 0,
            back: 0,
            time:[],
            rows:[]
        }
    }, 

    created(){
        this.select_option()
    },

    methods:{
        select_option(){

            for(var i = 0; i <= 23.5; i += 0.5){
                this.time.push(i)
            }
            this.loading = false
        },
        search_car(){
            this.loading = true
            this.date = document.getElementById("date").value.replace("-", "")
            this.date = this.date.replace("-", "")

            this.out = parseFloat(document.getElementById('out').value)
            this.back = parseFloat(document.getElementById('back').value)
            if (this.date == ""){
                alert('錯誤:請選擇正確的時間')
                this.loading = false
                return
            }

            if (this.out >= this.back){
                alert('錯誤:還車時間應在出車時間之後')
                this.loading = false
                return
            }

            var req = {
                token: localStorage.token,
                date: this.date,
                out: this.out,
                back: this.back,
            }
            
            axios.post('https://pppppeng.pythonanywhere.com/api/search/', req).then(response => {
                if(response.data.result == true){
                    this.car_data = true
                    // console.log(response.data.CarInfo)
                    this.errorInfo = response.data.errorInfo
                    this.rows = response.data.CarInfo
                    this.loading = false
                }

                else{
                    alert(response.data.errorInfo)
                    this.$router.go(0)
                    this.loading = false
                }
            })
        },

        sent_order(){
            this.loading = true
            var req = {
                token: localStorage.token,
                car_name: document.getElementById('car').value,
                date: this.date,
                useful: document.getElementById('useful').value,
                out: this.out,
                back: this.back
            }

            axios.post('https://pppppeng.pythonanywhere.com/api/order/', req).then(response => {
                if(response.data.result == "ok"){
                    alert("預約成功")
                    this.loading = false
                }
            })
        }

        
    }
}
</script>

<style>
.search{
    box-shadow: 3px 3px 0 0px rgb(230, 230, 230);
    /* background-color: rgb(240, 240, 240); */
    border-radius:10px;
    width: 60%;
    height: 50%;
    margin: 10px auto;
    margin-top: 10%;
}
.select{
    margin-top: 20px;
}
.select input ,select{
    border-radius: 10px;
    /* border-color: rgb(230, 230, 230); */
    width: 150px;
}
.select input:hover{
    border-color: red;
}
.select select:hover{
    border-color: red;
}
.select button{
    border-radius: 10px;
    border: 0;
    width: 150px;
    background-color: white;
}
.select button:hover{
    color: red;
}
.animated-gif{
    margin-top: 10%;
    width: 60px;
    height: auto;
}
</style>