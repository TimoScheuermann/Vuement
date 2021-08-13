<template>
  <VMClickable
    class="vm-sidebar-item"
    @click="clicked"
    :active="isUrlActive"
    :style="{ '--vm-primary': vmColor, '--vm-container': vmBackground }"
    :disabled="disabled"
    fallback="button"
    :href="href"
    :routeName="routeName"
    :to="to"
  >
    <div class="vm-sidebar-item__background" />
    <div class="vm-sidebar-item__icon" v-if="icon">
      <i :class="icon" />
    </div>
    <div class="vm-sidebar-item__title" v-if="title">{{ title }}</div>
  </VMClickable>
</template>

<script lang="ts">
import VMBgProp from '@/vuement/mixins/VMBackgroundProp.mixin';
import VMClickable from '@/vuement/mixins/VMClickable.vue';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import VMLinkMixin from '@/vuement/mixins/VMLink.mixin';
import { Component, Mixins, Prop } from 'vue-property-decorator';

@Component<VMSidebarItem>({
  name: 'vmSidebarItem',
  components: {
    VMClickable,
  },
})
export default class VMSidebarItem extends Mixins(
  VMLinkMixin,
  VMCProp,
  VMBgProp
) {
  @Prop() icon!: string;
  @Prop() title!: string;
}
</script>

<style lang="scss" scoped>
.vm-sidebar-item {
  @include vm-clickable();

  display: flex;
  flex: 1 1 0px;
  justify-content: flex-start;
  align-items: center;

  padding: 5px 10px;
  margin: 2.5px 0;
  cursor: pointer;
  border-radius: $border-radius;

  &__icon ~ &__title {
    margin-left: 15px;
  }
  &__icon,
  &__title {
    position: relative;
    user-select: none;
    transition: 0.2s ease-in-out;
  }

  &[active] {
    color: rgba(var(--vm-primary), 1);
  }

  position: relative;
  &__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(var(--vm-container), 1);
    opacity: 0;
    border-radius: inherit;
    transition: 0.1s ease-in-out;
  }

  &:not([disabled]):hover,
  &[active] {
    .vm-sidebar-item__background {
      opacity: 0.75;
    }
  }
}
</style>
