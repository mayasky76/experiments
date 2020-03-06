<template>

   <draggable
    v-bind="dragOptions"
    tag="div"
    class="item-container"
    :list="list"
    :value="value"
    @input="emitter"
     handle=".handle"
     @end="DragEnd"
  >
  <transition-group type="transition" :name="!drag ? 'flip-list' : null">
    <div class="item-group" :key="el.uuid" v-for="(el,index) in realValue">
      <div class="item" @click="chooseme(el, index)"  v-bind:class="{ active: el === $root.system.writer.selectedElement }">
        <span class="material-icons treeIcon folderIcon" v-if="el.folder && !el.folderOpen" @click="toggleFolder(el)" >keyboard_arrow_right</span>
         <span class="material-icons treeIcon folderIcon" v-if="el.folder && el.folderOpen" @click="toggleFolder(el)" >keyboard_arrow_down</span>
        <span class="material-icons treeIcon" v-if="!el.folder" >label</span>
        <span class="handle">
          <span v-if="el.name===''"> - - - - - - </span>{{ el.name }}</span>
        </div>
      <FolderItem class="item-sub" :list="el.elements" v-show="el.folderOpen"/>
    </div>
   </transition-group>
  </draggable>
</template>
<style scoped>
.folderIcon{
  cursor: pointer;
    background-color:var(--c7);
border-radius: 50%;
padding:3px;
  top:8px;
}
.treeIcon{
  position: absolute;
}
.active{
 background-color: var(--sub-toolbar-btn-bg-hover);
  color:var(--sub-toolbar-btn-fg-hover);
  font-style: italic;
}
.handle{

position: relative;
margin-left:35px;
 cursor: grab;
 display: block;
}
.item-container {
  position: relative;
  margin: 0;
   display: block;
  background-color: var(--sub-toolbar-btn-bg);
color: var(--sub-toolbar-btn-fg);
}
.item {
    position: relative;
  display: block;
   position: relative;
  margin-bottom: 2px;
padding:10px;
  min-height: 40px;
}
.item:hover {
  background-color: var(--sub-toolbar-btn-bg-hover);
  color: var(--sub-toolbar-btn-fg-hover);
}


.item-sub {
  min-height: 20px;
  margin: 0 0 0 1rem;
}
.item-sub > span:empty{
  display: block;
  min-height: 10px;
  width:100%;
  margin: 0 0 0 1rem;
}


.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;

}


</style>

<script>
import draggable from "vuedraggable";
export default {
  name: "FolderItem",
  methods: {
    DragEnd(){
       console.log("Drag End")
         this.$root.savetool("writer")
    },
    emitter(value) {
      this.$emit("input", value);
      console.log("emitter fired")
    
    },
   toggleFolder(el){
     el.folderOpen = !el.folderOpen
     // needs an update forced on the component after this change
      this.$forceUpdate();
          this.$root.savetool("writer")
    },
    chooseme(el,index){
      if(this.$root.system.writer.selectedElement === el){
        this.$root.system.writer.selectedElement = null
        this.$root.system.writer.selectedElementParent = null
        this.$root.system.writer.selectedElementParentIndex = null 
      }else{
      this.$root.system.writer.selectedElement = el
      this.$root.system.writer.selectedElementParent = this.FindParentObject(this.$root.system.writer, el)
      this.$root.system.writer.selectedElementParentIndex = index
      }
         
    },
    FindParentObject(MyParent, el){
      let result  = false
      MyParent.elements.forEach(element => {
          if(element===el){
            result = MyParent
          }else{
            if(element.folder){
            result = this.FindParentObject(element, el)
            }
          }
      });
      return result
    }
  },
  data(){
    return {
    drag : false
    }
      },
  components: {
    draggable
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    },
    // this.value when input = v-model
    // this.list  when input != v-model
    realValue() {
      return this.value ? this.value : this.list;
    }
  },
  props: {
    value: {
      required: false,
      type: Array,
      default: null
    },
    list: {
      required: false,
      type: Array,
      default: null
    }
  }
};
</script>