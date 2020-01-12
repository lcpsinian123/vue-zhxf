<template>
<div class="containers cententpadding">
    <div class="leftTree">
        <Tree :data="treedata" @on-select-change='selectchange'></Tree>
    </div>
    <div class="rightHead">
        <div class="sousuo1">
                <div class="searchMeun">
                    <span style="width:100px;text-align:right;">文档名称：</span>
                    <Input v-model="drawCategory.name" placeholder="输入文档名称" style="width: 10%" />
                    <span style="width:100px;text-align:right;">类型：</span>
                    <Select v-model="drawCategory.type" style="width:10%" clearable>
                        <Option v-for="item in wddictionaries" :value="item.VALUE" :key="item.VALUE">{{ item.LABEL }}</Option>
                    </Select>
                    <span style="width:100px;text-align:right;">时间：</span>
                    <DatePicker :value="drawCategory.startTime" format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="开始时间" style="width: 12%" @on-change="drawCategory.startTime=$event"></DatePicker>
                     — 
                    <DatePicker :value="drawCategory.endTime" format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="结束时间" style="width: 12%" @on-change="drawCategory.endTime=$event"></DatePicker>

                    <Button class="wdName" type="info" @click="getQuery">查询</Button>
                </div>
 
        </div>
            <Modal width="700" v-model="addFlag" title="添加文档" @on-ok="getAdd" ref="floorNum">
                <div class="addDraw">
                    <span>文档名称 &nbsp;:&nbsp;&nbsp;</span>
                    <Input v-model="floorNum.name" placeholder style="width: 230px;margin-right:30px;" />
                    <span class="drawLeft">文档类型 &nbsp;:&nbsp;&nbsp;</span>
                    <Select v-model="floorNum.type" style="width:230px">
                        <Option v-for="item in wddictionaries" :value="item.VALUE" :key="item.VALUE">{{ item.LABEL }}</Option>
                    </Select>
                </div>
                <div class="addDraw">
                    <span>物业信息 &nbsp;:&nbsp;&nbsp;</span>
                    <Select v-model="floorNum.ppid" style="width:230px;margin-right:30px;" @on-change="wychange" clearable>
                        <Option v-for="item in this.wylist" :value="item.ppid" :key="item.ppid">{{ item.ppname }}</Option>
                    </Select>
                    <span>单位信息 &nbsp;:&nbsp;&nbsp;</span>
                    <Select v-model="floorNum.cpid" style="width:230px;" @on-change="dwchange" clearable>
                        <Option v-for="item in this.dwlist" :value="item.cpid" :key="item.cpid">{{ item.cpname }}</Option>
                    </Select>
                </div>
                <div class="addDraw">
                    <span>建筑信息 &nbsp;:&nbsp;&nbsp;</span>
                    <Select v-model="floorNum.bdid" style="width:230px;margin-right:30px;" @on-change="jzchange" clearable>
                        <Option v-for="item in this.jzwlist" :value="item.bdid" :key="item.bdid">{{ item.note }}</Option>
                    </Select>
                    <span>楼层信息 &nbsp;:&nbsp;&nbsp;</span>
                    <Select v-model="floorNum.flid" style="width:230px;" clearable>
                        <Option v-for="item in this.lclist" :value="item.flid" :key="item.flid">{{ item.flname }}</Option>
                    </Select>
                </div>
                <div class="addDraw">
                    <span class="drawLeft">是否在用 &nbsp;:&nbsp;&nbsp;</span>
                    <Select v-model="floorNum.isUse" style="width:230px;margin-right:30px;">
                        <Option v-for="item in floorLIst" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <span>生效日期 &nbsp;:&nbsp;&nbsp;&nbsp;</span>
                    <DatePicker :value="floorNum.createDate" @on-change="floorNum.createDate=$event" format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="请输入日期" style="width: 230px"></DatePicker>
                </div>
                <div class="addDraw"></div>
                <div class="addDraw" style="display:flex">
                    <span>上传文件 &nbsp;:&nbsp;&nbsp;</span>
                    <div>
                        <Upload :before-upload="handleUpload" multiple action="#">
                            <Button icon="ios-cloud-upload-outline" style="width: 230px">选择文件</Button>
                        </Upload>
                        <div v-if="file !== null">已选择文件: {{ file.name }}</div>
                    </div>
                </div>
            </Modal>
            <Modal width="700" v-model="editFlag" title="编辑" @on-ok="getAlter">
                <div class="addDraw">
                    <span>文档名称 &nbsp;:&nbsp;&nbsp;</span>
                    <Input v-model="WordName.name" placeholder="输入文档名称" style="width: 230px;margin-right:30px;" />
                    <span class="drawLeft">文档类型 &nbsp;:&nbsp;&nbsp;</span>
                    <Select v-model="WordName.type" style="width:230px">
                        <Option v-for="item in wddictionaries" :value="item.VALUE" :key="item.VALUE">{{ item.LABEL }}</Option>
                    </Select>
                </div>
                <div class="addDraw">
                    <span>物业信息 &nbsp;:&nbsp;&nbsp;</span>
                    <Select v-model="WordName.ppid" style="width:230px;margin-right:30px;" @on-change="wychange" clearable>
                        <Option v-for="item in this.wylist" :value="item.ppid" :key="item.ppid">{{ item.ppname }}</Option>
                    </Select>
                    <span>单位信息 &nbsp;:&nbsp;&nbsp;</span>
                    <Select v-model="WordName.cpid" style="width:230px;" @on-change="dwchange" clearable>
                        <Option v-for="item in this.dwlist" :value="item.cpid" :key="item.cpid">{{ item.cpname }}</Option>
                    </Select>
                </div>
                <div class="addDraw">
                    <span>建筑信息 &nbsp;:&nbsp;&nbsp;</span>
                    <Select v-model="WordName.bdid" style="width:230px;margin-right:30px;" @on-change="jzchange" clearable>
                        <Option v-for="item in this.jzwlist" :value="item.bdid" :key="item.bdid">{{ item.note }}</Option>
                    </Select>
                    <span>楼层信息 &nbsp;:&nbsp;&nbsp;</span>
                    <Select v-model="WordName.flid" style="width:230px;" clearable>
                        <Option v-for="item in this.lclist" :value="item.flid" :key="item.flid">{{ item.flname }}</Option>
                    </Select>
                </div>
                <div class="addDraw">
                    <span class="drawLeft">是否在用 &nbsp;:&nbsp;&nbsp;</span>
                    <Select v-model="WordName.isUse" style="width:230px;margin-right:30px;">
                        <Option v-for="item in floorLIst" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                    <span>生效日期 &nbsp;:&nbsp;&nbsp;&nbsp;</span>
                    <DatePicker :value="WordName.createDate" @on-change="handleChange" format="yyyy-MM-dd HH:mm:ss" type="date" placeholder="请输入日期" style="width: 230px"></DatePicker>
                </div>
                <div class="addDraw"></div>
                <div class="addDraw" style="display:flex">
                    <span>上传文件 &nbsp;:&nbsp;&nbsp;</span>
                    <div>
                        <Upload :before-upload="handleUpload" multiple action="#" :max-size="50 * 1024"
                            :on-exceeded-size="handleMaxSize">
                            <Button icon="ios-cloud-upload-outline" style="width: 230px">选择文件</Button>
                        </Upload>
                        <div v-if="file !== null">已选择文件: {{ file.name }}</div>
                    </div>
                </div>
            </Modal>
            <div class="tableBox">
                <div class="btnclass">
                    <Button type="primary" @click="addxfda()" ghost>添加</Button>
                    <Button ghost type="primary" @click="updateusers">编辑</Button>
                    <Poptip confirm title="确定删除吗" @on-ok="getDelete">
                        <Button type="primary" ghost>批量删除</Button>
                    </Poptip>
                    <Button ghost type="primary">导出</Button>
                </div>
                <Table stripe border :columns="TableTitle" :data="TableData1" @on-select="selectionchange" @on-select-cancel="cancelSeclect">
                    <template slot-scope="{ row, index }" slot="action">
                        <Button type="primary" ghost size="small" style="margin-right: 5px" @click="down(row)">下载</Button>
                        <Button type="primary" ghost size="small" @click="yulan(row)">预览</Button>
                    </template>
                </Table>
                <Page :total="dataCount" :page-size="pageSize" show-total class="paging" current.sync="current" @on-change="changepage"></Page>
               
            </div>

    </div>
</div>
</div>
</template>

<script>
/////////增         改          删      查          初始    上传
import {
    addData,
    alterData,
    deleteData,
    queryData,
    listData,
    upLoading,
    wddictionaries,
    wyjc,
    dwjc,
    jzujc,
    lcjc,
    getMdBase,
    doctreelist,
    AhBasetreelist
} from 'api/docManage'

export default {
    data() {
        return {
            addFlag: false,
            editFlag: false,
            // 初始化信息总条数
            dataCount: 0,
            // 每页显示多少条
            pageSize: 10,
            ajaxHistoryData: [],
            file: null,
            historyData: [],
            ids: [],
            updatelist: [],
            treedata: [

            ],
            // floorNum: null,
            //添加数据模块的双向绑定
            floorNum: {
                guid: '',
                name: '',
                type: '',
                createDate: '',
                flid: '',
                ppid: '',
                cpid: '',
                bdid: '',

                isUse: ''
            },

            // WordName: null,
            //修改数据
            WordName: {
                name: '',
                type: '',
                createDate: '',
                site: '',
                flid: '',
                ppid: '',
                cpid: '',
                bdid: '',
                isUse: ''
            },
            result1: null,
            startTime: '',
            endTime: '',
            drawCategory: {
                name: '',
                type: '',
                startTime: '',
                endTime: '',
                isUse: ''
            },
            floorLIst: [{
                    value: '1',
                    label: '启用'
                },
                {
                    value: '0',
                    label: '不启用'
                }
            ],
            TableTitle: [{
                    type: 'selection',
                    width: 60,
                    align: 'center',
                    key: 'guid'
                },
                {
                    title: '文档名称',
                    key: 'name'
                },
                {
                    title: '文档类型',

                    key: 'type',
                    render: (h, params) => {
                        let status = params.row.type //0:空闲  1:游戏  2:未上线
                        if (status == 1) {
                            return h('span', '消防预案')
                        }
                        if (status == 2) {
                            return h('span', '规章制度')
                        }
                        if (status == 3) {
                            return h('span', '法律法规')
                        }
                        if (status == 4) {
                            return h('span', '合同文书')
                        }
                        if (status == 5) {
                            return h('span', '演练记录')
                        }
                        if (status == 6) {
                            return h('span', '消防培训')
                        }
                    }
                },
                {
                    title: '上传时间',

                    key: 'createDate'
                },
                {
                    title: '物业管理单位',

                    key: 'ppname'
                },
                {
                    title: '大楼地址',
                    key: 'address'
                },
                {
                    title: '是否在用',

                    key: 'isUse',
                    render: (h, params) => {
                        let status = params.row.isUse //0:空闲  1:游戏  2:未上线
                        if (status == 0) {
                            return h('span', '未启用')
                        }
                        if (status == 1) {
                            return h('span', '启用')
                        }
                    }
                },

                {
                    title: '操作',
                    key: 'action',
                    slot: 'action'
                }
            ],
            ajaxTableData1: [],
            TableData1: [],
            wddictionaries: [],
            wylist: [],
            dwlist: [],
            jzwlist: [],
            lclist: [],
            var: null,
            dwjclist: [],
            jzujclist: [],
            lcjclist: [],
            modal11: false,
            sts: '',
            fireBase: {},
            filename:null,

        }
    },
    methods: {
        selectchange(res){
            // console.log(res)
              this.fireBase=res[0].fireBase;
              if(this.fireBase){
                 this.handleListApproveHistory()
              }
            
        },

        down(index) {
            window.open('/syspower/fireMdBase/downloadByObjGuid?objGuid=' + index.guid + '')
        },
        yulan(row) {
            let glist = null
            this.$axios.post('/syspower/fireMdBase/getListAll?guid=' + row.guid).then(res => {
                glist = res.data.obj[0].filePath
                let str = glist.split('/')[1]
                let sts = str.split('.')[0]
                window.open('http://192.168.2.185:8088/preview/preiview.html?fileName=' + sts, '_blank', 'toolbar=yes');
            })
        },
        handleMaxSize(file){
           this.$Notice.warning({
            title: '文件大小超限',
            desc: '文件  ' + file.name + ' 太大，上传文件大小不能超过50M.'
        });
        },
        selectionchange(res) {
            if (res) {
                this.updatelist = res
            }
        },
        handleChange(data) {
            this.floorNum.createDate = data
        },
        handleChanges(data) {
            console.log(data)
            this.drawCategory.startTime = data
        },
        handleChangess(data) {
            this.drawCategory.endTime = data
        },
        // 取消选中
        cancelSeclect(selection) {
            this.updatelist = selection
        },
        handleUpload(file) {
            this.file = file
  
            return false
        },
        //查询
        addxfda() {
            this.addFlag = true
            this.file = null
        },
        getQuery() {
            this.handleListApproveHistory()
        },
        //物业选择器
        wychange(val) {
            console.log(val, 'aaa')
            //    setTimeout(res=>{
            dwjc({
                ppid: val
            }).then(res => {
                this.dwlist = res.obj
            })
            //    },1000)
        },

        //单位选择器val
        dwchange(val) {
            jzujc({
                cpid: val
            }).then(res => {
                this.jzwlist = res.obj
            })
        },
        //建筑选择器
        jzchange(val) {
            lcjc({
                bdid: val
            }).then(res => {
                this.lclist = res.obj
            })
        },
        //页面初始
        getdata(params) {
            this.$axios
                .post('/syspower/fireAhBase/getList?pageNum=' + params.pageNum + '&pageSize=' + params.pageSize + '', {
                    name: this.drawCategory.name,
                    type: this.drawCategory.type,
                    startTime: this.drawCategory.startTime,
                    endTime: this.drawCategory.endTime,
                    ppid:this.fireBase.ppid,
                    cpid:this.fireBase.cpid,
                    bdid:this.fireBase.bdid,
                    flid:this.fireBase.flid
                })
                .then(res => {
                    this.ajaxTableData1 = res.data.obj.list
                    this.dataCount = res.data.obj.total
                    this.TableData1 = this.ajaxTableData1
                })
        },
        //添加数据
        getAdd() {
            //  this.file = null;
            addData(this.floorNum).then(res => {
                if (res.status == 1) {
               
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
                            this.file = null
                        }
                    })
                    this.$Message.success('添加成功')
                    this.floorNum = {}
                    this.handleListApproveHistory()
                } else {
                    this.$Message.error('添加失败')
                }
            })
            //   console.log(this.setlist)
        },
        //修改数据
        getAlter() {
            //删除附件
                           console.log(this.file.name)
                                 console.log(this.filename)
            if(this.filename!=this.file.name){
            this.$axios.post('/syspower/fireMdBase/delete?ids=' + this.var).then(res => {
                if (res.data.status == 1) {
                    //修改数据
                    alterData(this.WordName).then(res => {
                        if (res.status == 1) {
                            let param = new FormData()
                            // 将得到的文件流添加到FormData对象
                            param.append('fileDiv', this.file)
                            param.append('fileUrl', res.obj.fileUrl)
                            param.append('objGuid', res.obj.objGuid)
                            param.append('tabName', res.obj.tabName)
                            //新增附件
                            upLoading(param, {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                            }).then(res => {
                                if (res.status == 1) {
                                    this.file = null
                                    this.filename=null
                                }
                            })
                            this.$Message.success('修改成功')
                            this.handleListApproveHistory()
                            this.updatelist = []
                            
                        }
                    })
                }
            })
            }else{
                alterData(this.WordName).then(res => {
                        if (res.status == 1) {
                            this.$Message.success('修改成功')
                            this.handleListApproveHistory()
                            this.updatelist = []
                            this.file = null
                            this.filename=null
                        }
                        })
            }
            
        },
        //修改数据框的初始化数据渲染
        updateusers() {
            let list = this.updatelist
            if (list.length != 1) {
                this.$Message.warning('请先选择一行数据数据')
            } else {
                this.$axios.post('/syspower/fireMdBase/getListAll?guid=' + list[0].guid).then(res => {
                    //   this.file=true;
                    if (res.data.obj.length != 0) {
                        this.var = res.data.obj[0].guid
                        this.file = res.data.obj[0]
                        if (this.file != null) {
                            this.file.name = this.file.fileNm + '.' + this.file.fileExt;
                            this.filename = this.file.fileNm + '.' + this.file.fileExt;
                        }
                    } else {
                        this.file = null
                        this.var = null
                    }
                })
                this.editFlag = true
                //文档名称
                this.WordName.name = list[0].name
                //文档类型
                this.WordName.type = list[0].type
                this.WordName.ppid = list[0].ppid
                this.wychange(this.WordName.ppid)
                this.WordName.cpid = list[0].cpid
                this.dwchange(this.WordName.cpid)
                this.WordName.bdid = list[0].bdid
                this.jzchange(this.WordName.bdid)
                this.WordName.flid = list[0].flid
                this.WordName.guid = list[0].guid
                this.WordName.createDate = list[0].createDate
                this.WordName.isUse = list[0].isUse
            }
        },

        //删除数据
        getDelete() {
            if (this.updatelist.length == 0) {
                this.$Message.success('请先选择一条数据')
            } else {
                for (const key in this.updatelist) {
                    this.ids.push(this.updatelist[key]['guid'])
                }
                let id = this.ids.join(',')
                this.$axios.post('/syspower/fireAhBase/delete?ids=' + id + '').then(res => {
                    if (res.data.status == 1) {
                        this.$Message.success('删除成功')
                        this.handleListApproveHistory()
                        this.ids = []
                        this.updatelist = []
                    }
                })
            }
        },
        handleListApproveHistory() {
            let seletlist = {
                pageNum: 0,
                pageSize: 10
            }
            this.getdata(seletlist)
        },
        // 分页
        changepage(index) {
            let seletlist = {
                pageNum: index,
                pageSize: 10
            }
            this.getdata(seletlist)
        },
        dictionarie() {
            wddictionaries().then(res => {
                this.wddictionaries = res.obj
            })
            //物业
            wyjc({}).then(res => {
                    this.wylist = res.obj
                }),
                AhBasetreelist().then(res => {
                    this.treedata = res.obj
                })
        }
    },

    created() {
        this.handleListApproveHistory()
        this.dictionarie()
    }
}
</script>

<style lang="less" scoped>
.containers {
    display: flex;
    height: 100%;

    .leftTree {
        width: 166px;
        height: 100%;
        background: #fff;
        margin-right: 10px;
        // box-shadow: 0px 2px 6px -2px;
    }

    .rightTable {
        width: 100%;
        // padding: 3px;
        height: 100%;
              .tableBox {
                width: 100%;
                // padding-top: 20px;
                height: 100%;

                .ivu-table-tip {
                    overflow-x: hidden;
                }
            }

    }
}
.addDraw {
    padding: 10px 0;
}
</style>
