<template>
  <VMClickable
    @click="handleClick"
    class="vm-list-item-wrapper"
    :style="{ '--vm-color': vmColor, '--vm-color-secondary': vmColorSecondary }"
    :disabled="disabled"
    :href="href"
    :routeName="routeName"
    :to="to"
    fallback="li"
  >
    <div class="vm-list-item__custom" v-if="$slots.custom">
      <slot name="custom" />
    </div>
    <template v-else>
      <div class="vm-list-item__media" v-if="$slots.media">
        <slot name="media" />
      </div>
      <div class="vm-list-item">
        <div class="vm-list-item--container">
          <slot>
            <slot name="title">
              <div class="vm-list-item--container__title" v-if="title">
                {{ title }}
              </div>
            </slot>
            <slot name="description">
              <div
                class="vm-list-item--container__description"
                v-if="description"
              >
                {{ description }}
              </div>
            </slot>
          </slot>
        </div>

        <slot name="action" />
        <svg
          class="vm-list-item--chevron"
          v-if="showIndicator"
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
export default class VMListItem extends Mixins(VMLinkMixin, VMCProp) {
  @Prop() title!: string;
  @Prop() description!: string;
  @Prop() colorSecondary!: string;
  @Prop({ default: true }) showChevron!: boolean;

  get vmColorSecondary(): string | null {
    return this.colorSecondary ? this.getColor(this.colorSecondary) : null;
  }

  get showIndicator(): boolean {
    return (
      [this.to, this.href, this.routeName].some((x) => !!x) &&
      !this.disabled &&
      this.showChevron
    );
  }

  public handleClick(e: MouseEvent): void {
    this.clicked(e);

    if (!this.disabled) {
      Object.values(this.$slots).forEach((slotValue) => {
        if (slotValue) {
          slotValue.forEach((x) => {
            const { componentInstance } = x;
            if (componentInstance) {
              (componentInstance.$el as HTMLElement).click();
            }
          });
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.vm-list-item-wrapper {
  @include vm-clickable();

  &:not(:first-child) {
    .vm-list-item__custom,
    .vm-list-item {
      border-top: 1.5px solid rgba(var(--vm-border), 1);
    }
  }

  &:first-child {
    border-top: {
      left-radius: $border-radius;
      right-radius: $border-radius;
    }
  }
  &:last-child {
    border-bottom: {
      left-radius: $border-radius;
      right-radius: $border-radius;
    }
  }

  list-style: none;
  cursor: pointer;
  display: flex;
  flex: 1 1 0px;
  width: 100%;

  transition: background 0.1s ease-in-out;

  &:hover {
    transition-duration: 0.2s;
    background: rgba(var(--vm-color), 0.05);
    .vm-list-item--chevron {
      fill: rgba(var(--vm-color), 0.8);
    }
  }

  .vm-list-item__media {
    display: grid;
    place-content: center;
    padding: 5px;
    margin-right: 5px;

    + .vm-list-item {
      padding-left: 0;
    }
  }

  .vm-list-item {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: nowrap;
    flex-grow: 1;
    padding: 7.5px 10px;
    color: rgba(var(--vm-color-secondary), 1);

    &--container {
      color: rgba(var(--vm-color), 1);
      flex-grow: 1;
      &__title,
      &__description {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
      }
      &__title {
        font-weight: 500;
        -webkit-line-clamp: 1;
      }
      &__description {
        color: rgba(var(--vm-color-secondary), 1);
        font-size: 14px;
        -webkit-line-clamp: 2;
      }
    }

    &--chevron {
      fill: rgba(var(--vm-border), 1);

      transition: fill 0.1s ease-in-out;
    }
  }
}
</style>
