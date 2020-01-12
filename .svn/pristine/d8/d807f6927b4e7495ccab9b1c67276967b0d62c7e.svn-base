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
                <span class="wdName_text2">
                    时间：
                </span>
                <DatePicker style='width:12%' type="date" placeholder="开始时间..." v-model="startDate" ></DatePicker>
                 — 
                <DatePicker style='width:12%' type="date" placeholder="结束时间..." v-model="endDate"></DatePicker>
                <Button class='wdName' type="info" @click="queryEvent">查询</Button>

                <Button class='wdName' type="info">导出</Button>
            </div>
        </div>

        <div class='tableBox'>
            <div class='topTJ'>
                <div class='leftbox'>
                    <div class='titletb'>报警事件处理情况 </div>
                    <div class='left'>
                        <div id='event'></div>
                        <div class='tbdetail' >
                            <p>报警总数:{{alarmEavent.eventSum}}次</p>
                            <p>已经处理:{{alarmEavent.eventDisposeSum}}次</p>
                            <p>尚未处理:{{alarmEavent.eventUntreatedSum}}次</p>
                        </div>
                    </div>
                </div>
                <div class='rightbox'>
                    <div class='titletb'>事件类型分类</div>
                    <div class='right'>
                        <div id='category'></div>
                        <div class='tbdetail'>
                            <p>火警数:{{eventType.fireSum}}次</p>
                            <p>故障数:{{eventType.faultSum}}次</p>
                            <p>报警数:{{eventType.alarmSum}}次</p>
                            <p>离线数:{{eventType.offLineSum}}次</p>

                        </div>
                    </div>
                </div>

            </div>
            <div class='bottomTJ'>
                <Table  :columns="columns11" :data="data10" border></Table>
            </div>
            <!--  <Page :total="TableData.length" :page-size="pageSize" show-total class="paging"></Page> -->
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
            floorNum: null,
            XMLXBH: null,
            xjnr: false,
            add: false,
            updata: false,
            WordName: null,
            drawCategory: null,
            // 报警事件处理情况
            alarmEavent:[],
            // 事件类型
            eventType:{},
            columns11: [{
                    title: '物业/单位',
                    key: 'ppname',
                    align: 'center',
                },
                {
                    title: '事件总数',
                    align: 'center',
                    children: [{
                            title: '合计',
                            key: 'eventSum',
                            align: 'center',

                            // sortable: true
                        },
                        {
                            title: '已处理',
                            key: 'eventDisposeSum',
                            align: 'center',

                            // sortable: true

                        },
                        {
                            title: '未处理',
                            key:  'eventUntreatedSum',
                            align: 'center',

                            // sortable: true

                        }
                    ]
                },
                {
                    title: '火警',
                    align: 'center',
                    children: [{
                            title: '合计',
                            key:  'fireSum',
                            align: 'center',

                            // sortable: true
                        },
                        {
                            title: '已处理',
                            align: 'center',
                             key:  'fireDisposeSum',        
                            // sortable: true

                        },
                        {
                            title: '未处理',
                             key: 'fireUntreatedSum',
                            align: 'center',

                            // sortable: true

                        }
                    ]
                },
                {
                    title: '故障',
                    align: 'center',
                    children: [{
                            title: '合计',
                             key: 'faultSum',
                            align: 'center',

                        },
                        {
                            title: '已处理',
                            key:  'faultUntreatedSum',
                            align: 'center',

                        },
                        {
                            title: '未处理',
                            key: 'faultDisposeSum',
                            align: 'center',

                        }
                    ]
                },
                {
                    title: '报警',
                    align: 'center',
                    children: [{
                            title: '合计',
                             key: 'alarmSum',
                            align: 'center',

                        },
                        {
                            title: '已处理',
                            key: 'alarmDisposeSum',
                            align: 'center',

                        },
                        {
                            title: '未处理',
                            key: 'alarmUntreatedSum',
                            align: 'center',

                        }
                    ]
                },
                {
                    title: '离线',
                    align: 'center',
                    children: [{
                            title: '合计',
                             key: 'offLineSum',
                            align: 'center',

                        },
                        {
                            title: '已处理',
                             key: "ffLineDisposeSum",
                            align: 'center',

                        },
                        {
                            title: '未处理',
                             key: 'ffLineUntreatedSum',
                            align: 'center',

                        }
                    ]
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
            findallStatisticss({ppid:this.WY,cpid:this.XQ,bdid:this.JZ,startTime:this.startDate,endTime:this.endDate}).then(res=>{
                this.alarmEavent = res.obj;
                this.initEvent(this.alarmEavent);
           });
            findallType({ppid:this.WY,cpid:this.XQ,bdid:this.JZ,startTime:this.startDate,endTime:this.endDate}).then(res=>{
                  this.eventType = res.obj;
                 this.initEvent1(this.eventType);
              });
              this.getstatistics();
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
        initEvent(params) {
            var myChart = echarts.init(document.getElementById('event'));
              myChart.resize()
            myChart.setOption({
                title: {
                    text: '',
                    // subtext: '纯属虚构',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    // orient: 'vertical',
                    bottom: 'bottom',
                    data: ['已处理', '未处理']
                },
                series: [{
                    name: '访问来源',
                    type: 'pie',
                    radius: [30, 70],
                    center: ['50%', '50%'],
                    roseType: 'area',
                    data: [{
                        // 蓝色渐变：深色：#0085fe     浅色：#00c0ff
                        // 绿色渐变：深色：#32dc96   浅色：#08e8c0
                            value: params.eventDisposeSum,
                            name: '已处理',
                            itemStyle:{
                                normal:{
                                    color:new echarts.graphic.LinearGradient(
                                        0,0,0,1,
                                        [
                                                {offset: 0, color: '#32dc96'},
                                                {offset: 0.5, color: '#32dc96'},
                                                {offset: 1, color: '#08e8c0'} 
                                        ]
                                    )
                                }
                            }
                        },
                        {
                            value: params.eventUntreatedSum,
                            name: '未处理',
                            itemStyle:{
                              normal:{
                               color:new echarts.graphic.LinearGradient(
                                   0,0,0,1,
                                   [
                                                {offset: 0, color: '#0085fe'},
                                                {offset: 0.5, color: '#0085fe'},
                                                {offset: 1, color: '#00c0ff'}  
                                   ]
                               )
                              }  
                            }
                        }

                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            });
                window.addEventListener('resize', function() {
            myChart.resize()})
        },
        initEvent1(params) {
            var myChart = echarts.init(document.getElementById('category'));
                myChart.resize()
            myChart.setOption( {
                title:{
                    text: '',
                    x:'center'
                },
               
                series: [{
                name: '访问来源',
                type: 'pie',
            
                radius:'65%',
                center: ['50%', '60%'],
                color: ['#dbdbdb', '#f6e30f', '#f74f5f', '#f69c22'], //'#FBFE27','rgb(11,228,96)','#FE5050'
                data: [{
                        value:this.eventType.fireSum,
                        name: '火警'
                    },
            {
                value: this.eventType.faultSum,
                name: '故障'
            },
            {
                value:this.eventType.offLineSum,
                name: '离线'
            },
            {
                value:this.eventType.alarmSum,
                name: '报警'
            }
        ].sort(function(a, b) {
            return a.value - b.value
        }),
        roseType: 'radius',

        label: {
            normal: {
                formatter: ['{c|{c}次}', '{b|{b}}'].join('\n'),
                rich: {
                    c: {
                        color: 'rgb(241,246,104)',
                        fontSize: 14,
                        fontWeight:'bold',
                        lineHeight: 5
                    },
                    b: {
                        color: 'rgb(98,137,169)',
                        fontSize: 14,
                        height: 40
                    },
                },
            }
        },
        labelLine: {
            normal: {
                lineStyle: {
                    color: 'rgb(98,137,169)',
                },
                smooth: 0.2,
                length: 6,
                length2: 10,

            }
        },
        itemStyle: {
            normal: {
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowBlur: 10,
            }
        }
    }]
            });
             window.addEventListener('resize', function() {
            myChart.resize()})
        },
        //获取数据统计
        getstatistics(){
            statistics({
                ppid:this.WY,
                cpid:this.XQ,
                bdid:this.JZ,
                startTime:this.startDate,
                endTime:this.endDate
            }).then(res=>{
              this.data10=res.obj;
              this.ppid='';
              this.cpid='';
              this.bdid='';
              this.startTime='';
              this.endTime=''
            })
        }
    },
}
</script>

<style lang="less" scoped>
.containers{
    .rightHead {


        .tableBox {
            margin-top: 20px;
            height: 100%;
            //  overflow: hidden;
            .topTJ {
                display: flex;
                height: 260px;

                .leftbox {
                    flex: 1;
                    margin-right:20px;
                    background: #fff;
                    box-shadow: 0px 2px 3px -2px;
                    .titletb{
                        height:40px;
                        line-height:40px;
                        padding-left:15px;
                        border-bottom:1px solid #ccc;
                    }
                    .left {
                        height:200px;
                        display: flex;
                        

                        #event {
                            width: 50%;
                            height: 100%;
                           
                        }

                        .tbdetail {
                            width: 50%;
                            padding: 60px 0 0 80px;
                             color:#555;
                            font-size:16px;
                            p{
                                margin-bottom:10px;
                            }
                        }
                    }
                }

                .rightbox {
                    flex: 1;
                    background: #fff;
                   
                    box-shadow: 0px 2px 3px -2px;
                    .titletb{
                        height:40px;
                        line-height:40px;
                        padding-left:15px;
                        border-bottom:1px solid #ccc;
                    }
                    .right {
                        height:200px;
                        display: flex;
                        
                        #category {
                            width: 50%;
                            height: 100%;
                            top:30px;
                        }

                        .tbdetail {
                            width: 50%;
                            padding: 50px 0 0 80px;
                            color:#555;
                            font-size:16px;
                            p{
                                margin-bottom:10px;
                            }
                        }
                    }
                }

            }
            .bottomTJ{
                margin-top:20px;
                background:#fff;
                height:68%;
                overflow: auto
            }
        }
    }

}

</style>