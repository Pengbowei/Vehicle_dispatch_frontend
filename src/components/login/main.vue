<template>
<div v-if="loading">
    <figure>
        <img class="animated-gif" src="../../assets/loding.gif"/>
    </figure>
</div>

<div v-else>
    <div class=" LoginForm">
        <div>
            <div class="userinfo">
                帳號：
                <input type="text" id="account" style="margin-top:50px"><br>
            </div>
            <div class="userinfo">
                密碼：
                <input type="password" id="password">
            </div>
            <div v-if="state">
                <p style="color:red">{{errorInfo}}</p>
            </div>
            <div class="userinfo">
                <button type="submit" class="submit" style="margin-bottom:50px" v-on:click="login()">送出</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default{
    name: "LoginMain",

    data(){
        return{
            state: false,
            loading: false,
            errorInfo: ""
        }
    },

    methods: {
        login(){
            this.loading = true
            var req = {
                'account': document.getElementById('account').value,
                'password': document.getElementById('password').value
            }

            axios.post('https://pppppeng.pythonanywhere.com/api/login/', req).then(response => {
                if(response.data.result){
                    localStorage.setItem('token', response.data.detail.token)
                    console.log(localStorage.token)
                    this.loading = false
                    this.$router.go(0)
                }
                else{
                    this.state = true
                    this.errorInfo = response.data.errorInfo
                    this.loading = false
                }
            })
        }
    }
}
</script>

<style>
.LoginForm{
    box-shadow: 3px 3px 0 0px rgb(230, 230, 230);
    /* background-color: rgb(240, 240, 240); */
    border-radius:10px;
    width: 50%;
    height: 50%;
    margin: 10px auto;
    /* margin-top: 10%; */
}

.userinfo{
    margin-top: 20px;
    margin-bottom: 20px;
}

.userinfo input{
    border-radius:10px;
    width: 200px;
}

.userinfo button{
    border:0;
    background-color: white;
}

.userinfo button:hover{
    color: red;
}

.animated-gif{
    /* margin-top: 40%; */
    width: 60px;
    /* height: auto; */
}
</style>