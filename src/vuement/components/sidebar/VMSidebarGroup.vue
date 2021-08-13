<template>
  <div class="vm-sidebar-group">
    <div class="vm-sidebar-group--head" @click="expanded = !expanded">
      <div class="vm-sidebar-group--head__title">{{ title }}</div>
      <div class="vm-sidebar-group--head__indicator" :collapsed="!expanded">
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="vm-sidebar-group--items" :expanded="expanded">
      <VMRevealer>
        <div v-if="expanded"><slot /></div>
      </VMRevealer>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import VMRevealer from '../revealer/VMRevealer.vue';

@Component<VMSidebarGroup>({
  name: 'vmSidebarGroup',
  components: {
    VMRevealer,
  },
})
export default class VMSidebarGroup extends Vue {
  @Prop() title!: string;
  @Prop() value!: boolean;

  public expanded = !!this.value;

  @Watch('value', { immediate: true })
  valueChanged(): void {
    this.expanded = !!this.value;
  }

  @Watch('expanded', { immediate: true })
  expandedChanged(): void {
    this.$emit('input', this.expanded);
  }
}
</script>

<style lang="scss" scoped>
.vm-sidebar-group {
  margin: 10px 0;
  &--head {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 5px;
    cursor: pointer;
    padding-bottom: 2.5px;

    &__title {
      font-weight: bold;
      font-size: 14px;
      opacity: 0.8;
      display: grid;
      place-content: center start;
      user-select: none;
    }

    &__indicator {
      height: 16px;
      width: 16px;
      position: relative;

      span {
        position: absolute;
        height: 2px;
        border-radius: 2px;
        background: currentColor;
        width: 50%;
        top: 50%;
        left: 50%;
        transition: all 0.2s ease-in-out;
      }

      span:first-child {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
      span:last-child {
        transform: translate(-50%, -50%) rotate(45deg);
      }

      &[collapsed] {
        span {
          width: calc(50% - 1px);
        }
        span:first-child {
          left: 25%;
          transform: translate(-25%, -25%) rotate(45deg);
        }
        span:last-child {
          left: 50%;
          transform: translate(-25%, -25%) rotate(-45deg);
        }
      }
    }
  }
}
</style>
