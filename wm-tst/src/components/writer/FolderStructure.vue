  
<template>
  <div>
    <div class="sidebar" v-if="$root.system.writer.sidebarVisible">
      <FolderItem v-model="elements" />
    </div>
    <div class="buttonholder" v-if="$root.system.writer.sidebarVisible">
      <button class="stripbtn" @click="AddItem('folder')">
        <i class="material-icons">create_new_folder</i>
      </button>
      <button class="stripbtn" @click="AddItem('file')">
        <i class="material-icons">playlist_add</i>
      </button>
    </div>
    <button
      class="fab"
      @click="$root.system.writer.sidebarVisible=!$root.system.writer.sidebarVisible"
    >
      <i class="material-icons">book</i>
    </button>
  </div>
</template>
<style scoped>
.sidebar {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  width: 300px;
  background-color: var(--sub-toolbar-bg);
  color: var(--sub-toolbar-fg);

  overflow: hidden;
  overflow-y: scroll;
  padding-top: 50px;
}
.buttonholder {
  text-align: right;
  position: absolute;
  width: 300px;
  top: 0px;
  left: 0px;
  height: 50px;
  background-color: var(--c9);
}

.stripbtn {
  cursor: pointer;
  border: 0px;
  padding: 5px;
  margin: 5px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--fab-btn-bg);
  color: var(--fab-btn-fg);
}
</style>

<script>
import FolderItem from "@/components/writer/FolderItem";
export default {
  name: "FolderStructure",
  components: {
    FolderItem
  },
  methods: {
    AddItem(type) {
      console.log("add " + type);
      let newObj = {
        uuid: this.$root.uuid.v1(),
        name: ""
      };
      if (type === "folder") {
        newObj.folder = true;
        newObj.folderOpen = true;
        newObj.elements = [];
      }
      if (this.$root.system.writer.selectedElement) {
        if (this.$root.system.writer.selectedElement.folder) {
          this.$root.system.writer.selectedElement.elements.push(newObj);
        } else {
          this.$root.system.writer.selectedElementParent.elements.splice(this.$root.system.writer.selectedElementParentIndex+1,0,newObj);
          console.log("add to the parent? at the Index +1");
        }
      } else {
        this.$root.system.writer.elements.push(newObj);
      }
       this.$root.savetool("writer")
    }
  },
  computed: {
    elements: {
      get() {
        return this.$root.system.writer.elements;
      },
      set(value) {
        this.$root.system.writer.elements = value;
      }
    }
  }
};
</script>