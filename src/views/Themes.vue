<template>
  <div class="view-themes" content>
    <tc-table>
      <tc-tr>
        <tc-th>Col 1</tc-th>
        <tc-th>Col 2</tc-th>
        <tc-th>Col 3</tc-th>
      </tc-tr>
      <tc-tr>
        <tc-td>D 1.1</tc-td>
        <tc-td>D 1.2</tc-td>
        <tc-td>D 1.3</tc-td>
      </tc-tr>
      <tc-tr>
        <tc-td>D 2.1</tc-td>
        <tc-td colspan="2">D 2.2+3</tc-td>
      </tc-tr>
      <tc-tr>
        <tc-td colspan="2">D 2.1+2</tc-td>
        <tc-td>D 2.3</tc-td>
      </tc-tr>
    </tc-table>
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
