<!--
 * @Author: your name
 * @Date: 2019-10-24 16:17:23
 * @LastEditTime: 2019-11-16 11:30:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-zzxf\src\views\common\404.vue
 -->
<template>
  <div class="yulan" id="viewerPlaceHolder">
    <!-- <h1>awdawdawd</h1> -->
  </div>
</template>
<script type="text/javascript" src="http://192.168.2.185:8088/preview/flexpaper_flash.js"></script>  
<script type="text/javascript" src="http://192.168.2.185:8088/preview/flexpaper_flash_debug.js"></script> 
<script>
export default {
  name:'yulan',
  data() {
    return {
      
    }
  },
  methods:{
     yulan() {
      
                var sts=localStorage.getItem('guid')
                 console.log(sts)
          var path = "http://192.168.2.185:8088/"
                var fp = new FlexPaperViewer(
                        path+'preview/FlexPaperViewer',  
                        'viewerPlaceHolder', { config : {
                        SwfFile : path+'get/swf/'+sts+'.swf',  
                        Scale : 0.6,   
                        ZoomTransition : 'easeOut',  
                        ZoomTime : 0.5,  
                        ZoomInterval : 0.2,  
                        FitPageOnLoad : true,  
                        FitWidthOnLoad : false,  
                        FullScreenAsMaxWindow : false,  
                        ProgressiveLoading : false,  
                        MinZoomSize : 0.2,  
                        MaxZoomSize : 5,  
                        SearchMatchAll : false,  
                        InitViewMode : 'SinglePage',
                        ViewModeToolsVisible : true,  
                        ZoomToolsVisible : true,  
                        NavToolsVisible : true,  
                        CursorToolsVisible : true,  
                        SearchToolsVisible : true,  
                        localeChain: 'en_US'  
                    }});
            
        },
       
  },
  created() {
          this.yulan();
        },
  
}
</script>
<style lang="less" scoped>
.yulan{
  width: 100%;
  height: 100%;
}
</style>