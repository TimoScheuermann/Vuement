<template>
  <div class="tc-divider">
    <div class="tc-divider__bar" v-if="position !== 'leading'" />
    <div class="tc-divider__content" v-if="$slots.default"><slot /></div>
    <div class="tc-divider__bar" v-if="position !== 'trailing'" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class TCDivider extends Vue {
  @Prop() color!: string;
  @Prop({ default: 'center' }) position!: string;
}
</script>

<style lang="scss" scoped>
.tc-divider {
  display: flex;
  flex: 1 1 0px;
  justify-content: center;
  align-items: center;
  margin: 2.5px 0;

  &__bar {
    height: 1px;
    flex-grow: 1;
    background: var(--tc-color);
    opacity: 0.5;
  }

  &__content ~ &__bar {
    margin-left: 5px;
  }
  &__bar ~ &__content {
    margin-left: 5px;
  }
}
</style>
