<!--事件列表查看弹窗-->
<template>
    <div class="eventModel" v-if="isModel">        
        <div class="modelMb" @click="cancel"></div> 
            <div class="modcontent"> 
                <!-- 弹框头部 -->
                <div class="addheader flexdivs">
                    <div>
                        <span>报警时间: 2019-11-16 14:36:12</span>
                    </div>
                    <div>
                        <h1>{{jbxxlist.cpname}}</h1>   
                    </div>
                    <div class="headRight">                       
                       <p class="closeModel" @click="cancel">X</p>
                    </div>
                </div> 
                <!--弹框中间内容部分-->
                <div class="divxq">
                    <div class="modelScroll">
                    <!-- 内容左侧第一部分 -->
                     <div class="divone">
                         <!-- 单位联系人 -->
                        <div class="modedivCon">
                            <div class="modetitle">
                                   <span class="titlename">单位联系人</span>
                                   <span class="more">更多>></span>
                            </div>
                            <div class="modeCon">
                                <div class="modeItem">                                 
                                    <div class="contact">
                                        <p>李旭</p>
                                        <p>电话:18856823659</p>
                                        <p class="iconCon">
                                        <span class="iconfont icondianhua modeicon"></span>
                                        <span class="iconfont iconduanxin modeicon"></span>
                                        </p>
                                    </div>
                                </div>
                                <div class="modeItem">                               
                                    <div class="contact">
                                        <p>李旭</p>
                                        <p>电话:18856823659</p>
                                        <p class="iconCon">
                                        <span class="iconfont icondianhua modeicon"></span>
                                        <span class="iconfont iconduanxin modeicon"></span>
                                        </p>
                                    </div>
                                </div>                         
                            </div>
                       </div>
                       <!-- 联勤单位 -->
                        <div class="modedivCon">
                            <div class="modetitle">
                                   <span class="titlename">单位联系人</span>
                                   <span class="more">更多>></span>
                            </div>
                            <div class="modeCon">
                                <div class="modeItem">                               
                                    <div class="contact">
                                        <p>维保单位</p>
                                        <p>电话:18856823659</p>
                                        <p class="iconCon">
                                        <span class="iconfont icondianhua modeicon"></span>
                                        <span class="iconfont iconduanxin modeicon"></span>
                                        </p>
                                    </div>
                                </div>
                                <div class="modeItem">                                
                                    <div class="contact">
                                        <p>维保单位</p>
                                        <p><span>电话:</span><span>18856823659</span></p>
                                        <p class="iconCon">
                                        <span class="iconfont icondianhua modeicon"></span>
                                        <span class="iconfont iconduanxin modeicon"></span>
                                        </p>
                                    </div>
                                </div>                         
                                <div class="modeItem">                             
                                    <div class="contact">
                                        <p>维保单位</p>
                                        <p>电话:18856823659</p>
                                        <p class="iconCon">
                                        <span class="iconfont icondianhua modeicon"></span>
                                        <span class="iconfont iconduanxin modeicon"></span>
                                        </p>
                                    </div>
                                </div>                         
                            </div>
                       </div>
                       <!-- 设备设施 -->
                       <div class="modedivCon">
                            <div class="modetitle">
                                <span class="titlename">设备设施</span>
                                <span class="more">更多>></span>
                            </div>
                       </div>
                       <!-- 建筑信息 -->
                       <div class="modedivCon">
                            <div class="modetitle">
                                <span class="titlename">建筑信息</span>
                                <span class="more">更多>></span>
                            </div>
                            <div class="modeCon modeInfo">
                                <p>建筑信息：{{detailslist.dbname}}</p>
                                <p>使用性质：{{detailslist.useNature}}</p>
                                <p>耐火等级：{{detailslist.rfctGrade}}</p>
                                <p>结构类型：{{detailslist.mcnType}}</p>
                                <p>建筑高度：{{detailslist.bdHeight}}</p>
                                <p>地上：{{detailslist.agLayer}}</p>
                                <p>地下：{{detailslist.ugLayer}}</p>
                                <p>监控室：{{detailslist.montitoringLayer}}</p>
                                <p>消控室：{{detailslist.fcrLayer}}</p>
                            </div>
                       </div>
                     </div>
                    <!-- 内容中间第二部分 -->
                    <div class="divtwo">
                         <!-- 中间上部分 -->
                         <div class="modedivCon infoCon">
                            <div class="alarmCon">
                               <ul class="Tabtit">
                                   <li v-for="(item,index) in infotab" :class="{tabtitshow:titActive==index}" @click="istabInfo(index)">{{item.name}}</li>
                               </ul>
                               <!-- 报警信息内容 -->
                               <div class="modeTab alarmInfo" v-if="isInfoTab==0">
                                   <div class="baseCon infobase">
                                      <div class="ptitle">
                                          <span class="shu"></span>
                                          <span>基础信息</span> 
                                      </div>
                                      <div class="baseinfo">
                                          <p>
                                              <span>设备名称：</span>
                                              <span>{{jbxxlist.emname}}</span>
                                          </p>
                                          <p>
                                              <span>编码：</span>
                                              <span>{{jbxxlist.emid}}</span>
                                          </p>
                                          <p>
                                              <span>控制器编码：</span>
                                              <span>{{jbxxlist.ctlsn}}</span>
                                          </p>
                                          <p>
                                              <span>所属单位：</span>
                                              <span>{{jbxxlist.cpname}}</span>
                                          </p>
                                          <p>
                                              <span>单位地址：</span>
                                              <span>{{jbxxlist.address}}</span>
                                          </p>
                                          <p>
                                              <span>安装位置：</span>
                                              <span>{{jbxxlist.installAddress}}</span>
                                          </p>
                                      </div>
                                   </div>  
                                   <div class="baseCon infobase">
                                      <div class="ptitle">
                                          <span class="shu"></span>
                                          <span>警情信息</span> 
                                      </div>
                                      <div class="baseinfo">
                                          <p>
                                              <span>首次报警时间：</span>
                                              <span>{{jbxxlist.raDate}}</span>
                                          </p>
                                          <p>
                                              <span>最新报警时间：</span>
                                              <span>{{jbxxlist.newestDate}}</span>
                                          </p>
                                          <p>
                                              <span>持续时长：</span>
                                              <span>{{jbxxlist.lastTime}}</span>
                                          </p>
                                          <p>
                                              <span>报警类型：</span>
                                              <span>{{['','火警','故障','下线','报警'][jbxxlist.raType]}}</span>
                                          </p>
                                          <p>
                                              <span>报警次数：</span>
                                              <span>{{jbxxlist.alerts}}</span>
                                          </p>
                                          <p>
                                              <span>状态：</span>
                                              <span>{{['未处理', '已处理'][jbxxlist.status]}}</span>
                                          </p>
                                      </div>
                                   </div>  
                                   <div class="baseCon">
                                      <div class="ptitle">
                                          <span class="shu"></span>
                                          <span>报警记录(0次)</span> 
                                      </div>                                     
                                   </div>  
                                   <!-- 处理的相关模块 -->
                                   <div class="manage">
                                        <div class="modeDeal">
                                            <div class="dealHead">
                                                <label>处理</label>
                                                <ul>
                                                    <li v-for="(item,index) in cltypelist" :class="{dealshow:dealActive==item.ID}" @click="manage(item.ID)">{{item.LABEL}}</li>
                                                </ul>
                                            </div>                                          
                                             <div class="dealTab" v-if="dealTab==220">
                                                 <div class="dealx">
                                                    <label class="dealTits">原因描述</label>
                                                    <div class="dealright">
                                                        <div class="desInfo"> 
                                                            <p v-for="(item,index) in cltypeRshllist">
                                                                <input type="radio" :name="item.TYPE" :value="item.VALUE" :checked="item.ID==rsType" @change="changeRadio(item.ID,'1')">
                                                                <span>{{item.LABEL}}</span>
                                                            </p>                                                      
                                                        </div>  
                                                        <input type="text" v-model="rsNote" placeholder="请输入描述信息">
                                                    </div>
                                                 </div>                                                
                                             </div>
                                             <div class="dealTab" v-if="dealTab==221">
                                                <div class="dealx">
                                                    <label class="dealTits">屏蔽时段</label>
                                                    <div class="dealright">
                                                        <div class="desInfo"> 
                                                            <p v-for="(item,index) in cltyshieleTitlist">
                                                                <input type="radio" :name="item.TYPE" :id="item.ID" :value="item.VALUE" :checked="item.ID== pbtime" @change="changeRadio(item.ID,'2')">
                                                                <span>{{item.LABEL}}</span> 
                                                            </p>  
                                                            <!-- 屏蔽时段自定义时间 -->
                                                            <div class="zdytime" v-if="isshield">
                                                                <DatePicker :value="this.startTime" format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="开始时间" @change="startTime"></DatePicker>
                                                                — 
                                                                <DatePicker :value="this.endTime" format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="结束时间"  @change="endTime"></DatePicker>
                                                            </div>                                                                                                                   
                                                        </div>  

                                                    </div>
                                                 </div>
                                                <div class="dealx">
                                                    <label class="dealTits">原因描述</label>
                                                    <div class="dealright">
                                                        <div class="desInfo"> 
                                                            <p v-for="(item,index) in cltypeRspblist">
                                                                <input type="radio" :name="item.TYPE" :id="item.ID" :value="item.VALUE" :checked="item.ID ==pbType" @change="changeRadio(item.ID,'3')">
                                                                <span>{{item.LABEL}}</span>
                                                            </p> 
                                                        </div>  
                                                        <input type="text" v-model="rsNote" placeholder="请输入描述信息">
                                                    </div>
                                                 </div>
                                             </div>
                                             <div class="dealTab" v-if="dealTab==222">
                                               <div class="dealx">
                                                    <label class="dealTits">测试时段</label>
                                                    <div class="dealright">
                                                        <div class="desInfo"> 
                                                            <p v-for='(item,index) in cltypeRscslist'>
                                                                <input type="radio" :name="item.TYPE" :id="item.ID" :value="item.VALUE" :checked="item.ID == cstime" @change="changeRadio(item.ID,'4')">
                                                                <span>{{item.LABEL}}</span>
                                                            </p>                                                     
                                                        </div>
                                                    </div>
                                                 </div>
                                               <div class="dealx">
                                                    <label class="dealTits">原因描述</label>
                                                    <div class="dealright">
                                                        <div class="desInfo"> 
                                                            <p v-for="(item,index) in cltypeRslist">
                                                                <input type="radio" :name="item.TYPE" :id="item.ID" :value="item.VALUE" :checked="item.ID == csType" @change="changeRadio(item.ID,'5')">
                                                                <span>{{item.LABEL}}</span>
                                                            </p>                                                                                                           
                                                        </div>
                                                        <input type="text" v-model="rsNote"  placeholder="请输入描述信息">
                                                    </div>
                                                 </div>
                                             </div>
                                             <div class="dealTab" v-if="dealTab==223">
                                               <div class="dealx">
                                                    <label class="dealTits">原因描述</label>
                                                    <div class="dealright">
                                                        <div class="desInfo"> 
                                                            <p v-for='(item,index) in this.cltypeRshzlist'>
                                                                <input type="radio" :name="item.TYPE" :id="item.ID" :value="item.VALUE" :checked="item.ID == chType" @change="changeRadio(item.ID,'6')">
                                                                <span>{{item.LABEL}}</span>
                                                            </p>                                                                                                               
                                                        </div>
                                                        <input type="text" v-model="rsNote"  placeholder="请输入描述信息">
                                                    </div>
                                                 </div>
                                               <div class="dealx">
                                                    <label class="dealTits">处理记录</label>
                                                    <div class="dealright">
                                                        <div class="desInfo"> 
                                                            <p v-for='(item,index) in cltypePrqrlist'>
                                                                <input type="radio" :name="item.TYPE" :id="item.ID" :value="item.VALUE" :checked="item.ID == prType" @change="changeRadio(item.ID,'7')">
                                                                <span>{{item.LABEL}}</span>
                                                            </p>                                                         
                                                        </div>
                                                        <input type="text" v-model="prNote" placeholder="请输入描述信息">
                                                    </div>
                                                 </div>
                                             </div>
                                        </div>                                        
                                   </div>
                                    <p class="manageBtn" @click="getsaveAevp">处理</p>
                               </div>
                               <div class="modeTab InfoRecord" v-if="isInfoTab==1">
                                   <ul class="notifyTit">
                                       <li class="selUl" >
                                           <span class="infoIcon wxIcon"></span>
                                           <span>微信</span>
                                       </li>
                                       <li>
                                           <span class="infoIcon dxIcon"></span>
                                           <span>短信</span>
                                       </li>
                                       <li>
                                           <span class="infoIcon yyIcon"></span>
                                           <span>语音</span>
                                       </li>
                                   </ul>
                                   <div class="recordTable">
                                       <table>
                                           <thead>
                                             <tr>
                                                 <th>通知时间</th>
                                                 <th>通知对象</th>
                                                 <th>岗位</th>
                                                 <th>微信号码</th>
                                                 <th>昵称</th>
                                             </tr>
                                           </thead>
                                           <tbody>

                                           </tbody>
                                       </table>
                                   </div>
                               </div>
                            </div>                           
                         </div>
                         <!-- 事件消息 -->
                         <div class="modedivCon eventCon">
                            <div class="modetitle">
                                <span class="titlename">事件消息</span>
                                <span class="more">更多>></span>
                            </div>
                            <div class="modeCon tableCon">    
                              <div class="scroll-tab">
                                  <table>
                                      <thead>
                                           <tr>
                                              <th>时间</th>
                                              <th>地点</th>
                                              <th>仪器</th>
                                              <th>编码</th>
                                           </tr>
                                      </thead>
                                      <tbody>
                                            <tr v-for="item in ememidlist">
                                              <td>{{item.raDate}}</td>
                                              <td>{{item.rgname}}</td>
                                              <td>{{item.emname}}</td>
                                              <td>{{item.emEmid}}</td>
                                           </tr>
                                      </tbody>
                                  </table>
                               </div>
                            </div>
                         </div>
                    </div>
                    <!-- 内容右侧第三部分 -->
                    <div class="divthree">
                        <div class="modedivCon videoCon">
                             <div class="modetitle">
                                <span class="titlename">视频监控</span>
                                <span class="more">更多>></span>
                             </div>
                             <div class="videoTop">
                                    <video src="../../assets/images/SC.mp4" controls>
                                    </video>
                            </div>  
                             <div class="modeCon videowrap">
                                  <ul>
                                      <li>
                                          <video src="../../assets/images/SC.mp4" controls></video>
                                      </li>
                                      <li>
                                          <video src="../../assets/images/SC.mp4" controls></video>
                                      </li>
                                      <li>
                                          <video src="../../assets/images/SC.mp4" controls></video>
                                      </li>
                                      <li>
                                          <video src="../../assets/images/SC.mp4" controls></video>
                                      </li>
                                      <li>
                                          <video src="../../assets/images/SC.mp4" controls></video>
                                      </li>
                                      <li>
                                          <video src="../../assets/images/SC.mp4" controls></video>
                                      </li>
                                      <li>
                                          <video src="../../assets/images/SC.mp4" controls></video>
                                      </li>
                                      <li>
                                          <video src="../../assets/images/SC.mp4" controls></video>
                                      </li>
                                      <li>
                                          <video src="../../assets/images/SC.mp4" controls></video>
                                      </li>
                                      <li>
                                          <video src="../../assets/images/SC.mp4" controls></video>
                                      </li>
                                  </ul>
                            </div>                                                     
                        </div>
                    </div> 
                  </div>
                </div>
         </div>  
    </div>
</template>
<script>
import {
findDetails,
details,
cltype, 
cltypeRshl,//忽略原因类型分类
cltypeRspb,//屏蔽原因分类
cltypeRs,//测试原因分类
cltypeRscs,//测试时段分类
cltypeRsgz,//故障确认原因分类
cltypeRshz,//火灾确认原因分类
cltypePrqr,//确认处理纪录类型
saveAevp, //详情处理
fdetails,//处理详细信息
shieleTit //屏蔽时段
} from 'api/firealarm'
export default {
    props:['itememid','itemememid','itemguid','itemratype'],
    name:'synthesize',
    data(){
        return {
            isModel:false,
            infotab:[
                {name:'报警信息'},
                {name:'通知记录'}
            ],
            titActive:0,
            isInfoTab:0,    
            dealActive:220,
            dealTab:220,      
            ememidlist:[],//事件消息数据
            jbxxlist:[],//警报信息
            detailslist:[],//信息内容
            cltypelist:[],//处理表头数据
            cltypeRshllist:[],//忽略原因类型分类
            cltypeRspblist:[],//屏蔽原因分类
            cltypeRslist:[],//测试原因分类
            cltypeRscslist:[],//测试时段分类
            cltypeRsgzlist:[],//故障确认原因分类
            cltypeRshzlist:[],//火灾确认原因分类
            cltypePrqrlist:[],//确认处理纪录类型
            cltyshieleTitlist:[],//屏蔽时段类型
            rsNote:'',//原因描述     
            hdType:220,//处理类型  
            rsType:224,//忽略原因类型
            pbtime:268,//屏蔽时段        
            pbType:231,//屏蔽原因类型
            cstime:236,//测试时段
            csType:233,//测试原因类型
            chType:245,//处理原因类型
            prType:249,//处理记录类型
            prNote:'',//处理记录描述
            startTime:'',//开始时间
            endTime:'',//结束时间
            isshield:false,

        }
    },
    mounted(){ 
    },
    methods: { 
        cancel(){
             this.isModel = false
        },
        istabInfo(index){ 
            this.titActive=index;
            this.isInfoTab=index;
        },
        manage(itemID){
            this.hdType=itemID;
            this.dealActive=itemID;
            this.dealTab=itemID; 
        }, 
        changeRadio(itemId,type){  
             if(this.hdType==220){
                this.rsType=itemId;  
             }else if(this.hdType==221){
                 if(type=='2'){
                     if(itemId==271){
                        this.isshield=true;
                     }else{
                        this.isshield=false;
                     }                   
                    this.pbtime=itemId;
                                                        
                 }else if(type=='3'){
                    this.pbType=itemId;
                 }  
             }else if(this.hdType==222){
                 if(type=='4'){
                    this.cstime=itemId;
                 }else if(type=='5'){
                    this.csType=itemId;
                 }  
             }else if(this.hdType==223){                 
                 if(type=='6'){
                    this.chType=itemId;
                 }else if(type=='7'){
                    this.prType=itemId;
                 } 
             }
           
        }, 
        //事件消息列表
        findDetails(){
            let emid=this.itememid;
            let raType=this.itemratype;
            findDetails(emid,raType).then(res=>{
               this.ememidlist=res.obj;
            }) 
        },
        // 报警信息  
        details(){
            let emid=this.itememid;
            let raType=this.itemratype; 
            details(emid,raType).then(res=>{
                this.jbxxlist=res.obj;
            })
        },
        // 基础信息  
        fdetails(){
                 let emid=this.itememid;
            fdetails(emid).then(res=>{
                this.detailslist=res.obj;
                })
        },
        // 处理字典
        cltype(){
            cltype().then(res=>{
            this.cltypelist=res.obj;
            })
            cltypeRshl().then(res=>{
            this.cltypeRshllist=res.obj;
            })
            cltypeRspb().then(res=>{
                this.cltypeRspblist=res.obj;
            })
            cltypeRs().then(res=>{
            this.cltypeRslist=res.obj;
            })
            cltypeRscs().then(res=>{
            this.cltypeRscslist=res.obj;
            })
            cltypeRsgz().then(res=>{
            this.cltypeRsgzlist=res.obj;
            })
            cltypeRshz().then(res=>{
            this.cltypeRshzlist=res.obj;
            })
            cltypePrqr().then(res=>{
            this.cltypePrqrlist=res.obj;
            })
            shieleTit().then(res=>{
            this.cltyshieleTitlist=res.obj;
            })
        },
        // 点击处理时间
        getsaveAevp(){ 
             if(this.hdType==220){
                 let savelist={
                  raType:this.itemguid,
                  emid:this.itememid,
                  hdType:this.hdType,
                  rsType:this.rsType, 
                  rsNote:this.rsNote,        
                 }
                this.saveAevp(savelist)
             }else if(this.hdType==221){
                //  console.log(this.startTime)
                //  console.log(this.endTime)
                     let savelist={
                        raType:this.itemguid,
                        emid:this.itememid,
                        hdType:this.hdType,
                        rsNote:this.rsNote,        
                        rsType:this.rsType,
                        rsNote:this.rsNote,
                        prType:this.pbType
                 }
                 this.saveAevp(savelist)
             }else if(this.hdType==222){
                     let savelist={
                        raType:this.itemguid,
                        emid:this.itememid,
                        hdType:this.hdType,
                        rsNote:this.rsNote,        
                        shieldTit:this.cstime,
                        rsType:this.csType,
                 }
                 this.saveAevp(savelist)
             }else if(this.hdType==223){
                     let savelist={
                        raType:this.itemguid,
                        emid:this.itememid,
                        hdType:this.hdType,
                        rsNote:this.rsNote,        
                        rsType:this.chType,
                        prType:this.prType,
                        prNote:this.prNote
                 }
                 this.saveAevp(savelist)
             }
        },
        // 调用处理接口
        saveAevp(savelist){
            saveAevp(savelist).then(res=>{
                    if(res.status==1){
                    this.rsNote='';
                    this.prNote='';
                }
            })
        }
    }, 

    created(){        
  
    },  
    watch: {
        // 监听弹框是否显示
        isModel(istrue) {
            if(istrue==true){
              this.findDetails();
              this.details();
              this.fdetails();
              this.cltype();
            }
        },
 
  } 
}
</script>
<style lang="less" scoped>
  @import './eventModel.less';
</style>