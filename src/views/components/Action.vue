<template>
  <div class="view-action">
    <vm-divider></vm-divider>

    <vm-flow>
      <vm-action title="Was geht">
        <vm-action-item title="Hallo #1" />
        <vm-action-item title="Hallo #1" />
        <vm-action-item title="Hallo #2" icon="ti-pencil" />
        <vm-spacer></vm-spacer>
        <vm-action-item title="Hallo #3" />
        <vm-action-item title="Hallo #1" />
      </vm-action>

      <vm-select>
        <vm-select-item id="a" title="Herein #1" icon="ti-pencil" />
        <vm-select-item id="b" title="Herein #2" :selected="true" />
        <vm-spacer></vm-spacer>
        <vm-select-item id="c" title="Herein #3" />
      </vm-select>

      <vm-select>
        <vm-select-item id="a" title="Heraus #1" />
        <vm-select-item id="b" title="Heraus #2" />
        <vm-select-item id="c" title="Heraus #3" />
      </vm-select>

      <vm-action>
        <vm-action-item title="Tschau #1" />
        <vm-action-item title="Tschau #2" />
        <vm-action-item title="Tschau #3" />
      </vm-action>
    </vm-flow>

    <vm-divider></vm-divider>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Action extends Vue {}
</script>

<style lang="scss" scoped>
.view-action {
  //
}
</style>
