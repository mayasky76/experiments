<template>
  <div id="app">
    <TopNav />
    <NavigationBar v-if="$root.system.navBar" />
    <div id="mainContent" :class="{ navbarOn : $root.system.navBar }">
    <router-view />
    </div>
  </div>
</template>
<script>
import NavigationBar from "./components/NavigationBar"
import TopNav from "./components/TopNav"
import {uuid} from 'vue-uuid';

export default {
  components:{
    TopNav,
    NavigationBar
  },
  methods:{
    postAjax(url, data, success) {
    var params = typeof data == 'string' ? data : Object.keys(data).map(
            function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
        ).join('&');

    var xhr = new XMLHttpRequest()
    xhr.open('POST', url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState>3 && xhr.status==200) { success(xhr.responseText); }
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(params);
    return xhr;
}
  },
  mounted(){
    this.$root.window_UUID = uuid.v1()
    
    /*
    let payload = {
      email : "iain@woodit.co.uk",
      password : "@DEFl8ed0",
      action : "load"
    }

  this.postAjax('https://wavemaker.co.uk/version4/api/', payload, (data)=>{ 
    try{
      this.$root.ProjectData=JSON.parse(data);
    //  console.log(this.info.settings)
     // console.log(this.info.projects)
    }
    catch(e){
      alert(data)
    //  console.log(data)
    }
  });
    */
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Merriweather|Raleway&display=swap');
/* These are the default css colours - theming will simply be a matter of resetting theses on initial load*/
:root {
    --c0: #eceff1;
    --c1: #cfd8dc;
    --c2: #b0bec5;
    --c3: #90a4ae;
    --c4: #78909c;
    --c5: #607d8b;
    --c6: #546e7a;
    --c7: #455a64;
    --c8: #37474f;
    --c9: #263238;

    --logo-top:#b0bec5;
    --logo-bottom:#455a64;
    --main-bg:#90a4ae;
    --main-fg:#263238;
    --nav-bg:#263238;
    --nav-fg:#eceff1;
    --sub-toolbar-bg : #455a64;
    --sub-toolbar-fg : #eceff1;
    --sub-toolbar-btn-bg : #37474f;
    --sub-toolbar-btn-fg : #eceff1;
    --sub-toolbar-btn-bg-hover : #7B1FA2;
    --sub-toolbar-btn-fg-hover : #eceff1;

    --nav-bg-hover:#37474f;
    --nav-fg-hover:#eceff1;
    --nav-bg-active:#7B1FA2;
    --nav-fg-active:#eceff1;

    --fab-btn-bg:#7B1FA2;
    --fab-btn-fg:#eceff1;

    --card-bg: #eceff1;
    --card-fg:#263238;
}


::-webkit-scrollbar-button {
    display: block;
    height: 0px;
    border-radius: 0px;
    background-color: #000
}

::-webkit-scrollbar-thumb {
    background-color: var(--c5);
}

::-webkit-scrollbar-track {
    background-color: var(--c9);
}

::-webkit-scrollbar {
    width: 10px;
}

.logo-top{
  fill: var(--logo-top)
}
.logo-bottom{
  fill: var(--logo-bottom)
}

#mainContent{
  position: absolute;
  top:50px;
  right:0px;
  left:0px;
  bottom:0px;
}
.navbarOn{
   left:50px !important;
}
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;
  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;
  /* Support for IE. */
  font-feature-settings: 'liga';
}
.iface_crd{
  position: relative;
  margin:10px;
  padding:35px;
  background-color: var(--card-bg);
  color: var(--card-fg);
  min-height: 100px;
}
.iface_crd_btn{
  border:0px;
  background:none;
  background-color: var(--fab-btn-bg);
  color: var(--fab-btn-fg);
  border-radius:25px;
  width:30px;
  height:30px;
  margin:5px;
  cursor:pointer;
  position: absolute;
}

.fab {
  cursor: pointer;
  position: fixed;
  border: 0px;
  padding: 5px;
  margin: 5px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--fab-btn-bg);
  color: var(--fab-btn-fg);
  -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=13, Direction=0, Color=#000000)"; /*IE 8*/
  -moz-box-shadow: 0 5px 13px -6px #000000; /*FF 3.5+*/
  -webkit-box-shadow: 0 5px 13px -6px #000000; /*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/
  box-shadow: 0 5px 13px -6px #000000; /* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
  filter: progid:DXImageTransform.Microsoft.Shadow(Strength=13, Direction=135, Color=#000000); /*IE 5.5-7*/
}

.fab-lg {
    width: 50px;
  height: 50px;
    padding: 10px;
  margin: 10px;
}
.btn_tr{
    right:0px;
  top:0px;
}
.btn_tl{
    left:0px;
  top:0px;
}
.btn_br{
   right:0px;
  bottom:0px;
}
.btn_bl{
    left:0px;
  bottom:0px;
}

.iface_crd_btn>i{
    font-size: 1rem;
}

html {
  box-sizing: border-box;
  background-color: var(--main-bg);
  color: var(--main-fg);
  font-family: 'Merriweather' ;
  font-family: 'Raleway' ;
}
*, *:before, *:after {
  box-sizing: inherit;
}

#app{
  margin-left:50px;
}
</style>
