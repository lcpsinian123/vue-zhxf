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
                <DatePicker style='width:12%' type="date" placeholder="截至时间" v-model="startDate"></DatePicker>
              
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
                <Table stripe border :columns="TableTitle" :data="TableData">

                    <template slot-scope="{ row, index }" slot="action">
                        

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
                    title: '设备ID',
                    width: 80,
                    align: 'center',
                    key: 'sortNum'
                },

                {
                    title: '单位',
                    align: 'center',
                    key: 'docCategory'
                },
                {
                    title: '建筑物',
                    align: 'center',
                    key: 'updataTime'
                },
                {
                    title: '所在楼层',
                    align: 'center',
                    key: 'realUnit'
                },
                {
                    title: '所在区域',
                    key: 'action',
                    // slot: 'action',
                    align: 'center'
                },{
                    title: '防火门材质',
                    key: 'action',
                    // slot: 'action',
                    align: 'center'
                }
                ,{
                    title: '是否开启',
                    key: 'action',
                    // slot: 'action',
                    align: 'center'
                }
                ,{
                    title: '运行状态',
                    key: 'action',
                    // slot: 'action',
                    align: 'center'
                }
                ,{
                    title: '操作',
                    key: 'action',
                    slot: 'action',
                    align: 'center'
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
            ]
        }
    },
    created() {
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
.container {
    height: 100%;
    width: 100%;
    // padding: 0 3px;
    background-color: #edf5f7;
        .tableBox {
            margin-top: 20px;
            background: #fff;
            height: 100%;

        
        }


}

</style>

