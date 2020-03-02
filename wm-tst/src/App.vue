<template>
  <div id="app">
    <TopNav />
    <NavigationBar />
    <div id="mainContent">
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
  name: 'Home',
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
    --logo-top: #b0bec5;
    --logo-bottom: #455a64;
    --main-bg:#90a4ae;
    --main-fg: #263238;
    --nav-bg: #263238;
    --nav-fg: #eceff1;
    --nav-bg-hover: #37474f;
    --nav-fg-hover: #eceff1;
    --nav-bg-active: #7B1FA2;
    --nav-fg-active: #F3E5F5;
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
  left:50px;
  bottom:0px;
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
