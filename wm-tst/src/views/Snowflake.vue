<template>
  <div class="writer">
        <Snowflake />
  </div>
</template>

<script>
import Snowflake from "@/components/snowflake/Snowflake"
export default {
  components:{
    Snowflake
  },
  beforeMount(){
        this.$root.navigation.section ="snowflake"
  }
}
</script>
