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
                 <span class="wdName_text2">连接状态：</span>
                 <Select v-model="linkStatus" style="width:8%"  @on-change="getStatusValue">
                    <Option v-for="item in linkStatusArr" :value="item.value" :key="item.value" >{{ item.label }}</Option>
                </Select>
                <span class="wdName_text1">类型：</span>
                 <Select v-model="chooseType" style="width:8%"  @on-change="getTypeValue">
                    <Option v-for="item in typeArr" :value="item.value" :key="item.value" >{{ item.label }}</Option>
                </Select>
                <span class="wdName_text2">
                    报备状态：
                </span>
                  <Select v-model="reportStatus" style="width:8%"  @on-change="getTypeValue">
                    <Option v-for="item in reportStatusArr" :value="item.value" :key="item.value" >{{ item.label }}</Option>
                </Select>
                 <span class="wdName_text2">
                    所属装置：
                </span>
                  <Select v-model="ownDevice" style="width:8%"  @on-change="getTypeValue">
                    <Option v-for="item in ownDeviceArr" :value="item.value" :key="item.value" >{{ item.label }}</Option>
                </Select>
                <Button class='wdName' type="info" @click="queryEvent">查询</Button>

            </div>
        </div>
             
            <!--  <Page :total="TableData.length" :page-size="pageSize" show-total class="paging"></Page> -->
        <div class='listStyle'>
          <div class='ChoosetTab'>
               <div>控制台</div>
                <div>监测器</div>
          </div>
             <Table stripe :columns="columns1" :data="data1" center>
                   <template slot-scope="{ row, index }" slot="Types">
                         <span :class="[row.raType==1?'hj':[row.raType==2?'gz':[row.raType==3?'xx':'bj']]]">{{['','火警','故障','下线','报警'][row.raType]}}</span>
                    </template>
                    <template slot-scope="{ row, index }" slot="option">
                         <Button type='primary' ghost @click='queryRow(row.emid,row.emEmid,row.guid,row.raType)'>查看</Button>
                    </template>
             </Table>
         </div>
         
          
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
import {statistics,findallStatisticss,findallType} from 'api/dataAnalysis'
var echarts = require('echarts');
export default {
    data() {
        return {
            WY: '',
            XQ: '',
            JZ: '',
            sstj: '1',
            wy: [],
            xq: [],
            jz: [],
            startDate: "",
            endDate: '',
             data10: [],
            // 初始化信息总条数
            dataCount: 0,
            // 每页显示多少条
            pageSize: 10,
            reportStatus:'',
            linkStatus:'',
            ownDevice:'',
            linkStatusArr:[
                  {
                    label:"有线",
                    value:'0',
                },
                {
                    label:"离线",
                    value:'1',
             }  
            ],
            typeArr:[
                   
                {
                    label:"火警",
                    value:'0',
              } ,
                  {
                    label:'故障 ',
                    value:'1',
                },
                 {
                    label:"报警",
                    value:'2',
              } ,
                  {
                    label:'离线',
                    value:'3',
                },
                 
            ],
            reportStatusArr:[
                  
                {
                    label:"未报备",
                    value:'0',
              } ,
                  {
                    label:'报备中',
                    value:'1',
                },
               

            ],
            ownDeviceArr:[
                 {
                    label:"火警自动报警系统",
                    value:'0',
              } ,
                  {
                    label:'智慧用电',
                    value:'1',
                },
                 {
                    label:"消防供水系统",
                    value:'2',
              } ,
                  {
                    label:'视屏监控',
                    value:'3',
                },  
            ],
             columns1: [
                    {
                        title: '设备ID',
                        key: 'raType',
                        slot:'Types'
                    },
                    {
                        title: '设备名称',
                        key: 'raDate'
                    },
                    {
                        title: '所属智能设备',
                        key: 'cpname'
                    },
                     {
                        title: '连接状态',
                        key: 'emname'
                    },
                    {
                        title: '报备状态',
                        key: 'emEmid'
                    },
                    {
                        title: '更新时间',
                        key: 'status'
                    },
                     {
                        title: '操作',
                        key: 'option',
                        slot:'option'
                    },
                ],
           
        }
    },
    created() {
        this.getstatistics() ;
        this.initalarmEvent();
        this.initeventType();
    },
    mounted() {
         setTimeout(()=>{
            this.initEvent1()
            this.initdata()
         })
      
        this.getstatistics()
    },
    methods: {
       
        // 初始化报警事件处理情况
       initalarmEvent(){
            findallStatisticss().then(res=>{
                this.alarmEavent = res.obj;
                this.initEvent(this.alarmEavent)
            })
        },
        // 初始化事件类型分类
        initeventType(){
              findallType().then(res=>{
                  this.eventType = res.obj;
                 this.initEvent1(this.eventType)
              })
        },
        // 查询事件
        queryEvent(){
            if(!this.WY  && !this.XQ && !this.JZ && !this.startDate ){
            this.$Message.warning('至少选择一条数据')
              return;
            }
       
            
        },

        initdata() {
          
            wyjc({}).then(res => {
                this.wy = res.obj;
            })
        },
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
       
}
}
</script>

<style lang="less" scoped>
 .listStyle{
     margin-top:20px;
     .ChoosetTab{
         display:flex;
         width:100%;
         height:60px;
         background-color:#ffffff;
         border-bottom:1px solid #ccc;
         align-items:center;
         div{
             display:flex;
            align-items:center;
            justify-content:center;
             width:100px;
             height:58px;
             border-bottom:2px solid #249ad2;
             margin-right:2px;
             color:#249ad2;
         }
          div:nth-child(2){
             border-bottom:2px solid   #ffffff; 
          }
     }
 }

</style>