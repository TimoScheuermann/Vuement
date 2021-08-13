<template>
  <VMClickable
    @click.stop="handleClick"
    class="vm-sheet-item"
    :style="{ '--vm-color': vmColor }"
    :disabled="disabled"
    fallback="button"
    :href="href"
    :routeName="routeName"
    :to="to"
  >
    <div class="vm-sheet-item---media">
      <slot />
      <i v-if="icon && !$slots.default" :class="icon" />
    </div>
    <div class="vm-sheet-item--title">{{ title }}</div>
  </VMClickable>
</template>

<script lang="ts">
import VMClickable from '@/vuement/mixins/VMClickable.vue';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import VMLinkMixin from '@/vuement/mixins/VMLink.mixin';
import { Component, Mixins, Prop } from 'vue-property-decorator';

@Component<VMSheetItem>({
  name: 'vmSheetItem',
  components: {
    VMClickable,
  },
})
export default class VMSheetItem extends Mixins(VMLinkMixin, VMCProp) {
  @Prop() title!: string;
  @Prop() icon!: string;

  public handleClick(e: MouseEvent): void {
    this.clicked(e);
    if (!this.disabled) {
      this.$parent.$emit('close');
    }
  }
}
</script>

<style lang="scss" scoped>
.vm-sheet-item {
  @include vm-clickable();

  display: grid;
  grid-template-columns: minmax(0, auto) 1fr;
  grid-gap: 10px;

  color: rgba(var(--vm-color), 1);

  cursor: pointer;
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &--media {
    display: grid;
    place-content: center;
  }
  &--title {
    font-weight: 500;
  }
  padding: 5px 0;
}
</style>
