<template>
  <div class="view-colors" content>
    <h1 @click="open = true">Colors</h1>

    <h1 v-for="(_, i) in Array(20)" :key="i">{{ i }}</h1>
    <vm-dialog v-model="open">
      <vm-textarea></vm-textarea>
    </vm-dialog>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Colors extends Vue {
  public open = false;
}
</script>

<style lang="scss" scoped>
.view-colors {
  //
}
</style>
