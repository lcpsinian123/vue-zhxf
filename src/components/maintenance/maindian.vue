<!--
 * @Author: your name
 * @Date: 2019-11-14 14:10:59
 * @LastEditTime: 2019-11-29 19:23:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-zzxf\src\components\maintenance\mainrouter.vue
 -->
<template>
	<div class='containers cententpadding'>

		<div class="rightHead">
			<div class='sousuo1'>
				<div class='searchMeun'>
					<Select v-model="sousuolist.bdid" placeholder='请输入建筑' style="width:10%;margin-left:30px;margin-right:15px;" @on-change="wychange" clearable>
						<Option v-for="item in jzujclist" :value="item.bdid" :key="item.bdid">{{ item.note }}</Option>
					</Select>
					<Select v-model="sousuolist.flid" placeholder='请输入楼层' style="width:10%;margin-right:15px;" @on-change="dwchange" clearable>
						<Option v-for="item in lcjclist" :value="item.flid" :key="item.flid">{{ item.flname }}</Option>
					</Select>

					<Select v-model="sousuolist.rgid" placeholder='请输入区域' style="width:10%;margin-right:15px;" clearable>
						<Option v-for="item in quyulist" :value="item.rgid" :key="item.rgid">{{ item.rgname }}</Option>
					</Select>
					<span class="wdName_doc">
                点位名称&nbsp;:&nbsp;
            </span>
					<Input v-model="WordName" placeholder="输入巡检点位名称" style="width: 20%" />

					<Button class='wdName' type="info" @click="handleListApproveHistory">查询</Button>
					<Modal width="900" id="add" v-model="add" @on-ok='adddiansave'>
						<div slot="header" class="addheader">
							{{this.modalname}}
						</div>
						<div class="addcontent">
							<div class="top">
								<Select v-model="addsousuo.jzujcname" placeholder='请输入建筑' style="width:180px;margin-right:15px;" @on-change="wychange" clearable>
									<Option v-for="item in jzujclist" :value="item.bdid" :key="item.bdid">{{ item.dbname }}</Option>
								</Select>
								<Select v-model="addsousuo.lcjcname" placeholder='请输入楼层' style="width:180px;margin-right:15px;" @on-change="dwchange" clearable>
									<Option v-for="item in lcjclist" :value="item.flid" :key="item.flid">{{ item.flname }}</Option>
								</Select>
								<Select v-model="addsousuo.quyuname" placeholder='请输入区域' style="width:180px;margin-right:15px;" @on-change="jzchange" clearable>
									<Option v-for="item in quyulist" :value="item.rgid" :key="item.rgid">{{ item.rgname }}</Option>
								</Select>

								<Select v-model="addsousuo.dweiname" placeholder='请输入点位' style="width:180px;margin-right:15px;" clearable>
									<Option v-for="item in dweilist" :value="item.ppsid" :key="item.ppsid">{{ item.ppsname }}</Option>
								</Select>
								<Button class='wdName' type="info" @click="addsscx">查询</Button>
							</div>
							<div class="top flexdiv">
								<div class="flexdivs">
									<div class="divspan"> 设备列表</div>
									<div class="diandiv">
										<CheckboxGroup v-model="fruit" v-for='item in this.dianlist' @on-change='changecheck'>
											<Checkbox :label='item.emid'>{{item.emname}}</Checkbox>
										</CheckboxGroup>
									</div>
								</div>
								<div class="flexdivs">
									<div class="divspan">已选设备</div>
									<div class="diandiv">
										<div style="display:flex;flex-direction: column;" v-for="(item,index) in this.xzdianlist">
											<div style="width: 100%;display: flex;justify-content: space-between;">
												<span>{{item.emname}}</span> <span v-if='item.emname' style="color:red;cursor:pointer;padding-right:20px;" @click="delxz(index)">—</span>
											</div>

										</div>
									</div>
								</div>
								<div class="flexdivs">
									<div class="divspan">点位信息</div>
									<div class="top" style="padding-left:15px;">
										<span>&nbsp;&nbsp;点位名称&nbsp;&nbsp;</span>
										<Input v-model="addlist.ppsname" placeholder="" style="width:150px" />
									</div>
									<div class="top" style="padding-left:15px;">
										<span>&nbsp;&nbsp;激活标识&nbsp;&nbsp;</span>
										<RadioGroup v-model="addlist.activation">
											<Radio label="0">已激活</Radio>
											<Radio label="1">未激活</Radio>
										</RadioGroup>
									</div>
									<div class="top" style="padding-left:15px;">
										<span>&nbsp;&nbsp;描述 &nbsp;&nbsp;</span>
										<Input v-model="addlist.note" placeholder="" style="width:175px" type="textarea" />
									</div>
								</div>
							</div>
						</div>
					</Modal>
				</div>
			</div>

			<div class='tableBox'>
				<div class='btnclass'>
					<Button class='wdName' @click="adddian" ghost type="primary">添加</Button>
					<Poptip confirm title="确定删除吗" @on-ok="getDelete">
						<Button class='wdName' ghost type="primary">删除</Button>
					</Poptip>
				</div>

                <Table stripe border :columns="TableTitle" :data="TableData" @on-select="selectionchange" @on-select-cancel="cancelSeclect">
					<template slot-scope="{ row, index }" slot="sortNum">
									<span>{{index+1}}</span>
					</template>

					<template slot-scope="{ row, index }" slot="action">
						<Button type="primary" ghost size="small" style="margin:0 10px" @click="updata(row)">修改</Button>
					</template>
				</Table>
			    <Page :total="dataCount" :page-size="pageSize" @on-page-size-change='pagesizeChange' @on-change='pagechanges' show-total show-sizer class="paging"></Page>
		
                </div>
			
		</div>
	</div>
</template>
<script>
	import { wyjc, dwjc, jzujc, lcjc, dianwei, quyu } from 'api/docManage'
	import { diansave, dianupdate, diandetails } from 'api/mainrouter'
	export default {
		name: 'maindian',
		data() {
			return {
				quyulist: [],
				dweilist: [],
				jzujclist: [],
				lcjclist: [],
				ppsname: null,
				activation: null,
				note: null,
				sousuolist: {
					bdid: null,
					flid: null,
					rgid: null

				},
				addsousuo: {
					quyuname: null,
					dweiname: null,
					jzujcname: null,
					lcjcname: null,
				},
				addlist: {
					ppsname: null,
					note: null,
					activation: null,
				},
				// 初始化信息总条数
				dataCount: 0,
				// 每页显示多少条
				pageSize: 10,
				floorNum: null,
				XMLXBH: null,
				xjnr: false,
				add: false,
				modalname: null,
				WordName: null,
				drawCategory: null,
				TableTitle: [{
						type: 'selection',
						width: 60,
						align: 'center',
						key: 'ppsid'
					}, {
						title: '序号',
						align: 'center',
						key: 'sortNum',
						slot: "sortNum"
					},
					{
						title: '点位名称',
						align: 'center',
						key: 'ppsname'
					},
					{
						title: '所属建筑',
						align: 'center',
						key: 'dbname'
					},
					{
						title: '所属楼层',
						align: 'center',
						key: 'flname'
					},

					{
						title: '所属区域',
						align: 'center',
						key: 'rgname'
					},

					{
						title: '设备数',
						align: 'center',
						key: 'total'
					},
					{
						title: '操作',
						key: 'action',
						slot: 'action',
						align: 'center'
					}
				],
				TableData: [],
				updatelist: [],
				ajaxHistoryData: [],
				dianlist: [],
				fruit: [],
				xzdianlist: [],
				dianlist: [],
				ppsid: null,
				rgId: null,
				seletlist : {
					pageNum: 0,
					pageSize: 10
				}
			}
		},
		methods: {
			getlist(params) {
				this.$axios.post('/syspower/relPjPps/getList?pageNum=' + params.pageNum + '&pageSize=' + params.pageSize, {
					ppsname: this.WordName,
					dbId: this.sousuolist.bdid,
					flId: this.sousuolist.flid,
					rgId: this.sousuolist.rgid
				}).then(res => {
					//  console.log(res)
					if(res.data.status == 1) {
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
			},// 切换页码
			pagechanges(i) {
				console.log(i);
				this.seletlist.pageNum=i;
				this.getlist(this.seletlist)
			},
			//切换每页条数
			pagesizeChange(res){
               this.seletlist.pageSize =res;
				this.getlist(this.seletlist)
			},
			//添加修改弹框筛选
			addsscx() {
				this.$axios.post('/syspower/fireEmBase/getListAll', {
					rgid: this.addsousuo.quyuname
				}).then(res => {
					// console.log(res)
					this.dianlist = res.data.obj;

					//   for (const key in this.dweilist) {
					//       if (this.addsousuo.dweiname==this.dweilist[key]['ppsid']) {
					//           this.addlist.ppsname=this.dweilist[key]['ppsname']
					//       }
					//   }
					this.fruit = [];
				})
			},
			adddian() {
				this.add = true;
				this.modalname = "新增巡检点位";
				this.fruit = [];
				this.xzdianlist = [];
				this.dianlist = [];
				this.addsousuo = {};
				this.addlist = {};
			},
			//添加按钮
			adddiansave() {
				let ppsid = [];
				for(let key in this.xzdianlist) {
					ppsid.push(this.xzdianlist[key]['emid'])
				}
				let ppsids = ppsid.join(',');
				if(this.modalname == "新增巡检点位") {
					diansave({
							emid: ppsids,
							ppsname: this.addlist.ppsname,
							activation: this.addlist.activation,
							note: this.addlist.note,
							rgId: this.addsousuo.quyuname
						}

					).then(res => {
						if(res.status == 1) {
							this.$Message.success('添加成功')
							this.handleListApproveHistory()
							this.fruit = [];
							this.xzdianlist = [];
							this.dianlist = [];
							this.addsousuo = {};
							this.addlist = {};
						} else {
							this.$Message.error('添加失败')
						}

					})
				} else if(this.modalname == "编辑巡检点位") {
					dianupdate({
						ppsid: this.ppsid,
						emid: ppsids,
						ppsname: this.addlist.ppsname,
						activation: this.addlist.activation,
						note: this.addlist.note,
						rgId: this.sousuolist.quyuname
					}).then(res => {
						if(res.status == 1) {
							this.$Message.success('修改成功')
							this.handleListApproveHistory()
							this.fruit = [];
							this.xzdianlist = [];
							this.dianlist = [];
							this.addsousuo = {};
							this.addlist = {};
						} else {
							this.$Message.error('修改失败')
						}

					})
				}
			},
			//删除
			delxz(i) {
				this.xzdianlist = this.delete(i);
			},
			//选中按钮
			changecheck(res) {

				let reslist = res;
				for(let key in reslist) {
					for(let keys in this.dianlist) {
						if(reslist[key] == this.dianlist[keys]['emid']) {
							this.xzdianlist.push(this.dianlist[keys])
						}
					}
				}
				this.xzdianlist = this.unique(this.xzdianlist, 'emid')

			},
			//数组去重
			unique(arr, field) {
				var map = {};
				var res = [];
				for(var i = 0; i < arr.length; i++) {
					if(!map[arr[i][field]]) {
						map[arr[i][field]] = 1;
						res.push(arr[i]);
					}
				}
				return res;
			},
			//删除
			delete(delIndex) {
				var temArray = [];
				for(var i = 0; i < this.xzdianlist.length; i++) {
					if(i != delIndex) {
						temArray.push(this.xzdianlist[i]);
					}
				}
				return temArray;
			},
			updata(row) {
				this.add = true;
				this.modalname = "编辑巡检点位";
				this.fruit = [];
				this.xzdianlist = [];
				this.dianlist = [];
				this.addsousuo = {};
				this.addlist = {};
				diandetails({
					cguid: row.fpbguid,
					ppsid: row.ppsid

				}).then(res => {
					let reslist = res.obj;
					// console.log(res,'aa')
					this.addlist = {
						ppsname: reslist.ppsname,
						activation: reslist.activation,
						note: reslist.note
					}
					this.ppsid = row.ppsid;
					this.xzdianlist = reslist.fireEmBaseVos;
					this.sousuolist.quyuname = row.rgId;
				})
			},
			//删除
			getDelete() {
				let ids = [];
				if(this.updatelist.length == 0) {
					this.$Message.warning('请先选择一条数据')
				} else {
					for(const key in this.updatelist) {
						ids.push(this.updatelist[key]['ppsid'])
					}
					let id = ids.join(',')
					this.$axios.post('/syspower/relPjPps/delete?ids=' + id).then(res => {
						if(res.data.status == 1) {
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
			//物业选择器
			wychange(val) {
				this.lcjclist = [];
				lcjc({
					bdid: val
				}).then(res => {
					this.lcjclist = res.obj
				})
				//    },1000)
			},

			//单位选择器val
			dwchange(val) {
				this.quyulist = [];
				quyu({
					flid: val
				}).then(res => {
					this.quyulist = res.obj
				})
			},
			//建筑选择器
			jzchange(val) {
				this.dweilist = [];
				dianwei({
					rgid: val
				}).then(res => {
					this.dweilist = res.obj
				})
			},
		},
		created() {
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
	
	#add /deep/ .ivu-modal {
		top: 20px;
	}
	
	.flexdiv {
		display: flex;
		justify-content: space-between;
		.flexdivs {
			width: 270px;
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
	
	.diandiv {
		width: 100%;
		height: 100%;
		overflow: auto;
	}
	
	.diandiv /deep/ .ivu-checkbox-group {
		display: flex;
		flex-direction: column;
	}
</style>