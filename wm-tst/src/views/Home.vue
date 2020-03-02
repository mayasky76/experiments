<template>
  <div class="home">
    <div>id : {{this.$root.window_UUID}}</div>
  </div>
</template>

<script>
export default {
  beforeMount(){
        this.$root.navigation.section ="home"
  }
}
</script>

