<template>
  <div class="tc-sidebar-group">
    <div class="tc-sidebar-group--head" @click="expanded = !expanded">
      <div class="tc-sidebar-group--head__title">{{ title }}</div>
      <div class="tc-sidebar-group--head__indicator" :collapsed="!expanded">
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="tc-sidebar-group--items" :expanded="expanded">
      <TCRevealer>
        <div v-if="expanded"><slot /></div>
      </TCRevealer>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import TCRevealer from '../revealer/TCRevealer.vue';

@Component({
  components: {
    TCRevealer,
  },
})
export default class TCSidebarGroup extends Vue {
  @Prop() title!: string;
  public expanded = false;
}
</script>

<style lang="scss" scoped>
.tc-sidebar-group {
  margin: 10px 0;
  &--head {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 5px;
    cursor: pointer;
    padding-bottom: 2.5px;

    &__title {
      font-weight: bold;
      font-size: 13px;
      opacity: 0.75;
      text-transform: uppercase;
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
  &--items {
    transition: all 0.3s ease-in-out;
    &[expanded] {
      margin-left: 7.5px;
    }
  }
}
</style>
