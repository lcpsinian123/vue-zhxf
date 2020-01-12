<template>
<div class='containers cententpadding'>
    <div class="rightHead">
        <div class='sousuo1'>
            <div class='searchMeun'>
                <span class="wdName_text1">
                    区域：
                </span>
                <Select v-model="WY" style="width:10%" @on-change='wychange'>
                    <Option v-for="item in wy" :value="item.ppid" :key="item.ppid">{{ item.ppname }}</Option>
                </Select>
                <Select v-model="XQ" style="width:10%;margin-left:10px" @on-change='xqchange'>
                    <Option v-for="item in xq" :value="item.cpid" :key="item.cpid">{{ item.cpname }}</Option>
                </Select>
                <Select v-model="JZ" style="width:10%;margin-left:10px" @on-change='jzchange'>
                    <Option v-for="item in jz" :value="item.bdid" :key="item.bdid">{{ item.note }}</Option>
                </Select>

                <span class="wdName_text">
                统计类型：
                </span>
                <Select v-model="sstj" style="width:10%"  @on-change="getItemValue">
                    <Option v-for="item in TJLX" :value="item.value" :key="item.value" >{{ item.label }}</Option>
                </Select>
                <span class="wdName_text1">
                    时间：
                </span>
                <span v-if="sstj=='1'" style="width:300px">
                    <DatePicker style='width:44%' format="yyyy" type="date" placeholder="开始时间" @on-change="startDate=$event" :value="startDate"></DatePicker>
                      — 
                   <DatePicker style='width:44%' format="yyyy" type="date" placeholder="结束时间" @on-change="endDate=$event" :value="endDate" ></DatePicker>
                </span>
                <!--<span v-if="sstj=='2'" style="width:300px">
                    <DatePicker style='width:44%' format="yyyy" type="date" placeholder="开始时间" v-model="startDate"></DatePicker>
                        <span>
                            季度:
                        </span>
                    <Select v-model="jd" style="width:40%" >
                    <Option v-for="item in jdlist" :value="item.value" :key="item.value" >{{ item.label }}</Option>
                </Select>
                </span>
                -->
                 <span v-if="sstj=='3'" style="width:300px">
                    <DatePicker style='width:44%' format="yyyy-MM" type="date" placeholder="开始时间..." v-model="startDate"></DatePicker>
                        — 
                   <DatePicker style='width:44%' format="yyyy-MM" type="date" placeholder="结束时间..." v-model="endDate"></DatePicker>
                </span>
               <span v-if="sstj=='4'" style="width:300px">
                    <DatePicker style='width:44%' format="yyyy-MM-dd" type="date" placeholder="开始时间..."  @on-change="startDate=$event" :value="startDate"></DatePicker>
                         — 
                   <DatePicker style='width:44%' format="yyyy-MM-dd"  type="date" placeholder="结束时间..." @on-change="endDate=$event" :value="endDate"></DatePicker>
                </span>
                <Button class='wdName' type="info" @click='queryAlarm'>查询</Button>

                <Button class='wdName' type="info">导出</Button>

              
            </div>
        </div>
        <div class='middleCon'>
            <div class='conTit'>{{titleTotal}}</div>
             <div class='hoursEvent'>
                 <div>
                      <div class='eventSum'>
                   <span class="iconfont iconjiarushijian" style="font-size:35px;color:#fff"></span>
                      </div>
                      <div>
                            <div>{{alarmtoatal.eventSum}}</div>
                            <div>事件总数</div>
                      </div>
                 </div> 
                    <div>
                      <div class='fire'>
                         <span class="iconfont iconicon-test" style="font-size:35px;color:#fff"></span>
                      </div>
                      <div>
                        <div>{{alarmtoatal.fireSum}}</div>
                            <div>火警</div>
                      </div>
                 </div> 
                    <div>
                      <div class='default'>
                        <span class="iconfont  iconguzhangzhuangtai" style="font-size:35px;color:#fff"></span>
                      </div>
                      <div>
                            <div>{{alarmtoatal.faultSum}}</div>
                            <div>故障</div>
                      </div>
                 </div> 
                    <div>
                      <div class='alarm'>
                           <span class="iconfont  iconapp_icons--" style="font-size:35px;color:#fff"></span>
                      </div>
                      <div>
                            <div>{{alarmtoatal.alarmSum}}</div>
                            <div>报警</div>
                      </div>
                 </div> 
                    <div>
                      <div class='offline'>
                         <span class="iconfont iconlixian" style="font-size:35px;color:#fff"></span>
                      </div>
                      <div>
                            <div>{{alarmtoatal.offLineSum}}</div>
                            <div>下线</div>
                      </div>
                 </div> 
              
            </div>
        </div>
        <div class='picData'>
                <div class='commonStyle'>
                     <div class='comTit'>{{titleTotal}}趋势</div>
                     <div class='left' id='category'>
                          
                     </div>
                </div>
                <div class='commonStyle'>
                     <div class='comTit'>报警事件统计</div>
                     <div class='right' >
                           <Table stripe border :columns="TableTitle" :data="TableData">

                           </Table>
                     </div>
                </div>
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
import {statalarmingtrend,findallAlarming} from 'api/dataAnalysis';
var echarts = require('echarts');
export default {
    data() {
        return {
            WY:'',
            XQ:'',
            JZ:'',
            sstj: '4',
            startDate: "",
            endDate: '',
            wy: [],
            xq: [],
            jz: [],
            jd:'1',
            fire:[],
            default:[],
            alarm:[],
            offlines:[],
            xLines:[],
            alarmtoatal:{},
            titleTotal:'',
           
            // jdlist:[{
             
            //         label:'第一季度',
            //         value:'1'
            //     },
            //     {
            //         label:'第二季度',
            //         value:'2'
            //     },
            //     {
            //         label:'第三季度',
            //         value:'3'
            //     },
            //     {
            //         label:'第四季度',
            //         value:'4'
            //     }
            // ],
            cityList:[
                {
                    label:'洋烃物业',
                    value:'1'
                },
                {
                    label:'振南物业',
                    value:'2'
                },
                {
                    label:'上钢物业',
                    value:'3'
                },
                {
                    label:'潍坊物业',
                    value:'4'
                }
            ],
            // 初始化信息总条数
            dataCount: 0,
            // 每页显示多少条
            pageSize: 10,
            floorNum: null,
            XMLXBH: null,
            xjnr: false,
            add: false,
            updata: false,
            WordName: null,
            drawCategory: null,
            period: [{
                    value: "all",
                    label: '全部'
                },
                {
                    value: "year",
                    label: '每年巡检'
                },
                {
                    value: "month",
                    label: '每月巡检'
                },
                {
                    value: "day",
                    label: '每日巡检'
                }

            ],
            TableTitle: [{
                    title: '日期',
                    // width: 80,
                    align: 'center',
                    key: 'raDate'
                },

                {
                    title: '事件总数',
                    align: 'center',
                    key: 'eventSum'
                },
                {
                    title: '火警数',
                    align: 'center',
                    key: 'fireSum'
                },
                {
                    title: '故障数',
                    align: 'center',
                    key: 'faultSum'
                },
                {
                    title: '报警数',
                    key: 'alarmSum',
                    // slot: 'action',
                    align: 'center'
                },
                {
                    title: '离线数',
                    key: 'offLineSum',
                    // slot: 'action',
                    align: 'center'
                }
            ],
            TJLX:[
                {
                    label:"年统计",
                    value:'1',
                },
                // {
                //     label:"季度统计",
                //     value:'2',
                // },
                {
                    label:"月统计",
                    value:'3',
                },
                {
                    label:"日统计",
                    value:'4',
                }
            ],
            TableData: [
            ],
            patrolTitle: [{
                    title: '巡检内容',
                    align: 'center',
                    key: 'patrolCon'
                },

                {
                    title: '操作类型',
                    align: 'center',
                    key: 'actionType'
                },
                {
                    title: '最大值',
                    align: 'center',
                    key: 'max'
                },
                {
                    title: '最小值',
                    align: 'center',
                    key: 'min'
                },
                {
                    title: '数据类型',
                    align: 'center',
                    key: 'datasType'
                },
                {
                    title: '操作',
                    key: 'action',
                    slot: 'action',
                    align: 'center'
                }
            ],
            patrolcontent: [{
                    patrolCon: "压力不足",
                    actionType: '选择设备',
                    max: '99',
                    min: '1',
                    datasType: "消防安全",

                },
                {
                    patrolCon: "瓶体腐蚀",
                    actionType: '选择设备',
                    max: '9',
                    min: '1',
                    datasType: "消防安全",

                }
            ],

        }
    },
    created() {
        // this.initEvent()
        this.inittabledata();
        this.initleftdata();

        
    },
    mounted() {
        // this.initEvent()
        setTimeout(()=>{
       this.initEvent1()
        this.initdata()
        })
   
        
    },
    methods: {
      

       
        // 初始化表格数据
        inittabledata(val){

        //   this.queryAlarm()
          this.fire = [];
           this.default=[];
           this.alarm=[];
           this.offlines=[];
           this.xLines = [];
           let params = val || {}
          statalarmingtrend( 
                val
                ).then(res=>{
               
              this.TableData = res.obj;
               res.obj.forEach(item=>{
                   this.fire.push(item.fireSum);
                   this.default.push(item.faultSum);
                   this.alarm.push(item.alarmSum);
                   this.offlines.push(item.offLineSum);
                  //    获取横坐标
                  if(this.sstj!=='2'){
                    this.xLines.push(item.raDate) 
                  }
                  if(this.sstj=='1'){
                     this.titleTotal = '年统计报警事件'
                  }
                   if(this.sstj=='3'){
                     this.titleTotal = '月统计报警事件'
                  }
                   if(this.sstj=='4'){
                     this.titleTotal = '日统计报警事件'
                  }
              
               })

                 this.initEvent1();
              console.log(res, this.fire, this.default,this.alarm, this.offlines, this.TableData,8888)
              
        
          })  

        },
        initleftdata(val){
          let  params = val || {}
           findallAlarming(params).then(res=>{
                this.alarmtoatal= res.obj;
               
              
           })   
             this.initEvent1()
        }
        ,

        initdata() {
            wyjc({}).then(res => {
                this.wy = res.obj
            })
        },
        wychange(i){
            dwjc({
                ppid:i
            }).then(res=>{
                
                this.xq=res.obj
            })
        },
        xqchange(val){
            jzujc({
                cpid: val
            }).then(res => {
                this.jz = res.obj;
            })
        },

       
        initEvent1() {
            var myChart = echarts.init(document.getElementById('category'));
                 myChart.resize()
            myChart.setOption({
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              color: ['#ee2cif', '#ff9a1a', '#f6e20f','#ccc'],
              data: ['火灾', '报警', '故障','下线'],
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
            //   name: '天',
              nameTextStyle: {
                color: '#626262',
                padding: -15
              },
              data: this.xLines,
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
                name: '火灾',
                type: 'line',
                data: this.fire,
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
                data: this.alarm,
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
                data: this.default,
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
                data: this.offlines,
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
        getItemValue(val){
            this.sstj = val;
         
        },
        queryAlarm(){
            // 条件查询左侧事件统计
        //    alert(111);
           if(this.sstj=='1'){
                this.inittabledata(
                {
                ppid:this.WY,
                cpid:this.XQ,
                bdid:this.JZ,
                type:this.sstj,
                startTime:this.startDate,
                endTime:this.endDate}
                )
              this.initleftdata(
                {
                ppid:this.WY,
                cpid:this.XQ,
                bdid:this.JZ,
                type:this.sstj,
                startTime:this.startDate,
                endTime:this.endDate}
                )
           };
  
           if(this.sstj=='2'){
                this.inittabledata({
                    ppid:this.WY,
                    cpid:this.XQ,
                    bdid:this.JZ,
                    type:this.sstj,
                    startQuarter:this.jd,
                    startTime:this.startDate,
                });
                this.xLines = ['第一季度','第二季度','第三季度','第四季度']
                 this.initleftdata(
                    {
                        ppid:this.WY,
                        cpid:this.XQ,
                        bdid:this.JZ,
                        type:this.sstj,
                        startQuarter:this.jd,
                        startTime:this.startDate,
                    }
                )
     
            }
            if(this.sstj=='3'){
                  this.inittabledata({
                        ppid:this.WY,
                        cpid:this.XQ,
                        bdid:this.JZ,
                        type:this.sstj,
                        startTime:this.startDate,
                        endTime:this.endDate
                });  
                 this.initleftdata(
                {
                        ppid:this.WY,
                        cpid:this.XQ,
                        bdid:this.JZ,
                        type:this.sstj,
                        startTime:this.startDate,
                        endTime:this.endDate
                }
                )
            }
            if(this.sstj=='4'){
                this.inittabledata( {
                        ppid:this.WY,
                        cpid:this.XQ,
                        bdid:this.JZ,
                        type:this.sstj,
                        startTime:this.startDate,
                        endTime:this.endDate
                }); 
                 this.initleftdata(
                {
                        ppid:this.WY,
                        cpid:this.XQ,
                        bdid:this.JZ,
                        type:this.sstj,
                        startTime:this.startDate,
                        endTime:this.endDate
                }
                )  
            }
           
        }
    }
}
</script>

<style lang="less" scoped>

    .middleCon{
        display:flex;
        box-sizing:border-box;
        flex-direction:column;
        justify-content:space-between;
     
        width:100%;
        height:150px;
        background-color:#ffffff;
        margin-top:20px;
         .conTit{
                display:flex;
                padding: 0 24px;
                align-items:center;
                width:100%;
                 height:50px;
                 border-bottom:1px solid #ccc;
                 font-size:16px;
            }
            .hoursEvent{
                flex:1;
                display:flex;
                justify-content:space-between;
                 padding: 0 24px;
                background-color:#fff;
                align-items:center;
                >div{
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    width:150px;
                    height:60px;
                    background-color:#ffffff;
                    box-shadow: 3px 3px 2px #ccc;
                    border-radius:3px;
                    >div:nth-child(1){
                        width:60px;
                        height:60px;
                        background-color:#daedfe;
                         text-align: center;
                            line-height: 60px;
                    }
                    >div:nth-child(1).eventSum{
                          background-color:#00ccff;
                        
                    }
                     >div:nth-child(1).fire{
                          background-color:#f74f5f;
                      
                    }
                     >div:nth-child(1).default{
                          background-color:#f69c22;
                      
                    }
                       >div:nth-child(1).alarm{
                          background-color:#f6e30f;
                      
                    }
                       >div:nth-child(1).offline{
                          background-color:#dbdbdb;
                      
                    }
                    // .eventSum{
                    //   background:url('../../assets/images/dataAnalyze/eventSum.png') no-repeat center;  
                    // }
                    // .fire{
                     
                    //   background:url('../../assets/images/dataAnalyze/fire.png') no-repeat center;  
                       
                    // }
                    //  .default{
                    //   background:url('../../assets/images/dataAnalyze/default.png') no-repeat center;  
                    // }
                    //  .alarm{
                    //   background:url('../../assets/images/dataAnalyze/alarm.png') no-repeat center;  
                    // }
                    //  .offline{
                    //   background:url('../../assets/images/dataAnalyze/offline.png') no-repeat center;  
                    // }
                  
                     >div:nth-child(2){
                        flex:1;
                        display:flex;
                        flex-direction:column;
                        div:nth-child(1){
                            width:100%;
                            height:24px;
                            text-align:center;
                            font-size:18px;
                        }
                        div:nth-child(2){
                            width:100%;
                             font-size:14px;
                            text-align:center;
                            color:#ccc;
                        }
                    }
                }
            }
    }
    .picData{
       
        width:100%;
        margin-top:20px;
        height:calc(100% - 270px);
       
        display:flex;
        justify-content:space-between;
        .commonStyle{
            display:flex;
            flex-direction:column;
            width:48%;
            height:100%;
            background-color:#ffffff;
           
            .comTit{
                display:flex;
                align-items:center;
                width:100%;
                height:60px;
                padding:0 20px;
                border-bottom:1px solid #ccc;
                font-size:16px;
                font-weight:700;
                margin-bottom:6px;
            }
            .left{
                flex:1;
                // background-color:green;
            }
        }
       


    }
   
</style>
