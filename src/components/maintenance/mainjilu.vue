<!--
 * @Author: your name
 * @Date: 2019-11-14 14:10:59
 * @LastEditTime: 2019-11-29 19:34:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-zzxf\src\components\maintenance\mainrouter.vue
 -->
<template>
	<div class='containers cententpadding'>
		<Tabs value="name1">
			<TabPane label="全部任务" name="name1">
				<div class="rightHead">
					<div class='sousuo1'>
						<div class='searchMeun'>
							<span class="wdName_text">
                            计划名称：
                        </span>
							<Input v-model="cpname" placeholder="输入巡检点位名称" style="width: 10%" />
							<span class="wdName_text1">
                            时间：
                        </span>
                        <DatePicker :value="this.startTime" @on-change="startTime=$event" format="yyyy-MM-dd " type="date" placeholder="开始时间" style="width: 12%"></DatePicker>
                         — 
                        <DatePicker :value="this.endTime" @on-change="endTime=$event" format="yyyy-MM-dd " type="date" placeholder="结束时间" style="width: 12%"></DatePicker>

							<Button class='wdName' type="info" @click="handleListApproveHistory">查询</Button>
						</div>
					</div>
					<div class='tableBox'>
								<Table stripe border :columns="TableTitle" :data="TableData" >
							<template slot-scope="{ row, index }" slot="sortNum">
								<span>{{index+1}}</span>
							</template>

							<template slot-scope="{ row, index }" slot="action">
								<Button type="primary" ghost size="small" @click="getDetail(row)">详情</Button>

								<Modal width="700" v-model="xjnr">
									<div slot="header" class="">
										巡检内容列表
									</div>
									<Table stripe border :columns="tableDetailTitle" :data="tableDetailData">
									</Table>
								</Modal>

							</template>
							
						</Table>
							<Page :total="dataCount" :page-size="pageSize" @on-page-size-change='pagesizeChange' @on-change='pagechanges' show-total show-sizer class="paging"></Page>
			
					
					

					</div>

				</div>
			</TabPane>
			<!--<TabPane label="次巡任务" name="name2">标签二的内容</TabPane>
			<TabPane label="时巡任务" name="name3">标签三的内容</TabPane>-->
		</Tabs>

	</div>
</template>

<script>
	import { getPlanList, getPlanDetail } from 'api/mainjilu';
	export default {
		name: 'maindian',
		data() {
			return {
				startTime: '',
				endTime: '',
				// 初始化信息总条数
				dataCount: 0,
				// 每页显示多少条
				pageSize: 10,
				floorNum: null,
				XMLXBH: null,
				xjnr: false,
				add: false,
				updata: false,
				WordName: null,
				drawCategory: null,
                cpname:'',
				TableTitle: [{
						type: 'selection',
						width: 60,
						align: 'center'
					}, {
						title: '序号',
						width: 80,
						key: 'sortNum',
						slot: "sortNum"
					},

					{
						title: '计划名称',
						align: 'center',
						key: 'ptpname'
					},
					{
						title: '计划开始时间',
						align: 'center',
						key: 'startTime'
					},
					{
						title: '计划结束时间',
						align: 'center',
						key: 'endTime'
					},
					{
						title: '计划创建时间',
						align: 'center',
						key: 'createTime'
					},

					{
						title: '巡检类型',
						align: 'center',
						key: 'label'
					},

					{
						title: '巡检人员',
						align: 'center',
						key: 'loginName'
					},

					{
						title: '状态',
						align: 'center',
						key: 'status'
					},

					{
						title: '有无问题',
						align: 'center',
						key: 'isProblem'
					},
					{
						title: '操作',
						key: 'action',
						slot: 'action',
						align: 'center'
					}
				],
				TableData: [],

				tableDetailTitle: [{
						title: '设备名称',
						align: 'center',
						key: 'emname'
					},
					{
						title: '点位',
						align: 'center',
						key: 'rgname'
					},
					{
						title: '楼层',
						align: 'center',
						key: 'dbname'
					},
					{
						title: '建筑',
						align: 'center',
						key: 'flname'
					}
				],
				tableDetailData: [],
				cnpme: '',
				 seletlist : {
					pageNum: 0,
					pageSize: 10
				}
			}
		},
		created() {
			this.handleListApproveHistory();
		},
		methods: {
			// 获取信息列表
			getlist(param) {
				getPlanList(param.pageNum, param.pageSize, {
					ipmendTime: this.endTime || null,
					ipmstartTime: this.startTime || null,
					ptpname: this.cpname
				}).then(res => {
					if(res.status === '1') {
						this.dataCount = res.obj.total
						this.TableData = res.obj.list
					}
				})
			},
			// 获取历史记录信息
			handleListApproveHistory() {
				this.getlist(this.seletlist);
			},
			// 切换页码
			pagechanges(i) {
				this.seletlist.pageNum=i;
				this.getlist(this.seletlist)
			},
			//切换每页条数
			pagesizeChange(res){
               this.seletlist.pageSize =res;
				this.getlist(this.seletlist)
			},
			// 获取信息列表
			getDetail(param) {
				this.xjnr = true;
				console.log(param);
				getPlanDetail(
					param.ptlpid	
		
				).then(res => {
					console.log(res);
					if(res.status === '1') {
						this.tableDetailData = res.obj
					}
				})
			}
		}

	}
</script>

<style lang="less" scoped>

 .tableBox {
      height: calc(100% - 137px);

      }
</style>

