<template>
  <div class="vm-action-group-head" :sub="!main" :dim="expanded">
    <span v-if="main" />
    <VMActionItem
      :color="color"
      :disabled="disabled"
      :icon="icon"
      :title="title"
      @click="$emit('toggleExpand')"
    />
    <svg
      :expanded="ex"
      xmlns="http://www.w3.org/2000/svg"
      width="6.901"
      height="12"
    >
      <path
        d="M.264 11.736a.9.9 0 010-1.274l4.461-4.461L.264 1.54a.9.9 0 010-1.275.9.9 0 011.275 0l5.1 5.1a.9.9 0 010 1.275l-5.1 5.1a.9.9 0 01-.637.264.9.9 0 01-.638-.268z"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import { Component, Mixins, Prop, Watch } from 'vue-property-decorator';
import VMActionItem from './VMActionItem.vue';

@Component({
  components: {
    VMActionItem,
  },
})
export default class VMActionGroupHead extends Mixins(VMCProp) {
  @Prop() disabled!: boolean;
  @Prop() icon!: string;
  @Prop() title!: string;
  @Prop() expanded!: boolean;
  @Prop() main!: boolean;

  public ex = this.expanded;

  mounted(): void {
    if (!this.main) {
      this.ex = false;
      setTimeout(() => {
        this.ex = this.expanded;
      });
    }
  }

  @Watch('expanded')
  expandedChanged(): void {
    this.ex = this.expanded;
  }
}
</script>

<style lang="scss" scoped>
.vm-action-group-head {
  position: relative;
  border-radius: inherit;

  .vm-action-item {
    border-radius: inherit;
  }

  transition: 0.3s ease;
  [dim] {
    opacity: 0;
  }

  &[sub] {
    border-radius: $border-radius $border-radius 0 0;
    border-bottom: 1.5px solid rgba(var(--vm-border), 1);
    .vm-action-item {
      font-weight: 550;
    }
  }

  svg {
    position: absolute;
    top: 50%;
    left: 7.5px;
    fill: rgba(var(--vm-color), 0.8);
    transform: translateY(-50%);

    transition: transform 0.2s ease-in-out;
    &[expanded] {
      transform: translateY(-50%) rotate(90deg);
    }
  }
}
</style>
