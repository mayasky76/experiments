<template>
  <div>
    <div v-if="!$root.system.writer.selectedElement">
      <h2>Your Project</h2>
    </div>
    <div v-else  :class="{sidebarOn : $root.system.writer.sidebarVisible}">
      <input class="nodetitle" v-model="$root.system.writer.selectedElement.name" @change="NodeValueUpdate" placeholder="- - - - - -" />
  
      <div v-if="$root.system.writer.selectedElement.folder">
        <h2>Folder Settings</h2>
      </div>
      <div v-if="!$root.system.writer.selectedElement.folder">
        <CardEditor :cardID="$root.system.writer.selectedElement.uuid" :key="$root.system.writer.selectedElement.uuid" />
      </div>

<div v-if="toolbox">
    <label>
        Hide from render
        <input
          type="checkbox"
          v-model="$root.system.writer.selectedElement.hidden"
          @change="NodeValueUpdate"
          value="true"
          
        />
      </label>

</div>


    </div>
  </div>
</template>
<style scoped>

label {
  cursor: pointer;
}

.sidebarOn .nodetitle{
  padding-left: 20px;
}

.nodetitle{
  width:100%;
  height:50px;
  background-color: var(--sub-toolbar-bg);
  color: var(--sub-toolbar-fg);
  padding-left: 70px;
  border: 0px;;
}

</style>

<script>
import CardEditor from "@/components/CardEditor";
export default {
  data(){
    return{
      toolbox :false
    }
  },
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