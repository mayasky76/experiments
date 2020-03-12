<template>
  <div>
    {{cardID}}
    <div v-if="!$root.system.card">
      <h2>WHat"!!</h2>
    </div>
    <textarea v-if="$root.system.card" v-model="$root.system.card.carddata" @change="CardUpdate" />
 
     <!-- Use the component in the right place of the template -->
    <tiptap-vuetify
      v-model="content"
      :extensions="extensions"
    />
 
  </div>
</template>
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
    ],
    // starting editor's content
    content: `
      <h1>Yay Headlines!</h1>
      <p>All these <strong>cool tags</strong> are working now.</p>
    `
  }),
  props:{
    cardID : String
    },
  methods: {
    CardUpdate() {
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