<template>
  <div id="Writer">
      <FolderStructure />
      <div class="contentbox" :class="{sidebarOn : $root.system.writer.sidebarVisible}">
      <WritingWindow />
      <InfoWindow />
      </div>
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
    padding:50px;
}

.sidebarOn{
    padding-left:350px;
}

</style>