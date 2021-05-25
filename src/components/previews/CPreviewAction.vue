<template>
  <vm-action>
    <vm-action-item />
  </vm-action>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class CPreviewAction extends Vue {}
</script>

<style lang="scss" scoped>
// .vm-navbar {
//   position: static;
//   padding-left: 20px;
//   padding-right: 20px;
//   flex: 1 1 0px;
// }
</style>
