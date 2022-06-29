<template>
    <div class="order_container">
        <div class="div">
            選擇預約日期
            <input type="date" id="date"><br> 
        </div>
        <div class="div">
            出車時間
            <select id="out_time">
                <option>請選擇出車時間</option>
                <option>0</option>
                <option>0.5</option>
                <option>1</option>
                <option>1.5</option>
                <option>2</option>
                <option>2.5</option>
                <option>3</option>
                <option>3.5</option>
                <option>4</option>
                <option>4.5</option>
                <option>5</option>
                <option>5.5</option>
                <option>6</option>
                <option>6.5</option>
                <option>7</option>
                <option>7.5</option>
                <option>8</option>
                <option>8.5</option>
                <option>9</option>
                <option>9.5</option>
                <option>10</option>
                <option>10.5</option>
                <option>11</option>
                <option>11.5</option>
                <option>12</option>
                <option>12.5</option>
                <option>13</option>
                <option>13.5</option>
                <option>14</option>
                <option>14.5</option>
                <option>15</option>
                <option>15.5</option>
                <option>16</option>
                <option>16.5</option>
                <option>17</option>
                <option>17.5</option>
                <option>18</option>
                <option>18.5</option>
                <option>19</option>
                <option>19.5</option>
                <option>20</option>
                <option>20.5</option>
                <option>21</option>
                <option>21.5</option>
                <option>22</option>
                <option>22.5</option>
                <option>23</option>
                <option>23.5</option>
            </select><br>
        </div>

        <div class="div">
            還車時間
            <select id="back_time">
                <option>請選擇還車時間</option>
                <option>0</option>
                <option>0.5</option>
                <option>1</option>
                <option>1.5</option>
                <option>2</option>
                <option>2.5</option>
                <option>3</option>
                <option>3.5</option>
                <option>4</option>
                <option>4.5</option>
                <option>5</option>
                <option>5.5</option>
                <option>6</option>
                <option>6.5</option>
                <option>7</option>
                <option>7.5</option>
                <option>8</option>
                <option>8.5</option>
                <option>9</option>
                <option>9.5</option>
                <option>10</option>
                <option>10.5</option>
                <option>11</option>
                <option>11.5</option>
                <option>12</option>
                <option>12.5</option>
                <option>13</option>
                <option>13.5</option>
                <option>14</option>
                <option>14.5</option>
                <option>15</option>
                <option>15.5</option>
                <option>16</option>
                <option>16.5</option>
                <option>17</option>
                <option>17.5</option>
                <option>18</option>
                <option>18.5</option>
                <option>19</option>
                <option>19.5</option>
                <option>20</option>
                <option>20.5</option>
                <option>21</option>
                <option>21.5</option>
                <option>22</option>
                <option>22.5</option>
                <option>23</option>
                <option>23.5</option>
            </select><br>
        </div>

        <div class="Info">
            <label id="errorInfo" style="color:red"></label>
        </div>

        <div id="button_container">
            <input type="submit" v-on:click="order()" class="select_button" value="尋找">
        </div>

        <div id="car_info" style="display:none">
            車號：
            <select id="car_select"></select>
        </div>

        <div id="useful" style="display:none">
            用途：
            <input type="text" id="usefulbox">
        </div>

        <div id="sent_button" style="display:none; margin-top: 10px;">
            <input type="submit" v-on:click="sent_order()" class="sent_button" value="預定">
        </div>
    </div>
</template>

<script>
import axios from 'axios'

    export default{
        name: 'OrderComponents',

        methods:{
            order: function(){

                // date
                var date = document.getElementById("date").value.replace("-", "")
                date = date.replace("-", "")

                // out/back time
                var out_time = parseInt(document.getElementById('out_time').value)
                var back_time = parseInt(document.getElementById('back_time').value)
                console.log(typeof(out_time), typeof(back_time))
                if (out_time >= back_time){
                    alert('錯誤:還車時間應在出車時間之後')
                    return
                }

                if (date == "" || out_time == "請選擇還車時間" || back_time == "請選擇還車時間"){
                    alert('錯誤:請選擇正確的時間')
                    return
                }

                var req = {
                    token: localStorage.token,
                    date: date,
                    out: out_time,
                    back: back_time,
                }
                

                axios.post('https://pppppeng.pythonanywhere.com/api/search/', req).then(response => {
                    // const{CarInfo, errorInfo} = response.data
                    const CarInfo = response.data.CarInfo
                    const errorInfo = response.data.errorInfo;
                    const result = response.data.result

                    document.getElementById('errorInfo').textContent = errorInfo
                    if(result == true){
                        document.getElementById('button_container').style.display = "none"
                        document.getElementById('car_info').style.display = ""
                        document.getElementById('sent_button').style.display = ""
                        document.getElementById('useful').style.display = ""

                        for(var i = 0; i < CarInfo.length; i++){
                            var select = document.getElementById("car_select")
                            var opt = document.createElement('option')
                            opt.text = CarInfo[i]
                            opt.value = CarInfo[i]
                            select.appendChild(opt)
                            // div.appendChild(document.createElement("br"));
                        }
                    }
                })
            },

            sent_order: function(){
                var car_name = document.getElementById('car_select').value
                var out_time = document.getElementById('out_time').value
                var back_time = document.getElementById('back_time').value
                var useful = document.getElementById('usefulbox').value
                var date = document.getElementById("date").value.replace("-", "")
                date = date.replace("-", "")

                var req = {
                    token: localStorage.token,
                    car_name: car_name,
                    date: date,
                    useful: useful,
                    out: out_time,
                    back: back_time,
                }

                axios.post('https://pppppeng.pythonanywhere.com/api/order/', req).then(response => {
                    if(response.data.result == "ok"){
                        alert("預約成功")
                        this.$router.push({path:'/infoPage'}).catch({})
                    }
                })
            }
        }
    }

</script>

<style>
.select_button{
    margin-top: 10px;
}

.div{
    margin-top: 10px;
}

#car_select{
    margin: 10px;
    width:100px;
}
</style>