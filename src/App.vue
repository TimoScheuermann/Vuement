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
import { ComponentManager } from './utils/ComponentManager';

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
    ComponentManager.loadComps();
  }

  beforeDestroy(): void {
    unregisterMediaQueries();
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Timos Design';
  font-style: normal;
  font-weight: 400;
  src: url('https://timos.s3.eu-central-1.amazonaws.com/fonts/TimosDesign-Regular.woff2')
    format('woff2');
}
@font-face {
  font-family: 'Timos Design';
  font-style: normal;
  font-weight: 500;
  src: url('https://timos.s3.eu-central-1.amazonaws.com/fonts/TimosDesign-Medium.woff2')
    format('woff2');
}
@font-face {
  font-family: 'Timos Design';
  font-style: normal;
  font-weight: 600;
  src: url('https://timos.s3.eu-central-1.amazonaws.com/fonts/TimosDesign-Semibold.woff2')
    format('woff2');
}
@font-face {
  font-family: 'Timos Design';
  font-style: normal;
  font-weight: 700;
  src: url('https://timos.s3.eu-central-1.amazonaws.com/fonts/TimosDesign-Bold.woff2')
    format('woff2');
}

html {
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display',
    'Timos Design', 'Helvetica Neue', 'Segoe UI', Roboto, Arial, 'noto sans',
    'apple color emoji', 'segoe ui emoji', 'segoe ui symbol', 'noto color emoji',
    sans-serif;
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

.list-move {
  transition: transform 0.5s;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
