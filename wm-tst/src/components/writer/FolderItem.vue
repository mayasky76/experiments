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
      <div class="item">{{ el.name }}</div>
      <FolderItem class="item-sub" :list="el.elements" />
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
}

.item-sub {
  margin: 0 0 0 1rem;
}
.item-sub:empty {

  height:30px;
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