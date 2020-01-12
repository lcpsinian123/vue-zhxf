<!--
 * @Author: your name
 * @Date: 2019-11-16 13:21:08
 * @LastEditTime: 2019-11-30 17:59:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-zzxf\src\components\firealarm\firealarm.vue
 -->
<template>
    <div class="firealarm" >
          <div id="mapDiv" style="width:100%;height:100%"> </div>
        <div class="headerleft">
          <div class="firealarm-header" style="justify-content: space-around;cursor:pointer">
              <button v-for='(item,index) in this.tablist' @click="onclicktabs(item.ppid,index)" :class="active==index?'activeClass':'tabbutton'">{{item.ppname}} </button>
          </div>
             <div style="width:100%;height:100%;overflow:auto">
              <div  class="lefthedaer">
                    <Input search enter-button="搜索" placeholder="请输入需要搜索的区域" style="padding:0px 20px;" />
                        </div> 
                        <div class="modediv" style="height:140px;border-bottom:1px solid #ccc">
                           <div class="modetitle">
                               <span class="titlelogo"></span>
                               <span class='titlename'>最近二十四小时报警事件</span>
                           </div>
                           <div style="width:100%;height:100%;height: 80%;display: flex;">
                              <div class="firediv" style=" padding: 0px 20px;width:60%;align-items: center;">
                                  <div class="flexdiv" style="width: 100%;align-items: center;height: 80px; border: 1px solid #ccc;"> 
                                      <div class="qiu" style="height: 100%;width:120px;background-image: linear-gradient(to top left, #0084ff,#00ccff);text-align: center;line-height: 78px;">
                                       <span class="iconfont iconjiarushijian" style="font-size:45px;color:#fff"></span>
                                      </div>
                                      <div style="display: flex;flex-direction: column;justify-content: space-evenly;height: 100%;width: 100%;align-items: center;padding: 10px 0px;">                                        
                                        <span>{{twentyFourlist.eventTotal}}</span>
                                         <span>事件总数</span>
                                      </div>
                                        
                                   </div>   
                              </div>
                              <div class="firediv" style="flex-wrap: wrap;padding: 0px 20px;align-items: center;justify-content: space-between;">
                                  <div class="flexdiv">
                                      <div class="qiu" style="background:#f74f5f">
                                               <span class="iconfont iconicon-test" style="font-size:25px;color:#fff"></span>
                                      </div>
                                         <span style="width: 100%;text-align: center;">火警: {{twentyFourlist.fireAlarmnum}}</span>
                                  </div>
                                  <div class="flexdiv">
                                     <div class="qiu" style="background:#f69c22">
                                             <span class="iconfont  iconguzhangzhuangtai" style="font-size:25px;color:#fff"></span>
                                      </div>
                                       <span style="width: 100%;text-align: center;">故障: {{twentyFourlist.breakdownnum}}</span>
                                       
                                  </div>
                                  <div class="flexdiv" > 
                                    <div class="qiu" style="background:#f6e30f">
                                             <span class="iconfont  iconapp_icons--" style="font-size:25px;color:#fff"></span>
                                      </div>
                                          <span style="width: 100%;text-align: center;">报警: {{twentyFourlist.callPolicenum}}</span>
                                   </div>
                                  <div class="flexdiv">
                                     <div class="qiu" style="background:#dbdbdb">
                                              <span class="iconfont iconlixian" style="font-size:25px;color:#fff"></span>
                                      </div>
                                         <span style="width: 100%;text-align: center;">离线: {{twentyFourlist.tapeOutnum}}</span>
                                  </div>
                              </div>
                           </div>
                           
                        </div>
<div class="modediv" style="  border-bottom:1px solid #ccc">
                              <div class="modetitle">
                               <span class="titlelogo"></span>
                               <span class='titlename'>近七天报警趋势</span>
                           </div>
                           <div :id="'mychart'" class="echartsdiv"></div>
                         </div>
                          <div class="modediv" style="height:400px;">
                              <div class="modetitle">
                               <span class="titlelogo"></span>
                               <span class='titlename'>事件列表</span>
                           </div>
                          <div class="listshow">
                                <Col span="2">类型</COl>
                                  <Col span="6">首次报警时间</COl>
                                    <Col span="4">联网单位</COl>
                                      <Col span="5">监控对象</COl>
                                        <Col span="3">报警次数</COl>
                                          <Col span="2">状态</COl>
                                            <Col span="2">操作</COl>

                            </div>
                          
                            <div class="body rollScreen_container" >
                            <div class="scroll-content " :style="{top}"
                                     >
                                <div v-for="(item,index) in dutyRateData" class="huadongdiv "
                                    >
                                    <Col span="2" :class="[item.raType==1?'hj':[item.raType==2?'gz':[item.raType==3?'xx':'bj']]]">{{['','火警','故障','下线','报警'][item.raType]}}</Col>
                                    <Col span="6">{{item.raDate}}</Col>
                                    <Col span="4">{{item.cpname}}</Col>
                                    <Col span="5">{{item.emname}}</Col>
                                    <Col span="3">{{item.emEmid}}</Col>
                                    <Col span="2">{{['未处理', '已处理'][item.status]}}</Col>
                                    <Col span="2" style="color:#2d8cf0;cursor:pointer;" >  <span @click="showmodel(item.emid,item.emEmid,item.guid,item.raType)">查看</span> </Col>
                                </div>

                            </div>
                           
                        </div>
                        

         </div>
              </div>  
             </div>
         <!-- <div class="firealarm-header"> -->
             
             <!-- <div class="headerright">       
             </div> -->
            <!-- <RadioGroup v-model="buttonSize" type="button" size='small' style="padding-right:10px;" @on-change='onradiochange'>
            <Radio label="large">地图</Radio>
            <Radio label="default">地形</Radio>
            <Radio label="small" >卫星</Radio>
              <Radio label="smalls">街景</Radio>
        </RadioGroup> -->
         <!-- </div> -->
      
          <Modal v-model="modal22" id='selectmodel' width="80%">
                          <div slot="header" class="addheader flexdivs">
                                              <div style="padding-left:10px">
                                                <span style="font-size: 14px;">报警时间: 2019-11-16 14:36:12</span>
                                              </div>
                                                  <div>
                                                <h1>{{jbxxlist.cpname}} | {{detailslist.dbname}}</h1>
                                              </div>
                                               <div style="padding-right:150px;">
                                                 <!-- <Button type="primary" size="small" @click="chulushow">处理</Button> -->
                                              </div>
                                                  </div>
                              <div class="divxq">
                                <div class="divone">
                                <div class="modediv" style="box-shadow: 0px 2px 6px -2px;">
                                          <div class="modetitle" style="justify-content: space-between;background:rgba(45,140,240,.2)">
                                            <div style="display:flex;border-left:3px solid #3c8fff">
                                              <!-- <span class="titlelogo"></span> -->
                                              <span class="titlename" style='margin-top: 4px;'>单位联系人</span>
                                            </div>
                                             <div >
                                              <span style="color: #3c8fff;margin-right:10px">更多>></span>
                                            </div>
                                          </div>
                                              <div style="padding: 15px;height: 210px;overflow: auto;
">
                                              <div style="width:100%; display: flex;box-shadow: 0px 2px 6px -2px;">
                                              <!--<div style="width: 60px;height: 60px;">
                                                <img src="../../assets/images/login/loginmap.png"   >
                                              </div>-->
                                              <div style="display: flex;flex-direction: column;padding-left: 10px;">
                                                <span>李旭</span>
                                                <span>电话:18856823659</span>
                                                <span>
                                                    <span class="iconfont icondianhua red"></span>&nbsp;&nbsp;
                                                   <span class="iconfont iconduanxin red"></span></span>
                                              </div>
                                          </div>
                                                     <div style="width:100%; display:flex;box-shadow: 0px 2px 6px -2px;margin-top:10px; ">
                                           <!--<div style="width: 60px;height: 60px;">
                                                <img src="../../assets/images/login/loginmap.png"   >
                                              </div>-->
                                              <div style="display: flex;flex-direction: column;padding-left: 10px;">
                                                <span>李旭</span>
                                                <span>电话:18856823659</span>
                                                <span>
                                                  <span class="iconfont icondianhua red"></span>&nbsp;&nbsp;
                                                   <span class="iconfont iconduanxin red"></span></span>
                                              </div>
                                              </div>
                                  </div>
                                </div>
                                  <div class="modediv" style="box-shadow: 0px 2px 6px -2px;margin-top:10px;height:272px">
                                          <div class="modetitle" style="justify-content: space-between;background:rgba(45,140,240,.2)">
                                            <div style="display:flex;border-left:3px solid #3c8fff">
                                              <!-- <span class="titlelogo"></span> -->
                                              <span class="titlename" style='margin-top: 4px;'>联勤单位</span>
                                            </div>
                                             <div >
                                              <span style="color: #3c8fff;margin-right:10px">更多>></span>
                                            </div>
                                          </div>
                                              <div style="padding: 15px;overflow: auto;height: 246px;">
                                                
                                              <div style="width:100%; display: flex;box-shadow: 0px 2px 6px -2px;">
                                           <!--<div style="width: 60px;height: 60px;">
                                                <img src="../../assets/images/login/loginmap.png"   >
                                              </div>-->
                                              <div style="display: flex;flex-direction: column;padding-left: 10px;">
                                                <span>维保单位</span>
                                                <span>电话:18856823659</span>
                                                <span>
                                                    <span class="iconfont icondianhua red"></span>&nbsp;&nbsp;
                                                   <span class="iconfont iconduanxin red"></span></span>
                                              </div>
                                          </div>
                                          
                                         <div style="width:100%; display:flex;box-shadow: 0px 2px 6px -2px;margin-top:10px; ">
                                              <!--<div style="width: 60px;height: 60px;">
                                                <img src="../../assets/images/login/loginmap.png"   >
                                              </div>-->
                                              <div style="display: flex;flex-direction: column;padding-left: 10px;">
                                                <span>维保单位</span>
                                                <span>电话:18856823659</span>
                                                <span>
                                                  <span class="iconfont icondianhua red"></span>&nbsp;&nbsp;
                                                   <span class="iconfont iconduanxin red"></span></span>
                                              </div>
                                          </div>
                                          
                                            <div style="width:100%; display:flex;box-shadow: 0px 2px 6px -2px;margin-top:10px; ">
                                            <!--<div style="width: 60px;height: 60px;">
                                                <img src="../../assets/images/login/loginmap.png"   >
                                              </div>-->
                                              <div style="display: flex;flex-direction: column;padding-left: 10px;">
                                                <span>维保单位</span>
                                                <span>电话:18856823659</span>
                                                <span>
                                                    <span class="iconfont icondianhua red"></span>&nbsp;&nbsp;
                                                   <span class="iconfont iconduanxin red"></span></span>
                                              </div>
                                            </div>
                                  </div>
                                  
                                     
                                 
                                 
                                </div>
                                    <div class="modediv" style="box-shadow: 0px 2px 6px -2px;margin-top:10px;height:26px;">
                                          <div class="modetitle" style="justify-content: space-between;background:rgba(45,140,240,.2)">
                                            <div style="display:flex;border-left:3px solid #3c8fff">
                                              <!-- <span class="titlelogo"></span> -->
                                              <span class="titlename" style='margin-top: 4px;'>设备设施</span>
                                            </div>
                                             <div >
                                              <span style="color: #3c8fff;margin-right:10px">更多>></span>
                                            </div>
                                          </div>
                                     </div>

                                   <div class="modediv" style="box-shadow: 0px 2px 6px -2px;margin-top:10px;height:272px">
                                          <div class="modetitle" style="justify-content: space-between;background:rgba(45,140,240,.2)">
                                            <div style="display:flex;border-left:3px solid #3c8fff">
                                              <!-- <span class="titlelogo"></span> -->
                                              <span class="titlename" style='margin-top: 4px;'>建筑信息</span>
                                            </div>
                                             <div >
                                              <span style="color: #3c8fff;margin-right:10px">更多>></span>
                                            </div>
                                          </div>
                                           <div style="display:flex;flex-direction: column;padding:20px;">
                                            <span>建筑信息：{{detailslist.dbname}}</span>
                                            <span>使用性质：{{detailslist.useNature}}</span>
                                            <span>耐火等级：{{detailslist.rfctGrade}}</span>
                                            <span>结构类型：{{detailslist.mcnType}}</span>
                                            <span>建筑高度：{{detailslist.bdHeight}}</span>
                                            <span>地上：{{detailslist.agLayer}}</span>
                                            <span>地下：{{detailslist.ugLayer}}</span>
                                            <span>监控室：{{detailslist.montitoringLayer}}</span>
                                            <span>消控室：{{detailslist.fcrLayer}}</span>
                                           </div>
                                          </div>
                                </div>
                                <div class='divtwo'>
                                   <div  style="width:100%;height:520px;box-shadow: 0px 2px 6px -2px;">
                                        <Tabs value="name1">
        <TabPane label="报警信息" name="name1">
            <div class="divetwotop" >
          <div class="modediv" style="height:100px !important;background:none;border:0px;">
            <div class="modetitle" style="background:none">
              <span class="titlelogo" style="background:#3C8FFF !important"></span>
              <span class="titlename" style="color:#3C8FFF !important">基础信息</span>
            </div>

            <div class="xqdiv">
              <Col span="12" class="span-pad">
                <span>设备名称：</span>
                <span>{{jbxxlist.emname}}</span>
              </Col>
              <Col span="12" class="span-pad">
                <span>编码：</span>
                <span>{{jbxxlist.emid}}</span>
              </Col>

              <Col span="12" class="span-pad">
                <span>控制器编码：</span>
                <span>{{jbxxlist.ctlsn}}</span>
              </Col>
              <Col span="12" class="span-pad">
                <span>所属单位：</span>
                <span>{{jbxxlist.cpname}}</span>
              </Col>
              <Col span="12" class="span-pad">
                <span>单位地址：</span>
                <span>{{jbxxlist.address}}</span>
              </Col>
              <Col span="12" class="span-pad">
                <span>安装位置：</span>
                <span>{{jbxxlist.installAddress}}</span>
              </Col>
            </div>
          </div>
          <Divider size="small" style="margin:5px 0px;" />
          <div class="modediv" style="height:100px !important;background:none;border:0px;">
            <div class="modetitle" style="background:none">
              <span class="titlelogo" style="background:#3C8FFF !important"></span>
              <span class="titlename" style="color:#3C8FFF !important">警情信息</span>
            </div>
            <div class="xqdiv">
              <Col span="12" class="span-pad">
                <span>首次报警时间：</span>
                <span>{{jbxxlist.raDate}}</span>
              </Col>
              <Col span="12" class="span-pad">
                <span>最新报警时间：</span>
                <span>{{jbxxlist.newestDate}}</span>
              </Col>

              <Col span="12" class="span-pad">
                <span>持续时长：</span>
                <span>{{jbxxlist.lastTime}}</span>
              </Col>
              <Col span="12" class="span-pad">
                <span>报警类型：</span>
                <span>{{['','火警','故障','下线','报警'][jbxxlist.raType]}}</span>
              </Col>
              <Col span="12" class="span-pad">
                <span>报警次数：</span>
                <span>{{jbxxlist.alerts}}</span>
              </Col>
              <Col span="12" class="span-pad">
                <span>状态：</span>
                <span>{{['未处理', '已处理'][jbxxlist.status]}}</span>
              </Col>
            </div>
          </div>
          <Divider size="small" style="margin:5px 0px;" />
          <div style="width:100%;min-height:220px;">
            <div class="divcl">
              <span style="margin:0px 50px 0px 20px;">处理</span>
              <RadioGroup v-model="clsavelist.qiehuan" type="button" v-for=' item in this.cltypelist'>
                <Radio :label="item.ID">{{item.LABEL}}</Radio>
                <!-- <Radio label="hulue">忽略</Radio>
                <Radio label="pingbi">屏蔽</Radio>
                <Radio label="ceshi">测试</Radio> -->
              </RadioGroup>
            </div>
            <div class="divc2" v-if="clsavelist.qiehuan=='220'">
              <span style="margin:0px 20px;">原因描述</span>
              <div class="divif">
                <div>
                 <RadioGroup v-model="clsavelist.ms" v-for="item in this.cltypeRshllist">
                  <Radio :label="item.ID">{{item.LABEL}}</Radio>
                </RadioGroup>
                </div>
                <Input v-model="clsavelist.rsNote" placeholder="描述信息" style="width: 500px;padding-top:10px;" />
              </div>
            </div>
            <div v-if="clsavelist.qiehuan=='221'">
              <div class="divcl">
                <span style="margin:0px 20px;">屏蔽时段</span>
                <RadioGroup v-model="clsavelist.prType" v-for='item in this.cltyshieleTitlist'>
                  <Radio :label="item.ID">{{item.LABEL}}</Radio>
                </RadioGroup>
              </div>
              <div class="divc2">
                <span style="margin:0px 20px;">原因描述</span>
                <div class="divif">
                  <div>
                  <RadioGroup v-model="clsavelist.rspb" v-for='item in this.cltypeRspblist'>
                    <Radio :label="item.ID">{{item.LABEL}}</Radio>
                  </RadioGroup>
                  </div>
                  <Input v-model="clsavelist.rsNote" placeholder="描述信息" style="width: 500px;padding-top:10px;" />
                </div>
              </div>
            </div>
            <div v-if="clsavelist.qiehuan=='222'">
              <div class="divcl">
                <span style="margin:0px 20px;">测试时段</span>
                <div>
                <RadioGroup v-model="clsavelist.csday" v-for='item in this.cltypeRscslist'>
                  <Radio :label="item.ID">{{item.LABEL}}</Radio>
                </RadioGroup>
                </div>
              </div>
              <div class="divc2">
                <span style="margin:0px 20px;">原因描述</span>
                <div class="divif">
                  <div>
                 <RadioGroup v-model="clsavelist.csyy" v-for="item in this.cltypeRslist">
                   <Radio :label="item.ID">{{item.LABEL}}</Radio>
                  </RadioGroup>
                  </div>
            
                  <Input v-model="clsavelist.rsNote" placeholder="描述信息" style="width: 500px;padding-top:10px;" />
                </div>
              </div>
            </div>
            <div v-if="clsavelist.qiehuan=='223'">
              <div class="divc2">
                <span style="margin:0px 20px;">原因描述</span>
                <div class="divif">
                  <div>
                   <RadioGroup v-model="clsavelist.qrradyy" v-for='item in this.cltypeRshzlist'>
                     <Radio :label="item.ID">{{item.LABEL}}</Radio>
                  </RadioGroup>
                  </div>
                  <Input v-model="clsavelist.rsNote" placeholder="描述信息" style="width: 500px;padding-top:10px;" />
                </div>
              </div>
              <div class="divc2">
                <span style="margin:0px 20px;">处理记录</span>
                <div class="divif">
                  <div>
                   <RadioGroup v-model="clsavelist.qrradcl" v-for='item in this.cltypePrqrlist'>
                     <Radio :label="item.ID">{{item.LABEL}}</Radio>
                  </RadioGroup>
                  </div>
                  <Input v-model="clsavelist.prNote" placeholder="描述信息" style="width: 500px;padding-top:10px;" />
                </div>
              </div>
            </div>
          </div>
             <div class="chulibutton">
               <Button type='info' @click="chulichange()"> 处理</Button>
             </div>
        </div>

        </TabPane>
        <TabPane label="通知纪录" name="name2">
          <div class="btnclass" style="line-height:0px;margin-top: 20px;">
                    <Button type="primary" size='small' icon="ios-paper-plane">微信</Button>
                    <Button ghost type="primary" size='small' icon="ios-call" >短信</Button>
                    <Button ghost type="primary" size='small' icon="ios-mail">语音</Button>
                </div>
           <div class="listshow" style="margin-top:20px;">
                                      <Col span="5">通知时间</Col>
                                      <Col span="5">通知对象</Col>
                                      <Col span="5">岗位</Col>
                                      <Col span="5">微信号码</Col>
                                      <Col span="4">昵称</Col>
                                               </div>
        </TabPane>
       </Tabs>
                                   </div>
                               <div class="modediv" style="box-shadow: 0px 2px 6px -2px;margin-top:10px;height:306px">
                                          <div class="modetitle" style="justify-content: space-between;background:rgba(45,140,240,.2)">
                                            <div style="display:flex;border-left:3px solid #3c8fff">
                                              <!-- <span class="titlelogo"></span> -->
                                              <span class="titlename" style='margin-top: 4px;'>事件消息</span>
                                            </div>
                                             <div >
                                              <span style="color: #3c8fff;margin-right:10px">更多>></span>
                                            </div>
                                          </div>
                                          <div style="padding:10px;">
                                              <div class="listshow">
                                      <Col span="6">时间</COl>
                                      <Col span="6">地点</COl>
                                      <Col span="6">仪器</COl>
                                      <Col span="6">编码</COl>
                                               </div>
                                <div class="body " style="height:200px;">
                                                      <div class="scroll-content " :style="{top}"
                                                              >
                                                          <div v-for="(item,index) in ememidlist" class="huadongdiv "
                                                              >
                                                              <Col span="6">{{item.raDate}}</Col>
                                                              <Col span="6">{{item.rgname}}</Col>
                                                              <Col span="6">{{item.emname}}</Col>
                                                              <Col span="6">{{item.emEmid}}</Col>
                                                          
                                                          </div>

                                                      </div>
                                                  </div>
                                  
                                          </div>
                                      
                     
                              
                                         </div>
                                </div>
                                <div class="divthree">
                                <div class="modediv" style="height:auto;background:none;border:0px;">
              <div class="modetitle" style="justify-content: space-between;background:rgba(45,140,240,.2)">
                                            <div style="display:flex;border-left:3px solid #3c8fff">
                                              <!-- <span class="titlelogo"></span> -->
                                              <span class="titlename" style='margin-top: 4px;'>视频监控</span>
                                            </div>
                                             <div >
                                              <span style="color: #3c8fff;margin-right:10px">更多>></span>
                                            </div>
                                          </div>
          <div style="padding:5px;">
            <div class="divvideo">
               <video src="../../assets/images/SC.mp4" controls="controls" style="width:100%">

                    </video>
            </div>
            <div class="divvideos">
              <div style="width:50%">
                 <video src="../../assets/images/SC.mp4" controls="controls" style="width:100%">

                    </video>
              </div>
              <div style="width:50%">
                  <video src="../../assets/images/SC.mp4" controls="controls" style="width:100%">

                    </video>
              </div>
            </div>
            <div class="divvideos">
              <div style="width:50%">
                <video src="../../assets/images/SC.mp4" controls="controls" style="width:100%">

                    </video>
              </div>
              <div style="width:50%">
                 <video src="../../assets/images/SC.mp4" controls="controls" style="width:100%">

                 </video>
              </div>
            </div>
             <div class="divvideos">
              <div style="width:50%">
                <video src="../../assets/images/SC.mp4" controls="controls" style="width:100%">

                    </video>
              </div>
              <div style="width:50%">
                 <video src="../../assets/images/SC.mp4" controls="controls" style="width:100%">

                 </video>
              </div>
            </div>
             <div class="divvideos">
              <div style="width:50%">
                <video src="../../assets/images/SC.mp4" controls="controls" style="width:100%">

                    </video>
              </div>
              <div style="width:50%">
                 <video src="../../assets/images/SC.mp4" controls="controls" style="width:100%">

                 </video>
              </div>
            </div>
             <div class="divvideos">
              <div style="width:50%">
                <video src="../../assets/images/SC.mp4" controls="controls" style="width:100%">

                    </video>
              </div>
              <div style="width:50%">
                 <video src="../../assets/images/SC.mp4" controls="controls" style="width:100%">

                 </video>
              </div>
            </div>
          </div>
        </div>
      
                                </div>
                                </div> 

                              <div slot='footer'>

                              </div>
                          </Modal>
    </div>
</template>
<script>
import {
    wyjc
} from 'api/docManage'
import {
getEvent,findDetails,twentyFour,sevenDays,twotree,details,cltype, 
cltypeRshl,//忽略原因类型分类
cltypeRspb,//屏蔽原因分类
cltypeRs,//测试原因分类
cltypeRscs,//测试时段分类
cltypeRsgz,//故障确认原因分类
cltypeRshz,//火灾确认原因分类
cltypePrqr,//确认处理纪录类型
saveAevp, //详情处理
fdetails, //弹框详情
shieleTit //屏蔽时段
} from 'api/firealarm'
var echarts = require('echarts')
export default {
 name:'firealarm',

 data() {
     return {
       active:0,
      twentyFourlist:[],
       buttonSize:'large',
         modal22:false,
       clsavelist:{
          qiehuan: 220, //处理确认
          ms: 224, //描述
          rspb: 231, 
          csday:236,
          csyy: 233,
          qrradyy: 245,
          qrradcl: 249,
          prType : 268, 
       },
         top:"30",
      dutyRateData:[],
      map:'',
      tablist:[],
      ppid:null,
      rgid:null,
      guid:null,
      emid:null,
      sevenDayslist:[],
      jbxxlist:[],
      ememidlist:[],
      cltypelist:[],
      detailslist:[],
      cltypeRshllist:[],//忽略原因类型分类
      cltypeRspblist:[],//屏蔽原因分类
      cltypeRslist:[],//测试原因分类
      cltypeRscslist:[],//测试时段分类
      cltypeRsgzlist:[],//故障确认原因分类
      cltypeRshzlist:[],//火灾确认原因分类
      cltypePrqrlist:[],//确认处理纪录类型
      cltyshieleTitlist:[],//屏蔽时段类型
     }
     
 },  
 methods:{
   // 地图图层
      onradiochange(res){
        console.log(res)
        // if(res=="small"){
        //     var imageURL = "http://t0.tianditu.gov.cn/img_w/wmts?" +
        //         "SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles" +
        //         "&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=e61f09c0fe8c9295c7ce605f32101e1e";
        //   var lay = new T.TileLayer(imageURL, {minZoom: 1, maxZoom: 18});
        //     //将图层增加到地图上
        //     this.map.addLayer(lay);
        // }
      },
       initMap() {
      var zoom = 12
      this.map = new T.Map('mapDiv', {
        projection: 'EPSG:4326'
      })
      this.map.centerAndZoom(new T.LngLat(121.53, 31.22), zoom)
      this.map.disableDoubleClickZoom()
      // this.map.disableScrollWheelZoom()
      var ctrl = new T.Control.MapType()
      //添加控件
      this.map.addControl(ctrl)
    },
    //火警处理
    chulichange(){
      
        if(this.clsavelist.qiehuan==220){
         let savelist={
          raType:this.guid,
          emid:this.emid,
          hdType:this.clsavelist.qiehuan,
          rsType:this.clsavelist.ms,
          rsNote:this.clsavelist.rsNote
        }
          saveAevp(savelist).then(res=>{
            if(res.status==1){
            this.modal22 = false;
            this.clsavelist.rsNote='';
             this.clsavelist.prNote='';
          }
      })
        }else if(this.clsavelist.qiehuan===221){
        let savelist={
          raType:this.guid,
            emid:this.emid,
          hdType:this.clsavelist.qiehuan,
          rsType:this.clsavelist.rspb,
          rsNote:this.clsavelist.rsNote,
          prType:this.clsavelist.prType
        }
          saveAevp(savelist).then(res=>{
            if(res.status==1){
            this.modal22 = false;
            this.clsavelist.rsNote='';
             this.clsavelist.prNote='';
          }
      })
        }else if(this.clsavelist.qiehuan==222){
            let  savelist={
          raType:this.guid,
            emid:this.emid,
          hdType:this.clsavelist.qiehuan,
          shieldTit:this.clsavelist.csday,
          rsType:this.clsavelist.csyy,
          rsNote:this.clsavelist.rsNote
        }
          saveAevp(savelist).then(res=>{
          if(res.status==1){
            this.modal22 = false;
            this.clsavelist.rsNote='';
             this.clsavelist.prNote='';
          }
      })
        }
        else if(this.clsavelist.qiehuan==223){
          let savelist={
          raType:this.guid,
            emid:this.emid,
          hdType:this.clsavelist.qiehuan,
          rsType:this.clsavelist.qrradyy,
          rsNote:this.clsavelist.rsNote,
          prType:this.clsavelist.qrradcl,
          prNote:this.clsavelist.prNote
        }
          saveAevp(savelist).then(res=>{
            if(res.status==1){
            this.modal22 = false;
            this.clsavelist.rsNote='';
             this.clsavelist.prNote='';
          }
      })
        }
    
    
    },

    showmodel(emid,emEmid,guid,raType){
        this.modal22 = true;
        this.guid=raType;
        this.emid=emid;
      details(emid,raType).then(res=>{
        this.jbxxlist=res.obj;
        // cltypeRshl,//忽略原因类型分类
        // cltypeRspb,//屏蔽原因分类
        // cltypeRs,//测试原因分类
        // cltypeRscs,//测试时段分类
        // cltypeRsgz,//故障确认原因分类
        // cltypeRshz,//火灾确认原因分类
        // cltypePrqr,//确认处理纪录类型
        //处理字典
        cltype().then(res=>{
           this.cltypelist=res.obj;
        })
        cltypeRshl().then(res=>{
          this.cltypeRshllist=res.obj;
        })
        cltypeRspb().then(res=>{
            this.cltypeRspblist=res.obj;
        })
        cltypeRs().then(res=>{
          this.cltypeRslist=res.obj;
        })
        cltypeRscs().then(res=>{
          this.cltypeRscslist=res.obj;
        })
        cltypeRsgz().then(res=>{
          this.cltypeRsgzlist=res.obj;
        })
        cltypeRshz().then(res=>{
          this.cltypeRshzlist=res.obj;
        })
        cltypePrqr().then(res=>{
          this.cltypePrqrlist=res.obj;
        })
        findDetails(emid,raType).then(res=>{
           this.ememidlist=res.obj;
        })
        fdetails(emid).then(res=>{
           this.detailslist=res.obj;
        })
        shieleTit().then(res=>{
           this.cltyshieleTitlist=res.obj;
        })
      })
    },
    // chulushow(){
    //    this.modal23 = true;
    // },
     mychart11() {
       let myChart;
           myChart = echarts.init(document.getElementById('mychart'))
          // console.log(myChart)
          myChart.resize()
          myChart.setOption({
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              color: ['#ee2cif', '#ff9a1a', '#f6e20f','#ccc'],
              data: ['火警', '报警', '故障','下线'],
              left: 'center',
              top: 'top',

              textStyle: {
                color: '#626262'
              }
            },
            grid: {
              left: '1%',
              right: '4%',
              bottom: '2%',
              height: '82%',
              containLabel: true
            },
            xAxis: {
              type: 'category',
              name: '天',
              nameTextStyle: {
                color: '#626262',
                padding: -15
              },
              data: [1, 2, 3, 4, 5, 6, 7],
              axisLine: {
                show: false,
                lineStyle: {
                  color: '#626262'
                }
              },
              axisTick: { show: false }
            },
            yAxis: {
              type: 'value',
              // min:0,
              // max: 100,
              minInterval : 1,
              splitLine: {
                lineStyle: {
                  type: 'dashed',
                  color: '#233e64'
                }
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: '#626262'
                }
              },

              nameTextStyle: {
                color: '#233e64'
              },
              splitArea: {
                show: false
              },
              axisTick: { show: false }
            },
            series: [
              {
                name: '火警',
                type: 'line',
                data: this.sevenDayslist[1],
                lineStyle: {
                  normal: {
                    width: 2,
                    color: '#ee2c1f'
                  }
                },
                itemStyle: {
                  normal: {
                    color: '#ee2c1f',
                    borderWidth: 5,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                        shadowBlur: 100,*/
                    borderColor: '#ee2c1f'
                  }
                },
                smooth: true
              },
              {
                name: '报警',
                type: 'line',
                data: this.sevenDayslist[2],
                lineStyle: {
                  normal: {
                    width: 2,
                    color: '#FF9A1A'
                  }
                },
                itemStyle: {
                  normal: {
                    color: '#FF9A1A',
                    borderWidth: 5,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                        shadowBlur: 100,*/
                    borderColor: '#FF9A1A'
                  }
                },
                smooth: true
              },
              {
                name: '故障',
                type: 'line',
                data: this.sevenDayslist[3],
                lineStyle: {
                  normal: {
                    width: 2,
                    color: '#F6E20F'
                  }
                },
                itemStyle: {
                  normal: {
                    color: '#F6E20F',
                    borderWidth: 5,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                        shadowBlur: 100,*/
                    borderColor: '#F6E20F'
                  }
                },
                smooth: true
              },{
                name: '下线',
                type: 'line',
                data: this.sevenDayslist[4],
                lineStyle: {
                  normal: {
                    width: 2,
                    color: '#ccc'
                  }
                },
                itemStyle: {
                  normal: {
                    color: '#ccc',
                    borderWidth: 5,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                        shadowBlur: 100,*/
                    borderColor: '#ccc'
                  }
                },
                smooth: true
              }
            ]
          })
          window.addEventListener('resize', function() {
            myChart.resize()
          })
     
        
    },
    //点击tabs
    onclicktabs(res,index){
      
      this.active=index;
      console.log(this.active)
      if(res===null ){
      let  params={
           ppid:'',
           rgname:''
        }
              this.twentyfour(params);
            this.getlist(params);
            this.svenday(params); 
      }else{
             let params={
        ppid:res,
        rgname:''
      }
            this.twentyfour(params);
            this.getlist(params);
            this.svenday(params); 
      }
      
    },

    //报警列表
    getlist(params){
        // this.dutyRateData=[]
    getEvent({
      ppid:params.ppid,
      rgname:params.rgname
    }).then(res=>{
              this.dutyRateData=res.obj;
            })
    },
    //七天报警趋势
    svenday(params){
      this.sevenDayslist=[];
        sevenDays(params.ppid,params.rgname).then(res=>{
              this.sevenDayslist=res.obj;
               this.mychart11()
            })
    },
        //二十四小时报警事件
    twentyfour(params){
        twentyFour(params.ppid,params.rgname).then(res=>{
                  this.twentyFourlist=res.obj;
            })
    },
 },
 created() {
    twotree({}).then(res=>{
            this.tablist=res.obj;  
            let     params={
           ppid:'',
           rgname:''
        }
              this.twentyfour(params);
            this.getlist(params);
            this.svenday(params); 
        })
 },
 mounted(){
    
          this.initMap()
 
     setTimeout(() => {
          
      this.mychart11()
     },2000)

 }
}
</script>
<style lang="less" scoped>
.firealarm{
    width: 100%;
    height: 100%;
   display: flex;
    .firealarm-header{
        width: 100%;
        height: 36px;
       border-bottom: 1px solid #ccc;
       display: flex;
       background: #edf5f7;
        position: relative;
        z-index: 1001;
        top: 0;
        justify-content: space-between;
    align-items: center;
    }
        .headerleft{
           width:600px;
           border-right: 1px solid #ccc;
           height: 100%;
           background: #fff;
           position: absolute;
             z-index: 1001;
             
            .lefthedaer{
                    display: flex;
                justify-content: center;
                align-items: center;
                width:100%;
                height:60px;
                background:#edf5f7;
                border-bottom: 1px solid #ccc;
            }
       }
    
}
        .firealarm /deep/ .ivu-tabs{
               height: 100%;
           }
         .firealarm /deep/  .ivu-tabs-bar{
            background: #edf5f7;
            margin-bottom: 0px;
           }
         .firealarm  /deep/ .ivu-tabs .ivu-tabs-content-animated{
               height: 100%;
           }
          .firealarm  /deep/ .ivu-tabs-nav .ivu-tabs-tab{
               padding: 8px 36px;
           }
          #selectmodel  /deep/ .ivu-modal-header{
             padding: 0px;
           }
        
             #selectmodel  /deep/ .ivu-modal-close{
             top:4px;
           }
          #selectmodel  /deep/ .ivu-modal-content{
             height: 900px;
           }
           #selectmodel  /deep/ .ivu-modal{
             top:20px;
           }
           #selectmodel  /deep/ .ivu-modal-footer{
             border-top: 0px;
           }
           .firediv{
               display: flex;
            //    justify-content: space-around;
            width: 100%;
               padding:15px  0px  15px 35px;
               span{
                   font-size: 13px;
               }
               .qiu{
                 height: 100%;
                  width: 50px;
                  text-align: center;
                  line-height: 38px;
                  //  background: red;
                  //  border-radius: 50%;
               }
           }
           .flexdiv{
               display:flex;
               justify-content:start;
               align-items:center;
               width:48%;
               height: 40px;
               border: 1px solid #ccc;
           }
           .hj{
               color: #f54f5e
           }
            .gz{
               color: #f6e20f
           }
            .xx{
               color: #ccc
           }
            .bj{
               color: #ff9a1a
           }
           .red{
              color: #fff;
              width: 30px;
              height: 30px;
              background: #3c8fff;
           }
          //  '#ee2cif', '#ff9a1a', '#f6e20f','#ccc'
           .flexdivs{
               display:flex;
               justify-content:space-between;
               align-items:center;
               padding-left: 0px;
           }
           .divxq {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  .divone {
    width: 15%;
  }
  .divtwo {
    width: 58%;
  }
  .divthree {
    width: 25%;
    box-shadow: 0px 2px 6px -2px;
  }
}
.divvideo {
  width: 100%;
  // min-height: 300px;
}
.divvideos {
  width: 100%;
  // height: 200px;
  display: flex;
  div {
    border: 1px solid snow;
  }
}
   #chuli /deep/ .ivu-modal-header{
             padding: 0px;
           }
             #chuli  /deep/ .ivu-modal-close{
             top:4px;
           }
           .divif {
  display: flex;
  flex-direction: column;
}
.divcl {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px;
}
.divc2 {
  display: flex;
  justify-content: start;
  padding: 10px;
}
.xqdiv {
  width: 100%;
  min-height: 100px;
  padding: 10px 30px;
  // font-size: 15px;
}
.span-pad {
  padding: 0px 0;
}
.headerright{
  padding-left: 10px;
  display: flex;
  justify-content: start;
  align-items: center;
}
.tabbutton{
  font-size: 14px;
     height: 36px;
    line-height: 36px;
    width: auto;
   
    background: transparent;
    border: 0px;
}
// .tabbutton:active(0){
//    color: #2d8cf0
// }
.tabbutton:hover{
  color: #2d8cf0;
  border-bottom: 1px solid #2d8cf0;
}
.activeClass{
    font-size: 14px;
     height: 36px;
    line-height: 36px;
    width: auto;
    background: transparent;
    border: 0px;
    color: #2d8cf0;
   border-bottom: 1px solid #2d8cf0;
}
.chulibutton{
  display: flex;
  justify-content: flex-end;
  position: relative;
  top: -20px;
  right: 20px;
}
</style>