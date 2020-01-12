<template>

    <div class="containers cententpadding">

        <div class='rightHead'>
                <div class='sousuo1'>
                    <div class='searchMeun'>
                        <span class="wdName_text2">
                            关键字：
                        </span>
                        <Input v-model="WordName" placeholder="输入关键字标题" style="width: 15%" />

                        <span class="wdName_text">
                            发布时间：
                        </span>
                        <DatePicker @on-change="handleChange" format="yyyy-MM-dd " type="date" placeholder="请输入时间" style="width: 15%"></DatePicker>

                        <!-- <span class="wdName">
                        分类&nbsp;:&nbsp;
                    </span>
                    <Select v-model="floorNum" style="width:10%;margin-right:50px">
                        <Option v-for="item in floorLIst" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select> -->
                        <Button class='wdName' type="info" @click="seletmh">查询</Button>

                        <Modal width="720" v-model="addFlag" :title="this.titlename" @on-ok="ok" @on-cancel="cancel">
                            <div class="addDraw">
                                <span>标&nbsp;&nbsp;&nbsp;&nbsp;题 &nbsp; :&nbsp;&nbsp; </span>
                                <Input v-model="setlist.title" placeholder="输入文档名称" style="width: 540px;margin-right:30px;" />

                            </div>
                            <div class="addDraw">
                                <span class="wdName">
                                    发布时间&nbsp;:&nbsp;
                                </span>
                                <DatePicker :value="setlist.releaseTime" @on-change='setlist.releaseTime=$event' format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="输入时间" style="width: 540px"></DatePicker>

                            </div>
                            <div class="addDraw">
                                <span>发布单位&nbsp;:&nbsp; </span>
                                <Input v-model="setlist.unit" placeholder="输入单位名称" style="width: 540px;" />

                            </div>
                            <div class="addDraw">
                                <span>分&nbsp;&nbsp;&nbsp;&nbsp;类&nbsp;&nbsp; &nbsp;:&nbsp;&nbsp;</span>
                                <!-- <Input v-model="setlist.type" placeholder="输入分类名称" style="width:540px ;margin-right:30px;" /> -->
                                <Select v-model="setlist.type" style="width:540px ;margin-right:30px;"  clearable>
                                            <Option v-for="item in this.typelist" :value="item.VALUE" :key="item.VALUE">{{ item.LABEL }}</Option>
                                        </Select>
                            </div>
                            <div class="addDraw" style="display:flex">
                                <span>上传文件 :&nbsp;&nbsp; </span>
                                <div>
                                    <Upload :before-upload="handleUpload" multiple action='#'>
                                        <Button icon="ios-cloud-upload-outline">选择文件</Button>
                                    </Upload>
                                    <div v-if="file !== null">已选择文件: {{ file.name }} </div>
                                </div>
                            </div>
                            <div>
                                <editor-bar v-model="setlist.note" :isClear="isClear" @change="change"></editor-bar>

                            </div>

                        </Modal>
                    </div>
                </div>


            <div class='tableBox'>
                <div class='btnclass'>
                    <Poptip confirm title="确定删除吗" @on-ok="deleteusers">
                        <Button class='wdName' type="primary" ghost>删除</Button>
                    </Poptip>
                    <Button class='Btn_right wdName' type="primary" ghost @click="addfb()">发布</Button>
                </div>
                <Table stripe border :columns="TableTitle" :data="historyData" @on-select-all='selectallchange' @on-select-all-cancel='selectallcanl' @on-select='selectionchange' @on-select-cancel="cancelSeclect">
                    <template slot-scope="{ row, index }" slot="date">
                        <span> {{ row.releaseTime }}</span>
                    </template>
                    <template slot-scope="{ row, index }" slot="TITLE">
                        <span @click="updatexq(row)"> {{row.title}} </span>
                    </template>
                    <template slot-scope="{ row, index }" slot="downFile">
                        <Button type="primary" ghost size="small" style="margin-right: 5px" @click="down(row)">下载</Button>
                    </template>
                    <template slot-scope="{ row, index }" slot="total">
                        <Icon type="md-stats" @click="show(row)" style="font-size:24px" />
                    </template>
                </Table>
                <Page :total="dataCount" :page-size="pageSize" show-total class="paging" @on-change="changepage"></Page>
            </div>
        </div>

    </div>
</template>

<script>
import EditorBar from './edit.vue'
import {
    getDate,
    getTime
} from '../../libs/tools'
import {
    savexfxc,
    getxfxc,
    dekxfxc,
    savedownload,
    xcdictionarie
} from 'api/free'
import {
    upLoading,
    download
} from 'api/drawManage'
export default {
    components: {

        EditorBar
    },
    data() {
        return {
            guid: '',
            ajaxHistoryData: [],
            // 初始化信息总条数
            dataCount: 0,
            // 每页显示多少条
            pageSize: 10,
            historyData: [],
            isClear: false,
            addFlag: false,
            editFlag: false,
            detail: null,
            WordName: null,
            startTime: null,
            endTime: null,
            titlename: "发布通知公告",
            drawCategory: null,
            setlist: {
                title: null,
                releaseTime: null,
                unit: null,
                type: null,
                clickNum: '',
                downloadNum: '',
                note:null
            },
            floorLIst: [{
                value: "open",
                label: "启用"
            }, {
                value: "close",
                label: "不启用"
            }],
            floorNum: null,
            updatelist: [],
            ids: [],
            TableTitle: [{
                    type: 'selection',
                    width: 60,
                    align: 'center',
                    key: 'guid'
                },
                {
                    title: '发布时间',
                    align: 'center',
                    key: 'releaseTime',
                    slot: 'date'
                },
                {
                    title: '标题',
                    align: 'center',
                    key: 'title',
                    slot: 'TITLE'
                },
                {
                    align: 'center',
                    title: '点击量',
                    key: 'clickNum'
                },
                {
                    title: '下载量',
                    align: 'center',
                    key: 'downloadNum'
                },
                {
                    title: '附件',
                    slot: 'downFile',

                    key: 'downFile'
                }
                // ,
                // {
                //     title: '统计',

                //     slot: 'total',
                //     key: 'total'
                // }
            ],
            filelist: {},
            file: null,
            loadingStatus: false,
            guid: '',
            var: null,
            typelist:[],
        }
    },
    methods: {
        ok() {
            if (this.titlename == '宣传详情') {
                let userId = localStorage.getItem("userId")
                savedownload({
                    objGuid: this.guid,
                    type: '0',
                    userId: userId
                }).then(res => {
                    if (res.status == 1) {
                        this.handleListApproveHistory()
                    }
                })

            } else {
                savexfxc(this.setlist).then(res => {
                    if (res.status == 1) {
                        // console.log(res)
                        // 创建FormData对象
                        let param = new FormData()
                        // 将得到的文件流添加到FormData对象
                        param.append('fileDiv', this.file)
                        param.append('fileUrl', res.obj.fileUrl)
                        param.append('objGuid', res.obj.objGuid)
                        param.append('tabName', res.obj.tabName)
                        upLoading(param, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        }).then(res => {
                            if (res.status == 1) {
                                this.file = null;
                            }
                        })
                        this.$Message.success('添加成功');
                        this.setlist = {};
                        this.handleListApproveHistory()
                    } else {
                        this.$Message.error('添加失败');
                    }
                })
                //   console.log(this.setlist)
            }

        },
        cancel() {
            if (this.titlename == '宣传详情') {
                let userId = localStorage.getItem("userId")
                savedownload({
                    objGuid: this.guid,
                    type: '0',
                    userId: userId
                }).then(res => {
                    if (res.status == 1) {
                        this.handleListApproveHistory()
                    }
                })

            } else {
                this.addFlag = false;
            }
        },
        //详情
        updatexq(row) {
            this.addFlag = true;
            this.titlename = "宣传详情";
            this.setlist = {
                title: row.title,
                releaseTime: row.releaseTime,
                unit: row.unit,
                type: row.type,
                note: row.note
            }
            this.$axios.post('/syspower/fireMdBase/getListAll?guid=' + row.guid).then(res => {
                    //   this.file=true;
                    if (res.data.obj.length != 0) {
                        this.var = res.data.obj[0].guid
                        this.file = res.data.obj[0]
                        if (this.file != null) {
                            this.file.name = this.file.fileNm + '.' + this.file.fileExt
                        }
                    } else {
                        this.file = null
                        this.var = null
                    }
                })
            this.guid = row.guid
        },
        //新增
        addfb() {
            this.addFlag = true;
            this.titlename = "发布通知公告";
            this.setlist = {};
        },
        handleUpload(file) {

            this.file = file;
            return false;
        },
        deleteusers() {
            for (const key in this.updatelist) {
                this.ids.push(this.updatelist[key]['guid'])
            }
            let id = this.ids.join(',');
            if (id == "") {
                this.$Message.warning('请先选择删除的数据')
            } else {
                this.$axios.post('/syspower/xfxc/deleteXfxcInformation?guids=' + id).then(res => {
                    if (res.data.status == 1) {
                        this.$Message.success('删除成功')
                        this.handleListApproveHistory();
                        this.ids = [];
                        this.updatelist = [];
                    }
                })
            }
        },
        getlist(params) {
            this.$axios.post('/syspower/xfxc/getXfscList?pageNum=' + params.pageNum + '&pageSize=' + params.pageSize, {
                title: this.WordName,
                createDate: this.startTime
            }).then(res => {
                //  console.log(res)
                if (res.data.status == 1) {
                    this.ajaxHistoryData = res.data.obj.list;
                    this.dataCount = res.data.obj.total;
                    this.historyData = this.ajaxHistoryData;
                }
            })
        },
        seletmh() {
            this.handleListApproveHistory()
        },
        handleChange(daterange) {
            this.startTime = daterange;
            console.log(this.startTime)
        },
        // 获取历史记录信息
        handleListApproveHistory() {
            let seletlist = {
                pageNum: 0,
                pageSize: 10
            };
            this.getlist(seletlist);
        },
        changepage(index) {
            let seletlist = {
                pageNum: index,
                pageSize: 10
            };
            this.getlist(seletlist);
        },
        selectionchange(res) {
            if (res) {
                this.updatelist = res;
            }

        },
             cancelSeclect(selection) {
            this.updatelist = selection
        },
        selectallchange(res){
           this.updatelist = res
        },
        selectallcanl(res){
            this.updatelist = res
        },
        change() {
            console.log(val)
        },
        show(index) {
            console.log(index)
        },
        down(res) {
            let userId = localStorage.getItem("userId")
            window.open('/syspower/fireMdBase/downloadByObjGuid?objGuid=' + res.guid + '')
            savedownload({
                objGuid: res.guid,
                type: '1',
                userId: userId
            }).then(res => {
                if (res.status == 1) {
                    this.handleListApproveHistory()
                }
            })
        },
    },
    created() {
        this.handleListApproveHistory()
        xcdictionarie({}).then(res=>{
               this.typelist=res.obj;
        })
    }
}
</script>

<style lang="less" scoped>

.addDraw {
    padding: 10px 0;

}

.text {
    min-height: 200px;
}
</style>
