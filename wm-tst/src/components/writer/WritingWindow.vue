<template>
  <div>
    <div v-if="!$root.system.writer.selectedElement">
      <h2>Your Project</h2>
    </div>
    <div v-else>
      <input v-model="$root.system.writer.selectedElement.name" @change="NodeValueUpdate" />
      <label>
        Hide from render
        <input
          type="checkbox"
          v-model="$root.system.writer.selectedElement.hidden"
          @change="NodeValueUpdate"
          value="true"
        />
      </label>
      <div v-if="$root.system.writer.selectedElement.folder">
        <h2>Folder Settings</h2>
      </div>
      <div v-if="!$root.system.writer.selectedElement.folder">
        <h2>File Settings</h2>
        <CardEditor :cardID="$root.system.writer.selectedElement.uuid" :key="$root.system.writer.selectedElement.uuid" />
      </div>
    </div>
  </div>
</template>
<style scoped>
input {
  padding: 10px;
}
label {
  cursor: pointer;
}
</style>

<script>
import CardEditor from "@/components/CardEditor";
export default {
    components : {
        CardEditor
    },
  methods: {
    NodeValueUpdate() {
      // just triggers the update when a node value is changed - has to be called though
      this.$root.savetool("writer");
    }
  }
};
</script>