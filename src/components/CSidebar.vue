<template>
  <transition name="appear">
    <vm-sidebar v-if="$store.getters.sidebar" width="200px">
      <div class="title" slot="header">Components</div>
      <!-- <vm-sidebar-item
        v-for="c in components"
        :key="c"
        :title="c"
        :routeName="'vm' + c"
      /> -->
    </vm-sidebar>
  </transition>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class CSidebar extends Vue {}
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
