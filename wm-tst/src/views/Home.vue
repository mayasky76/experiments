<template>
  <div class="home">
    <div>id : {{this.$root.window_UUID}}</div>
    <div>id : {{this.$root.counter}}</div>
       <button type="button" @click="increment()">Increment</button>
    <button type="button" @click="decrement()">Decrement</button>
  </div>
</template>

<script>
export default {
  beforeMount(){
        this.$root.navigation.section ="home"
  },
  methods:{
    increment(){
      this.$root.increment()
    },
     decrement(){
      this.$root.decrement()
    }
  }
}
</script>

