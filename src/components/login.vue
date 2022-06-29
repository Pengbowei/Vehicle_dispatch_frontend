<template>
<div class="login_container">
    <div class="login_content" width="500px">
        <div>
            使用者帳號：
            <input type="text" id="userAccount" width="300px" class="textbox"><br>
            使用者密碼：
            <input type="password" id="userPassword" width="300px" class="textbox"><br>
            <input type="submit" v-on:click="logining()" value="Sent"><br>

        </div>

        <div>
            <label id="login_result" style="color:red"></label>
        </div>
    </div>
</div>
</template>

<script>

    import axios from 'axios'

    export default{
        name: 'LoginComponent',

        methods:{
            logining: function(){
                localStorage.removeItem('token');
                var acc = document.getElementById('userAccount').value
                var pwd = document.getElementById('userPassword').value

                axios.post('https://pppppeng.pythonanywhere.com/api/login/', {account: acc, password: pwd}).then((response) => {
                    const {result, detail, errorInfo} = response.data

                    if(result == true){
                        localStorage.setItem('token', detail.token);
                        alert("Login successful")
                        this.$router.push({path:'/orderPage'}).catch()
                    }

                    else{
                        document.getElementById("login_result").textContent = errorInfo
                    }
                })
            }
        }
    }

</script>

<style>
.textbox{
    margin: 10px;
}

.Button{
    margin-top: 10px;
    
}
</style>