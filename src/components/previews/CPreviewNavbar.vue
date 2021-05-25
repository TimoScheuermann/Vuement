<template>
  <vm-navbar>
    <b slot="title">Navbar</b>
    <vm-navbar-item title="Home" icon="ti-house" />
    <vm-navbar-item title="About" icon="ti-i-circle" routeName="vmNavbar" />
  </vm-navbar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class CPreviewNavbar extends Vue {}
</script>

<style lang="scss" scoped>
.vm-navbar {
  position: static !important;
  padding-left: 20px !important;
  padding-right: 20px !important;
  flex: 1 1 0px !important;
}
</style>
