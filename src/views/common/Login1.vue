<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-05 18:32:51
 * @LastEditTime: 2019-11-25 15:22:18
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="login">
        <div class="bgt">
        </div>
        <div class='loginCard'>
              <div class="inputTitle">欢迎光临智慧消防管理云平台</div>
              <div class="inputTitle inputTitle2">用户登录</div>
             <Input v-model="loginName"  placeholder="用户名" prefix="ios-person-outline"/>
             <Input v-model="password" placeholder="密码" type="password" prefix="ios-lock" />
             <Button type="primary" @click="loadData">登录</Button>
            
        </div>
        <div class="bottomDes">Copyright@2019上海浦房集团.ALL right reserved</div>
   
  </div>
</template>
 <script>
 import { login } from 'api/user'
 export default {
   data(){
     return{
     loginName:'',
     password:'',
     flag:true,
   }},
    methods:{
        loadData() {
          if(this.flag){
               login(
          {
           loginName:this.loginName,
           password:this.password
          }
      ).then(res => {
          console.log(res)
          if (res.status === '1') {
               this.$Message.success('登录成功');
               this.flag = false;
               localStorage.setItem('userId',res.obj.userId)
                setTimeout(() => {     
                     this.$router.push('/index'); 
                }, 1000);
         
          }
        })
        .catch(err => {
        })
          }
     
    },
    
   
     
    }
 }
 </script>
 <style lang="less">
 .login{
  
  background-color:#2158b2;
   width: 100%;
   height: 100%;
   position: relative;
  .bgt{
    position: absolute;
    left:18%;
    top:46%;
    width:34%;
    height:80%;
    background:url('../../assets/images/login/loginbgt2.png');
    background-size: 100% 100%;
    transform: translateY(-50%);
  }
   .bottomDes{
       width:100%;
       text-align: center;
       height:30px;
       color:#ffffff;
       position: absolute;
        bottom:8%;
        font-size:20px;
     }
   .loginCard{
     width:28%;
     height:50%;
     position:absolute;
     right:16%;
     top:50%;
     transform: translateY(-50%);
     border-radius: 6px;
     background-color: #ffffff;
      .inputTitle
        
     {
       display: flex;
       align-items: center;
       justify-content: center;
        letter-spacing: 1px;
        width:100%;
        // line-height:50px;
        height:20%;
        color:#0087ff;
        font-size:20px;
        text-align: center;
        outline: none;
        margin-top:5%;
       
     }
     .inputTitle2{
       margin-top:-5%;
     }
    
   }

 }
 .loginCard  /deep/ .ivu-input{
  
     width:90%;
     height:30%;
     border-radius: 0;
     margin:5px 0 30px 5%;
     line-height:40px;
     box-shadow:none; /*去除阴影*/
     outline: none;/*聚焦input的蓝色边框*/
     border: none; /*去除边框*/
     border-bottom:1px solid #0087ff;
    appearance: none;/*常用于IOS下移除原生样式*/
   -webkit-tap-highlight-color: rgba(0,0,0,0); /*点击高亮的颜色*/
 
 }
.loginCard  /deep/ .ivu-btn{
  
   width:90%;
   height:40px;
   height:12%;
   margin-top:10px;
   margin-left:5%;
   margin-bottom: 5%;
  
  
 }
 .loginCard  /deep/ .ivu-input-prefix .ivu-icon{
    color:#0087ff;
    font-size:24px;
    margin-left:20px;
    margin-top:4px;
 }
 
 .loginCard  /deep/ .ivu-input-default::-webkit-input-placeholder{
   color:#0087ff;
}


 </style>
