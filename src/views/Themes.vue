<template>
  <div class="view-themes" content>
    <vm-table>
      <template slot="head">
        <vm-th>Col 1</vm-th>
        <vm-th>Col 2</vm-th>
        <vm-th>Col 3</vm-th>
      </template>
      <vm-tr key="a">
        <vm-td>D 1.1</vm-td>
        <vm-td>D 1.2</vm-td>
        <vm-td>D 1.3</vm-td>
      </vm-tr>
      <vm-tr key="b">
        <vm-td>D 2.1</vm-td>
        <vm-td colspan="2">D 2.2+3</vm-td>
      </vm-tr>
      <vm-tr key="c">
        <vm-td colspan="2">D 2.1+2</vm-td>
        <vm-td>D 2.3</vm-td>
      </vm-tr>
    </vm-table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Themes extends Vue {}
</script>

<style lang="scss" scoped>
.view-themes {
  //
}
</style>
