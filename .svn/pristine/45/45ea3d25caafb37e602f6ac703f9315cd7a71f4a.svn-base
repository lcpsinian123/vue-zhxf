<template>
<div class='containers cententpadding'>
   <div class="rightHead">
         <div class='sousuo1'>
            <div class='searchMeun'>
                <span class="wdName_text1">
                    区域：
                </span>
                <Select v-model="WY" style="width:10%" @on-change='wychange' clearable>
                    <Option v-for="item in wy" :value="item.ppid" :key="item.ppid">{{ item.ppname }}</Option>
                </Select>
                <Select v-model="XQ" style="width:10%;margin-left:10px" @on-change='xqchange' clearable>
                    <Option v-for="item in xq" :value="item.cpid" :key="item.cpid">{{ item.cpname }}</Option>
                </Select>
                <Select v-model="JZ" style="width:10%;margin-left:10px" @on-change='jzchange' clearable>
                 <Option v-for="item in jz" :value="item.bdid" :key="item.bdid">{{ item.note }}</Option>
                </Select>
                 <span class="wdName_text1">状态：</span>
                 <Select v-model="chooseStatus" style="width:6%"  @on-change="getStatusValue">
                    <Option v-for="item in statusArr" :value="item.value" :key="item.value" >{{ item.label }}</Option>
                </Select>
                <span class="wdName_text1">类型：</span>
                 <Select v-model="chooseType" style="width:6%"  @on-change="getTypeValue">
                    <Option v-for="item in typeArr" :value="item.value" :key="item.value" >{{ item.label }}</Option>
                </Select>
                <span class="wdName_text1">
                    时间：
                </span>
                <DatePicker style='width:12%' type="date" placeholder="开始时间..." v-model="startDate" ></DatePicker>
                 — 
                <DatePicker style='width:12%' type="date" placeholder="结束时间..." v-model="endDate"></DatePicker>
                <Button class='wdName' type="info" @click="queryEvent">查询</Button>

                <Button class='wdName' type="info">导出</Button>
            </div>
        </div>
        
         <div class='listStyle'>
             <Table stripe :columns="columns1" :data="data1" center>
                   <template slot-scope="{ row, index }" slot="Types">
                         <span :class="[row.raType==1?'hj':[row.raType==2?'gz':[row.raType==3?'xx':'bj']]]">{{['','火警','故障','下线','报警'][row.raType]}}</span>
                    </template>
                    <template slot-scope="{ row, index }" slot="option">
                         <Button type='primary' ghost @click='queryRow(row.emid,row.emEmid,row.guid,row.raType)'>查看</Button>
                    </template>
             </Table>
         </div>
         
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
              <!-- <div class="divcl">
                <span style="margin:0px 20px;">屏蔽时段</span>
                <RadioGroup v-model="day">
                  <Radio label="oneday">一天</Radio>
                  <Radio label="threeday">三天</Radio>
                  <Radio label="seventday">七天</Radio>
                  <Radio label="zdyday">自定义</Radio>
                </RadioGroup>
              </div> -->
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
</div>
</template>

<script>
import {
    wyjc,
    dwjc,
    jzujc,
    lcjc
} from 'api/docManage';
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
fdetails //弹框详情
} from 'api/firealarm'

import {alarmLogging} from 'api/alarmRecord'
export default{
    data(){
            return {
                WY: '',
                XQ: '',
                JZ: '',
                sstj: '1',
                chooseType:'',
                chooseStatus:'',
                chooseType:'',
                modal22:false,
                wy: [],
                xq: [],
                jz: [],
                startDate: "" ,
                fireColor:'',
                defaultColor:'',
                alarmColor:'',
                offlineColor:'',
                dutyRateData:[],
                typeArr:[],
                 columns1: [
                    {
                        title: '类型',
                        key: 'raType',
                        slot:'Types'
                    },
                    {
                        title: '首次报警时间',
                        key: 'raDate'
                    },
                    {
                        title: '联网单位',
                        key: 'cpname'
                    },
                     {
                        title: '监控对象',
                        key: 'emname'
                    },
                    {
                        title: '报警次数',
                        key: 'emEmid'
                    },
                    {
                        title: '状态',
                        key: 'status'
                    },
                     {
                        title: '操作',
                        key: 'option',
                        slot:'option'
                    },
                ],
                data1: [],
                typeArr:[
                {
                    label:"火警",
                    value:'1',
                },
                {
                    label:"故障",
                    value:'2',
                },
                {
                    label:"下线",
                    value:'3',
                },
                {
                    label:"报警",
                    value:'4',
                }
            ],
            statusArr:[
               {
                    label:"未处理",
                    value:'0',
                },
                {
                    label:"已处理",
                    value:'1',
             }  
            ],
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
            modal22:false,
            clsavelist:{
                qiehuan: 220, //处理确认
                ms: 224, //描述
                rspb: 231, 
                csday:236,
                csyy: 233,
                qrradyy: 245,
                qrradcl: 249,
            },
            }
        },
        created() {
            // alert(222)
            // /fireRaReal/alarmLogging
            // 初始化表格数据
            this.initTable();
              
          
            wyjc({}).then(res => {
                this.wy = res.obj;
            })
        
        },
        methods: {
        queryEvent(){
            //报警列表
               alert(111)
                    // this.dutyRateData=[]
                // getEvent({
                // ppid:params.ppid,
                // rgname:params.rgname
                // }).then(res=>{
                //         this.dutyRateData=res.obj;
                //         })
                this.initTable({
                    ppid:this.WY,
                    cpid:this.XQ ,
                    bdid:this.JZ,
                    raType:this.chooseType,
                    status:this.chooseStatus,
                    startTime:this.startDate,
                    endTime:this.endDate

                })
              
        }   ,
        initTable(params){
            let Params = params || {}
            alarmLogging(Params).then(res=>{
                this.data1 = res.obj;
                res.obj.forEach(item=>{
                    if(item.status=='1'){
                          item.status = '已处理'
                    }else if(item.status=='0'){
                        item.status = '未处理'
                    }
                })
               this. WY = '';
                this.XQ = '';
                this.JZ = '';
                this.sstj = '1';
                this.chooseType = '';
                this.chooseStatus = '';
               this.hooseType='';
            })

        } ,
          wychange(i) {
                 this.jz=[];
            dwjc({
                ppid: i
            }).then(res => {
                 this.xq = res.obj;   
                             
            })
        }, 
        xqchange(val) {
            jzujc({
                cpid: val
            }).then(res => {
                this.jz = res.obj;
            })
        },
        getStatusValue(val){
           this.chooseStatus = val;
        },
        getTypeValue(val){ 
           this.chooseType = val;
        },
        queryRow(emid,emEmid,guid,raType){
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
      })
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
          rsNote:this.clsavelist.rsNote
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

    },
}
    

</script>

<style lang="less"  scoped>
    .listStyle{
        width:100%;
        height:400px;
        margin-top:20px;
       
    }

  .containers /deep/ .ivu-table-header th{
    color:#5e6770;
    font-weight: bold;
    background-color: #e0ecfa;
    border: none;

  }
 .containers /deep/ .ivu-table-stripe .ivu-table-body tr:nth-child(2n) td, .ivu-table-stripe .ivu-table-fixed-body tr:nth-child(2n) td {
  background-color: #e0ecfa;
  font-weight:600;

}
   .containers /deep/ .ivu-tabs{
               height: 100%;
           }
         .containers /deep/  .ivu-tabs-bar{
            background: #edf5f7;
            margin-bottom: 0px;
           }
         .containers  /deep/ .ivu-tabs .ivu-tabs-content-animated{
               height: 100%;
           }
          .containers  /deep/ .ivu-tabs-nav .ivu-tabs-tab{
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