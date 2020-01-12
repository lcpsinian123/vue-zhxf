<!--
 * @Author: your name
 * @Date: 2019-10-24 16:34:09
 * @LastEditTime: 2019-11-28 20:08:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-zzxf\src\components\securityAssessment\indicatorSetting.vue
 -->
<template>
<div class="containers cententpadding">
        <iframe
          ref="iframe"
          src="http://124.193.197.203:8087/zhxf/page/system/scoreBaseConfigure/scoreBaseConfigure.html"
          frameborder="0"
          width="100%"
          height="100%"
        ></iframe> 
    </div>
</template>

<script>
import {
    addAssess,
    getListAll,
    getList,
    deleteAssess,
    updateAssess
} from 'api/security'

export default {
    name: 'indicatorSetting',

    data() {
        return {
            GUID: null,
            root: null,
            show: false,
            updateFlag: false,

            buttonProps: {
                type: 'default',
                size: 'small',
            },
            formValidate: {
                name: '',
                neirong: '',
                fangfa: '',
                score: '',
                interest: [],
                pfff: '',
                pfyj: '',

            },
            formValidatenull: {
                name: '',
                neirong: '',
                fangfa: '',
                score: '',
                interest: [],
                pfff: '',
                pfyj: '',

            },
            updateAss: {
                name: '',
                neirong: '',
                fangfa: '',
                score: '',
                interest: [],
                pfff: '',
                pfyj: '',

            },
        
            setting: {
                view: {
                    addHoverDom: this.addHoverDom,
                    removeHoverDom: this.removeHoverDom,
                    showLine: false,
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
                    enable: true,
                    showRenameBtn: true,
                },
                callback: {
                    onClick: this.onClick,
                    onRemove: this.onRemove,
                    onAsyncSuccess: this.zTreeOnAsyncSuccess,
                    beforeEditName: this.beforeEditName
                    // beforeDrop: zTreeBeforeDrop
                }
            },
            zNodes: []
        }
    },
    created() {
        this.getAssessList()
    },
    mounted() {

        // 初始化结构树

    },
    methods: {

        onClick(event, treeId, treeNode, clickFlag) {
            // console.log(treeNode)
            // this.addDiyDom(treeId,treeNode)
        },
        onRemove(event, treeId, treeNode) {
            console.log(treeNode)
            if(treeNode.mpid =='0'){
                this.$Message.error('无法删除此数据');
                return false 
            }else{
                 this.delAssess(treeNode.guid)
            }
            // this.delAssess(treeNode.guid)
        },
        beforeEditName(treeId, treeNode) {
            console.log(treeNode)
            this.updateFlag = true;
            this.show = false;
            this.GUID=treeNode.guid
            this.updateAss.name = treeNode.name
            this.updateAss.neirong = treeNode.content
            this.updateAss.pfff = treeNode.grade
            this.updateAss.fangfa = treeNode.standard
            this.updateAss.score = treeNode.totalPoint
            return !treeNode.isParent;

        },
        zTreeOnAsyncSuccess() {

        },

        handleSubmit(name) {

            this.addset(this.GUID, this.formValidate)
            this.$refs[name].validate((valid) => {

                if (valid) {
                    this.$Message.success('提交成功');
                } else {
                    this.$Message.error('提交失败');
                }
            })
        },
        handleSubmits() {
            this.editAssess(this.GUID, this.updateAss)
        },
        handleReset(name) {
            this.$refs[name].resetFields();
        },
        getCheckedNodes(date) {

            // console.log(date[0].title)
            this.formValidate.name = date[0].title;
        },
        getnodes(data) {
            
            if (data.expand) {
                getListAll({
                    mpid: data.guid
                }).then(res => {
                    console.log(res)
                })
            }
        },

        append(data) {
            
            const children = data.children || [];
            this.show = true;
            this.GUID = data.guid
            this.updateFlag = false;
            // children.push({
            //     title: '指标1',
            //     expand: true
            // });
            // this.$set(data, 'children', children);
        },
        remove(root, node, data) {

            this.delAssess(data.guid)
            const parentKey = root.find(el => el === node).parent;
            const parent = root.find(el => el.nodeKey === parentKey).node;
            const index = parent.children.indexOf(data);
            // parent.children.splice(index, 1);
        },

        qxReset() {
            this.show = false;
        },
        // 点击添加按钮
        addBtns(id) {
            // this.show = true;
            this.GUID = data.guid
        },
        // 添加
        addset(id, obj) {
            addAssess({
                content: obj.neirong, //考核内容
                creatrTime: '', //创建时间
                name: obj.name, // 指标名称
                totalPoint: obj.score, //分值
                standard: obj.fangfa, //考核标准
                grade: obj.pfff, //评分方法
                mpid: id
            }).then(res => {
                if (res.status == 1) {
                    this.$Message.info('添加成功');

                    this.getAssessList()
                }
            })
        },
        // 查询指标设置
        getAssessList() {
            getListAll({}).then(res => {
                if (res.status == 1) {
                    this.zNodes = res.obj

                    $.fn.zTree.init($("#treeDemo"), this.setting, res.obj);
                    var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
                    console.log(treeObj)
                    // newNode = treeObj.addNodes(newNode,-1, this.zNodes);
                    // var nodes = treeObj.transformToArray(treeObj.getNodes());
                    // for (var i = 0, l = nodes.length; i < l; i++) {
                    //     if (nodes[i].isParent) {
                    //         treeObj.setChkDisabled(nodes[i], true);
                    //     }
                    // }

                }

            })
        },
        // 删除
        delAssess(id) { 
            deleteAssess(id).then(res => {
                console.log(res)
                if (res.status == 1) {
                    this.$Message.info('删除成功!');
                    this.getAssessList()
                }
            })
        },
        //编辑
        editAssess(id, obj) {
            console.log(id)
            updateAssess({
                content: obj.neirong, //考核内容
                creatrTime: '', //创建时间
                name: obj.name, // 指标名称
                totalPoint: obj.score, //分值
                standard: obj.fangfa, //考核标准
                grade: obj.pfff, //评分方法
                guid: id
            }).then(res => {
                if (res.status == '1') {
                    this.getAssessList()
                }
            })
        },
        // 在节点后面添加元素
        addDiyDom: function (treeId, treeNode) {
            console.log(treeNode)
            // if (treeNode.mpid == null || treeNode.mpid.length < 12) {
            //     var aObj = $("#" + treeNode.tId + '_a');
            //     var editStr = "<span id='diyBtn_" + treeNode.id + "'>(" + '+' + ")</span>";
            //     aObj.after(editStr);
            //     // 显示省略号
            //     var spantxt = $("#" + treeNode.tId + "_span").html();
            //     if (spantxt.length > 12) {
            //         spantxt = spantxt.substring(0, 12) + "...";
            //         $("#" + treeNode.tId + "_span").html(spantxt);
            //     }
            // }
            // console.log(treeNode)

        },

        addHoverDom(treeId, treeNode) {                   
                var id = treeNode.guid;
                var that = this
                var sObj = $("#" + treeNode.tId + "_span");
                if (treeNode.editNameFlag || $("#addBtn_" + treeNode.tId).length > 0) return;
                var addStr = "<span class='button add' id='addBtn_" + treeNode.tId +
                    "' title='add node' onfocus='this.blur();'></span>";
                sObj.after(addStr);
                var btn = $("#addBtn_" + treeNode.tId);
                if (btn) {

                    btn.bind("click", function () {
                        that.GUID = treeNode.guid
                        that.updateFlag = false;
                        that.show = true

                        var zTree = $.fn.zTree.getZTreeObj("tree");
                        //  $("#mpid").val(treeNode.id);

                        //  //添加子节点时，获取父节点下最后一个子节点
                        //  var sortid=1;
                        //  if(treeNode.children&&treeNode.children.length>0)
                        //  	sortid=treeNode.children[treeNode.children.length-1].sortid+1;
                        //  $("#sortid").val(sortid);

                        return false;
                    });
                }
            
            // this.GUID=treeNode.guid

        },
        removeHoverDom(treeId, treeNode) {

        },
        //  dblClickExpand(treeId,treeNode){
        //      console.log(treeNode)
        //  }

    }
}
</script>

<style lang="less" scoped>
.indicator {
    width: 100%;
    height: 100%;

    padding: 12px;
    display: flex;

    .indicatorleft {
        width: 30%;
        height: 100%;
        // background: #9999;
        display: flex;
        justify-content: space-between
    }

    .indicatorright {
        width: 70%;
        height: 100%;
        //  background: #1999;
        padding: 24px;
    }
}
</style>
