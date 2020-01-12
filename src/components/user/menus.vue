<!--
 * @Author: your name
 * @Date: 2019-10-30 16:58:17
 * @LastEditTime: 2019-12-02 14:18:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-zzxf\src\components\user\user.vue
 -->
<template>
<div class="menus cententpadding">
    <div class="indicatorleft">
        <div class="tree-box">
        <div class="zTreeDemoBackground left">
            <ul id="treeDemo" class="ztree"></ul>
        </div>
    </div>
    </div>
    <div class='indicatorright'>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" v-if='show'>
            <FormItem label="菜单名称" prop="powerName">
                <Input v-model="formValidate.powerName"></Input>
            </FormItem>
            <FormItem label="功能代码" prop="powerCode">
                <Input v-model="formValidate.powerCode"></Input>
            </FormItem>
            <FormItem label="排序" prop="sort">
                <Input v-model="formValidate.sort"></Input>
            </FormItem>
            <FormItem label="菜单地址" prop="powerUrl">
                <Input v-model="formValidate.powerUrl"></Input>
            </FormItem>
            <FormItem label="菜单图标" prop="powerIcon">
                <Input v-model="formValidate.powerIcon">

                </Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
                <Button @click="qxReset('formValidate')" style="margin-left: 8px">取消</Button>
            </FormItem>
        </Form>
        <Form ref="updateValidate" :model="updateValidate" :rules="ruleValidate" :label-width="80" v-if='shows'>
            <FormItem label="菜单名称" prop="powerName">
                <Input v-model="updateValidate.powerName"></Input>
            </FormItem>
            <FormItem label="功能代码" prop="powerCode">
                <Input v-model="updateValidate.powerCode"></Input>
            </FormItem>
            <FormItem label="排序" >
                <Input v-model="updateValidate.sort"></Input>
            </FormItem>
            <FormItem label="菜单地址" prop="powerUrl">
                <Input v-model="updateValidate.powerUrl"></Input>
            </FormItem>
            <FormItem label="菜单图标" prop="powerIcon">
                <Input v-model="updateValidate.powerIcon"> </Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('updateValidate')">提交</Button>
                <!-- <Button @click="handleReset('updateValidate')" style="margin-left: 8px">重置</Button> -->
                <Button @click="qxReset('updateValidate')" style="margin-left: 8px">取消</Button>
            </FormItem>
        </Form>
    </div>

</div>
</template>

<script>
import {
    getlistpower,
    savepower,
    delpower,
    updatepower
} from 'api/user'
export default {
    name: 'menus',
    data() {
        return {
            show: false,
            shows: false,
            zNodes:[],
            formValidate: {
                powerName: '',
                powerCode: '',
                sort: '',
                powerUrl: '',
                powerIcon: '',

            },
            updateValidate: {
                powerName: '',
                powerCode: '',
                sort: '',
                powerUrl: '',
                powerIcon: '',

            },
            ruleValidate: {
                powerName: [{
                    required: true,
                    message: '请输入菜单名称',
                    trigger: 'blur'
                }],
                powerCode: [{
                    required: true,
                    message: '请输入功能代码',
                    trigger: 'blur'
                }, ],
                powerUrl: [{
                    required: true,
                    message: '请输入菜单地址',
                    trigger: 'blur'
                }],
                powerIcon: [{
                    required: true,
                    message: '请输入菜单图标',
                    trigger: 'blur'
                }],

            },
            powerId:'',
             setting: {
                view: {
                    addHoverDom: this.addHoverDom,
                    removeHoverDom: this.removeHoverDom,
                    showLine: false,
                    showIcon: true,
                    // dblClickExpand:this.dblClickExpand
                    // addDiyDom: this.addDiyDom,
                  
                },
                data: {
                    keep: {
                        parent: false,
                        leaf: false
                    },
                    key: {
                        name: "powerName"
                    },
                    simpleData: {
                        enable: true,
                        idKey: "powerId",
                        pIdKey: "powerPid"
                    }

                },
                check: {
                    enable: true
                },
                edit: {
                    drag: {
                        isCopy: false,
                        isMove: false
                    },
                    enable: true,
                    showRenameBtn: true
                },
                callback: {
                    onClick: this.onClick,
                    onRemove: this.onRemove,
                    onRightClick:this.rightClick,
                    onAsyncSuccess: this.zTreeOnAsyncSuccess,
                    beforeEditName:this.beforeEditName
                    // beforeDrop: zTreeBeforeDrop
                }
            },
        }
    },
    methods: {
        getlistpowers() {
            getlistpower().then(res => {
                 this.zNodes = res.obj
                $.fn.zTree.init($("#treeDemo"), this.setting, this.zNodes);
            })
        },

        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid & name == 'formValidate') {
                    let date = {};
                    date = this.formValidate;
                    date.powerPid = this.powerId;
                    //    this.append()
                    savepower(date).then(res => {
                        if (res.status == 1) {
                            this.$Message.success('添加成功');
                            this.handleReset(name)
                            this.show = false;
                            setTimeout(res => {
                                this.getlistpowers()
                            }, 1000)
                        }
                    })
                } else if (valid & name == 'updateValidate') {
                    let date = {};
                    date = this.updateValidate;
                    console.log(date)
                    updatepower(date).then(res => {
                        if (res.status == 1) {
                            this.$Message.success('修改成功');
                            this.handleReset(name)
                            this.shows = false;
                            this.updateValidate = {};
                            setTimeout(res => {
                                this.getlistpowers()
                            }, 1000)
                        }
                    })
                } else {
                    this.$Message.error('提交失败');
                }
            })
        },
        handleReset(name) {
            this.$refs[name].resetFields();
        },
        qxReset(name) {
            if (name == 'updateValidate') {
                this.show = false;
                this.updateValidate = {};
            } else if (name == 'formValidate') {
                this.show = false;
                this.formValidate = {};
            }

        },
        addHoverDom(treeId, treeNode) {
            var id=treeNode.powerId;
            var that=this
         var sObj = $("#" + treeNode.tId + "_span");
         if (treeNode.editNameFlag || $("#addBtn_"+treeNode.tId).length>0) return;
         var addStr = "<span class='button add' id='addBtn_" + treeNode.tId
             + "' title='add node' onfocus='this.blur();'></span>";
         sObj.after(addStr);
         var btn = $("#addBtn_"+treeNode.tId);
         if (btn) {
            
         btn.bind("click", function(){
             that.powerId=treeNode.powerId
             that.shows=false;
             that.show = true
             return false;
         });
         }
     },
      onClick(event, treeId, treeNode, clickFlag) {
            // console.log(treeNode)
            // this.addDiyDom(treeId,treeNode)
        },
          onRemove(event, treeId, treeNode) {
           delpower(treeNode.powerId).then(res=>{
               if(res.status==1){
                    this.$Message.success('删除成功');
                            setTimeout(res => {
                                this.getlistpowers()
                            }, 1000)
               }
           })
        },
        beforeEditName(treeId, treeNode){
            if (this.show != false) {
                this.show = false;
            }
            this.shows = true;
            this.updateValidate.powerName = treeNode.powerName;
            this.updateValidate.powerCode = treeNode.powerCode;
            this.updateValidate.sort = treeNode.sort;
            this.updateValidate.powerUrl = treeNode.powerUrl;
            this.updateValidate.powerIcon = treeNode.powerIcon;
            this.updateValidate.powerId = treeNode.powerId;
        },
    },
    created() {
        this.getlistpowers()
    }
}
</script>

<style lang="less">
.menus {
    width: 100%;
    height: 100%;


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
