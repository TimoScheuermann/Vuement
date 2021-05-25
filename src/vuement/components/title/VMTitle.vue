<template>
  <div class="vm-title" :style="actionColor">
    <div class="vm-title--subtitle" v-if="subtitle">{{ subtitle }}</div>
    <div class="vm-title--title" v-if="title">{{ title }}</div>
  </div>
</template>

<script lang="ts">
import { getColor } from '@/vuement/util';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class VMTitle extends Vue {
  @Prop() title!: string;
  @Prop() subtitle!: string;
  @Prop() color!: string;

  get actionColor(): string | null {
    if (!this.color) return null;
    return `--vm-action-color:${getColor(this.color)}`;
  }
}
</script>

<style lang="scss" scoped>
.vm-title {
  color: var(--vm-action-color);

  &--title {
    font-size: 25px;
    font-weight: bold;
    overflow-wrap: break-word;
  }
  &--subtitle {
    font-size: 12px;
    font-weight: bold;
    opacity: 0.5;
    text-transform: uppercase;
  }
}
</style>
