<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-05 18:32:51
 * @LastEditTime: 2019-11-30 17:54:51
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="login">
      <div class='titDes'>
           上海浦房集团智慧消防管理云平台  
      </div>
      <div class='content'>
             <div class='bgt'></div> 
             <div class='loginCard'>
                  <div class='userLogin'>用户登录</div>
                  <div class='wrap'>
                        <div><div class='icon1'></div><input v-model="loginName" placeholder="请输入用户名" type='text' @keyup.enter="submit"/></div>
                         <div><div class='icon1 icon2'></div><input v-model="password" placeholder="请输入登录密码" type='password' @keyup.enter="submit"/></div>
                        <div @click='loadData'>登录</div>
                  </div>
                  
             </div>  
      </div>
    
  </div>
</template>
 <script scoped>
 import { login } from 'api/user'
 export default {
   data(){
     return{
     loginName:'',
     password:'',
     flag:true,
   }},
    methods:{
        submit(){
            this.loadData();
        },
        loadData() {
            if(!this.loginName){
                this.$Message.warning('请输入用户名');
                return;
            }
            if(!this.password){
              this.$Message.warning('请输入密码');
                return;
            }
            
          if(this.flag){
            //  调用登录接口
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
                     this.$router.push('/synthesize'); 
                }, 1000);
         
          }
        })
        .catch(err => {
        })
          }
     
    }
    }
 }
 </script>
 <style lang="less">


.login{
    display:flex;
    flex-direction:column;
    width:100%;
    height:100%;
    .titDes{
        display:flex;
        box-sizing:border-box;
        width:100%;
        height:10%;
        background-color:#ffffff;
        color:#047df1;
        font-size:30px;
        letter-spacing:6px;
        align-items:center;
        padding-left:20%;
       
    }
    .content{
        display:flex;
        flex:1;
        // background-color:#047df1;
        background:linear-gradient(#0082f9 0%,#0082f9 30%,#0258da 60% , #0258da 100%  );
        position:relative;
        align-items:center;
          .bgt{
                position: absolute;
                left:16%;
                top:46%;
                width:38%;
                height:80%;
                background:url('../../assets/images/login/bgt.png');
                background-size: 100% 100%;
                transform: translateY(-50%);
           }
           .loginCard{
               box-sizing:border-box;
               width:28%;
               height:50%;
               background-color:#fff;
               position:absolute;
               right:16%;
               border-radius:18px;
               display:flex;
               flex-direction:column;
               padding:0 2% 0;
               .userLogin{
                   color:#047df1;
                   display:flex;
                   align-items:center;
                   justify-content:center;
                   width:100%;
                   height:30%;
                   font-size:30px;
                   letter-spacing:8px;

               }
               .wrap{
                   flex:1;
                //    background-color:yellowgreen;
                     >div{
                            box-sizing:border-box;
                            width:100%;
                            height:18%;
                            border-radius:6px; 
                            border:1px solid #047df1;
                            margin-bottom:8%;
                            display:flex;
                            align-items:center;
                            padding: 2% 0;
                            .icon1{
                           
                                width:15%;
                                height:100%;
                                background:url('../../assets/images/login/people.png') no-repeat center;
                                border-right:1px solid #047df1;
                            
                         }
                         .icon2{
                            background:url('../../assets/images/login/lock.png') no-repeat center; 
                         }
                        input{
                            padding-left:12px;
                            color:#000;
                        }
                   }
                   >div:nth-child(3){
                       display:flex;
                       align-items:center;
                       justify-content:center;
                        background:linear-gradient(left,#008aff 0%,#008aff 30%,#0258da 60% , #0258da 100%  );
                       background-color:#047df1;
                       font-size:20px;
                       letter-spacing:4px;
                       cursor:pointer;
                       
                   }
               }
           }
    }
}
.loginCard  .wrap input::-webkit-input-placeholder{
   color:#58aaff;
   font-size:16px;
  
}
// @media only screen and (max-width: 500px) {
//     body {
//         background-color: yellow;
//     }
// }

 </style>
