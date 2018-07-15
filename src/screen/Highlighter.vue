<template>
  <div class="highlighter sides">
    <h1>Colorateur syntaxique de code</h1>

    <p>Ce site permet d'obtenir une coloration syntaxique d'un code sous le format d'une image</p>
    <form-code class="left"></form-code>
    <highlight-code class="right"></highlight-code>
  </div>
</template>

<script>
  import HighlightCode from '../components/HighlightCode.vue'
  import FormCode from '../components/FormCode.vue'

  export default {
      name: "highlighter",
      components: {
        FormCode,
        HighlightCode
      }
    }
</script>

<style scoped>
  h1 {
    text-align: center;
  }
  p {
    padding-left: 15px;
  }
  .sides{
    margin:0;
  }
  .left{
    float:left;
    width:55%;
    overflow:hidden;
    padding-left: 16px;
    padding-right: 8px;
  }
  .right{
    float:left;
    width:45%;
    overflow:hidden;
    padding-left: 8px;
    padding-right: 16px;

  }
</style>
