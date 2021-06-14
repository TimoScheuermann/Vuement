<template>
  <div class="component-details-hero" v-if="comp">
    <vm-flow>
      <vm-title :title="compName" subtitle="Component" />
      <div class="button-wrapper">
        <vm-button
          variant="transparent"
          color="color"
          :round="true"
          icon="ti-share"
          @click="share"
        />
        <vm-button
          variant="transparent"
          color="color"
          :round="true"
          icon="ti-github"
          href="https://github.com/TimoScheuermann/Vuement"
        />
        <vm-button
          variant="transparent"
          color="color"
          :round="true"
          icon="ti-download"
          href="https://www.npmjs.com/package/vuement"
        />
        <vm-button
          variant="transparent"
          color="color"
          :round="true"
          icon="ti-bug"
          :href="`https://github.com/TimoScheuermann/Vuement/issues/new?title=[${compName}]%20-%20Your%20Bug%20Name&body=**Steps%20to%20Reproduce**%0A1.%20Do%20something%0A2.%20Do%20something%20else.%0A3.%20Do%20one%20last%20thing.%0A%0A**Expected**%0AThe%20${compName}%20should%20do%20this%0A%0A**Result**%0AThe%20${compName}%20does%20not%20do%20this`"
        />
      </div>
    </vm-flow>
  </div>
</template>

<script lang="ts">
import { VMComp } from '@/utils/ComponentManager';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ComponentDetailsHero extends Vue {
  @Prop() comp!: VMComp;

  get compName(): string {
    return this.comp.name;
  }

  public share(): void {
    navigator.share({
      title: 'Vuement',
      text: this.compName,
      url: window.location.href,
    });
  }
}
</script>

<style lang="scss" scoped>
.component-details-hero {
  background: rgba(var(--vm-container), 0.5);
  min-height: 80px;
  display: grid;
  grid-template-columns: 1fr;
  place-content: center;
  padding: 20px 5vw;

  .vm-flow {
    width: 100%;
    margin: 0 auto;
    max-width: 800px;
  }

  .vm-title,
  .button-wrapper {
    margin: 5px 0;
  }
  .vm-button {
    font-size: 20px;
  }
}
</style>
