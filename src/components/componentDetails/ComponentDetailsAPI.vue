<template>
  <div class="component-details-api" v-if="comp && props.length > 0">
    <vm-title :title="comp.name" subtitle="API" />
    <br />
    <vm-table>
      <template slot="head">
        <vm-th>Name</vm-th>
        <vm-th>Default</vm-th>
        <vm-th>Type</vm-th>
        <vm-th>Description</vm-th>
        <vm-th />
        <vm-th />
        <vm-th />
        <vm-th />
      </template>
      <vm-tr v-for="p in props" :key="p.id">
        <vm-td nowrap>{{ p.name.split(' | ')[0] }}</vm-td>
        <vm-td nowrap>{{ p.value }}</vm-td>
        <vm-td nowrap>{{ p.type }}</vm-td>
        <vm-td colspan="5">{{ p.description }}</vm-td>
      </vm-tr>
    </vm-table>
    <br />
  </div>
</template>

<script lang="ts">
import { ComponentManager, VMComp, VMProp } from '@/utils/ComponentManager';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ComponentDetailsAPI extends Vue {
  @Prop() comp!: VMComp;

  get props(): VMProp[] {
    if (!this.comp) return [];
    return this.comp.props
      .map((x) => ComponentManager.getProp(x))
      .filter((x) => !!x) as VMProp[];
  }
}
</script>

<style lang="scss" scoped>
.component-details-api {
  [nowrap] {
    white-space: nowrap;
  }
}
</style>
