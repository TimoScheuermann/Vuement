<template>
  <tc-tabbar class="c-tabbar" v-if="!$store.getters.desktop">
    <tc-tabbar-item icon="ti-house" title="Home" routeName="home" />
    <tc-tabbar-item
      icon="ti-dots"
      title="Comps"
      @click="$store.commit('sidebar', true)"
    />
    <tc-tabbar-item icon="ti-bucket" title="Themes" routeName="themes" />
    <tc-tabbar-item icon="ti-color-fan" title="Colors" routeName="colors" />
    <tc-tabbar-item icon="ti-gears" title="Guide" />
  </tc-tabbar>
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
