<template>
  <div class="component-details-hero" v-if="exists">
    <component v-if="comp" :is="comp.name + 'Details'" />
  </div>
</template>

<script lang="ts">
import { VMComp } from '@/utils/ComponentManager';
import { Vue, Component, Prop } from 'vue-property-decorator';
import * as components from '@/views/vmComponents';

@Component({
  components: { ...components },
})
export default class ComponentDetailsComponent extends Vue {
  @Prop() comp!: VMComp;

  get exists(): boolean {
    if (!this.comp) return false;
    return Object.keys(components).includes(this.comp.name + 'Details');
  }
}
</script>
