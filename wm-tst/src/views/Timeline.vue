<template>
  <div >
        <Timeline />
  </div>
</template>

<script>
import Timeline from "@/components/timeline/Timeline"
export default {
  components:{
    Timeline
  },
  beforeMount(){
        this.$root.navigation.section ="timeline"
  }
}
</script>
