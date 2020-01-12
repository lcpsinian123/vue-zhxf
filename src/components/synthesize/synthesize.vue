<!-- 大屏综合展示页面 -->
<template>
    <div class="container">
        <!-- 头部切换 -->
        <div class="header">
            <div class="head">              
                <ul>
                    <li v-for="(item,index) in headData" :class="{headitemactive:headActive==index,headOne:itemActive==index}" @click="headTab(index)">
                       <p>
                         <i class="headIcon"></i>
                        <span>{{item.ppname}}</span>
                       </p> 
                       <span class="arrow"></span>
                    </li>
                </ul>
                <div class="headCenter">
                    上海浦房集团智慧消防管理云平台
                </div>
            </div>
            <p class="changebutn" @click="changebutn">
                <img src="../../assets/images/synthesize/change.png" alt="">
                <span>切换后台</span>
            </p>
        </div>
        <!-- 内容主题部分 -->
        <div class="content">
          <div class="topCon">
           <!-- 内容左侧部分 -->
           <div class="leftCon">
              <div class="itemCon">
                <p class="itemTitle">
                    <span></span>
                    <span>
                      近24小时事件类型分类
                    </span>
                </p>
                <div id="eveEcharts"></div>    
                <span class="rect rect1"></span>              
                <span class="rect rect2"></span>              
                <span class="rect rect3"></span>             
              </div>
              <div class="itemCon">
                <p class="itemTitle">
                    <span></span>
                    <span>
                      近24小时报警事件数统计
                    </span>
                </p>
                <div class="itemstyle alarmCon">
                    <div class="eventall">
                       <img  src="../../assets/images/synthesize/eventl.png" alt="">
                       <p class="numL">{{twentyFourlist.eventTotal}}</p>
                       <p class="titS">事件总数</p>
                    </div>                    
                    <ul>
                        <li>
                          <img src="../../assets/images/synthesize/huojingl.png" alt="">
                          <div>
                              <p class="numL">{{twentyFourlist.fireAlarmnum}}</p>
                              <p class="titS">火警数</p>
                          </div>
                        </li>
                        <li>
                             <img src="../../assets/images/synthesize/guzhangl.png" alt="">
                          <div>
                              <p class="numL">{{twentyFourlist.breakdownnum}}</p>
                              <p class="titS">故障数</p>
                          </div>
                        </li>
                        <li>
                             <img src="../../assets/images/synthesize/baojingl.png" alt="">
                          <div>
                              <p class="numL">{{twentyFourlist.callPolicenum}}</p>
                              <p class="titS">报警数</p>
                          </div>
                        </li>
                        <li>
                             <img src="../../assets/images/synthesize/lixianl.png" alt="">
                          <div>
                              <p class="numL">{{twentyFourlist.tapeOutnum}}</p>
                              <p class="titS">离线数</p>
                          </div>
                        </li>
                    </ul>
                </div>
                <span class="rect rect1"></span>              
                <span class="rect rect2"></span>              
                <span class="rect rect3"></span>   
              </div>
              <div class="itemCon marginnone">
                <p class="itemTitle">
                    <span></span>
                    <span>
                      近7天报警趋势
                    </span>
                </p>
                <div id="alarmEcharts"></div>
                <span class="rect rect1"></span>              
                <span class="rect rect2"></span>              
                <span class="rect rect3"></span>              
              </div>            
           </div>
           <!-- 内容中间侧部分 -->
           <div class="centerCon">
               <!-- 地图 -->
               <div class="mapcon">
                  <div class="mymap" id="myMap"></div>
               </div>              
           </div>
           <!-- 内容右侧部分 -->
           <div class="rightCon">
               <div class="itemCon itemVideo">
                <p class="itemTitle">
                    <span></span>
                    <span>
                      视频监控
                    </span>
                </p>
                <div class="itemstyle monitor">
                   <div class="videoTop">
                       <video src="../../assets/images/SC.mp4" controls></video>
                   </div>
                   <div class="videoBot">
                      <div class="itemmonitor">
                        <video src="../../assets/images/SC.mp4" controls></video>
                      </div>
                      <div class="itemmonitor">
                         <video src="../../assets/images/SC.mp4" controls></video>
                      </div>
                      <div class="itemmonitor">
                        <video src="../../assets/images/SC.mp4" controls></video>
                      </div>
                      <div class="itemmonitor">
                        <video src="../../assets/images/SC.mp4" controls></video>
                      </div>
                      <div class="itemmonitor">
                        <video src="../../assets/images/SC.mp4" controls></video>
                      </div>
                      <div class="itemmonitor">
                        <video src="../../assets/images/SC.mp4" controls></video>
                      </div>
                   </div>
                </div>
                <span class="rect rect1"></span>              
                <span class="rect rect2"></span>              
                <span class="rect rect3"></span>   
              </div>  
              <div class="itemCon itemxun marginnone">
                <p class="itemTitle">
                    <span></span>
                    <span>
                      巡检维保统计
                    </span>
                </p>
                <div class="itemstyle maintenance">                 
                       <ul class="maintenTop">
                           <li>
                               <span class="maintIcon"></span>
                               <p>100</p>
                               <p>集团</p>
                           </li>
                           <li v-for="item in inspectionData">
                               <span class="maintIcon"></span>
                               <p>{{item.planPollingSomeDigits}}</p>
                               <p>{{item.name}}</p>
                           </li>
                       </ul>
                  
                   <div class="maintenBot">
                        <div class="maintenItem">
                            <div class="ballitem">
                               <div class="text">
                                <p class="num">100%</p>
                              </div>
                           </div>   
                           <p class="maintName">集团</p>  
                        </div>
                        <div class="maintenItem" v-for="item in inspectionData">
                           <div class="ballitem">
                               <div class="text">
                                <p class="num">{{item.inspectionCompletion}}</p>
                              </div>
                           </div>   
                           <p class="maintName">{{item.name}}</p>
                        </div>
                   </div>
                </div>
                <span class="rect rect1"></span>              
                <span class="rect rect2"></span>              
                <span class="rect rect3"></span>  
              </div>          
           </div>
         </div>
         <div class="bottomCon">
            <div class="itemCon itemleft">
                <p class="itemTitle">
                    <span></span>
                    <span>
                    设备运行状态统计
                    </span>
                </p>
                <div class="itemstyle statusCon">
                    <div class="statusD">
                        <p><span></span><span>在线</span></p>
                        <p><span></span><span>离线</span></p>
                    </div>
                    <ul>
                        <li v-for="item in runningData">
                            <label>{{item.ppname}}</label>
                            <div class="probar">
                             <p class="prosel" :style="{'width':item.onlineRate}"></p>
                            </div>
                        </li>
               
                   </ul>
                </div>
                <span class="rect rect1"></span>              
                <span class="rect rect2"></span>              
                <span class="rect rect3"></span>  
            </div>
            <div class="itemCon itemcenter">
                <p class="itemTitle">
                    <span></span>
                    <span>
                    事件列表
                    </span>
                </p>
                <div class="itemstyle eventList">
                   <table>
                       <thead>
                         <tr>
                             <th>类型</th>
                             <th>首次报警时间</th>
                             <th>联网单位</th>
                             <th>监控对象</th>
                             <th>次数</th>
                             <th>状态</th>
                             <th>操作</th>
                         </tr>
                       </thead>
                       <tbody>
                          <tr v-for="(item,index) in eventListData">
                              <td>
                                  <span class="eventb" v-if="item.raType==0">报警</span>
                                  <span class="eventh" v-if="item.raType==1">火警</span>
                                  <span class="eventg" v-if="item.raType==2">故障</span>
                                  <span class="eventl" v-if="item.raType==3">离线</span>
                              </td>
                              <td>{{item.raDate}}</td>
                              <td>{{item.cpname}}</td>
                              <td>{{item.emname}}</td>
                              <td>{{item.emEmid}}</td>
                              <td>
                                  <span v-if="item.status==0" class="statusred">未处理</span>
                                  <span v-if="item.status==1" class="statuswh">已处理</span>                                  
                              </td>  
                              <td class="check" @click="checkModel(item.emid,item.emEmid,item.guid,item.raType)">查看</td>
                          </tr>                     
                       </tbody>
                   </table>
                </div>
                <span class="rect rect1"></span>              
                <span class="rect rect2"></span>              
                <span class="rect rect3"></span>  
            </div>
            <div class="itemCon itemright">
                <p class="itemTitle">
                    <span></span>
                    <span>
                    消防宣传
                    </span>
                </p>
                <div class="itemstyle promotion">
                    <ul>
                        <li v-for="item in xfxcData" @click="down(item)"><span>·</span>{{item.mdName}}</li>
                    </ul>
                </div>
                <span class="rect rect1"></span>              
                <span class="rect rect2"></span>              
                <span class="rect rect3"></span>                  
            </div>
         </div>
      </div>
     <!-- 事件列表查看彈框 --> 
     <event-model ref="flag" :itememid="itememid" :itemememid="itemememid" :itemguid="itemguid" :itemratype="itemratype"></event-model>
  </div>
</template>
<script>
import eventModel from "./eventModel";
import {
   getEvent,
   twotree,
   sevenDays,
   twentyFour,
   findDetails
} from 'api/firealarm';
import {
    getxfxcAllFile,
    savedownload
} from 'api/free';
import {
    findStatus,
    inspection,
} from 'api/dataAnalysis';
var echarts = require('echarts');
export default {
    components: {
        eventModel
    },
    name:'synthesize',
    data(){
        return {
            itemActive:0,
            headActive:-1,
            ppid:'',
            rgid:'',
            map:'',//地图
            headData:[],//头部展示数据
            eventListData:[],//事件列表
            sevenListData:[],//七天报警数据
            twentyFourlist:[],//24小时报警事件
            runningData:[],// 设备运行状态数据
            xfxcData:[],//消防宣传数据
            inspectionData:[],//巡检维保数据
            flag:false,
            // 给查看弹框传的值
            itememid:'',
            itemememid:'',
            itemguid:'',
            itemratype:'',
        }
    },
    mounted(){
        setTimeout(() => {
        this.alarmecharts();
        this.eventEchart();   
        },1500)
        this.initMap();
        this.itemActive=0;
    },
    methods:{
        // 切换后台事件
        changebutn(){
              this.$router.push('/firealarm')
        },
        // 顶部选项卡
        headTab(index){
          this.headActive=index; 
          if(this.headActive===0){
              this.itemActive=0;
          }else{
              this.itemActive=-1;
          }
        },
        // 事件类型分布Echarts
        eventEchart(){       
            let that=this;     
              var myChart = echarts.init(document.getElementById('eveEcharts'));
              myChart.setOption({
                   title : {
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                color:['#dbdbdb','#f69c22','#f74f5f','#f6e30f'],
                legend: {
                    x : 'center',
                    y : 'bottom',                   
                    data:[
                        {
                           name:'火警数',
                           icon: 'circle',
                           textStyle: {
                                color: '#fff'     
                           },                     
                        },
                        {
                            name:'故障数',
                            icon: 'circle',
                            textStyle: {
                                    color: '#fff'     
                            }                            
                        },
                        {
                            name:'报警数',
                            icon: 'circle',
                            textStyle: {
                                color: '#fff'     
                            }                            
                        },
                        {
                            name:'离线数',
                            icon: 'circle',
                            textStyle: {
                                color: '#fff'     
                            }
                        }                        
                   ]
                },               
                calculable : true,
                series : [                
                    {
                        name:'访问来源',
                        type:'pie',
                        radius : '53%',
                        center : ['50%', '45%'],
                        roseType : 'area',
                        data:[                            
                            {value:that.twentyFourlist.tapeOutnum, name:"离线数"},
                            {value:that.twentyFourlist.breakdownnum, name:'故障数'},
                            {value:that.twentyFourlist.fireAlarmnum, name:'火警数'},
                            {value:that.twentyFourlist.fireAlarmnum, name:'报警数'},                            
                        ].sort(function (a, b) { return a.value - b.value; }),
                        roseType: 'radius',
                        label: {
                            normal: {
                                formatter: ['{c|{c}次}', '{b|{b}}'].join('\n'),
                                rich: {
                                    c: {
                                        color: '#94f0ff',
                                        fontSize: 14,
                                        fontWeight:'bold',
                                        lineHeight:10,
                                    },
                                    b: {
                                        color: '#35C6D9',
                                        fontSize: 12,
                                        height: 20
                                    },
                                },
                            }
                        },
                        labelLine: {
                            normal: {
                                lineStyle: {
                                    color: '#35C6D9'
                                },
                                length: 10,
                                length2: 20
                            }
                        },
                        itemStyle: {
                            emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.8)'
                            }
                        }
                    }
                ]
                
             })
        },
        // 近七天报警趋势
        alarmecharts(){
            var myChart = echarts.init(document.getElementById('alarmEcharts'));
            myChart.setOption({
                tooltip : {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                color:['#f74f5f','#f69c22','#f6e30f','#dbdbdb'],
                legend: {
                    itemWidth: 8,
                    itemHeight: 8,
                    x: 'right',
                    data:[
                      {
                           name:'火警',
                           icon: 'circle',
                           textStyle: {
                                color: '#fff'     
                           },                     
                        },
                        {
                            name:'故障',
                            icon: 'circle',
                            textStyle: {
                                    color: '#fff'     
                            }                            
                        },
                        {
                            name:'报警',
                            icon: 'circle',
                            textStyle: {
                                color: '#fff'     
                            }                            
                        },
                        {
                            name:'离线',
                            icon: 'circle',
                            textStyle: {
                                color: '#fff'     
                            }
                        }                 
                    ]
                },             
                grid: {
                    top:'24%',
                    left: '6%',
                    right: '9%',
                    bottom: '0',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        name: '天',
                        boundaryGap : false,
                        data : [1,2,3,4,5,6,7],
                        nameTextStyle:{
                            color:"#fff", 
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        axisLine:{
                            lineStyle:{
                                color:'#7A7AB0',
                            }
                       }
                                            
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        name: '数量',
                        minInterval : 1,
                        nameTextStyle:{
                            color:"#fff", 
                        },
                        axisLabel: {
                                textStyle: {
                                    color: '#fff'
                                }
                            },
                        axisLine:{
                            lineStyle:{
                                color:'#7A7AB0',
                            }
                       },
                        splitLine:{
                            lineStyle: {
                                type: 'dashed',
                                color:'#4C4E7E'
                            }
                    　　}  
                    }
                ],
                series : [
                    {
                        name:'火警',
                        type:'line',
                        symbol: 'none',
                        areaStyle: {}, 
                        data:this.sevenListData[1]
                    }, 
                    {
                        name:'故障',
                        type:'line',
                        symbol: 'none',
                        areaStyle: {},
                        data:this.sevenListData[3]
                    }, 
                    {
                        name:'报警',
                        type:'line',
                        symbol: 'none',
                        areaStyle: {},
                        data:this.sevenListData[2]
                    },             
                    {
                        name:'离线',
                        type:'line',
                        symbol: 'none',
                        areaStyle: {},
                        data:this.sevenListData[4]
                    },  
                ]
            })
        },
        // 调用事件列表接口 
        getEventList(params){
            let that=this;  
            getEvent({
            ppid:params.ppid,
            rgid:params.rgid
            }).then(res=>{
                    that.eventListData=res.obj;
           })
        },
         //调用近七天报警趋势
         getSevenList(params){
            let that=this;  
            sevenDays(params.ppid,params.rgid).then(res=>{
                    that.sevenListData=res.obj;
           })
        },
        //调用二十四小时报警事件
        twentyfour(params){
            let that=this;
            twentyFour(params.ppid,params.rgid).then(res=>{
                    that.twentyFourlist=res.obj;
                    this.eventEchart();
                })
        }, 
        //调用运行设备状态
        getRunningStatus(){
            let that=this;
            findStatus({}).then(res=>{
               that.runningData=res.obj
            })
        },
        //调用消防宣传信息
        getXfxc(){
            let that=this;
              getxfxcAllFile({}).then(res=>{
                that.xfxcData=res.obj;
              })
        },
        // 点击消防宣传信息下载
        down(item) {
            window.open('http://192.168.2.185:8081/fireMdBase/download?guid=' + item.guid + '')  
        },
        //调用巡检维保统计
        getInspection(){
            let that=this;
            inspection({}).then(res=>{
                that.inspectionData=res.obj;
            })
        },
        // 地图调用
        initMap () {
            var zoom = 12
            this.map = new T.Map('myMap', {
                projection: 'EPSG:4326'
            })
            this.map.centerAndZoom(new T.LngLat(121.53, 31.22), zoom)
            var ctrl = new T.Control.MapType()
            //添加控件
            this.map.addControl(ctrl)
        },
        // 查看事件列表彈框
        checkModel(emid,emEmid,guid,raType){
            this.$refs.flag.isModel=true;    
            this.itememid=emid;
            this.itemememid=emEmid;
            this.itemguid=guid;
            this.itemratype=raType; 
        },
    },  
    created(){
        let that=this;
        twotree({}).then(res=>{
            that.headData=res.obj;  
            let params={
                ppid:'',
                rgid:''
            };
            that.getEventList(params)
            that.getSevenList(params)
            that.twentyfour(params)
        })
        that.getRunningStatus();
        that.getXfxc();
        that.getInspection();       
    }
}
</script>
<style lang="less" scoped>
  @import './synthesize.less';
</style>