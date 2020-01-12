<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 16:56:22
 * @LastEditTime: 2019-12-02 14:29:51
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="layout" id="demo">
    <Layout>
          <div class="header">
          <div>
            <span style="font-size:24px;color:#fff">上海浦房集团智慧消防管理云平台</span>
          </div>

          <div class="header-icon">
            <span class="iconfont iconxiaoxi "><label class="iconlabel">消息中心</label></span>
            <span class="iconfont iconweb-icon- " @click="skip"><label class="iconlabel">切换大屏</label> </span>
            <span class="iconfont iconwode" @click="qiehuan"> <label class="iconlabel ">用户中心</label> </span>
          </div>
           <div class="menugl" style="display: none;">
            <span class="iconfont iconxiugaimima" @click="tulogin">  <label class="iconlabel"> 修改密码</label></span>
             <!-- <span>切换用户</span> -->
             <span class="iconfont icontuichu" @click="tulogin">  <label class="iconlabel"> 退出登录</label></span>
             <!-- <span>技术支持</span> -->
            </div> 
        </div>
     

      <Layout>
     <Sider hide-trigger :style="{background: '#142964'}" class="ss">
        <Menu active-name="61" style="background:#142964; color" width="auto" accordion>
          <MenuItem name="61" to="/firealarm">
          <span class="iconfont iconicon-test"></span>           
            <span>&nbsp; 报警监控</span>
          </MenuItem>
          <MenuItem name="51" to="/power">
         <span class="iconfont iconyongdianjilu"></span>         
            <span>&nbsp; 智慧用电</span>
          </MenuItem>
          <MenuItem name="71" to="/firewater">
       <span class="iconfont iconwater_icon"></span>  
            <span>&nbsp; 消防供水</span>
          </MenuItem>
            <MenuItem name="81" to="/video">
        <span class="iconfont iconshipin"></span>  
            <span>&nbsp; 视频监控</span>
          </MenuItem>
              </MenuItem>
            <MenuItem name="91" to="/fireDoor">
       <span class="iconfont iconjiankong"></span>  
            <span>&nbsp; 防火门监控</span>
          </MenuItem>
 
          <Submenu name="6">
            <template slot="title">
        <span class="iconfont iconshuju"> &nbsp;<label style="font-size:14px;">数据分析</label></span>  
            </template>
            <MenuItem to="/baojingEvent" name="6-1">报警事件</MenuItem>
            <MenuItem to="/runstatus" name="6-4">运行状态</MenuItem>
            <MenuItem to="/baojingTrend" name="6-2">报警趋势</MenuItem>
            <MenuItem to="/patrol" name="6-3">维保巡检</MenuItem>
          </Submenu>

          <Submenu name="12">
            <template slot="title">
        <span class="iconfont iconshuju"> &nbsp;<label style="font-size:14px;">报警记录</label></span>  
            </template>
            <MenuItem to="/alarmEvent" name="12-1">报警事件</MenuItem>
            <MenuItem to="/dataBrowse" name="12-2">数据浏览</MenuItem>
          </Submenu>
          <Submenu name="4">
            <template slot="title">
            <span class="iconfont iconxunjian"> &nbsp;<label style="font-size:14px;">维保巡检</label></span>  
            </template>
            <MenuItem to="/maint" name="4-1">巡检项目</MenuItem>
            <MenuItem to="/mainrouter" name="4-2">巡检路由</MenuItem>
            <MenuItem to="/maindian" name="4-3">巡检点位</MenuItem>
            <MenuItem to="/plan" name="4-4">巡检计划</MenuItem>
            <MenuItem to="/hiddenDanger" name="4-5">隐患处理</MenuItem>
            <MenuItem to="/mainjilu" name="4-6">巡检记录</MenuItem>
          </Submenu>

          <Submenu name="2">
            <template slot="title">
           <span class="iconfont icondangan"> &nbsp;<label style="font-size:14px;">档案管理</label></span>  
            </template>
            <MenuItem to="/doc" name="2-1">文档管理</MenuItem>
            <MenuItem to="/draw" name="2-2">图纸管理</MenuItem>
          </Submenu>
             <MenuItem name="31" to="/fire">
       <span class="iconfont iconapp_icons--"></span>  
            <span>&nbsp;&nbsp;消防宣传</span>
          </MenuItem>
          <Submenu name="1">
            <template slot="title">
           <span class="iconfont iconRectangleCopy"> &nbsp;<label style="font-size:14px;">安全评估</label></span> 
            </template>
            <MenuItem name="1-1" to="/indicatorSetting">指标设置</MenuItem>
            <MenuItem name="1-2" to="/assessmentTask">评估任务</MenuItem>
            <MenuItem name="1-3" to="/selfAssessment">自主评估</MenuItem>
          </Submenu>
          <Submenu name="9">
            <template slot="title">
  <span class="iconfont iconicon_xinyong_xianxing_jijin-"> &nbsp;<label style="font-size:14px;">系统管理</label></span> 
            </template>
            <MenuItem name="7-1" to="/user">用户管理</MenuItem>
              <MenuItem name="7-3" to="/role">角色管理</MenuItem>
            <MenuItem name="7-2" to="/menu">菜单管理</MenuItem>
          </Submenu>
        </Menu>
      </Sider>

        <Layout class="contents">
          <Content :style="{ height: '100%',color:'#000000'}">
            <router-view />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data() {
    return {
      menulist: [
        {
          name: '安全评估',
          icon: 'ios-navigate',
          acticename: '1',
          router: '',
          menus: [
            {
              name: '指标设置',
              icon: 'ios-navigate',
              acticename: '1-1',
              router: '/indicatorSetting'
            },
            {
              name: '评估任务',
              icon: 'ios-navigate',
              acticename: '1-1',
              router: '/assessmentTask'
            },
            {
              name: '自主评估',
              icon: 'ios-navigate',
              acticename: '1-1',
              router: '/selfAssessment'
            }
          ]
        }
      ]
    }
  },
  methods:{
     skip(){
       this.$router.push('/synthesize')
     },
         qiehuan(){
       $('.menugl').toggle(200);
    },
    tulogin(){
    this.$router.push('/')

    },
  }
}
</script>

<style lang="less" scoped>
#demo {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //   text-align: center;
  width: 100%;
  height: 100%;
}

#demo /deep/ .ivu-layout {
  height: 100%;
  background-color: #edf5f7;
}

#demo /deep/ .ivu-menu {
  height: 100%;
  color: #fff;
}
//  #demo /deep/ .contents{
//    padding:10px 20px;
//  }
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
}

.ss {
  overflow: auto;
  // background: #515a6e !important;
}

.header {
  display: flex;
  padding: 0 50px 0 20px;
  height: 60px;
  line-height: 70px;
  justify-content: space-between;
  align-items: center;
  background: #1f3284;
  color: #fff;
}

.header-icon {
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .iconlabel{
    padding-left: 10px;
    font-size: 14px;
  }
}
// #demo /deep/.ivu-menu-vertical .ivu-menu-opened .ivu-menu-item {
//   // background-color:#1c2a66;
//   background-color: #1f3284;
// }
#demo /deep/ .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
  color: #fff;
  background-color: #1f3284;
}
#demo /deep/ .ivu-menu-vertical.ivu-menu-light:after {
  width: 0;
}
.menugl{
      width: 100px;
        display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 99999;
    line-height: 30px;
    top: 50px;
    right:40px; 
    position: absolute;
    background:#fff;
    border:1px solid #ccc;
    // transition: all .2s ease-in-out;
    span{
      font-size: 14px;
      color:rgb(41, 40, 40);
      
    }
    span:hover{
       cursor: pointer;
      color: #2d8cf0;
    }
}
.iconfont:hover{
   cursor: pointer;
  color: #2d8cf0;
}

</style>
