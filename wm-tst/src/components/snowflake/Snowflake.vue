<template>
<div id="snowflakes">
   <div v-if="!$root.system.snowflake.current">
       <div v-for="(element,index) in snowflakeList" :key="index" class="iface_crd">
        <button @click="DeleteItem(element)" class="iface_crd_btn btn_tr" ><i class="material-icons">delete</i></button>
        {{element.title}} <span v-if="!element.title">New Snowflake</span>
        <button @click="selectItem(element)" class="iface_crd_btn btn_br" ><i class="material-icons">label_important</i></button>
       </div>
       <button @click="AddNew" class="fab fab-lg btn_br"><i class="material-icons">add_circle</i></button>
   </div>
   <div v-if="$root.system.snowflake.current">show Snowflake
   <button @click="unselectItem" class="fab fab-lg btn_br" ><i class="material-icons">cancel</i></button>
   </div>
</div>
</template>

<style scoped>
#snowflakes{
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
            snowflakeList : []
        }
    },
    methods :{
        updatetitle(el, i){
            this.snowflakeList[i] = el
        },
        selectItem(el){
            console.log(el)
            this.$root.system.snowflake.current = el
        },
        unselectItem(){
            this.$root.system.snowflake.current=null
              this.GetSnowflakeList();
        },
        AddNew(){
            // PUT INTO THE DATABASE THEN RELOAD THE LIST
            this.$root.savetool("snowflake", this.$root.uuid.v1())
            this.GetSnowflakeList();
        },
        GetSnowflakeList(){
           this.snowflakeList =  this.$root.GetToolList("snowflake")
        }
    },
    mounted() {
       if(!this.$root.system.snowflake.current){
            this.GetSnowflakeList()
       }
    },
    beforeMount(){
       // this.$root.loadtool("snowflake")        
    }
}
</script>