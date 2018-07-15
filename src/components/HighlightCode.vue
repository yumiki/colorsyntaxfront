<template>
  <div class="highlight-code">
    <pre>
    <code class="hljs" :class="this.code.language" v-html="this.code.value">
    </code>
    </pre>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/agate.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/dracula.min.css" />
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
      name: "highlight-code",
      computed: {
        ...mapState({
          code: (state) => state.code,

        })
      }
  }
</script>

<style scoped>
  .snippet {
    float: left;
    width: 30em;
    padding: 1em;
    background: #500;
    border-width: 1px;
    border-style: solid;
    border-color: #400 #700 #700 #400;

  }
</style>
