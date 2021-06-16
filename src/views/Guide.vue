<template>
  <div class="view-guide" content>
    <VSectionHeader title="Get started" subtitle="Guide" />
    <h3>Instalation</h3>
    <code>
      <pre>
<span class="comment"># npm</span>
npm install vuement</pre>
    </code>
    <code>
      <pre>
<span class="comment"># yarn</span>
yarn add vuement</pre>
    </code>

    <h3>Use</h3>
    <code>
      <pre>
<span class="key">import</span> <span class="obj">Vue</span> <span class="key">from</span> '<span class="var">vue</span>';
<span class="key">import</span> <span class="obj">Vuement</span> <span class="key">from</span> '<span class="var">vuement</span>';

<span class="obj">Vue</span>.<span class="func">use</span>(<span class="obj">Vuement</span>);

<span class="comment">// you can pass options like colors and themes</span>
<span class="obj">Vue</span>.<span class="func">use</span>(<span class="obj">Vuement</span>, { <span class="attr">colors</span>: { <span class="attr">primary</span>: <span class="var">"#08f"</span> }, <span class="attr">theme</span>: <span class="var">"light"</span> });

<span class="comment">// The theme can later also be changed by accessing the $vm object.</span>
<span class="key">this</span>.<span class="attr">$vm</span>.<span class="func">setTheme</span>(<span class="var">"dark"</span>);</pre>
    </code>

    <h3>Available Components</h3>
    <p>
      You can find a full list of components
      <vm-link routeName="components">here</vm-link>.
    </p>
  </div>
</template>

<script lang="ts">
import VSectionHeader from '@/components/VSectionHeader.vue';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    VSectionHeader,
  },
})
export default class Guide extends Vue {}
</script>

<style lang="scss" scoped>
.view-guide {
  h3 {
    margin-top: 0;
  }
  .comp-title {
    margin: 5px 0;
  }

  pre {
    background: rgba(var(--vm-paragraph), 1);
    padding: 20px;
    max-width: calc(100% - 40px);
    @include vm-scrollbar();
    overflow: auto;
    border-radius: $border-radius;

    .comment {
      color: rgba(var(--vm-color-secondary), 1);
      font-style: italic;
    }
    .key {
      color: rgba(var(--vm-error), 1);
    }

    .obj {
      color: #ffa657;
    }
    .func {
      color: #d2a8ff;
    }
    .var {
      color: rgba(var(--vm-primary), 1);
    }
    .attr {
      color: #79c0ff;
    }
  }
}
</style>
