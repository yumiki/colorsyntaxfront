<template>
  <div class="highlight-code">
    <pre>
    <code class="hljs cs">
      <span class="hljs-keyword">using</span> System.IO.Compression;
      <span class="hljs-meta">#<span class="hljs-meta-keyword">pragma</span> <span class="hljs-meta-keyword">warning</span> disable 414, 3021</span>
      <span class="hljs-keyword">namespace</span> <span class="hljs-title">MyApplication</span>
      {
        [<span class="hljs-meta">Obsolete(<span class="hljs-meta-string">"..."</span>)</span>]
        <span class="hljs-keyword">class</span> <span class="hljs-title">Program</span> : <span class="hljs-title">IInterface</span>
        {
        <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> List&lt;<span class="hljs-keyword">int</span>&gt; <span class="hljs-title">JustDoIt</span>(<span class="hljs-params"><span class="hljs-keyword">int</span> count</span>)
          </span>{
        Console.WriteLine(<span class="hljs-string">$"Hello <span class="hljs-subst">{Name}</span>!"</span>);
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> List&lt;<span class="hljs-keyword">int</span>&gt;(<span class="hljs-keyword">new</span> <span class="hljs-keyword">int</span>[] { <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span> })
        }
        }
      }
    </code>
    </pre>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/dracula.min.css" />
  </div>
</template>

<script>
    export default {
        name: "highlight-code"
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
