<template>
  <div class="vuement">
    <CNavbar />
    <CSidebar />
    <CTabbar />
    <VDarkModeToggle />
    <vm-notification />
    <vm-notification position="bottom" vmId="bottom" />

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
import VDarkModeToggle from './components/VDarkModeToggle.vue';
// import { ComponentManager } from './utils/ComponentManager';

@Component({
  components: {
    CSidebar,
    CRouter,
    CNavbar,
    CTabbar,
    VDarkModeToggle,
  },
})
export default class App extends Vue {
  mounted(): void {
    registerMediaQueries();

    // ComponentManager.loadComps();
    // ComponentManager.loadProps();
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
  @include vm-scrollbar();
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
