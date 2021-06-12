<template>
  <div class="view-component-details">
    <div class="hero">
      <vm-flow>
        <vm-title :title="compName" subtitle="Component" />
        <div class="button-wrapper" :key="$store.getters.dark">
          <vm-button
            variant="transparent"
            background="color"
            :round="true"
            icon="ti-share"
            @click="share"
          />
          <vm-button
            variant="transparent"
            background="color"
            :round="true"
            icon="ti-github"
            href="https://github.com/TimoScheuermann/Vuement"
          />
          <vm-button
            variant="transparent"
            background="color"
            :round="true"
            icon="ti-download"
            href="https://www.npmjs.com/package/vuement"
          />
          <vm-button
            variant="transparent"
            background="color"
            :round="true"
            icon="ti-bug"
            :href="`https://github.com/TimoScheuermann/Vuement/issues/new?title=[${compName}]%20-%20Your%20Bug%20Name&body=**Steps%20to%20Reproduce**%0A1.%20Do%20something%0A2.%20Do%20something%20else.%0A3.%20Do%20one%20last%20thing.%0A%0A**Expected**%0AThe%20${compName}%20should%20do%20this%0A%0A**Result**%0AThe%20${compName}%20does%20not%20do%20this`"
          />
        </div>
      </vm-flow>
    </div>

    <div content>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, cumque
        id! Non pariatur cumque assumenda impedit quo nesciunt, molestiae
        perspiciatis reiciendis repellendus repellat suscipit! Ut exercitationem
        expedita incidunt ipsam quaerat?
      </p>

      <br />

      <ComponentDetailsAPI v-for="c in apiComponents" :key="c.id" :comp="c" />
    </div>
  </div>
</template>

<script lang="ts">
import ComponentDetailsAPI from '@/components/componentDetails/ComponentDetailsAPI.vue';
import { ComponentManager, VMComp } from '@/utils/ComponentManager';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    ComponentDetailsAPI,
  },
})
export default class ComponentDetails extends Vue {
  get compName(): string {
    return this.$route.params.name;
  }

  get component(): VMComp | null {
    return ComponentManager.getComponent(this.compName);
  }

  get apiComponents(): (VMComp | null)[] {
    const comp = this.component;
    if (!comp) return [];
    return [comp.id, ...comp.children].map((x) =>
      ComponentManager.getComponent(x)
    );
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
.view-component-details {
  margin-top: calc(50px + env(safe-area-inset-top));

  .hero {
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

  [content] {
    padding-top: 20px;
  }
}
</style>
