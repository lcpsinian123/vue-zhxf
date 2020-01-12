<!--
 * @Author: your name
 * @Date: 2019-12-02 14:19:31
 * @LastEditTime: 2019-12-02 19:42:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-zzxf\src\components\user\role.vue
 -->
<template>
<div class="containers cententpadding">
    <div class="rightHead">
           <div class='sousuo1'>
        <div class="searchMeun">
                <span style="width:100px;text-align:right;">角色名称：</span>
                <Input v-model="userName" style="width: 12%;margin-right:20px;"></Input>
                <Button type="info" @click="handleListApproveHistory">查询</Button>
        </div>
    </div>
    <div class="tableBox">
        <div class="btnclass">
            <Button type="primary" @click="modaladds" ghost>添加角色</Button>
            <Button type="primary" ghost @click="updateusers">编辑角色</Button>
            <Poptip confirm title="确定删除吗" @on-ok="deleteusers">
                <Button type="primary" ghost>批量删除</Button>
            </Poptip>
        </div>
        <Table stripe border :columns="historyColumns" :data="historyData" @on-select='selectionchange' @on-select-cancel="cancelSeclect">
        </Table>
        <Page :total="dataCount" :page-size="pageSize" show-total class="paging" @on-change="changepage"></Page>
    </div>
    <Modal v-model="modaladd" width="700" title="账号添加">
        <div class="addDraw">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                <FormItem label="角色名称" >
                    <Input v-model="formValidate.roleName "></Input>
                </FormItem>
                <FormItem label="角色描述" >
                    <Input v-model="formValidate.description "></Input>
                </FormItem>
         
     

            </Form>
        </div>
        <div slot="footer">
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </div>
    </Modal>
   </div>
</div>
</template>
<script>
import {getlistrole,deltetrole} from 'api/role'
export default {
    data() {
        return {
            userName:'',
            dataCount:0,
            pageSize:10,
            historyData:[],
            ajaxHistoryData:[],
            historyColumns:[
                {
                    type: 'selection',
                    width: 60,
                    align: 'center',
                    key: 'userId'
                }, {
                    title: '角色名称',
                    key: 'roleName'
                },
                {
                    title: '行政区划',
                    key: 'addvcd'
                },
                {
                    title: '角色描述',
                    key: 'description'
                },
                {
                    title: '创建时间',
                    key: 'createTime'
                }
               
            ],
            modaladd: false,
            modalupdate: false,
            formValidate: {
                roleName: '',
                description: '',
           
            },
            updatelist:[]
        }
    },
    methods:{
        getlists(params) {
           getlistrole(params.pageNum,params.pageSize,{
                 roleName:this.userName
            }).then(res => {
                //  console.log(res)
                if (res.status == 1) {
                    this.ajaxHistoryData = res.obj.list;
                    this.dataCount = res.obj.total;
                    this.historyData = this.ajaxHistoryData;
                }
            })
        },
        // 获取历史记录信息
        handleListApproveHistory() {
            let seletlist = {
                pageNum: 0,
                pageSize: 10
            };
            this.getlists(seletlist);
        },
        changepage(index) {
            let seletlist = {
                pageNum: index,
                pageSize: 10
            };
            this.getlists(seletlist);
        },
        modaladds(){
            this.modaladd=false;
        },
        updateusers(){

        },
        deleteusers(){
				let ids = [];
				if(this.updatelist.length == 0) {
					this.$Message.warning('请先选择一条数据')
				} else {
					for(const key in this.updatelist) {
						ids.push(this.updatelist[key]['roleId'])
					}
					let id = ids.join(',')
					deltetrole(id).then(res => {
						if(res.status == 1) {
							this.$Message.success('删除成功')
							this.handleListApproveHistory()
							// this.ids = []
							this.updatelist = []
						} else {
							this.$Message.error('删除失败')
						}
					})
				}
        },
        	//选中
			selectionchange(res) {
				if(res) {
					this.updatelist = res
				}
			},
			// 取消选中
			cancelSeclect(selection) {
				this.updatelist = selection
			},
    },
    created(){
            this.handleListApproveHistory()
    }
}
</script>
<style lang="less" scoped>

</style>