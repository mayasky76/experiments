<template>
  <div>
<div v-if="!$root.system.card">
loading
</div>
<div v-if="$root.system.card">
    <div v-if="!$root.system.card">
      <h2>Well this is awkward .... you kinda broke me... i don't know where to look :?</h2>
    </div>
 <div data-app class="pageHolder">
   <div class="page">
     <!-- Use the component in the right place of the template -->
    <tiptap-vuetify
      v-model="$root.system.card.carddata"
      :extensions="extensions"
      @keydown="CardUpdate"
       :toolbar-attributes="{ color: '#424242', dark: true }"
    />
 </div>
 </div>
    </div>
  </div>
</template>
<style >
.page{
max-width: 800px;
margin:0 auto;
  }

  .v-toolbar{
    height: 50px;
    -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=10, Direction=0, Color=#000000)";/*IE 8*/
-moz-box-shadow: 0 5px 10px -5px #000000;/*FF 3.5+*/
-webkit-box-shadow: 0 5px 10px -5px #000000;/*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/
box-shadow: 0 5px 10px -5px #000000;/* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
filter: progid:DXImageTransform.Microsoft.Shadow(Strength=10, Direction=135, Color=#000000); /*IE 5.5-7*/
width:100%;
  }

.pageHolder{
    position: absolute;
    top:50px;
    left:0px;
    right:0px;
    bottom:0px;
    overflow-y: scroll;   
}


</style>
<script>

import { TiptapVuetify, Heading, Bold, Italic, Strike, Underline, Code, Paragraph, BulletList, OrderedList, ListItem, Link, Blockquote, HardBreak, HorizontalRule, History } from 'tiptap-vuetify'

export default {
   components: { TiptapVuetify },
  data: () => ({
    // declare extensions you want to use
    extensions: [
      History,
      Blockquote,
      Link,
      Underline,
      Strike,
      Italic,
      ListItem,
      BulletList,
      OrderedList,
      [Heading, {
        options: {
          levels: [1, 2, 3]
        }
      }],
      Bold,
      Code,
      HorizontalRule,
      Paragraph,
      HardBreak
    ]
  }),
  props:{
    cardID : String
    },
  methods: {
    CardUpdate() {
      console.log("doing an update")
      // just triggers the update when a node value is changed - has to be called though
      this.$root.system.card.lastupdated = Date.now();
      this.$root.saveCard(this.$root.system.card);
    }
  },
    beforeDestroy() {
       this.$root.system.card = null;
    },
  beforeMount() {
      console.log("Load Triggered", this.cardID)
      this.$root.loadCard(this.cardID);
  }
};
</script>