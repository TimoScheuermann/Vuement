<template>
  <div class="v-section-header">
    <vm-title :title="title" :subtitle="subtitle" />
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
  font-size: 22px;
  padding: 20px 0;
  .vm-title {
    margin-bottom: 20px;
  }
}
</style>
