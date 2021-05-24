<template>
  <tc-navbar>
    <b slot="title">Navbar</b>
    <tc-navbar-item title="Home" icon="ti-house" />
    <tc-navbar-item title="About" icon="ti-i-circle" routeName="tcNavbar" />
  </tc-navbar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class CPreviewNavbar extends Vue {}
</script>

<style lang="scss" scoped>
.tc-navbar {
  position: static !important;
  padding-left: 20px !important;
  padding-right: 20px !important;
  flex: 1 1 0px !important;
}
</style>
