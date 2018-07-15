<template>
  <div class="highlight-code">
    <pre>
      <code v-if="this.loading===false" class="hljs inset" :class="this.code.language" v-html="this.code.value"></code>
      <bounce-loader class="center" :loading="this.loading"></bounce-loader>
    </pre>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/agate.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/dracula.min.css" />
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BounceLoader from 'vue-spinner/src/BounceLoader.vue'

  export default {
      name: "highlight-code",
      components: {
        BounceLoader
      },
      computed: {
        ...mapState({
          code: (state) => state.code,
          loading: (state) => state.loading.currentState
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
  .inset {
    /*
    -moz-box-shadow: inset 0 3px 8px rgba(0,0,0,.4);
    -webkit-box-shadow: inset 0 3px 8px rgba(0,0,0,.4);
    box-shadow: inset 0 3px 8px rgba(0,0,0,.24);*/
    border: 10px groove #e3e3e3;
  }
  .center{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 220px;
  }
</style>
