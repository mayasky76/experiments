<template>
  <div >
        <MindMap />
  </div>
</template>

<script>
import MindMap from "@/components/mindmap/MindMap"
export default {
  components:{
    MindMap
  },
  beforeMount(){
        this.$root.navigation.section ="mindmap"
  }
}
</script>
