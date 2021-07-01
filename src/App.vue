<template>
  <div class="vuement">
    <CNavbar />

    <CRouter />
    <VDarkModeToggle />

    <vm-tabbar class="c-tabbar" v-if="!$store.getters.desktop">
      <vm-tabbar-item icon="ti-house" title="Home" routeName="home" />
      <vm-tabbar-item
        icon="ti-tiles-four-filled"
        title="Components"
        routeName="components"
      />
      <vm-tabbar-item icon="ti-color-fan" title="Colors" routeName="colors" />
      <vm-tabbar-item icon="ti-gears" title="Guide" routeName="guide" />
      <!-- <vm-tabbar-item icon="ti-apple" title="Playground" routeName="playground" /> -->
    </vm-tabbar>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import {
  registerMediaQueries,
  unregisterMediaQueries,
} from '@/utils/mediaQueries';
import CRouter from '@/components/CRouter.vue';
import CNavbar from '@/components/CNavbar.vue';
import VDarkModeToggle from './components/VDarkModeToggle.vue';
import { ComponentManager, VMComp } from './utils/ComponentManager';
import * as vmComponents from '@/vuement/components';

@Component({
  components: {
    CRouter,
    CNavbar,
    VDarkModeToggle,
  },
})
export default class App extends Vue {
  mounted(): void {
    registerMediaQueries();

    ComponentManager.setComps(
      Object.keys(vmComponents).map((x, i) => {
        return {
          id: i + '',
          name: x,
          isChild: false,
          children: [],
          props: [],
        } as VMComp;
      })
    );
    ComponentManager.loadComps();
  }

  beforeDestroy(): void {
    unregisterMediaQueries();
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
    padding-bottom: calc(120px + env(safe-area-inset-bottom));
  }

  max-width: 800px;
  margin: 0 auto;
}

.section-title {
  font-weight: bold;
  font-size: 20px;
  padding-bottom: 30px;
}

h3 {
  margin-bottom: 0;
}
</style>
