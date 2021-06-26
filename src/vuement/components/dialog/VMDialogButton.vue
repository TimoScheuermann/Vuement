<template>
  <VMClickable
    class="vm-dialog-button"
    @click.stop="handleClick"
    :style="{ '--vm-primary': vmColor }"
    :disabled="disabled"
    fallback="button"
    :href="href"
    :routeName="routeName"
    :to="to"
  >
    <i v-if="icon" :class="icon" />
    <img v-else-if="image" :src="image" alt="" />
    <span v-if="title">{{ title }}</span>
    <slot />
  </VMClickable>
</template>

<script lang="ts">
import VMClickable from '@/vuement/mixins/VMClickable.vue';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import VMLinkMixin from '@/vuement/mixins/VMLink.mixin';
import { Component, Prop, Mixins } from 'vue-property-decorator';

@Component({
  components: {
    VMClickable,
  },
})
export default class VMDialogButton extends Mixins(VMLinkMixin, VMCProp) {
  @Prop() title!: string;
  @Prop() icon!: string;
  @Prop() image!: string;

  public handleClick(e: MouseEvent): void {
    this.clicked(e);
    if (!this.disabled) {
      this.$parent.$emit('close');
    }
  }
}
</script>

<style lang="scss" scoped>
.vm-dialog-button {
  @include vm-clickable();

  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 0px;
  flex-wrap: nowrap;
  cursor: pointer;

  font-weight: 500;

  color: rgba(var(--vm-primary), 1);

  padding: 0 5px;
  min-height: 45px;

  &:not(:first-child) {
    border-left: 1.5px solid rgba(var(--vm-border), 1);
  }

  transition: 0.1s ease-in-out;
  &:not([disabled]) {
    &:hover {
      background: rgba(var(--vm-primary), 0.12);
    }
    &:active {
      filter: brightness(150%);
    }
  }

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  img {
    max-height: 1em;
    max-width: 1em;
  }

  i,
  image,
  span {
    user-select: none;
    margin: 0 5px;
  }
}
</style>
