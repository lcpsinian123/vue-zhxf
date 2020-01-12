<template>
	<div class='containers cententpadding'>
		<div class="rightHead">
			<div class='sousuo1'>
				<div class='searchMeun'>
					<span class="wdName_text">
                    处理状态：
                </span>
					<Select v-model="drawCategory" style="width: 10%" clearable>
						<Option v-for="item in drawCategorylist" :value="item.value" :key="item.value">{{ item.label }}</Option>
					</Select>
					<span class="wdName_text1">
                    时间：
                </span>
					<DatePicker style='width:10%' type="datetime" placeholder="开始时间" @on-change='startDate==$event' :value="startDate"></DatePicker>
					—
					<DatePicker style='width:10%' type="datetime" placeholder="结束时间" @on-change='endDate==$event' :value="endDate"></DatePicker>
					<Button class='wdName' type="info" @click="handleListApproveHistory">查询</Button>

				</div>
			</div>

			<div class='tableBox'>
				<Table stripe border :columns="TableTitle" :data="TableData">
					<template slot-scope="{ row, index }" slot="sortNum">
						<span>{{index+1}}</span>
					</template>
					<template slot-scope="{ row, index }" slot="action">
						<Button type="primary" ghost size="small" @click="detals(row)">详情</Button>
					</template>
				</Table>
				<Page :total="dataCount" :page-size="pageSize" show-total class="paging"></Page>
			</div>
			<Modal width="700" id="add" v-model="add">
				<div slot="header" class="addheader">
					隐患详情
				</div>
				<Form ref="formValidate" :model="formValidate" :label-width="120">
					<div class='modelbox'>
						<div class='leftH'>
							<FormItem label="隐患生成时间:" prop="createTime">
								<Input v-model="formValidate.createTime" placeholder=""></Input>
							</FormItem>
							<FormItem label="隐患来源" prop="hiddenSource">
								<Input v-model="formValidate.hiddenSource" placeholder=""></Input>
							</FormItem>
							<FormItem label="严重程度:" prop="wlabel">
								<Input v-model="formValidate.wlabel" placeholder=""></Input>
							</FormItem>
							<FormItem label="限制整改时间:" prop="handleTime">
								<Input v-model="formValidate.taskTerm" placeholder=""></Input>
							</FormItem>
							<FormItem label="问题照片:" prop="name">
								<div class='imgs'>
									<img :src='this.wclimg' />
								</div>
							</FormItem>
						</div>
						<div class='rightH'>
							<FormItem label="设备名称" prop="emname">
								<Input v-model="formValidate.emname" placeholder=""></Input>
							</FormItem>
							<FormItem label="问题内容类型" prop="wtlabel">
								<Input v-model="formValidate.wtlabel" placeholder=""></Input>
							</FormItem>
							<FormItem label="问题描述" prop="city">
								<Input v-model="formValidate.note" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="描述..." />
							</FormItem>
						</div>

					</div>
					<Divider />
					<div class='bottom'>
						<FormItem style='width:50%' label="隐患整改时间:" prop="handleTime">
							<Input v-model="formValidate.handleTime" placeholder=""></Input>
						</FormItem>
						<FormItem label="问题照片:" prop="name">
							<div class='imgs'>
								<img :src='this.climg' />
							</div>

						</FormItem>
					</div>

				</Form>

			</Modal>

		</div>
	</div>
</template>

<script>
	import { getyhlist } from 'api/mainjilu'
	import { getDetail } from 'api/hiddenDanger'
	export default {
		data() {
			return {
				// 初始化信息总条数
				dataCount: 0,
				// 每页显示多少条
				pageSize: 10,
				startDate: "",
				endDate: '',
				add: false,
				drawCategory: '',
				drawCategorylist: [{
						label: '未处理',
						value: '0'
					},
					{
						label: '已处理',
						value: '1'
					}
				],
				TableTitle: [{
						title: '序号',
						width: 80,
						key: 'sortNum',
						slot: "sortNum"
					},

					{
						title: '项目类型名称',
						align: 'center',
						key: 'pptpjname'
					},
					{
						title: '设备名称',
						align: 'center',
						key: 'emname'
					},
					{
						title: '生成时间',
						align: 'center',
						key: 'createTime'
					},
					{
						title: '项目类型名称',
						align: 'center',
						key: 'xptpjname'
					},
					{
						title: '设备操作规范',
						align: 'center',
						key: 'gfan'
					},
					{
						title: '状态',
						align: 'center',
						key: 'state',
						render: (h, params) => {
							let status = params.row.state //0:空闲  1:游戏  2:未上线
							if(status == 0) {
								return h('span', '未处理')
							}
							if(status == 1) {
								return h('span', '已处理')
							}
						}
					},
					{
						title: '操作',
						key: 'action',
						slot: 'action',
						align: 'center'
					}
				],
				TableData: [],
				ajaxHistoryData: [],
				formValidate: {
					createTime: '',
					hiddenSource: '',
					wlabel: '',
					handleTime: '',
					emname: '',
					taskTerm: '',
					wtlabel: '',
					note: '',
					name: "",
					filepath: '',
					hfilepath: '', //未处理
					wfilepath: '' //处理
				},
				wclimg: '',
				climg: ''
			}
		},
		created() {
			this.handleListApproveHistory()
		},
		methods: {
			getlist(params) {
				getyhlist(params.pageNum, params.pageSize, {
					state: this.drawCategory,
					startTime: this.startDate,
					endTime: this.endDate
				}).then(res => {
					console.log(res)
					if(res.status == 1) {
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
				this.getlist(seletlist);
			},
			changepage(index) {
				let seletlist = {
					pageNum: index,
					pageSize: 10
				};
				this.getlist(seletlist);
			},
			detals(row) {
				this.add = true;
				getDetail(row.guid).then(res => {
					if(res.status == 1) {
						this.formValidate = res.obj;
						if(this.formValidate) {
							this.wclimg = this.formValidate.filepath + this.formValidate.hfilepath;
							this.climg = this.formValidate.filepath + this.formValidate.wfilepath
						}
						console.log(this.wclimg)
					}

				})
			}
		}
	}
</script>

<style lang="less" scoped>
	#add .ivu-modal-header,
	#updata .ivu-modal-header {
		padding: 0;
	}
	
	#add .ivu-modal-close,
	#updata .ivu-modal-close {
		top: 3px;
	}
	
	.addheader {
		background: #394959;
		height: 40px;
		line-height: 40px;
		color: #fff;
		padding-left: 30px;
	}
	
	#add .modelbox {
		display: flex;
	}
	
	#add .modelbox .leftH {
		flex: 1;
	}
	
	#add .modelbox .rightH {
		flex: 1;
	}
	
	#add .imgs {
		width: 100px;
		height: 100px;
	}
</style>