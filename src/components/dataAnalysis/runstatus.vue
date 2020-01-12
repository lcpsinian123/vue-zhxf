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
                <Select v-model="XQ" style="width:10%;margin-left:10px;" @on-change='xqchange'>
                    <Option v-for="item in xq" :value="item.cpid" :key="item.cpid">{{ item.cpname }}</Option>
                </Select>
                <Select v-model="JZ" style="width:10%;margin-left:10px;" @on-change='jzchange'>
                    <Option v-for="item in jz" :value="item.bdid" :key="item.bdid">{{ item.note }}</Option>
                </Select>

                <span class="wdName_text">
                    截至时间：
                </span>
                <DatePicker style='width:12%' type="date" placeholder="截止时间..." v-model="startDate"></DatePicker>

                <Button class='wdName' type="info" @click="queryData">查询</Button>

                <Button class='wdName' type="info">导出</Button>
            </div>
        </div>
               <div class='showData'>
                     <div class='left both'>
                        <div class='bothTit'>运行状态统计</div>
                        <div id='event'></div>
                     </div>
                      <div class='right both'>
                         <div class='bothTit'>运行状态统计列表</div>
                          <Table stripe border :columns="TableTitle" :data="TableData">
                        </Table>
                     </div>
               </div>

     
    
    </div>
</div>
</template>

<script>
var echarts = require('echarts');
import {
    wyjc,
    dwjc,
    jzujc,
    lcjc
} from 'api/docManage';
import {findStatus} from 'api/dataAnalysis';
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
            onlinesData:[],
            offlinesData:[],
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
            TableTitle: [{
                    title: '物业/单位(小区)',
                    // width: 80,
                    align: 'center',
                    key: 'ppname'
                },

                {
                    title: '联网设备总数',
                    align: 'center',
                    key: 'amount'
                },
                {
                    title: '在线设备数',
                    align: 'center',
                    key: 'onlines'
                },
                {
                    title: '离线设备数',
                    align: 'center',
                    key: 'offlines'
                },
                {
                    title: '在线率',
                    key: 'onlineRate',
                    // slot: 'action',
                    align: 'center'
                }
            ],
            TableData: [ ],
        }
    },
    created() {
        // this.initEvent()
        this.initdata();
         this.initrunningStatus();
    },
    mounted() {
        // this.initEvent()
        setTimeout(() =>{
      this.initEvent1();
        })
  

    },
    
    methods: {
        // 查询所有数据
        queryData(){
            if(!this.WY  && !this.XQ && !this.JZ && !this.startDate ){
            this.$Message.warning('至少选择一条数据')
              return;
            }
                this.initrunningStatus();
        },
        initdata() {
            wyjc({}).then(res => {
                this.wy = res.obj
            })
        },
        wychange(i) {
            dwjc({
                ppid: i
            }).then(res => {

                this.xq = res.obj
            })
        },
        xqchange(val) {
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
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'none'  ,     // 默认为直线，可选为：'line' | 'shadow',
                          
                        }
                    },
                legend: {
                    data: ['在线', '离线']
                },
                grid: {
                    left: '10%',
                    right: '10%',
                    bottom: '10%',
                    containLabel: true
                },
                xAxis:  {
                    type: 'value',
                    name:'运行数',
                    splitArea:{
                        show:false
                    },
                       splitLine:{
                        show:false
                    }
                },
                yAxis: {
                    name:'物业/单位',
                    type: 'category',
                    data:['洋烃物业', '潍坊物业 ', '振南物业','上钢物业'],
                     splitArea:{
                        show:false
                    }
                    
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
                                
                            }
                        },
                        label: {
                            normal: {
                                show: false,
                                position: 'insideRight'
                            }
                        },
                        z:  10,
                        data:this.onlinesData,
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
                        data:this.offlinesData,
                    },
                    

                ]

             })
             window.addEventListener('resize', function() {
            myChart.resize()
          })
        }
       
        ,
        initrunningStatus(){
            let offlinesRate ;
           findStatus( {
                ppid:this.WY,
                cpid:this.XQ,
                bdid:this.JZ,
                startTime:this.startDate,
                }).then(res=>{
             this.onlinesData=[];
             this.offlinesData=[];
             this.TableData = [];
             res.obj.forEach((item)=>{
                // item.onlineRate =(Number(item.onlineRate)*100).toFixed(0); 
                this.TableData.push(item) 
             })
           this.TableData.forEach(item=>{
                this.onlinesData.push(item.onlines);
                this.offlinesData.push(item.offlines);
            })
            // console.log(this.TableData,'test')
            this.initEvent1();
            // this.WY= '';
            // this.XQ='';
            // this.JZ ='';
            // this.startDate = '';
            // this.endDate='';
            // console.log(this.onlinesData);
        })

            
    }
    },
    
   
}
</script>

<style lang="less" scoped>
       .showData{
                    display:flex;
                    width:100%;
                    justify-content:space-between;
                    height:80%;
                    margin-top:20px;
                   .both{
                       width:49%;
                       height:100%;
                       position:relative;
                       background-color:#ffffff;
                     
                       .bothTit{
                            box-sizing:border-box;
                            padding-left:5%;
                            display:flex;
                            align-items:center;
                           width:100%;
                           height:70px;
                           border-bottom:1px solid #ccc;
                           font-size:16px;
                           font-weight:700;
                           margin-bottom:30px;

                       }
                       #event{
                         
                           margin-top:-20px;
                           width:90%;
                           height:90%;
                        //    height:600px;
                        //    width:500px;
                       }
                   }
                  
            }
         
</style>