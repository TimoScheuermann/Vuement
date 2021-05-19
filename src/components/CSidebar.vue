<template>
  <transition name="appear">
    <tc-sidebar v-if="$store.getters.sidebar" width="200px">
      <div class="title" slot="header">Components</div>
      <tc-sidebar-item
        v-for="c in components"
        :key="c"
        :title="c"
        :routeName="'tc' + c"
      />
    </tc-sidebar>
  </transition>
</template>

<script lang="ts">
import { components } from '@/utils/constants';
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class CSidebar extends Vue {
  get components(): string[] {
    return components;
  }
}
</script>

<style lang="scss" scoped>
.appear-enter,
.appear-leave-to {
  transform: translateX(-220px);
  opacity: 0;
}

.appear-enter-active,
.appear-leave-active {
  transition: all 0.3s ease-in-out;
}

.title {
  font-weight: bold;
  padding: 20px;
}
</style>
