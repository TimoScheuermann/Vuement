<template>
  <div class="tc-title" :style="actionColor">
    <div class="tc-title--subtitle" v-if="subtitle">{{ subtitle }}</div>
    <div class="tc-title--title" v-if="title">{{ title }}</div>
  </div>
</template>

<script lang="ts">
import { getColor } from '@/tcComponents/util';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class TCTitle extends Vue {
  @Prop() title!: string;
  @Prop() subtitle!: string;
  @Prop() color!: string;

  get actionColor(): string | null {
    if (!this.color) return null;
    return `--tc-action-color:${getColor(this, this.color)}`;
  }
}
</script>

<style lang="scss" scoped>
.tc-title {
  color: var(--tc-action-color);

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
