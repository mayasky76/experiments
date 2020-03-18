<template>
  <div id="Writer">
       
      <div class="contentbox" :class="{sidebarOn : $root.system.writer.sidebarVisible}">
      <WritingWindow />
      <InfoWindow />
      </div>
<FolderStructure />
  </div>
</template>

<script>
import FolderStructure from "@/components/writer/FolderStructure"
import WritingWindow from "@/components/writer/WritingWindow"
import InfoWindow from "@/components/writer/InfoWindow"
export default {
    components:{
        FolderStructure,
        WritingWindow,
        InfoWindow
    },
    beforeMount(){
        this.$root.loadtool("writer")
    }
}
</script>

<style scoped>

.contentbox{
    position: absolute;
    top:0px;
    left:0px;
    right:0px;
    bottom:0px;
    overflow-y: hidden;   
   font-family: 'Merriweather', serif;
}

.sidebarOn{
   left:300px;
}

</style>