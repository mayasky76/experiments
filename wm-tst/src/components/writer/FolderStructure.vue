  
<template>
  <div >
    <FolderItem v-model="elements" />
  </div>
</template>

<script>
import FolderItem from "@/components/writer/FolderItem"
export default {
  name: "nested-with-vmodel",
  display: "Nested (v-model & vuex)",
  order: 16,
  components: {
    FolderItem
  },

computed: {
    elements: {
      get() {
        return this.$root.elements;
      },
      set(value) {
        console.log(value)
       this.$root.elements = value;
      }
    }
}

};
</script>