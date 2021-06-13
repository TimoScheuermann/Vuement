<template>
  <div class="component-details-hero" v-if="comp">
    <component v-if="comp" :is="comp.name" />
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
}
</script>
