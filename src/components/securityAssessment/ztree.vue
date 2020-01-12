<template>
<div id='AssessTree'>
   
    <div class="tree-box">
        <div class="zTreeDemoBackground left">
            <ul id="treeDemo" class="ztree"></ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Atree",
    data() {
        return {
            setting: {
                data: {
                    simpleData: {
                        enable: true,
                        idKey: "id",
                        pIdKey: "pId",
                        rootPId: 0
                    }
                }
            },
            zNodes: [{
                    id: 1,
                    pId: 0,
                    name: "父节点1"
                },
                {
                    id: 11,
                    pId: 1,
                    name: "时开始大幅"
                },
                {
                    id: 12,
                    pId: 1,
                    name: "子节点2"
                }
            ]

        }

    },
    methods: {
            // freshArea: function () {
            //     $.fn.zTree.init($("#treeDemo"), this.setting, this.zNodes);
            // }
    },
    mounted() {
        $.fn.zTree.init($("#treeDemo"), this.setting, this.zNodes);
    }

}
</script>

<style>

</style>
