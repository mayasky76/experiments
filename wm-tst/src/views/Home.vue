<template>
  <div class="home">
    <div>id : {{this.$root.window_UUID}}</div>
    <div>id : {{this.$root.SyncWindows}}</div>
       <button type="button" @click="$root.WindowTrigger('writer')">writer</button>

  </div>
</template>

<script>
export default {
  beforeMount(){
        this.$root.navigation.section ="home"
  }
}
</script>

