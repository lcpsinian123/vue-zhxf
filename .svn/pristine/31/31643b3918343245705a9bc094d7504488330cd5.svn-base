<template>
<div class='containers cententpadding'>

    <div class="rightHead">
        <div class='sousuo1'>
            <div class='searchMeun'>
                    <span class="wdName_text1">
                    区域：
                </span> 
                <Select v-model="WY" style="width:10%" @on-change='wychange' placeholder='请输入物业'>
                    <Option v-for="item in wy" :value="item.ppid" :key="item.ppid">{{ item.ppname }}</Option>
                </Select>
                <Select v-model="XQ" style="width:10%;margin-left:10px;" @on-change='xqchange' placeholder='请输入单位'>
                    <Option v-for="item in xq" :value="item.cpid" :key="item.cpid">{{ item.cpname }}</Option>
                </Select>
                <Select v-model="JZ" style="width:10%;margin-left:10px;" @on-change='jzchange' placeholder='请输入建筑'>
                    <Option v-for="item in jz" :value="item.bdid" :key="item.bdid">{{ item.note }}</Option>
                </Select>
                <span class="wdName_text">
                    截至时间：
                </span>
                <DatePicker style="width:12%" type="date" placeholder="开始时间..." v-model="startDate"></DatePicker>

                <Button class='wdName' type="info" >查询</Button>

                <Button class='wdName' type="info" >导出</Button>

                <Modal width="700" id="add" v-model="add">
                    <div slot="header" class="addheader">
                        添加
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
            </div>
        </div>

        <div class='tableBox'>

            <div class='bottomTJ'>
                <div class='video'>
                    <video src="../../assets/images/SC.mp4" controls="controls">

                    </video>
                </div>
                <div class='video'>
                    <video src="../../assets/images/SC.mp4" controls="controls">

                    </video>
                </div>
                <div class='video'>
                    <video src="../../assets/images/SC.mp4" controls="controls">

                    </video>
                </div>
                <div class='video'>
                    <video src="../../assets/images/SC.mp4" controls="controls">

                    </video>
                </div>
                <div class='video'>
                    <video src="../../assets/images/SC.mp4" controls="controls">

                    </video>
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
                    title: '编号',
                    width: 80,
                    align: 'center',
                    key: 'sortNum'
                },

                {
                    title: '项目类型名称',
                    align: 'center',
                    key: 'docCategory'
                },
                {
                    title: '设备操作规范',
                    align: 'center',
                    key: 'updataTime'
                },
                {
                    title: '备注',
                    align: 'center',
                    key: 'realUnit'
                },
                {
                    title: '操作',
                    key: 'action',
                    slot: 'action',
                    align: 'center'
                }
            ],
            TableData: [{
                    sortNum: 1,

                    docCategory: '平面图',
                    updataTime: '2019-04-10',
                    realUnit: "振南物业",

                },
                {
                    sortNum: 2,

                    docCategory: '平面图',
                    updataTime: '2019-04-10',
                    realUnit: "振南物业",

                }

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
            ]
        }
    },
    created() {
        // this.initEvent()
        this.initdata()
    },
    mounted() {
    },
    methods: {
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
    },
}
</script>

<style lang="less" scoped>


            .bottomTJ{
                display:flex; 
                flex-wrap: wrap;
                justify-content: space-between;
                .video{
                    width:24%;
                    >video{
                         width:100%;
                    }
                }
            }


</style>