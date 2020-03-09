<template>
<div id="mindmaps">
   <div v-if="!$root.system.mindmap.current">
       <div v-for="(element,index) in mindmapList" :key="index" class="iface_crd">
        <button @click="DeleteItem(element)" class="iface_crd_btn btn_tr" ><i class="material-icons">delete</i></button>
        {{element.title}} <span v-if="!element.title">New mindmap</span>
        <button @click="selectItem(element)" class="iface_crd_btn btn_br" ><i class="material-icons">label_important</i></button>
       </div>
       <button @click="AddNew" class="fab fab-lg btn_br"><i class="material-icons">add_circle</i></button>
   </div>
   <div v-if="$root.system.mindmap.current">show mindmap
   <button @click="unselectItem" class="fab fab-lg btn_br" ><i class="material-icons">cancel</i></button>
   </div>
</div>
</template>

<style scoped>
#mindmaps{
    position: absolute;
    top:0px;
    bottom:0px;
    left:0px;
    right:0px;
    overflow: auto;
    padding-bottom:50px;
}
</style>
<script>
export default {
    data(){
        return {
            mindmapList : []
        }
    },
    methods :{
        updatetitle(el, i){
            this.mindmapList[i] = el
        },
        selectItem(el){
            console.log(el)
            this.$root.system.mindmap.current = el
        },
        unselectItem(){
            this.$root.system.mindmap.current=null
              this.GetmindmapList();
        },
        AddNew(){
            // PUT INTO THE DATABASE THEN RELOAD THE LIST
            this.$root.savetool("mindmap", this.$root.uuid.v1())
            this.GetmindmapList();
        },
        GetmindmapList(){
           this.mindmapList =  this.$root.GetToolList("mindmap")
        }
    },
    mounted() {
       if(!this.$root.system.mindmap.current){
            this.GetmindmapList()
       }
    },
    beforeMount(){
       // this.$root.loadtool("mindmap")        
    }
}
</script>