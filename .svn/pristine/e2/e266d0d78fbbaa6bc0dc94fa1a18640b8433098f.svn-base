<template>
<div class='containers cententpadding'>
    <div class="rightHead">
        <div class='sousuo1'>
            <div class='searchMeun'>
                <span class="wdName_text1">
                    编号：
                </span>
                <Input v-model="addlist.ptpjid" placeholder="输入文档名称" style="width: 10%" />
                <span class="wdName_text">
                    项目类型：
                </span>
                <Select v-model="addlist.emType" style="width: 10%" clearable>
                    <Option v-for="item in drawCategorylist" :value="item.VALUE" :key="item.VALUE">{{ item.LABEL }}</Option>
                </Select>

                <Button class='wdName' type="info" @click="handleListApproveHistory">查询</Button>

               
                <Modal width="700" id="add" v-model="add" @on-ok='addmaint'>
                    <div slot="header" class="addheader">
                        添加项目
                    </div>
                    <div class="addcontent">
                        <div class="top">
                            <span class="XMLXBH" >项目类型编号: </span>
                            <Input v-model="addlist.ptpjid" placeholder="输入项目类型编号" style="width: 78%" />
                           
                        </div>
                        <div class="top">
                            <span class="XMLXBH"  >项目类型名称: </span>
                            <Input v-model="addlist.ptpjname" placeholder="输入项目类型名称" style="width: 78%" />
                        </div>
                        <div class="top">
                             <span class="XMLXBH"  style="margin-left:27px;">项目类型: </span>
                               <Select v-model="addlist.emType" style="width: 78%">
                                <Option v-for="item in drawCategorylist" :value="item.VALUE" :key="item.VALUE">{{ item.LABEL }}</Option>
                            </Select>
                        </div>
                        <div class="top">
                           
                            <span class="XMLXBH" >设备操作规范: </span>
                            <Input v-model="addlist.note" style="width: 78%" type='textarea' />
                        </div>
                    </div>
                </Modal>
            </div>
        </div>

        <div class='tableBox'>
        <div class='btnclass'>
             <Button class='wdName' ghost @click="addmodal" type="primary">添加</Button>
               <Poptip confirm title="确定删除吗" @on-ok="getdeletes">
             <Button class='wdName' ghost  type="primary">删除</Button>
               </Poptip>
        </div>
            <Table stripe border :columns="TableTitle" :data="TableData" @on-select="selectionchange" @on-select-cancel="cancelSeclect">
                    
                      <template slot-scope="{ row, index }" slot="sort">
                                 <span>{{index+1}}</span> 
                      </template>
                <template slot-scope="{ row, index }" slot="action">
                    <Button type="primary" ghost size="small" style="margin:0 10px" @click="updatemodal(row)">修改</Button>
                </template>
            </Table>
            <Page :total="dataCount" :page-size="pageSize" show-total class="paging" @on-change='changepage'></Page>
        </div>
   <Modal width="700" id="updata" v-model="updata" @on-ok='updatamaint'>
                        <div slot="header" class="addheader">
                            修改项目
                        </div>
                           <div class="addcontent">
                        <div class="top">
                            <span class="XMLXBH" >项目类型编号: </span>
                            <Input v-model="addlist.ptpjid" placeholder="输入项目类型编号" style="width: 78%" />
                           
                        </div>
                        <div class="top">
                            <span class="XMLXBH"  >项目类型名称: </span>
                            <Input v-model="addlist.ptpjname" placeholder="输入项目类型名称" style="width: 78%" />
                        </div>
                        <div class="top">
                             <span class="XMLXBH"  style="margin-left:27px;">项目类型: </span>
                               <Select v-model="addlist.emType" style="width: 78%">
                                <Option v-for="item in drawCategorylist" :value="item.VALUE" :key="item.VALUE">{{ item.LABEL }}</Option>
                            </Select>
                        </div>
                        <div class="top">
                           
                            <span class="XMLXBH" >设备操作规范: </span>
                            <Input v-model="addlist.note" style="width: 78%" type='textarea' />
                        </div>
                    </div>
                    </Modal>
    </div>
</div>
</template>

<script>
import {getlist,save,update,deletes,madictionaries} from 'api/maint'
export default {
    data() {
        return {
            // 初始化信息总条数
            dataCount: 0,
            // 每页显示多少条
            pageSize: 10,
            XMLXBH: null,
            add: false,
            updata: false,
            drawCategorylist: [],
            addlist:{
             ptpjname:'',
             emType:'',
             note:'',
             ptpjid:''
            },
            TableTitle: [{
                    type: 'selection',
                    width: 60,
                    align: 'center',
                }
                ,
                {
                    title: '序号',
                    width: 80,
                    align: 'center',
                    slot: 'sort'
                },
                {   
                    title: '项目编号',
                    align: 'center',
                    key: 'ptpjid'
                },
                {
                    title: '项目名称',
                    align: 'center',
                    key: 'ptpjname'
                },
                {
                    title: '项目类型',
                    align: 'center',
                    key: 'label'
                },
                {
                    title: '设备操作规范',
                    align: 'center',
                    key: 'note'
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
            ajaxHistoryData:[],
            updatelist:[]
        }
    },
    created(){
           this.handleListApproveHistory();
           madictionaries({}).then(res=>{
               this.drawCategorylist=res.obj;
           })
    },
    methods:{
         getlists(params) {
           getlist(params.pageNum,params.pageSize,{
               ptpjid:this.addlist.ptpjid,
               emType:this.addlist.emType
            }).then(res => {
                //  console.log(res)
                if (res.status == 1) {
                    this.ajaxHistoryData = res.obj.list;
                    this.dataCount = res.obj.total;
                    this.TableData = this.ajaxHistoryData;
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
        addmodal(){
             this.add=true;
        },
        //
        updatemodal(row){
             this.updata=true;
             this.addlist.ptpjname=row.ptpjname;
             this.addlist.ptpjid=row.ptpjid;
             this.addlist.note=row.note;
             this.addlist.emType=row.emType;
             this.addlist.guid=row.guid;
        },
        getdeletes(){
             let ids=[];
                if (this.updatelist.length == 0) {
                this.$Message.warning('请先选择一条数据')
            } else {
                for (const key in this.updatelist) {
                    ids.push(this.updatelist[key]['guid'])
                }
                 let id = ids.join(',');
                 deletes(id).then(res=>{
                     if (res.status == 1) {
                        this.$Message.success('删除成功')
                        this.handleListApproveHistory()
                        // this.ids = []
                        this.updatelist = []
                    }
                 })
                }
        },
                    //选中
           selectionchange(res) {
            if (res) {
                this.updatelist = res
            }
        },
        // 取消选中
        cancelSeclect(selection) {
            this.updatelist = selection
        },
        //新增
        addmaint(){
             save(
                this.addlist
             ).then(res=>{
             if(res.status==1){
        this.$Message.success('添加成功')
           this.handleListApproveHistory()
                  this.addlist={};         
                           }else{
                          this.$Message.error('添加失败')      
                           }
             })
        },
        //修改
        updatamaint(){
              update(this.addlist).then(res=>{
                 if(res.status==1){
        this.$Message.success('修改成功')
           this.handleListApproveHistory()
                  this.addlist={};         
                           }else{
                          this.$Message.error('修改失败')      
                           }
              })
        }
    }
}
</script>

<style lang="less" scoped>

</style>