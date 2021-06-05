<template>
  <div class="v-section-header">
    <vm-flow>
      <vm-title :title="title" :subtitle="subtitle" />
      <slot v-if="$slots.default" />
    </vm-flow>
    <vm-divider />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class VSectionHeader extends Vue {
  @Prop() title!: string;
  @Prop() subtitle!: string;
}
</script>

<style lang="scss" scoped>
.v-section-header {
  padding: 20px 0;
  .vm-title {
    font-size: 22px;
  }
  .vm-divider {
    margin-top: 20px;
  }
}
</style>
