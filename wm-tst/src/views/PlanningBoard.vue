<template>
  <div >
        <PlanningBoard />
  </div>
</template>

<script>
import PlanningBoard from "@/components/planningboard/PlanningBoard"
export default {
  components:{
    PlanningBoard
  },
  beforeMount(){
        this.$root.navigation.section ="planningboard"
  }
}
</script>
