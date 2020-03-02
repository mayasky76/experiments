<template>
  <div class="about">
    <div>id : {{this.$root.window_UUID}}</div>
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  beforeMount(){
        this.$root.navigation.section ="snowflake"
  }
}
</script>
