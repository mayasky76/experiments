<template>
  <div id="nav">
    <div v-for="(item,index) in sections" :key="index">
      <router-link
        class="nav-button"
        v-bind:class="{ active: MySection === item.label }"
        :to="item.to"  >
        <i class="material-icons">{{item.icon}}</i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        { label: "home", icon: "home", to: "/" },
        { label: "snowflake", icon: "ac_unit", to: "/about" },
        { label: "database", icon: "layers", to: "/" },
        { label: "planningboard", icon: "view_comfy", to: "/" },
        { label: "mindmap", icon: "account_tree", to: "/" },
        { label: "export", icon: "launch", to: "/" },
        { label: "settings", icon: "settings", to: "/" }
      ]
    };
  },
  computed: {
    MySection() {
      return this.$root.navigation.section;
    }
  }
};
</script>


<style scoped>
#nav {
  width: 50px;
  position: absolute;
  top: 50px;
  bottom: 0px;
  left: 0px;
  background-color: var(--nav-bg);
  color: var(--nav-fg);
}
.nav-button {
  display: block;
  width: 50px;
  height:50px;
  text-align: center;
  padding: 10px;
  padding-top:13px;
    background-color: var(--nav-bg);
  color: var(--nav-fg);
}
.nav-button:hover {
  background-color: var(--nav-bg-hover);
  color: var(--nav-fg-hover);
}
.active {
  background-color: var(--nav-bg-active);
  color: var(--nav-fg-active);
}
</style>