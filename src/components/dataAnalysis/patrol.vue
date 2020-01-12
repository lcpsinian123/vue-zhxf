<template>
<div class='containers cententpadding'>
    <Tabs value="name1">
        <TabPane label="巡检完成情况" name="name1">
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

                
                        <span class="wdName_text1">
                            时间：
                        </span>
                        <DatePicker style='width:10%' type="date" placeholder="开始时间..." v-model="startDate"></DatePicker>
                        — 
                        <DatePicker style='width:10%' type="date" placeholder="结束时间..." v-model="endDate"></DatePicker>
                        <Button class='wdName' type="info" @click='queryInspection'>查询</Button>

                        <Button class='wdName' type="info">导出</Button>
                    </div>
                </div>

                <div class='tableBox'>
                    <div class='topTJ'>
                        <div class='left'>
                            <div id='event'></div>
                        </div>
                    </div>
                    <div class='bottomTJ'>
                        <Table stripe border :columns="TableTitle" :data="TableData">

                            <template slot-scope="{ row, index }" slot="action">
                                <Button type="primary" ghost size="small" @click="xjnr = true">巡检内容</Button>

                                <Modal width="700" v-model="xjnr">
                                    <div slot="header" class="">
                                        巡检内容列表
                                    </div>
                                    <div class="seaechType">
                                        <span> 巡检类别&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</span>
                                        <Select v-model="floorNum" style="width:120px">
                                            <Option v-for="item in period" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                        </Select>
                                    </div>
                                    <Table stripe border :columns="patrolTitle" :data="patrolcontent">
                                        <template slot="action">
                                            <Button type="warning" ghost size="small" @click="xjnr = true">删除</Button>
                                        </template>

                                    </Table>
                                </Modal>
                                <Button type="primary" ghost size="small" style="margin:0 10px" @click="updata=true">修改</Button>
                                <Modal width="700" id="updata" v-model="updata">
                                    <div slot="header" class="addheader">
                                        修改
                                    </div>
                                    <div class="addcontent">
                                        <div class="top">
                                            <span class="XMLXBH">项目类型编号&nbsp;&nbsp;: </span>
                                            <Input v-model="XMLXBH" placeholder="输入项目类型编号" style="width: 30%;margin-right:30px;" />
                                            <span class="XMLXBH">项目类型名称&nbsp;&nbsp;: </span>
                                            <Input v-model="XMLXBH" placeholder="输入项目类型名称" style="width: 30%" />
                                        </div>
                                        <div class="top">
                                            <span class="XMLXBH">设备操作规范&nbsp;&nbsp;: </span>
                                            <Input v-model="XMLXBH" style="width: 30%;margin-right:30px;" />
                                            <span class="XMLXBH">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注&nbsp;&nbsp;&nbsp;&nbsp;: </span>
                                            <Input v-model="XMLXBH" style="width: 30%" />
                                        </div>
                                    </div>
                                </Modal>
                                <Button type="warning" ghost size="small" @click="remove(index)">删除</Button>

                            </template>
                        </Table>
                    </div>
                   
                    <!--  <Page :total="TableData.length" :page-size="pageSize" show-total class="paging"></Page> -->
                </div>

            </div>
        </TabPane>
        <TabPane label="隐患处理情况" name="name2">
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
                        <span class="wdName_text1">
                            时间：
                        </span>
                        <DatePicker style='width:10%' type="date" placeholder="开始时间..." v-model="startDate"></DatePicker>
                         — 
                        <DatePicker style='width:10%' type="date" placeholder="结束时间..." v-model="endDate"></DatePicker>
                        <Button class='wdName' type="info">查询</Button>

                        <Button class='wdName' type="info">导出</Button>
                    </div>
                </div>

                <div class='tableBox'>
                    <div class='topTJ'>
                        <div class='left'>
                            <div id='event'></div>
                        </div>
                    </div>
                    <div class='bottomTJ'>
                        <Table stripe border :columns="TableTitle" :data="TableData">

                            <template slot-scope="{ row, index }" slot="action">
                                <Button type="primary" ghost size="small" @click="xjnr = true">巡检内容</Button>

                                <Modal width="700" v-model="xjnr">
                                    <div slot="header" class="">
                                        巡检内容列表
                                    </div>
                                    <div class="seaechType">
                                        <span> 巡检类别&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</span>
                                        <Select v-model="floorNum" style="width:120px">
                                            <Option v-for="item in period" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                        </Select>
                                    </div>
                                    <Table stripe border :columns="patrolTitle" :data="patrolcontent">
                                        <template slot="action">
                                            <Button type="warning" ghost size="small" @click="xjnr = true">删除</Button>
                                        </template>

                                    </Table>
                                </Modal>
                                <Button type="primary" ghost size="small" style="margin:0 10px" @click="updata=true">修改</Button>
                                <Modal width="700" id="updata" v-model="updata">
                                    <div slot="header" class="addheader">
                                        修改
                                    </div>
                                    <div class="addcontent">
                                        <div class="top">
                                            <span class="XMLXBH">项目类型编号&nbsp;&nbsp;: </span>
                                            <Input v-model="XMLXBH" placeholder="输入项目类型编号" style="width: 30%;margin-right:30px;" />
                                            <span class="XMLXBH">项目类型名称&nbsp;&nbsp;: </span>
                                            <Input v-model="XMLXBH" placeholder="输入项目类型名称" style="width: 30%" />
                                        </div>
                                        <div class="top">
                                            <span class="XMLXBH">设备操作规范&nbsp;&nbsp;: </span>
                                            <Input v-model="XMLXBH" style="width: 30%;margin-right:30px;" />
                                            <span class="XMLXBH">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注&nbsp;&nbsp;&nbsp;&nbsp;: </span>
                                            <Input v-model="XMLXBH" style="width: 30%" />
                                        </div>
                                    </div>
                                </Modal>
                                <Button type="warning" ghost size="small" @click="remove(index)">删除</Button>

                            </template>
                        </Table>
                    </div>
                    <!--  <Table stripe border :columns="TableTitle" :data="TableData">

                <template slot-scope="{ row, index }" slot="action">
                    <Button type="primary" ghost size="small" @click="xjnr = true">巡检内容</Button>

                    <Modal width="700" v-model="xjnr">
                        <div slot="header" class="">
                            巡检内容列表
                        </div>
                        <div class="seaechType">
                            <span> 巡检类别&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</span>
                            <Select v-model="floorNum" style="width:120px">
                                <Option v-for="item in period" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </div>
                        <Table stripe border :columns="patrolTitle" :data="patrolcontent">
                            <template slot="action">
                                <Button type="warning" ghost size="small" @click="xjnr = true">删除</Button>
                            </template>

                        </Table>
                    </Modal>
                    <Button type="primary" ghost size="small" style="margin:0 10px" @click="updata=true">修改</Button>
                    <Modal width="700" id="updata" v-model="updata">
                        <div slot="header" class="addheader">
                            修改
                        </div>
                        <div class="addcontent">
                            <div class="top">
                                <span class="XMLXBH">项目类型编号&nbsp;&nbsp;: </span>
                                <Input v-model="XMLXBH" placeholder="输入项目类型编号" style="width: 30%;margin-right:30px;" />
                                <span class="XMLXBH">项目类型名称&nbsp;&nbsp;: </span>
                                <Input v-model="XMLXBH" placeholder="输入项目类型名称" style="width: 30%" />
                            </div>
                            <div class="top">
                                <span class="XMLXBH">设备操作规范&nbsp;&nbsp;: </span>
                                <Input v-model="XMLXBH" style="width: 30%;margin-right:30px;" />
                                <span class="XMLXBH">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注&nbsp;&nbsp;&nbsp;&nbsp;: </span>
                                <Input v-model="XMLXBH" style="width: 30%" />
                            </div>
                        </div>
                    </Modal>
                    <Button type="warning" ghost size="small" @click="remove(index)">删除</Button>

                </template>
            </Table> -->
                    <!--  <Page :total="TableData.length" :page-size="pageSize" show-total class="paging"></Page> -->
                </div>

            </div>
        </TabPane>
   
    </Tabs>

</div>
</template>

<script>
import {
    wyjc,
    dwjc,
    jzujc,
    lcjc
} from 'api/docManage';
import  {inspection} from 'api/dataAnalysis';
var echarts = require('echarts');
export default {
    data() {
        return {
            WY:'',
            XQ:'',
            JZ:'',
            sstj: '1',
            wy: [],
            xq: [],
            jz: [],
            // 物业名称存储
            wynum:[],
            onlinesdata:[],
            offlinesdata:[],
            startDate: "",
            endDate: '',
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
                    title: '单位',
                    align: 'center',
                    key: 'name'
                },

                {
                    title: '计划巡检点位数',
                    align: 'center',
                    key: 'planPollingSomeDigits'
                },
                {
                    title: '实际巡检点位数',
                    align: 'center',
                    key: 'practicalPollingSomeDigits'
                },
                {
                    title: '计划巡检设备数',
                    align: 'center',
                    key: 'planPollingDeviceNumber'
                },
                {
                    title: '实际巡检设备数',
                    key: 'practicalPollingDeviceNumber',
                    // slot: 'action',
                    align: 'center'
                },
                {
                    title: '巡检完成进度',
                    key: 'inspectionCompletion',
                    // slot: 'action',
                    align: 'center'
                }
            ],
            TableData: [
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
            ]
        }
    },
    created() {
        // this.initEvent()
        this.initdata();
        this.inittableData();
    },
    mounted() {
        // this.initEvent()
        this.initEvent1()
    },
    methods: {
        queryInspection(){
           
           this.inittableData();  
        },
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
            var myChart = echarts.init(document.getElementById('event'));             
             myChart.resize()
            myChart.setOption({
                
                //    title: {
                //     text: '堆叠条形图',
                //     subtext: '纯属虚构',
                //     x: 'center'
                //    },

             
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'none'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                legend: {
                    data: ['在线', '离线']
                },
                grid: {
                    left: '6%',
                    right: '8%',
                    bottom: '6%',
                    containLabel: true
                },
                xAxis:  {
                    type: 'value',
                    
                    name:'运行数',
                         splitLine:{
                        show:false
                    }
                },
                yAxis: {
                    name:'物业/单位',
                    type: 'category',
                    data:  this.wynum
                },
                series: [
                    {
                        name: '在线',
                        type: 'bar',
                        stack: '总量',
                        barWidth: 20,
                        itemStyle:{
                            normal: {
                                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                        offset: 0,
                                        color: '#32dc96'
                                    },
                                    {
                                        offset: 1,
                                        color: '#08e8c0'
                                    }
                                ]),
                                // barBorderRadius: [20, 20,20, 20],
                            }
                        },
                        label: {
                            normal: {
                                show: false,
                                position: 'insideRight'
                            }
                        },
                        z:  10,
                        data: this.onlinesdata
                    },
                    {
                        name: '离线',
                        type: 'bar',
                        stack: '总量',
                        barWidth: 20,
                        itemStyle:{
                            normal: {
                                color: '#ccc',
                                // shadowBlur: [0, 0, 0, 10],
                                shadowColor: '#ebe806',
                                barBorderRadius: [0, 20, 20, 0],
                                // shadowOffsetX: -20,
                            }
                        },
                        label: {
                            normal: {
                                show: false,
                                position: 'insideRight'
                            }
                        },
                        z: 5,
                        data: this.offlinesdata
                    }

                ]

             })
           
         window.addEventListener('resize', function() {
            myChart.resize()
          })
        
       
        },
       
        inittableData(){
            //  this.TableData = [];
             this.wynum = [];
             this.onlinesdata = [];
             this.offlinesdata = [];
            inspection({ppid:this.WY,cpid:this.XQ,bdid:this.JZ,startTime:this.startDate,endTime:this.endDate}).then(res=>{
                // res.obj 
                res.obj.forEach((item)=>{
                    // if(item.name){
                    //   this.TableData.push(item) ;
                       this.wynum.push(item.name);
                       this.onlinesdata.push(item.onlines);
                         this.offlinesdata.push(item.offlines);
                    // }
                })
                this.TableData = res.obj
                 this.initEvent1();
            console.log(res)
        })
    }
    },
  
}
</script>

<style lang="less" scoped>
.containers {

    .rightHead {
        height: 100%;
        .tableBox {
            margin-top: 20px;
            // background: #fff;
            // height: 73%;
             height: calc(100% - 137px);
            .topTJ {
                display: flex;
                height: 240px;
                background:#fff;
                box-shadow: 0px 2px 3px -2px;
                .left {
                    flex: 1;
                  
                    #event {
                        height: 100%;
                    }
                }

                .right {
                    flex: 1;
                    height: 240px;

                    #category {
                        height: 100%;
                    }
                }
            }
            .bottomTJ{
                margin-top:20px;
                background:#fff;
                
            } 
        }
    }

}
</style>
