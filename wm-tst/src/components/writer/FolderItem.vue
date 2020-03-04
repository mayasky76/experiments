<template>

   <draggable
    v-bind="dragOptions"
    tag="div"
    class="item-container"
    :list="list"
    :value="value"
    @input="emitter"
     @start="drag = true"
     @end="drag = false"
  >
  <transition-group type="transition" :name="!drag ? 'flip-list' : null">
    <div class="item-group" :key="el.id" v-for="el in realValue">
      <div class="item">
        <span class="material-icons"  v-if="el.folder" @click="toggleFolder(el)" >folder</span>
        <span class="material-icons"  v-else >subject</span>
        {{ el.name }}</div>
      <FolderItem class="item-sub" :list="el.elements" v-if="el.folder && el.open" />
    </div>
   </transition-group>
  </draggable>
</template>
<style scoped>
.item-container {
  max-width: 20rem;
  margin: 0;
}
.item {
  cursor: grab;
  margin-bottom: 2px;
padding-top:5px;
padding-bottom:5px;
}

.item-sub {
  min-height: 20px;
  margin: 0 0 0 1rem;
}
.item-sub > span:empty{
  display: block;
  height: 10px;
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
  background: #c8ebfb;
}


</style>

<script>
import draggable from "vuedraggable";
export default {
  name: "FolderItem",
  methods: {
    emitter(value) {
      this.$emit("input", value);
    },
   toggleFolder(el){
      console.log(el)
      el.open=!el.openl
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