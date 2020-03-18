<template>
  <div>
<div class="pageHolder">
       <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="menubar">

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <i class="material-icons">format_bold</i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          <i class="material-icons">format_italic</i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          <i class="material-icons">strikethrough_s</i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          <i class="material-icons">format_underline</i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
          <i class="material-icons">code</i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph"
        >
          P
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          H1
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          H2
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          H3
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          <i class="material-icons">format_list_bulleted </i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          <i class="material-icons">format_list_numbered </i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <i class="material-icons">format_quote</i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
          <i class="material-icons">code</i>
        </button>

        <button
          class="menubar__button"
          @click="commands.horizontal_rule"
        >
          --
        </button>

        <button
          class="menubar__button"
          @click="commands.undo"
        >
          <i class="material-icons">undo</i>
        </button>

        <button
          class="menubar__button"
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
       console.log("doing an update")
      this.$root.system.card.carddata = getHTML()
      this.$root.system.card.lastupdated = Date.now();
      this.$root.saveCard(this.$root.system.card);
    }
      })
        }
    },
  beforeMount() {
      console.log("Load Triggered", this.cardID)
      
 this.$root.loadCard(this.cardID).then((res)=>{
     console.log("awaited", res)
     this.LoadCardData()
      // this.editor.setContent(this.$root.system.card.carddata)    
 });
  
 

      
  }
}
</script>

<style scoped>

.menubar{
    position:sticky;
    top:0px;
    background-color: var(--editor-toolbar-bg);
    color: var(--editor-toolbar-fg);
    text-align: center;
}
.menubar>button{
    padding:5px;

}
.page{
max-width: 780px;
margin:0 auto;
    margin-top:15px;
background-color: var(--card-bg);
color: var(--card-fg);
padding:10px;
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