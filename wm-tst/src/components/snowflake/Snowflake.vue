<template>
<div>
   <div v-if="!$root.system.snowflake.currentSnowflake">
       <div v-for="(element,index) in $root.system.snowflake.snowflakeList" :key="index">{{element}}</div>

       <button @click="AddNew">New</button>
   </div>
   <div v-if="$root.system.snowflake.currentSnowflake">SHOW Snowflake</div>

</div>
 
</template>
<style scoped>

</style>
<script>
export default {
    methods :{
        AddNew(){
            let n={}
            n.uuid =this.$root.uuid.v1();
            if(!this.$root.system.snowflake.snowflakeList){
                this.$root.system.snowflake.snowflakeList =[]
            }

           this.$root.system.snowflake.snowflakeList.push(n)
        }
    },
    beforeMount(){
        this.$root.loadtool("snowflake")
    }
}
</script>