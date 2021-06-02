<template>
  <div id="timos-components">
    <CNavbar />
    <CSidebar />
    <CTabbar />

    <div
      class="router-view"
      :darken="$store.getters.sidebar"
      @click="$store.commit('sidebar', false)"
      @touchmove="touchmove"
    >
      <CRouter />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CSidebar from '@/components/CSidebar.vue';
import {
  registerMediaQueries,
  unregisterMediaQueries,
} from '@/utils/mediaQueries';
import CRouter from '@/components/CRouter.vue';
import CNavbar from '@/components/CNavbar.vue';
import CTabbar from './components/CTabbar.vue';
import { LooseObject } from './vuement/dev/interfaces';

@Component({
  components: {
    CSidebar,
    CRouter,
    CNavbar,
    CTabbar,
  },
})
export default class App extends Vue {
  mounted(): void {
    registerMediaQueries();

    (this as LooseObject).$vm.setTheme('light');
  }

  beforeDestroy(): void {
    unregisterMediaQueries();
  }

  public touchmove(e: Event): void {
    if (this.$store.getters.sidebar) {
      e.preventDefault();
    }
  }
}
</script>

<style lang="scss">
html {
  font-family: -apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI,
    Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol;
  scroll-behavior: smooth;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

body {
  min-height: 100vh;
  margin: 0;
}

[content] {
  padding: 20px 5vw;
  padding-top: calc(70px + env(safe-area-inset-top));

  @media #{$isMobile} {
    padding-bottom: calc(70px + env(safe-area-inset-bottom));
  }

  max-width: 800px;
  margin: 0 auto;
}

.router-view {
  transition: 0.2s ease-in-out;
  &[darken] {
    filter: brightness(50%);
  }
}
</style>
