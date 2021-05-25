<template>
  <div class="vm-list-item" @click="clicked">
    <div class="vm-list-item--media" v-if="$slots.media">
      <slot name="media" />
    </div>
    <div class="vm-list-item--container">
      <div class="vm-list-item--container__wrapper">
        <div class="vm-list-item--title" v-if="title">{{ title }}</div>
        <div class="vm-list-item--description" v-if="description">
          {{ description }}
        </div>
      </div>
      <div class="vm-list-item--action">
        <div class="vm-list-item--action__indicator" v-if="showIndicator">
          <span></span>
          <span></span>
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VMLinkMixin from '@/vuement/mixins/VMLink.mixin';
import { Component, Prop, Mixins } from 'vue-property-decorator';

@Component
export default class VMListItem extends Mixins(VMLinkMixin) {
  @Prop() title!: string;
  @Prop() description!: string;

  get showIndicator(): boolean {
    return (
      [this.to, this.href, this.routeName].some((x) => !!x) &&
      !this.disabled &&
      !this.$slots.default
    );
  }
}
</script>

<style lang="scss" scoped>
.vm-list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  transition: 0.2s ease-in-out;
  border-radius: #{$border-radius / 1.5};

  &:hover {
    background: rgba(#000, 0.15);
    .vm-list-item--container::before {
      opacity: 0 !important;
    }
  }

  &--media,
  &--container {
    padding: 5px;
  }

  &--container {
    padding: 5px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    &__wrapper {
      display: flex;
      flex: 1 1 0px;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin-right: 10px;
      min-height: 30px;

      .vm-list-item--title {
        font-weight: 500;
        -webkit-line-clamp: 1;
      }
      .vm-list-item--description {
        opacity: 0.7;
        font-size: 14px;
        -webkit-line-clamp: 2;
      }
      .vm-list-item--title,
      .vm-list-item--description {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
      }
    }

    .vm-list-item--action {
      display: grid;
      place-content: center;
      &__indicator {
        height: 20px;
        width: 10px;
        position: relative;
        opacity: 0.5;

        span {
          position: absolute;
          height: 2px;
          border-radius: 50px;
          background: currentColor;
          width: 50%;
          top: 50%;
          left: 50%;
          width: 100%;

          &:first-child {
            top: 33.33%;
            transform: translate(-50%, calc(-25% + 0.5px)) rotate(45deg);
          }
          &:last-child {
            top: 66.66%;
            transform: translate(-50%, calc(-25% - 0.5px)) rotate(-45deg);
          }
        }
      }
    }
  }

  &:not(:last-of-type) {
    .vm-list-item--container {
      position: relative;
      &::before {
        position: absolute;
        content: '';
        height: 1px;
        width: calc(100% - 10px);
        bottom: 0;
        border-radius: 1px;
        opacity: 0.2;
        background: var(--vm-color);
        transition: 0.2s ease-in-out;
      }
    }
  }
}
</style>
