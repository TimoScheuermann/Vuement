<template>
  <div class="vm-onboarding-view">
    <div class="vm-onboarding-view--container">
      <slot>
        <slot name="media">
          <div class="vm-onboarding-view--container__media">
            <img v-if="image" :src="image" />
          </div>
        </slot>
        <slot name="text">
          <div class="vm-onboarding-view--container__title" v-if="title">
            {{ title }}
          </div>
          <div
            class="vm-onboarding-view--container__description"
            v-if="description"
          >
            {{ description }}
          </div>
        </slot>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component<VMOnboardingView>({
  name: 'vmOnboardingView',
})
export default class VMOnboardingView extends Vue {
  @Prop() image!: string;
  @Prop() video!: string;
  @Prop() title!: string;
  @Prop() description!: string;
}
</script>

<style lang="scss" scoped>
.vm-onboarding-view {
  height: 100%;
  width: 100vw;

  flex-shrink: 0;
  scroll-snap-align: center;
  display: grid;
  place-content: center;

  svg {
    max-height: 200px;
  }

  &--container {
    padding: env(safe-area-inset-top) env(safe-area-inset-right)
      env(safe-area-inset-bottom) env(safe-area-inset-left);
    max-width: 300px;
    margin: auto;

    &__media {
      margin: 10px 0;
    }

    &__title {
      margin: 10px 0;
      font-size: 1.7em;
      font-weight: bold;
      text-align: center;
    }

    &__description {
      margin: 10px 0;
      font-weight: 550;
      text-align: center;
    }
  }
}
</style>
