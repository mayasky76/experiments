<template>
  <div>
    {{cardID}}
    <div v-if="!$root.system.card">
      <h2>WHat"!!</h2>
    </div>
    <textarea v-if="$root.system.card" v-model="$root.system.card.carddata" @change="CardUpdate" />
  </div>
</template>
<script>
export default {
  props:{
    cardID : String
    },
  methods: {
    CardUpdate() {
      // just triggers the update when a node value is changed - has to be called though
      this.$root.system.card.lastupdated = Date.now();
      this.$root.saveCard(this.$root.system.card);
    }
  },
    beforeDestroy() {
        this.$root.system.card = null;
    },
  beforeMount() {
      console.log("Load Triggered", this.cardID)
      this.$root.loadCard(this.cardID);
  }
};
</script>