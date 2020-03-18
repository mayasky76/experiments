<template>
  <div >
        <Writer />
  </div>
</template>

<script>
import Writer from "@/components/writer/Writer"
export default {
  components:{
    Writer
  },
  beforeMount(){
        this.$root.navigation.section ="writer"
  }
}
</script>
