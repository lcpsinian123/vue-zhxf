<!--
 * @Author: your name
 * @Date: 2019-10-28 10:57:42
 * @LastEditTime: 2019-11-29 17:11:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-zzxf\src\components\securityAssessment\selfAssessment.vue
 -->
<template>
<div class="containers cententpadding">
    <div class='sousuo1'>
         <div class="sousuo">
            <div class="pgzt">
                <span>评估状态：</span>
                <Select v-model='status' placeholder="请选择" clearable>
                    <Option value="1">已评估</Option>
                    <Option value="0">未评估</Option>
                    <Option value="">全部</Option>
                </Select>
            </div>
            <div class="pgsj">
                <span>评估时间：</span>
                <DatePicker :value='SEstartTime' @on-change="SEstartTime==$event" type="date" placeholder="开始时间"></DatePicker>
                —
                <DatePicker :value='SEendTime' @on-change="SEendTime==$event" type="date" placeholder="结束时间"></DatePicker>
            </div>
            <div class="btn">
                <Button @click='getselfAss' type="info">查询</Button>
            <!--  <Button type="primary" style="padding:0px 20px;margin-left:20px;">导出</Button> -->
            </div>
        </div>
    </div>
   
    <div class="tablediv">
        <Table stripe border :columns="TableTitle" :data="TableData">
            <template slot-scope="{ row, index }" slot="sortNum">
                <span>{{index+1}}</span>
            </template>
            <template slot-scope="{ row, index }" slot="assessDate">
                <span>{{ row.assessDate}} </span>
            </template>
            <template slot-scope="{ row, index }" slot="endDate">
                <span>{{ row.endDate }} </span>
            </template>
            <template slot-scope="{ row, index }" slot="isScore">
                <span v-if="row.isScore=='1'">已评估</span>
                <span v-if="row.isScore=='0'">未评估</span>
            </template>
            <template slot-scope="{ row, index }" slot="action">
                <Button type="success" ghost size="small" @click='clickdetail(row)' style="margin-right: 5px">详情</Button>
                <Button v-if="row.isScore=='0'" type="warning" ghost size="small" @click='openAssessModel(row)'>评&nbsp;&nbsp;估</Button>
                <Button v-if="row.isScore=='1'" type="warning" ghost size="small" disabled @click='openAssessModel(row)'>已评估</Button>

            </template>

        </Table>

 <Page :total="dataCount" :page-size="pageSize" @on-change='pagechange' show-total class="paging"></Page>
        <Modal v-model="assessflag" width="1200" class='modelH' title="自主评分" style="overflow-x：hidden；overflow-y：auto；" @on-ok="asyncOK">
            <iframe
                  ref="iframe"
                    name="assessDetail"
                  :src="src1"
                  frameborder="0"
                  width="100%"
                  height="100%"
                ></iframe> 
        </Modal>
        <Modal v-model="assessDetail" width="1200" class='modelH' title="评分详情" style="overflow-x：hidden；overflow-y：auto；">
            <iframe
                  ref="iframe"
                  :src="src"
                  frameborder="0"
                  width="100%"
                  height="100%"
                ></iframe> 

        </Modal>
    </div>
</div>
</template>

<script>
import {
    addTask,
    getTaskList,
    getTaskListAll,
    deleteTask,
    updateTask,
    getListAll,
    getAssListAll,
    scoreSubmit,
    getAssessDetail
} from 'api/security';

import {upLoading} from 'api/drawManage'
export default {
    name: 'selfAssessment',
    data() {
        return {
          
            SEendTime: null,
            // 初始化信息总条数
            dataCount: 0,
            // 每页显示多少条
            pageSize: 10,
            pageNum: 1,
            assessDetail: false,
            SEstartTime: null,
            status: null,
            taskID: null,
            assessflag: false,
            src: '',
            src1:'',
            TableTitle: [{
                    title: '序号',
                    width: 80,
                    key: 'sortNum',
                    slot: 'sortNum'
                },
                {
                    title: '评估名称',
                    width: 300,
                    key: 'name'
                },
                {
                    title: '评估截止时间',
                    slot: 'endDate',
                    key: 'endDate'
                },
                {
                    title: '评估时间',
                    slot: "assessDate",
                    key: 'assessDate'
                },
                {
                    title: '评分',

                    key: 'totalScore'
                },
                {
                    title: '评估单位',

                    key: 'objName'
                },
                {
                    title: '评估人',

                    key: 'loginName'
                },
                {
                    title: '状态',
                    slot: 'isScore',
                    key: 'isScore'
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
                    guid: '',
                    isScore: 1,
                    name: "2019年2月22日消防安全评估",
                    endDate: '2019-04-10',
                    assessDate: '2019-04-11',
                    totalScore: '100',
                    objId: 1,
                    objName: '振南物业',
                    loginName: '李湘',

                },
            ],
            file:null,
            setting: {
                view: {
                    addHoverDom: this.addHoverDom,
                    // removeHoverDom: this.removeHoverDom,
                    // showLine: false,
                    showIcon: true,
                    // dblClickExpand:this.dblClickExpand
                    addDiyDom: this.addDiyDom,

                },
                data: {
                    keep: {
                        parent: false,
                        leaf: false
                    },
                    key: {
                        name: "name"
                    },
                    simpleData: {
                        enable: true,
                        idKey: "guid",
                        pIdKey: "mpid"
                    }

                },
                check: {
                    enable: false
                },
                edit: {
                    drag: {
                        isCopy: false,
                        isMove: false
                    },
                    enable: false,
                    showRenameBtn: false
                },
                // async: {
                //     enable: true, //开启异步加载  
                //     //如果设置为 true，请务必设置 setting.async 内的其它参数。  
                //     //如果需要根节点也异步加载，初始化时 treeNodes 参数设置为 null 即可  

                //     url: objArc.httpUrl + "scoreType/queryAll", //设置异步获取节点的 URL 地址  
                //     autoParam: ["code"] //设置父节点数据需要自动提交的参数  
                // },
                callback: {
                    onClick: this.onClick,
                    // onRemove: this.onRemove,
                    onRightClick: this.rightClick,
                    onAsyncSuccess: this.zTreeOnAsyncSuccess,
                    beforeEditName: this.beforeEditName
                    // beforeDrop: zTreeBeforeDrop
                }
            },
            setting1: {
                view: {
                    addHoverDom: this.addHoverDom,
                    // removeHoverDom: this.removeHoverDom,
                    // showLine: false,
                    showIcon: true,
                    // dblClickExpand:this.dblClickExpand
                    addDiyDom: this.addDiyDom1,

                },
                data: {
                    keep: {
                        parent: false,
                        leaf: false
                    },
                    key: {
                        name: "name"
                    },
                    simpleData: {
                        enable: true,
                        idKey: "guid",
                        pIdKey: "mpid"
                    }

                },
                check: {
                    enable: false
                },
                edit: {
                    drag: {
                        isCopy: false,
                        isMove: false
                    },
                    enable: false,
                    showRenameBtn: false
                },
                // async: {
                //     enable: true, //开启异步加载  
                //     //如果设置为 true，请务必设置 setting.async 内的其它参数。  
                //     //如果需要根节点也异步加载，初始化时 treeNodes 参数设置为 null 即可  

                //     url: objArc.httpUrl + "scoreType/queryAll", //设置异步获取节点的 URL 地址  
                //     autoParam: ["code"] //设置父节点数据需要自动提交的参数  
                // },
                callback: {
                    onClick: this.onClick,
                    // onRemove: this.onRemove,
                    onRightClick: this.rightClick,
                    onAsyncSuccess: this.zTreeOnAsyncSuccess,
                    beforeEditName: this.beforeEditName
                    // beforeDrop: zTreeBeforeDrop
                }
            },
            zNodes: [],
            
        }
    },
    created() {
        this.getselfAss()
    },
    methods: {
         asyncOK(){
            window.frames['assessDetail'].submitFun().then(res=>{
                        console.log(11)
                        if(res){
                           this.getselfAss();
                        }
                        return ;
                    })
        },
        // 上传文件
        handerUpLoad(file){
            this.file=file
            return false;   
        },
        // 点击详情
        clickdetail(data) {
            console.log(data)
            this.assessDetail = true;
            this.taskID = data.guid;
            this.src = "http://124.193.197.203:8087/zhxf/page/system/scoreBaseConfigure/addvcdQuota.html?taskGuid="+data.guid+"&rootGuid="+data.rootGuid;
            // getAssessDetail({
            //     taskGuid: data.guid
            // }).then(res => {
            //     console.log(res)
            //     if (res.status == '1') {

            //         this.zNodes = res.obj
            //         $.fn.zTree.init($("#treeDemo1"), this.setting1, this.zNodes);
            //         $.fn.zTree.getZTreeObj("treeDemo1").expandAll(true)

            //     }
            // })

        },
        // 获取信息列表
        getselfAss() {
            var obj = {
                pageNum: this.pageNum,
                pageSize: this.pageSize,
                status: this.status,
                endTime: this.SEenTime || null,
                startTime: this.SEstartTime || null,
            }
            getTaskList(obj, {
                pageNum: this.pageNum,
                pageSize: this.pageSize,
                isScore: this.status,
                issuedStarts:1,
                startTime: this.SEstartTime || null,
                endTime: this.SEenTime || null
            }).then(res => {
                console.log(res)
                // this.dataCount=this.obj.total
                if (res.status == '1') {
                 this.dataCount=res.obj.total
                    this.TableData = res.obj.list
                }
            })

        },
        //  格式化时间
        getTime: function (time) {
            var date = new Date(time)
            var Y = date.getFullYear() + '-'
            var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
            var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
            var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
            var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
            var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
            return Y + M + D + h + m + s
        },
        openAssessModel(node) {
            this.taskID = node.guid
            this.src1 = "http://124.193.197.203:8087/zhxf/page/system/scoreBaseConfigure/addvcdQuota.html?type=1&taskGuid="+node.guid+"&rootGuid="+node.rootGuid;
            // getAssListAll({
            //     guid: node.rootGuid
            // }).then(res => {
            //     console.log(res)
            //     if (res.status == '1') {

            //         this.zNodes = res.obj
            //         $.fn.zTree.init($("#treeDemo"), this.setting, this.zNodes);
            //         $.fn.zTree.getZTreeObj("treeDemo").expandAll(true)

            //     }
            // })
            console.log(node)
            this.assessflag = true
        },
        addDiyDom: function (treeId, treeNode) {

            var aObj = $("#" + treeNode.tId + '_a');
            var editStr = "<input placeholder='" + treeNode.totalPoint + "' type='text' class='scoreInput' style='float:right; margin-right:20px;border:1px solid #ccc; width:100px;' guid='" + treeNode.guid + "' mpid='" + treeNode.mpid + "'  id='diyBtn_" + treeNode.tId + "' ></input>";
            aObj.after(editStr);
            // 显示省略号
            var spantxt = $("#" + treeNode.tId + "_span").html();
            if (spantxt.length > 12) {
                spantxt = spantxt.substring(0, 12) + "...";
                $("#" + treeNode.tId + "_span").html(spantxt);
            }
            var scoList = $('.scoreInput')
            //     设置每个节点得分值
            // this.zNodes.forEach(item => {
            //     for (var i = 0; i < scoList.length; i++) {
            //         if (item.guid == scoList[i].attributes[4].nodeValue) {
            //             scoList[i].attributes[0].value = item.totalPoint
            //         }
            //     }

            // })
        },
        addDiyDom1: function (treeId, treeNode) {
            console.log(treeNode)
            if(treeNode.score==null){
                treeNode.score=0
            }

            var aObj = $("#" + treeNode.tId + '_a');
            var editStr = "<input value='" + treeNode.score + "' type='text' class='scoreInput' style='float:right; margin-right:20px;border:1px solid #ccc; width:100px;' guid='" + treeNode.guid + "' mpid='" + treeNode.mpid + "' disabled='disabled'  id='diyBtn_" + treeNode.tId + "' ></input>";
            aObj.after(editStr);
            // 显示省略号
            var spantxt = $("#" + treeNode.tId + "_span").html();
            if (spantxt.length > 12) {
                spantxt = spantxt.substring(0, 12) + "...";
                $("#" + treeNode.tId + "_span").html(spantxt);
            }
            var scoList = $('.scoreInput')
            //     设置每个节点得分值
            // this.zNodes.forEach(item => {
            //     for (var i = 0; i < scoList.length; i++) {
            //         if (item.guid == scoList[i].attributes[4].nodeValue) {
            //             scoList[i].attributes[0].value = item.totalPoint
            //         }
            //     }

            // })
        },
        pagechange(i){
           this.pageNum=i
           this.getselfAss()
        },
        submitScore() {
            var scoreList = $('.scoreInput')
            console.log(scoreList)

            var strId = '';
            var score = 0
            for (var i = 0; i < scoreList.length; i++) {
                if (scoreList[i].attributes[5].value == 'null') {
                    scoreList[i].attributes[5].value = 0
                }
                strId += scoreList[i].attributes[4].value + ',' + scoreList[i].attributes[5].value + ',' + scoreList[i].value + ';'
                score +=Number(scoreList[i].value)
            }
            console.log()
            scoreSubmit({
                taskGuid: this.taskID,
                nodeId: strId,
                score: score
                }).then(res => {
                    console.log(res)
                if (res.status == 1) {

                    this.$Message.info('提交成功');
                     
                        // 创建FormData对象
                let param=new FormData()
            // 将得到的文件流添加到FormData对象
                param.append('fileDiv', this.file)
                 param.append('fileUrl', res.obj.fileUrl)
                   param.append('objGuid',res.obj.objGuid)
                    param.append('tabName',res.obj.tabName)
                    upLoading(param,{
                        headers: {
                        'Content-Type': 'multipart/form-data'
                        } 
                    }).then(res=>{
                        console.log(11)
                        if(res.status==1){
                            this.file = null;
                        }
                    })
                  this.$Message.success('添加成功');
                //   this.setlist={};
                this.getselfAss()
                // this.openAssessModel(this.taskID)
                //   this.handleListApproveHistory()
                }else{
                 this.$Message.error('添加失败');
                }
                
            });
          
        }
    },

}
</script>

<style lang="less" scoped>
.containers {
    width: 100%;
    height: 100%;
    background-color: #edf5f7;
}



.scoreInput {
    float: right;
}
.modelH /deep/ .ivu-modal-footer .upload {
    display: flex;
    line-height: 60px;

}

.modelH /deep/ .ivu-modal-footer .upload .uploadFile {
    margin: 0 820px 0 20px;
}

.modelH /deep/ .ivu-modal-body {
    height: 600px;
}
</style><style>


</style>
