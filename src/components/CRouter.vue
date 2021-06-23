<template>
  <div class="c-router">
    <transition :name="transitionName" :mode="transitionMode">
      <div
        class="sub-view"
        :fullscreen="$route.meta.fullscreen"
        :key="$route.name + $route.params.name"
      >
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Route } from 'vue-router';

@Component
export default class CRouter extends Vue {
  public transitionName = 'slide-bottom';
  public transitionMode: string | null = 'out-in';

  get keepAlive(): boolean {
    return Object.keys(this.$route.params).length === 0;
  }

  created(): void {
    this.$router.beforeEach((to: Route, from: Route, next) => {
      const toDepth = this.getDepth(to);
      const fromDepth = this.getDepth(from);
      const toPath = to.fullPath.split('/').slice(0, 2);
      const fromPath = from.fullPath.split('/').slice(0, 2);
      this.transitionMode = null;

      if (to.meta.fullscreen) {
        this.transitionMode = 'in-out';
        this.transitionName = 'slide-fullscreen';
      } else if (from.meta.fullscreen) {
        this.transitionMode = 'in-out';
        this.transitionName = 'slide-fullscreen';
      } else if (fromPath.join('/') !== toPath.join('/')) {
        this.transitionMode = null;
        this.transitionName = 'slide-bottom';
      } else {
        this.transitionMode = null;
        this.transitionName =
          toDepth < fromDepth ? 'slide-right' : 'slide-left';
      }
      this.$store.commit('sidebar', false);
      next();
    });
  }
  public getDepth(route: Route): number {
    let path = route.fullPath;
    if (path.endsWith('/')) path = path.slice(0, -1);
    return path.split('/').length;
  }
}
</script>

<style lang="scss" scoped>
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(60px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-60px, 0);
}
.slide-bottom-enter,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translate(0, 100px);
}
.slide-bottom-enter-active,
.slide-bottom-leave-active,
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-fullscreen-leave-to,
.slide-fullscreen-enter {
  opacity: 0;
  transform: translate(0, 100%);
  border-radius: 25% 25% 0 0;
}
.c-router {
  position: relative;
  max-width: 100vw;
  .sub-view {
    right: 0;
    left: 0px;
    z-index: 10;
    position: absolute;
    min-height: 100vh;
    overflow-x: hidden;

    background: linear-gradient(
      120deg,
      rgba(var(--vm-background), 1),
      rgba(var(--vm-paragraph), 0.25)
    );

    &[fullscreen] {
      transition: all 0.71s cubic-bezier(0.55, 0, 0.1, 1);
      z-index: 11;
    }
  }
}
</style>
