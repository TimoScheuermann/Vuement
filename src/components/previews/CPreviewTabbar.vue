<template>
  <tc-tabbar>
    <tc-tabbar-item title="Home" icon="ti-house" />
    <tc-tabbar-item title="About" icon="ti-i-circle" routeName="tcTabbar" />
    <tc-tabbar-item title="Profile" icon="ti-user-filled" />
    <tc-tabbar-item title="Settings" icon="ti-gears" />
  </tc-tabbar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class CPreviewTabbar extends Vue {}
</script>

<style lang="scss" scoped>
.tc-tabbar {
  position: static !important;
  padding-left: 20px !important;
  padding-right: 20px !important;
  flex: 1 1 0px !important;
}
</style>
