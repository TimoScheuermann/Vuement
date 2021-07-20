<template>
  <vm-card
    type="fullscreen"
    :image="$store.getters.prevImage"
    title="Fullscreen"
    subtitle="Cardtype"
    color="#fff"
  >
    <span slot="header">Header</span>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </vm-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class TooltipTest extends Vue {}
</script>
