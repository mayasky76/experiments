<template>
  <div>
<div class="pageHolder">
       <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="menubar">

        <button
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <i class="material-icons">format_bold</i>
        </button>

        <button
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          <i class="material-icons">format_italic</i>
        </button>

        <button
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          <i class="material-icons">strikethrough_s</i>
        </button>

        <button
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          <i class="material-icons">format_underline</i>
        </button>

        <button
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
          <i class="material-icons">code</i>
        </button>

        <button
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph"
        >
          <span>P</span>
        </button>

        <button
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          <span>H1</span>
        </button>

        <button
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
     <span>H2</span>
        </button>

        <button
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
     <span>H3</span>
        </button>

        <button
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          <i class="material-icons">format_list_bulleted </i>
        </button>

        <button
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          <i class="material-icons">format_list_numbered </i>
        </button>

        <button
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <i class="material-icons">format_quote</i>
        </button>

        <button
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
          <i class="material-icons">code</i>
        </button>

        <button
          @click="commands.horizontal_rule"
        >
             <span>&ndash;</span>
        </button>

        <button
          @click="commands.undo"
        >
          <i class="material-icons">undo</i>
        </button>

        <button
          @click="commands.redo"
        >
          <i class="material-icons">redo</i>
        </button>

      </div>
    </editor-menu-bar>
    <div class="page">
    <editor-content :editor="editor" />
    </div>
  </div>
  </div>

</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
 Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions'

export default {
  components: {
    EditorMenuBar,
    EditorContent,
  },
  data() {
    return {
      editor: null
    }
  },
  beforeDestroy() {
    this.$root.system.card = {
        carddata:''
    };
    if(this.editor){
    this.editor.destroy()
    }
  },
 props:{
    cardID : String
    },
    methods :{
        LoadCardData(){
        this.editor = new Editor({
        extensions: [
            new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        content : this.$root.system.card.carddata,
         onUpdate: ({ getHTML }) => {

      this.$root.system.card.carddata = getHTML()
      this.$root.system.card.lastupdated = Date.now();
      this.$root.saveCard(this.$root.system.card);
    }
      })
        }
    },
  beforeMount() {
    
 this.$root.loadCard(this.cardID).then(()=>{
     this.LoadCardData()
 });
      
  }
}
</script>

<style scoped>

.menubar{
    z-index: 91;
    position:sticky;
    top:0px;
    background-color: var(--editor-toolbar-bg);
    color: var(--editor-toolbar-fg);
    text-align: center;
}
.menubar>button{
    width:40px;
    height:40px;
  
    margin:0px;
    font-weight: bold;
    background: none;
    border: none;
    background-color: var(--editor-toolbar-bg);
    color: var(--editor-toolbar-fg);
    padding:0px;
}
.menubar>button>span{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: normal;
    font-style: normal;
    font-size: 18px;
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-feature-settings: 'liga';
    font-feature-settings: 'liga';
    margin:0px;
    padding:0px;
}
.page{
  z-index: 90;
max-width: 780px;
margin:0 auto;
background-color: var(--card-bg);
color: var(--card-fg);
padding:5%;
min-height: 500px;
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