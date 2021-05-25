<template>
  <vm-tabbar>
    <vm-tabbar-item title="Home" icon="ti-house" />
    <vm-tabbar-item title="About" icon="ti-i-circle" routeName="vmTabbar" />
    <vm-tabbar-item title="Profile" icon="ti-user-filled" />
    <vm-tabbar-item title="Settings" icon="ti-gears" />
  </vm-tabbar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class CPreviewTabbar extends Vue {}
</script>

<style lang="scss" scoped>
.vm-tabbar {
  position: static !important;
  padding-left: 20px !important;
  padding-right: 20px !important;
  flex: 1 1 0px !important;
}
</style>
