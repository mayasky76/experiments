<template>
<div id="topNav">
    <button @click="$root.system.navBar=!$root.system.navBar">
  <svg class="logo" xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 235 234.3">
      <g id="Layer_x0020_1">
        <g id="_921457168">
          <path class="logo-top" d="M194.1 65.8L135.8 7.5c-10.1-10.1-26.5-10.1-36.6 0L41.1 65.7c-3.4 3.4-3.4 8.8 0 12.2l17.6 17.6 11.7 10.9c3.5 3.2 8.8 3.2 12.3 0l23.5-21.7c6.5-6 16.4-6 22.8 0l23.5 21.7c3.5 3.2 8.8 3.2 12.3 0l11.7-10.9L194.1 78c3.3-3.3 3.3-8.8 0-12.2z">
          </path>
          <path class="logo-bottom" d="M7.9 135.5l91.3 91.3c10.1 10.1 26.5 10.1 36.6 0l91.3-91.3c15.8-15.8 4.7-20.5-6.9-31.5l-14.3-13.6c-3.4-3.3-8.8-3.2-12.3 0l-23.5 21.7c-6.5 6-16.4 6-22.8 0l-23.5-21.7a9.08 9.08 0 0 0-12.3 0L88 112.1c-6.5 6-16.4 6-22.8 0L41.7 90.4a9.08 9.08 0 0 0-12.3 0l-13.2 12.2c-12.1 11.2-24.8 16.3-8.3 32.9z">
          </path>
        </g>
      </g>
    </svg>
    </button>
      <button style="float:right">
  <i class="material-icons">note</i>
    </button>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
#topNav{
  height:50px;
  position: absolute;
  top:0px;
  right:0px;
  left:0px;
  background-color: var(--nav-bg);
}
#topNav .logo{
  height:30px;
}
#topNav button{
  height:50px;
  width: 50px;
  background:none;
  border:0px;
  cursor: pointer;
  color:var(--nav-fg);
}
</style>