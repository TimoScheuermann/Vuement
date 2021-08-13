<template>
  <div class="vm-chip-wrapper">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component<VMChipWrapper>({
  name: 'vmChipWrapper',
})
export default class VMChipWrapper extends Vue {}
</script>

<style lang="scss" scoped>
.vm-chip-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
