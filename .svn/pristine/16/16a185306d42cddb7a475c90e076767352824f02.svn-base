<!--
 * @Author: your name
 * @Date: 2019-11-14 14:10:59
 * @LastEditTime: 2019-11-29 15:12:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-zzxf\src\components\maintenance\mainrouter.vue
 -->
<template>
<div class='containers cententpadding'>
    <div class="rightHead">
        <div class='sousuo1'>
            <div class='searchMeun'>
                <span class="wdName_text">
                    路由名称：
                </span>
                <Input v-model="WordName" placeholder="输入巡检路由名称" style="width: 20%" />
                <Button class='wdName' type="info" @click="handleListApproveHistory">查询</Button>
                <Modal width="800" id="add" v-model="add" @on-ok='addrouters'>
                    <div slot="header" class="addheader">
                        {{this.modalname}}
                    </div>
                    <div class="addcontent">
                        <div class="top">

                            <Select v-model="seletxx.jzujcname" placeholder='请输入建筑' style="width:200px;margin-right:15px;" @on-change="wychange" clearable>
                                <Option v-for="item in jzujclist" :value="item.bdid" :key="item.bdid">{{ item.dbname }}</Option>
                            </Select>

                            <Select v-model="seletxx.lcjcname"  placeholder='请输入楼层' style="width:200px;margin-right:15px;" @on-change="dwchange" clearable>
                                <Option v-for="item in lcjclist" :value="item.flid" :key="item.flid">{{ item.flname }}</Option>
                            </Select>

                            <Select v-model="seletxx.quyuname" placeholder='请输入区域' style="width:200px;margin-right:30px;"  clearable>
                                <Option v-for="item in quyulist" :value="item.rgid" :key="item.rgid">{{ item.rgname }}</Option>
                            </Select>
                            <Button class='wdName' type="info" @click="seletadd()">查询</Button>
                        </div>
                        <div class="top flexdiv">
                            <div class="flexdivs">
                                <div class="divspan"> 点位列表</div>
                                <div class="diandiv">
                                    <CheckboxGroup v-model="fruit" v-for='item in this.dianlist' @on-change='changecheck'	>
                                    <Checkbox :label='item.ppsid' :disabled='disableds'>{{item.ppsname}}</Checkbox>
                                    <!-- <Checkbox label="2">西瓜</Checkbox>
                                    <Checkbox label="3">奶茶</Checkbox> -->
                                </CheckboxGroup>
                                </div>
                            </div>
                            <div class="flexdivs">
                                <div class="divspan">已选点位</div>
                                 <div class="diandiv" >
                                     <div style="display:flex;flex-direction: column;" v-for="(item,index) in this.xzdianlist">
                                         <div style="width: 100%;display: flex;justify-content: space-between;">
                                             <span >{{item.ppsname}}</span>  <span style="color:red;cursor:pointer;padding-right:20px;" @click="delxz(index)">—</span>
                                         </div>
                                                
                                     </div>
                                 </div>
                            </div>
                            <div class="flexdivs">
                                <div class="divspan">路由信息</div>
                                <div class="top" style="padding-left:5px;">
                                    <span>&nbsp;&nbsp;路由名称&nbsp;&nbsp;</span>
                                    <Input v-model="addlist.ptlpname" placeholder="" style="width:120px" />
                                </div>
                                <div class="top" style="padding-left:5px;">
                                    <span>&nbsp;&nbsp;激活标识&nbsp;&nbsp;</span>
                                       <RadioGroup v-model="addlist.activation">
                                        <Radio label="0">已激活</Radio>
                                        <Radio label="1">未激活</Radio>
                                       </RadioGroup>
                                </div>
                                <div class="top" style="padding-left:5px;">
                                    <span>&nbsp;&nbsp;描述 &nbsp;&nbsp;</span>
                                    <Input v-model="addlist.note" placeholder="" style="width:145px" type="textarea" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>


        <div class='tableBox'>
            <div class='btnclass'>
                <Button class='wdName' @click="addrouter" ghost type="primary">添加</Button>
                 <Poptip confirm title="确定删除吗" @on-ok="getDelete">
                <Button class='wdName'  ghost type="primary">删除</Button>
                 </Poptip>
            </div>
            <Table stripe border :columns="TableTitle" :data="TableData" @on-select="selectionchange" @on-select-cancel="cancelSeclect">
            	<template slot-scope="{ row, index }" slot="sortNum">
					<span>{{index+1}}</span>
				</template>
                <template slot-scope="{ row, index }" slot="action">
                    <Button type="primary" ghost size="small" style="margin:0 10px" @click="updata(row)">编辑</Button>
                </template>
            </Table>
            <Page :total="dataCount" :page-size="pageSize" show-total class="paging" @on-change="changepage"></Page>
        </div>

    </div>
</div>
</template>

<script>
import {routerlist,routersave,routerdel,routerupdate,routedetail} from 'api/mainrouter'
import {wyjc,dwjc,jzujc,lcjc,quyu} from 'api/docManage'
export default {
    name: 'mainrouter',
    data() {
        return {
            fruit:[],
            disableds:false,
            modalname:'',
            quyulist:[],
            seletxx:{
                quyuname:null,
                lcjcname:null,
                jzujcname:null,
            },
            addlist:{
                ptlpname: null,
                note: null,
                 activation:null,
            },
            jzujclist:[],
            lcjclist:[],
            // 初始化信息总条数
            dataCount: 0,
            // 每页显示多少条
            pageSize: 10,
            updatelist: null,
          
            // xjnr: false,
            add: false,
            // updata: false,
            WordName: null,
            drawCategory: null,
            TableTitle: [{
                    type: 'selection',
                    width: 60,
                    align: 'center',
                    key:'guid'
                },
                   {
                       title: '序号',
                       align: 'center',
                       key: 'sortNum',
					   slot: "sortNum"
                   },
                {
                    title: '名称',
                    align: 'center',
                    key: 'ptlpname'
                },
                {
                    title: '点位数',
                    align: 'center',
                    key: 'ppsnumber'
                },
                {
                    title: '制定时间',
                    align: 'center',
                    key: 'makingTime'
                },
                {
                    title: '操作',
                    key: 'action',
                    slot: 'action',
                    align: 'center'
                }
            ],
            ajaxHistoryData:[],
            TableData: [],
            dianlist:[],
            xzdianlist:[],
            guid:null
        }
    },
    methods:{
         getlist(params) {
            this.$axios.post('/syspower/firePtlpP/getList?pageNum=' + params.pageNum + '&pageSize=' + params.pageSize, {
                ptlpname: this.WordName,
                // createDate: this.startTime
            }).then(res => {
                //  console.log(res)
                if (res.data.status == 1) {
                    this.ajaxHistoryData = res.data.obj.list;
                    this.dataCount = res.data.obj.total;
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
            this.getlist(seletlist);
        },
        changepage(index) {
            let seletlist = {
                pageNum: index,
                pageSize: 10
            };
            this.getlist(seletlist);
        },
         //物业选择器
        wychange(val) {
            this.lcjclist=[];
            lcjc({
                bdid: val
            }).then(res => {
                this.lcjclist = res.obj
            })
            //    },1000)
        },

        //单位选择器val
        dwchange(val) {
            this.quyulist=[];
            quyu({
                flid: val
            }).then(res => {
                this.quyulist = res.obj
            })
        },
        addrouter(){
        this.modalname='新增路由信息';
        this.add=true;
            this.fruit=[];
                        this.xzdianlist=[];
                        this.dianlist=[];
                        this.seletxx={};
                        this.addlist={};
        },
        //添加按钮
        addrouters(){
             let ppsid=[];
            for (let key in this.xzdianlist) {
                ppsid.push(this.xzdianlist[key]['ppsid'])
            }
            let ppsids=ppsid.join(',');
            if(this.modalname=="新增路由信息"){
                 routersave(
                {
                    ppsids:ppsids,
                    ptlpname:this.addlist.ptlpname,
                    activation:this.addlist.activation,
                    note:this.addlist.note
                }
            ).then(res=>{
                if(res.status==1){
                           this.$Message.success('添加成功')
                        this.handleListApproveHistory()
                        this.fruit=[];
                        this.xzdianlist=[];
                        this.dianlist=[];
                        this.seletxx={};
                        this.addlist={};
                }else{
                      this.$Message.error('添加失败');
                    
                }
           
            })

            }else if(this.modalname=="修改路由信息"){
              routerupdate({
                    guid:this.guid,
                    ppsids:ppsids,
                    ptlpname:this.addlist.ptlpname,
                    activation:this.addlist.activation,
                    note:this.addlist.note
              }).then(res=>{
                 if(res.status==1){
                      console.log(this.xzdianlist)
                           this.$Message.success('修改成功')
                        this.handleListApproveHistory()
                        this.fruit=[];
                        this.xzdianlist=[];
                        this.dianlist=[];
                        this.seletxx={};
                        this.addlist={};
                }else{
                     this.$Message.error('修改失败');
                }
                  
              })

            }
          

        },
        //添加查询点位列表
        seletadd(){
         this.$axios.post('/syspower/firePpsBase/getListAll', {
                rgid:this.seletxx.quyuname
            }).then(res => {
                // console.log(res)
            this.dianlist=res.data.obj;
            this.fruit=[];
            })
        },
        //删除已选点位
        delxz(i){
         this.xzdianlist=this.delete(i);
        },
        //监听多选框
        changecheck(res){
       
            let reslist=res;
            for (let key in reslist) {
         for (let keys in this.dianlist) {
             if (reslist[key]==this.dianlist[keys]['ppsid']) {
                 this.xzdianlist.push(this.dianlist[keys])
             }
         }
            }
              this.xzdianlist=this.unique(this.xzdianlist,'ppsid')
             
        },
        //数组去重
        unique(arr,field){
        var map = {};
        var res = [];
        for (var i = 0; i < arr.length; i++) {
            if (!map[arr[i][field]]) {
                map[arr[i][field]]=1;
                res.push(arr[i]);
            }
        }
        return res;
            },
            delete(delIndex){
            var temArray=[];
            for(var i=0;i<this.xzdianlist.length;i++){
            if(i!=delIndex){
            temArray.push(this.xzdianlist[i]);
            }
            }
            return temArray;
            },
        //修改
        updata(row){
            // console.log(row)
         this.modalname='修改路由信息';
            this.add=true;
          this.fruit=[];
          this.xzdianlist=[];
          this.dianlist=[];
           this.seletxx={};
           this.addlist={};
            routedetail(
                {
                    ptlpid:row.ptlpid
                }
            ).then(res=>{
                let reslist=res.obj;
                console.log(res,'aa')
                this.addlist={
                    ptlpname:reslist.ptlpname,
                    activation:reslist.activation,
                    note:reslist.note
                }
                this.xzdianlist=reslist.firePpsBasesList;
                this.guid=reslist.guid;
            })

        },
        //删除
        getDelete(){
            let ids=[];
            let ptlpid=[];
              if (this.updatelist.length == 0) {
                this.$Message.success('请先选择一条数据')
            } else {
                for (const key in this.updatelist) {
                    ids.push(this.updatelist[key]['guid'])
                    ptlpid.push(this.updatelist[key]['ptlpid'])
                }
                let id = ids.join(',')
                let ppid=ptlpid.join(',')
                this.$axios.post('/syspower/firePtlpP/delete?ids=' + id + '&ptlpids='+ppid).then(res => {
                    if (res.data.status == 1) {
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
    },
    created(){
        this.handleListApproveHistory()
          jzujc({}).then(res => {
          this.jzujclist = res.obj
            })
    }

}
</script>

<style lang="less" scoped>

#add /deep/ .ivu-modal-header,
#updata /deep/ .ivu-modal-header {
    padding: 0;
}

#add /deep/ .ivu-modal-close,
#updata /deep/ .ivu-modal-close {
    top: 3px;
}
#add /deep/ .ivu-modal{
             top:20px;
           }
.flexdiv {
    display: flex;
    justify-content: space-between;

    .flexdivs {
        width: 220px;
        height: 400px;
      
    }

    .divspan {
        width: 100%;
        height: 30px;
        font-size: 16px;
        background: #cccccc;
        line-height: 30px;
        padding-left: 20px;

        span {
            width: 10px;
            height: 20px;
            background: blue
        }
    }
}

.diandiv{
    width: 100%;
    height: 100%;
      overflow: auto;
}
.diandiv /deep/ .ivu-checkbox-group{
    display: flex;
    flex-direction: column;
}
.ivu-input:focus{
    outline:none;
    border:none;
    box-shadow: 0 0 0 2px transparent; 
}
</style>
