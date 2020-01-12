<!--
 * @Author: your name
 * @Date: 2019-10-30 16:58:17
 * @LastEditTime: 2019-12-02 14:29:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-zzxf\src\components\user\user.vue
 -->
<template>
<div class="containers cententpadding">
    <div class="rightHead">
           <div class='sousuo1'>
        <div class="searchMeun">
                <span style="width:100px;text-align:right;">用户名称：</span>
                <Input v-model="userName" style="width: 12%"></Input>
                <span style="width:100px;text-align:right;">登陆账号：</span>
                <Input v-model="loginName" style="width: 12%"></Input>
                <span style="width:100px;text-align:right;">手机号：</span>
                <Input v-model="mobile" style="width: 12%"></Input>
                <Button type="info" @click="handleListApproveHistory">查询</Button>
        </div>
    </div>
    <div class="tableBox">
        <div class="btnclass">
            <Button type="primary" @click="modaladd = true" ghost>添加用户</Button>
            <Button type="primary" ghost @click="updateusers">编辑用户</Button>
            <Poptip confirm title="确定删除吗" @on-ok="deleteusers">
                <Button type="primary" ghost>批量删除</Button>
            </Poptip>
            <Button type="primary" ghost >导出</Button>
        </div>
        <Table stripe border :columns="historyColumns" :data="historyData" @on-select='selectionchange'>
        </Table>
        <Page :total="dataCount" :page-size="pageSize" show-total class="paging" @on-change="changepage"></Page>
    </div>
    <Modal v-model="modaladd" width="700" title="账号添加">
        <div class="addDraw">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                <FormItem label="登录账号" prop="loginName">
                    <Input v-model="formValidate.loginName "></Input>
                </FormItem>
                <FormItem label="登录密码" prop="password">
                    <Input v-model="formValidate.password "></Input>
                </FormItem>
                <FormItem label="登录用户" prop="userName">
                    <Input v-model="formValidate.userName"></Input>
                </FormItem>
                <FormItem label="手机号" prop="mobile">
                    <Input v-model="formValidate.mobile"></Input>
                </FormItem>
                <FormItem label="邮箱" prop="email">
                    <Input v-model="formValidate.email">

                    </Input>
                </FormItem>

            </Form>
        </div>
        <div slot="footer">
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </div>
    </Modal>
    <Modal v-model="modalupdate" width="700" title="编辑用户">
        <div class="addDraw">
            <Form ref="updatedate" :model="updatedate" :rules="ruleValidate" :label-width="80">
                <FormItem label="登录账号" prop="loginName">
                    <Input v-model="updatedate.loginName "></Input>
                </FormItem>
                <FormItem label="登录密码" prop="password">
                    <Input v-model="updatedate.password "></Input>
                </FormItem>
                <FormItem label="登录用户" prop="userName">
                    <Input v-model="updatedate.userName"></Input>
                </FormItem>
                <FormItem label="手机号" prop="mobile">
                    <Input v-model="updatedate.mobile"></Input>
                </FormItem>
                <FormItem label="邮箱" prop="email">
                    <Input v-model="updatedate.email">

                    </Input>
                </FormItem>

            </Form>
        </div>
        <div slot="footer">
            <Button type="primary" @click="handleSubmit('updatedate')">提交</Button>
            <Button @click="handleReset('updatedate')" style="margin-left: 8px">重置</Button>
        </div>
    </Modal>
</div>
   </div>
</template>

<script>
import {
    getuserlist,
    adduser,
    deluser,
    upduser
} from 'api/user'
import {
    userInfo
} from 'os';
export default {
    name: 'user',
    data() {
        return {
            userName: '',
            loginName: '',
            mobile: '',
            modaladd: false,
            modalupdate: false,
            formValidate: {
                loginName: '',
                password: '',
                userName: '',
                mobile: '',
                email: '',
            },
            updatedate: {
                loginName: '',
                password: '',
                userName: '',
                mobile: '',
                email: '',
            },
            ruleValidate: {
                loginName: [{
                    required: true,
                    message: '请输入登录账号',
                    trigger: 'blur'
                }],
                password: [{
                    required: true,
                    message: '请输入登录密码',
                    trigger: 'blur'
                }, ],
                userName: [{
                    required: true,
                    message: '请输入用户名称',
                    trigger: 'blur'
                }, ],
                mobile: [{
                    required: true,
                    message: '请输入手机号',
                    trigger: 'blur'
                }],
                email: [{
                    required: true,
                    message: '请输入邮箱',
                    trigger: 'blur'
                }],
            },
            historyColumns: [{
                    type: 'selection',
                    width: 60,
                    align: 'center',
                    key: 'userId'
                }, {
                    title: '登录账号',
                    key: 'loginName'
                },
                {
                    title: '登录密码',
                    key: 'password'
                },
                {
                    title: '用户名称',
                    key: 'userName'
                },
                {
                    title: '手机号',
                    key: 'mobile'
                },
                {
                    title: '邮箱',
                    key: 'email'
                },
                {
                    title: '上一次登录ip',
                    key: 'ip'
                },
                {
                    title: '上一次登录时间',
                    key: 'lastLoginTiome'
                }
            ],
            ajaxHistoryData: [],
            // 初始化信息总条数
            dataCount: 0,
            // 每页显示多少条
            pageSize: 10,
            historyData: [],
            ids: [],
            updatelist: [],
        }
    },
    methods: {
        updateusers() {
            let list = this.updatelist;
            if (list.length != 1) {
                this.$Message.warning('请先选择一行数据数据')
            } else {
                this.modalupdate = true;
                this.updatedate.loginName = list[0].loginName;
                this.updatedate.password = list[0].password;
                this.updatedate.userName = list[0].userName;
                this.updatedate.mobile = list[0].mobile;
                this.updatedate.email = list[0].email;
                this.updatedate.userId = list[0].userId
            }
        },
        deleteusers() {
            for (const key in this.updatelist) {
                this.ids.push(this.updatelist[key]['userId'])
            }
            let id = this.ids.join(',');
            // console.log(id);
            if (id == "") {
                this.$Message.warning('请先选择删除的数据')
            } else {
                deluser({
                    ids: id
                }).then(res => {
                    if (res.status == 1) {
                        this.$Message.success('删除成功')
                        this.handleListApproveHistory();
                        this.ids = [];
                        this.updatelist = [];
                    }
                })
            }

        },
        selectionchange(res) {
            if (res) {
                this.updatelist = res;
            }

        },
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid && name == 'formValidate') {
                    adduser(
                        this.formValidate
                    ).then(res => {
                        if (res.status == 1) {
                            this.$Message.success('添加成功');
                            this.modaladd = false;
                            this.handleListApproveHistory();
                            this.handleReset(name);
                        }
                    })
                } else if (valid && name == 'updatedate') {
                    upduser(this.updatedate).then(res => {
                        if (res.status == 1) {
                            this.$Message.success('修改成功');
                            this.modalupdate = false;
                            this.handleListApproveHistory();
                            this.handleReset(name);
                            this.updatedate = {};
                            this.updatelist = [];
                            this.ids = [];
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
        getCheckedNodes(date) {
            // console.log(date[0].title)
            this.formValidate.name = date[0].title;
        },
        getdata(params) {
            this.$axios.post('/syspower/user/getList?pageNum=' + params.pageNum + '&pageSize=' + params.pageSize + '').then(res => {
                this.ajaxHistoryData = res.data.obj.list;
                console.log(res.data.obj)
                this.dataCount = res.data.obj.total;
                this.historyData = this.ajaxHistoryData;
            })
            // getuserlist(
            //         {
            //     // userName:params.userName,
            //     // loginName:params.loginName,
            //     // mobile:params.mobile,
            //      pageNum:params.pageNum,
            //      pageSize:params.pageSize
            // }
            //     ).then(res=>{

            //     })
        },
        // 获取历史记录信息
        handleListApproveHistory() {
            let seletlist = {
                userName: this.userName,
                //    loginName:this.loginName,
                //    mobile:this.mobile,
                pageNum: 0,
                pageSize: 10
            };
            this.getdata(seletlist);
        },
        changepage(index) {
            let seletlist = {
                userName: this.userName,
                //    loginName:this.loginName,
                //    mobile:this.mobile,
                pageNum: index,
                pageSize: 10
            };
            this.getdata(seletlist);
        }
    },
    created() {
        this.handleListApproveHistory();
    }
}
</script>

<style lang="less" scoped>
.containers {
    width: 100%;
    height: 100%;

    background-color: #edf5f7;
}

</style>
