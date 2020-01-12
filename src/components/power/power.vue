<!--
 * @Author: your name
 * @Date: 2019-11-14 14:10:59
 * @LastEditTime: 2019-11-30 17:42:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-zzxf\src\components\maintenance\mainrouter.vue
 -->
<template>
<div class='containers cententpadding'>
    <Tabs name="tab1">
        <TabPane label="实时监控" name="name1123">
            <div class="rightHead">
                <div class='sousuo1' style="margin-top:0px;">
                    <div class='searchMeun'>
                        <span class="wdName_text1">
                            区域：
                        </span>
                        <Select v-model="WY" style="width:10%" @on-change='wychange'>
                            <Option v-for="item in wy" :value="item.ppid" :key="item.ppid">{{ item.ppname }}</Option>
                        </Select>
                        <span class="wdName_text1">
                            时间：
                        </span>
                        <DatePicker :value="this.startTime" format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="开始时间" style="width: 10%"></DatePicker>
                             —   
                        <DatePicker :value="this.endTime" format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="结束时间" style="width: 10%"></DatePicker>

                        <Button class='wdName' type="info">查询</Button>
                    </div>
                </div>

                <div class='tableBox'>
                    <div class='mediaList'>

                        <div class='mediaInfo' @click='getPowerInfo'>
                            <Card>
                                <div class='powerRoom' style="text-align:center">
                                    <div class='imgbox'>
                                        <Icon type="ios-flash" />
                                    </div>
                                    <div class='dec'>
                                        <div class='title'> 1F1-2#强电间ALZ1-2</div>
                                        <div > 设备Id: 123445423</div>
                                        <div ><span >连接状态：在线&nbsp;</span> 运行状态: 正常 </div>
                                    </div>
                                </div>
                            </Card>
                            <div class='wendu'>
                                <div class='dianliu'>
                                    <p> 温度_121212_00/</p>
                                    <p> <span> 29℃</span></p>
                                </div>
                                <div class='dianliu'>
                                     <p> 漏电流_121212_00/</p>
                                    <p> <span> 1A</span></p>
                                </div>
                                <div class='dianliu'>
                                    <p> 温度_121212_00/</p>
                                    <p> <span> 29℃</span></p>
                                </div>
                                <div class='dianliu'>
                                       <p> 相电流_121212_00/</p>
                                    <p> <span> 0A</span></p>
                                </div>
                                <div class='dianliu'>
                                    <p> 温度_121212_00/</p>
                                    <p> <span> 29℃</span></p>
                                </div>
                                <div class='dianliu'>
                                       <p> 相电流_121212_00/</p>
                                    <p> <span> 0A</span></p>
                                </div>
                                <div class='dianliu'>
                                    <p> 温度_121212_00/</p>
                                    <p> <span> 29℃</span></p>
                                </div>
                                <div class='dianliu'>
                                     <p> 相电流_121214_00/</p>
                                    <p> <span> 39A</span></p>
                                </div>
                            </div>
                        </div>
                         <div class='mediaInfo' @click='getPowerInfo'>
                            <Card>
                                <div class='powerRoom' style="text-align:center">
                                    <div class='imgbox'>
                                        <Icon type="ios-flash" />
                                    </div>
                                    <div class='dec'>
                                        <div class='title'> 1F1-2#强电间ALZ1-2</div>
                                        <div > 设备Id: 123445423</div>
                                        <div ><span >连接状态：在线&nbsp;</span> 运行状态: 正常 </div>
                                    </div>
                                </div>
                            </Card>
                               <div class='wendu'>
                                <div class='dianliu'>
                                    <p> 温度_121212_00/</p>
                                    <p> <span> 29℃</span></p>
                                </div>
                                <div class='dianliu'>
                                     <p> 漏电流_121212_00/</p>
                                    <p> <span> 1A</span></p>
                                </div>
                                <div class='dianliu'>
                                    <p> 温度_121212_00/</p>
                                    <p> <span> 29℃</span></p>
                                </div>
                                <div class='dianliu'>
                                       <p> 相电流_121212_00/</p>
                                    <p> <span> 0A</span></p>
                                </div>
                                <div class='dianliu'>
                                    <p> 温度_121212_00/</p>
                                    <p> <span> 29℃</span></p>
                                </div>
                                <div class='dianliu'>
                                       <p> 相电流_121212_00/</p>
                                    <p> <span> 0A</span></p>
                                </div>
                                <div class='dianliu'>
                                    <p> 温度_121212_00/</p>
                                    <p> <span> 29℃</span></p>
                                </div>
                                <div class='dianliu'>
                                     <p> 相电流_121214_00/</p>
                                    <p> <span> 39A</span></p>
                                </div>
                            </div>
                        </div>
                         <div class='mediaInfo' @click='getPowerInfo'>
                            <Card>
                                <div class='powerRoom' style="text-align:center">
                                    <div class='imgbox'>
                                        <Icon type="ios-flash" />
                                    </div>
                                    <div class='dec'>
                                        <div class='title'> 1F1-2#强电间ALZ1-2</div>
                                        <div > 设备Id: 123445423</div>
                                        <div ><span >连接状态：在线&nbsp;</span> 运行状态: 正常 </div>
                                    </div>
                                </div>
                            </Card>
                                  <div class='wendu'>
                                <div class='dianliu'>
                                    <p> 温度_121212_00/</p>
                                    <p> <span> 29℃</span></p>
                                </div>
                                <div class='dianliu'>
                                     <p> 漏电流_121212_00/</p>
                                    <p> <span> 1A</span></p>
                                </div>
                                <div class='dianliu'>
                                    <p> 温度_121212_00/</p>
                                    <p> <span> 29℃</span></p>
                                </div>
                                <div class='dianliu'>
                                       <p> 相电流_121212_00/</p>
                                    <p> <span> 0A</span></p>
                                </div>
                                <div class='dianliu'>
                                    <p> 温度_121212_00/</p>
                                    <p> <span> 29℃</span></p>
                                </div>
                                <div class='dianliu'>
                                       <p> 相电流_121212_00/</p>
                                    <p> <span> 0A</span></p>
                                </div>
                                <div class='dianliu'>
                                    <p> 温度_121212_00/</p>
                                    <p> <span> 29℃</span></p>
                                </div>
                                <div class='dianliu'>
                                     <p> 相电流_121214_00/</p>
                                    <p> <span> 39A</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--   <Page :total="TableData.length" :page-size="pageSize" show-total class="paging"></Page> -->
                </div>

            </div>

        </TabPane>
        <!--  报警事件 -------------------------------------->
        <TabPane label="报警事件" name="name22" tab="tab1">
            <div class="rightHead">
                <div class='sousuo1' style="margin-top:0px;">
                    <div class='searchMeun'>
                        <span class="wdName_text1">
                            状态：
                        </span>
                        <Select v-model="WY" style="width:10%" @on-change='wychange'>
                            <Option v-for="item in wy" :value="item.ppid" :key="item.ppid">{{ item.ppname }}</Option>
                        </Select>
                        <span class="wdName_text1">
                            类型：
                        </span>
                        <Select v-model="WY" style="width:10%" @on-change='wychange'>
                            <Option v-for="item in wy" :value="item.ppid" :key="item.ppid">{{ item.ppname }}</Option>
                        </Select>

                        <span class="wdName_text">
                            报警时间：
                        </span>
                        <DatePicker  type="date" style="width:10%" placeholder="开始时间..." v-model="startDate"></DatePicker>
                            —
                        <DatePicker  type="date" style="width:10%" placeholder="结束时间..." v-model="endDate"></DatePicker>
                        <span class="wdName_text2" >
                            关键词：
                        </span>
                        <Input v-model="keywords" placeholder="搜索" style="width: 10%" />

                        <Button class='wdName' type="info">查询</Button>

                        <Button class='wdName' type="info">重置</Button>
                    </div>
                </div>

                <div class='tableBox'>
                    <div class='topTJ'>
                        <div class='left'>
                            <div id='event'></div>
                        </div>
                    </div>
                    <div class='bottomTJ'>
                        <div class='btnbox'>
                            <Button class='btns' type="primary" ghost>测试</Button>
                            <Button class='btns' type="primary" ghost>屏蔽</Button>
                            <Button class='btns' type="primary" ghost>忽略</Button>
                            <Button class='btns' type="primary" ghost>确定</Button>
                            <Button type="primary" ghost>导出</Button>
                        </div>
                        <Table stripe border :columns="TableTitle" :data="TableData">

                            <template slot-scope="{ row, index }" slot="action">

                                <Modal width="700" v-model="xjnr" >
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
        <!--  数据浏览 -------------------------------------->
        <TabPane label="数据浏览" name="name33" tab="tab1">
            <div class="rightHead">
                <div class='sousuo1' style="margin-top:0px;">
                    <div class='searchMeun'>
                        <span class="wdName_text">
                            链接状态：
                        </span>
                        <Select v-model="WY" style="width:10%" @on-change='wychange'>
                            <Option v-for="item in wy" :value="item.ppid" :key="item.ppid">{{ item.ppname }}</Option>
                        </Select>
                        <span class="wdName_text">
                            运行状态：
                        </span>
                        <Select v-model="WY" style="width:10%" @on-change='wychange'>
                            <Option v-for="item in wy" :value="item.ppid" :key="item.ppid">{{ item.ppname }}</Option>
                        </Select>

                        <span class="wdName_text2">
                            关键词：
                        </span>
                        <Input v-model="keywords" placeholder="搜索" style="width: 10%" />

                        <Button class='wdName' type="info">查询</Button>

                        <Button class='wdName'  type="info">重置</Button>

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
                    <Tabs name="kzq">
                        <TabPane tab='kzq' label="控制器">
                            <div class='bottomTJ'>
                                <Table stripe border :columns="TableTitle1" :data="TableData">

                                    <template slot-scope="{ row, index }" slot="action">

                                        <Modal width="700" v-model="xjnr">
                                            <div slot="header" class="">
                                                {{this.powerTitle}}
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
                        </TabPane>
                        <TabPane tab='kzq' label="探测器">
                            <div class='bottomTJ'>
                                <Table stripe border :columns="TableTitle1" :data="TableData">

                                    <template slot-scope="{ row, index }" slot="action">

                                        <Modal width="700" v-model="xjnr">
                                            <div slot="header" class="">
                                                {{this.powerTitle}}
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
                        </TabPane>

                    </Tabs>

                    <!--  <Page :total="TableData.length" :page-size="pageSize" show-total class="paging"></Page> -->
                </div>

            </div>
        </TabPane>
        <Modal width="60%" id='powerxxId' v-model="powerflag">
            <div slot="header" class="headers">
                用电详情
            </div>
            <div class="seaechType">
                <div class='title'>
                    <span>基础信息</span>
                </div>
                <div class='sbcontent'>
                    <div class='sbmc'>
                        <span>设备名称:&nbsp;&nbsp; 4F影院照明用电柜</span>
                        <span>所属单位:&nbsp;&nbsp; 华都天元广场 </span>
                        <span>安装位置:&nbsp;&nbsp; 主楼4楼4F影院照明用电柜</span>
                    </div>
                    <div class='sbmc'>
                        <span>状态:&nbsp;&nbsp; 正常</span>
                        <span>所属单位:&nbsp;&nbsp; M201</span>
                    </div>
                    <div class='sbmc'>
                        <span>设备品牌:&nbsp;&nbsp; 圣世信通</span>
                        <span>设备ID:&nbsp;&nbsp; 190760D288</span>
                    </div>
                </div>
                <div class='dataprot'>
                    <Tabs name='tab1-1'>
                        <p style='line-height:20px;padding-top: 8px;' slot="extra">
                            <span size="small">今日</span>
                            <span style='margin:0 20px;' size="small" slot="extra">本周</span>
                            <span size="small" slot="extra">本月</span>
                        </p>

                        <TabPane label="数据趋势分析" tab='tab1-1'>

                            <div class='YDXQ'>
                                <div id='electricity'></div>
                                <div id='temperature'></div>
                            </div>
                        </TabPane>
                        <TabPane label="历史报警时间" tab='tab1-1'>
                                    <div class="listshow">
                                <Col span="6">报警时间</COl>
                                  <Col span="4">报警次数</COl>
                                    <Col span="4">处理状态</COl>
                                      <Col span="4">处理人</COl>
                                        <Col span="6">处理方式</COl>
           

                            </div>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
                    <div slot='footer'></div>
        </Modal>
    </Tabs>

</div>
</template>

<script>
var echarts = require('echarts');
export default {
    name: 'maindian',
    data() {
        return {
            WY: '',
            XQ: '',
            JZ: '',
            sstj: '1',
            wy: [],
            xq: [],
            jz: [],
            powerflag: false,
            powerTitle: '4F影院照片用电柜',
            startTime: '',
            endTime: "",
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
                    type: 'selection',
                    width: 60,
                    align: 'center'
                }, {
                    title: '首次报警事件',
                    width: 180,
                    align: 'center',
                    key: 'sortNum'
                },

                {
                    title: '事件类型',
                    align: 'center',
                    key: 'docCategory'
                },
                {
                    title: '设备名称',
                    align: 'center',
                    key: 'updataTime'
                },
                {
                    title: '编码',
                    align: 'center',
                    key: 'realUnit'
                },
                {
                    title: '最新报警时间',
                    align: 'center',
                    key: 'realUnit'
                },

                {
                    title: '报警次数',
                    align: 'center',
                    key: 'realUnit'
                },

                {
                    title: '报警持续时长',
                    align: 'center',
                    key: 'realUnit'
                },

                {
                    title: '处理状态',
                    align: 'center',
                    key: 'realUnit'
                },

                {
                    title: '联动详情',
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
            TableTitle1: [{
                    type: 'selection',
                    width: 60,
                    align: 'center'
                }, {
                    title: '设备ID',
                    width: 80,
                    align: 'center',
                    key: 'sortNum'
                },

                {
                    title: '设备名称',
                    align: 'center',
                    key: 'docCategory'
                },
                {
                    title: '所属智能装置',
                    align: 'center',
                    key: 'updataTime'
                },
                {
                    title: '连接状态',
                    align: 'center',
                    key: 'realUnit'
                },
                {
                    title: '运行状态',
                    align: 'center',
                    key: 'realUnit'
                },

                {
                    title: '报备状态',
                    align: 'center',
                    key: 'realUnit'
                },

                {
                    title: '更新时间',
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

    },
    mounted() {
     
      
    },
    methods: {
        getPowerInfo() {
            this.powerflag = true;
                setTimeout(() => {
            this.initdianliu();
            this.initwendu();
          },1000)
        },
        initdianliu() {
            var myChart = echarts.init(document.getElementById('electricity'));
                myChart.resize()
            myChart.setOption({
                title: {
                    text: '电流趋势变化图',

                },
                // tooltip: {
                //     trigger: 'axis'
                // },
                legend: {
                    data: ['剩余电流', 'A相电流', 'B相电流', 'C相电流'],
                    right: 'top'
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                // toolbox: {
                //     feature: {
                //         saveAsImage: {}
                //     }
                // },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    type: 'value',
                    splitLine: {
                        show: false,
                    }
                },
                series: [{
                        name: '剩余电流',
                        type: 'line',
                        // stack: '总量',
                        data: [120, 132, 101, 134, 90, 230,231]
                    },
                    {
                        name: 'A相电流',
                        type: 'line',
                        // stack: '总量',
                        data: [220, 182, 191, 234, 290, 330,230]
                    },
                    {
                        name: 'B相电流',
                        type: 'line',
                        // stack: '总量',
                        data: [150, 232, 201, 154, 190, 330,230]
                    },
                    {
                        name: 'C相电流',
                        type: 'line',
                        // stack: '总量',
                        data: [320, 332, 301, 334, 390, 33,230]
                    },

                ]
            });
                window.addEventListener('resize', function() {
            myChart.resize()
          })
        },
        initwendu() {
            var myChart = echarts.init(document.getElementById('temperature'));
              myChart.resize()
            myChart.setOption({
                title: {
                    text: '温度趋势变化图',
                },
                // tooltip: {
                //     trigger: 'axis'
                // },
                legend: {
                    data: ['剩余电流', 'A相电流', 'B相电流', 'C相电流'],
                    right: 'top'
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                // toolbox: {
                //     feature: {
                //         saveAsImage: {}
                //     }
                // },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    type: 'value',
                    splitLine: {
                        show: false,
                    }
                },
                series: [{
                        name: '剩余电流',
                        type: 'line',
                        // stack: '总量',
                        data: [120, 132, 101, 134, 90, 230,130]
                    },
                    {
                        name: 'A相电流',
                        type: 'line',
                        // stack: '总量',
                        data: [220, 182, 191, 234, 290, 330,230]
                    },
                    {
                        name: 'B相电流',
                        type: 'line',
                        // stack: '总量',
                        data: [150, 232, 201, 154, 190, 330,230]
                    },
                    {
                        name: 'C相电流',
                        type: 'line',
                        // stack: '总量',
                        data: [320, 332, 301, 334, 390, 33,230]
                    },

                ]
            });
    window.addEventListener('resize', function() {
            myChart.resize()
          })
        }
    },

}
</script>

<style lang="less" scoped>
    #powerxxId  /deep/ .ivu-modal-close{
             top:4px;
           }
    #powerxxId  /deep/ .ivu-modal{
             top:20px;
           }
   #powerxxId  /deep/ .ivu-modal-footer{
             border-top: 0px;
           }
  #powerxxId {
    .seaechType {

        .title {
            height: 20px;
            padding-left: 20px;
            font-size: 16px;
            border-left: 2px solid #339efd;
        }

        .sbcontent {
            display: flex;
            // margin-top: 15px;
            border-bottom: 1px solid #ccc;
            // height: 160px;
            padding: 5px 20px;
            .sbmc {
                flex: 1;
                text-align: left;
                    display: flex;
                flex-direction: column;
            }
        }

        .YDXQ {
            width: 100%;
            height: 300px;
            display: flex;
            #electricity {
                height: 100%;
                width: 50%;
            }

            #temperature {
                width: 50%;
                height: 100%;
            }
        }
    }
}
 .tableBox {
      height: calc(100% - 137px);

      }
</style>
