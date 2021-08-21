<template>
  <div class="vuement">
    <CNavbar />

    <CRouter />
    <VDarkModeToggle />
    <CUpdateAvailable v-model="updateAvailable" @refresh="refresh" />

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
import CUpdateAvailable from './components/CUpdateAvailable.vue';

@Component({
  components: {
    CRouter,
    CNavbar,
    VDarkModeToggle,
    CUpdateAvailable,
  },
})
export default class App extends Vue {
  public registration: ServiceWorkerRegistration | null = null;
  public updateAvailable = false;
  public refreshing = false;

  created(): void {
    document.addEventListener(
      'serviceWorkerUpdateEvent',
      (e) => {
        const reg = e as CustomEvent<ServiceWorkerRegistration>;
        this.registration = reg.detail;
        this.updateAvailable = true;
      },
      { once: true }
    );
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (this.refreshing) return;
      this.refreshing = true;
      window.location.reload();
    });
  }

  mounted(): void {
    registerMediaQueries();
    ComponentManager.loadComps();
  }

  beforeDestroy(): void {
    unregisterMediaQueries();
  }

  public refresh(): void {
    this.updateAvailable = false;
    if (this.registration) {
      this.registration.waiting?.postMessage({ type: 'SKIP_WAITING' });
    }
  }
}
</script>

<style lang="scss">
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

[center] {
  text-align: center;
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
