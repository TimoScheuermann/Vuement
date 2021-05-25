<template>
  <vm-tabbar class="c-tabbar" v-if="!$store.getters.desktop">
    <vm-tabbar-item icon="ti-house" title="Home" routeName="home" />
    <vm-tabbar-item
      icon="ti-dots"
      title="Comps"
      @click="$store.commit('sidebar', true)"
    />
    <vm-tabbar-item icon="ti-bucket" title="Themes" routeName="themes" />
    <vm-tabbar-item icon="ti-color-fan" title="Colors" routeName="colors" />
    <vm-tabbar-item icon="ti-gears" title="Guide" />
  </vm-tabbar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class CTabbar extends Vue {}
</script>

<style lang="scss" scoped>
.c-tabbar {
  //
}
</style>
