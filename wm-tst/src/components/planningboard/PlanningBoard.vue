<template>
<div id="planningboards">
   <div v-if="!$root.system.planningboard.current">
       <div v-for="(element,index) in planningboardList" :key="index" class="iface_crd">
        <button @click="DeleteItem(element)" class="iface_crd_btn btn_tr" ><i class="material-icons">delete</i></button>
        {{element.title}} <span v-if="!element.title">New planningboard</span>
        <button @click="selectItem(element)" class="iface_crd_btn btn_br" ><i class="material-icons">label_important</i></button>
       </div>
       <button @click="AddNew" class="fab fab-lg btn_br"><i class="material-icons">add_circle</i></button>
   </div>
   <div v-if="$root.system.planningboard.current">show planningboard
   <button @click="unselectItem" class="fab fab-lg btn_br" ><i class="material-icons">cancel</i></button>
   </div>
</div>
</template>

<style scoped>
#planningboards{
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
            planningboardList : []
        }
    },
    methods :{
        updatetitle(el, i){
            this.planningboardList[i] = el
        },
        selectItem(el){
            console.log(el)
            this.$root.system.planningboard.current = el
        },
        unselectItem(){
            this.$root.system.planningboard.current=null
              this.GetplanningboardList();
        },
        AddNew(){
            // PUT INTO THE DATABASE THEN RELOAD THE LIST
            this.$root.savetool("planningboard", this.$root.uuid.v1())
            this.GetplanningboardList();
        },
        GetplanningboardList(){
           this.planningboardList =  this.$root.GetToolList("planningboard")
        }
    },
    mounted() {
       if(!this.$root.system.planningboard.current){
            this.GetplanningboardList()
       }
    },
    beforeMount(){
       // this.$root.loadtool("planningboard")        
    }
}
</script>