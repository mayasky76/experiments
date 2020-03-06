<template>
    <div>
      <div v-if="!$root.system.writer.selectedElement">
            <h2>Your Project</h2>
      </div>
      <div v-else>
      <div v-if="$root.system.writer.selectedElement.folder">
            <h2>Folder Settings</h2>
            <input v-model="$root.system.writer.selectedElement.name" @change="folderNameUpdate" />
            <label>Hide from render
            <input type="checkbox" v-model="$root.system.writer.selectedElement.hidden" value="true">
            </label>

      </div>
      <div v-if="!$root.system.writer.selectedElement.folder">
            <h2>File Settings</h2>
            <label>Hide from render
            <input type="checkbox" v-model="$root.system.writer.selectedElement.hidden" value="true">
            </label>
      </div>
      </div>

    </div>
</template>
<style scoped>
input{
    padding:10px;
}
label{
    cursor:pointer;
}
</style>

<script>
export default {
    methods:{
folderNameUpdate(){
    // just triggers the update when the folder name is changed
  this.$root.savetool("writer")
}
    }
    
}
</script>