<template>
<div id="timelines">
   <div v-if="!$root.system.timeline.current">
       <div v-for="(element,index) in timelineList" :key="index" class="iface_crd">
        <button @click="DeleteItem(element)" class="iface_crd_btn btn_tr" ><i class="material-icons">delete</i></button>
        {{element.title}} <span v-if="!element.title">New timeline</span>
        <button @click="selectItem(element)" class="iface_crd_btn btn_br" ><i class="material-icons">label_important</i></button>
       </div>
       <button @click="AddNew" class="fab fab-lg btn_br"><i class="material-icons">add_circle</i></button>
   </div>
   <div v-if="$root.system.timeline.current">show timeline
   <button @click="unselectItem" class="fab fab-lg btn_br" ><i class="material-icons">cancel</i></button>
   </div>
</div>
</template>

<style scoped>
#timelines{
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
            timelineList : []
        }
    },
    methods :{
        updatetitle(el, i){
            this.timelineList[i] = el
        },
        selectItem(el){
            console.log(el)
            this.$root.system.timeline.current = el
        },
        unselectItem(){
            this.$root.system.timeline.current=null
              this.GettimelineList();
        },
        AddNew(){
            // PUT INTO THE DATABASE THEN RELOAD THE LIST
            this.$root.savetool("timeline", this.$root.uuid.v1())
            this.GettimelineList();
        },
        GettimelineList(){
           this.timelineList =  this.$root.GetToolList("timeline")
        }
    },
    mounted() {
       if(!this.$root.system.timeline.current){
            this.GettimelineList()
       }
    },
    beforeMount(){
       // this.$root.loadtool("timeline")        
    }
}
</script>