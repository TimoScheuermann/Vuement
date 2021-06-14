<template>
  <div class="view-component-details">
    <ComponentDetailsHero :comp="component" />

    <div content>
      <template v-if="parent">
        <vm-quote background="paragraph">
          This component is part of
          <vm-link
            :to="{ name: 'component-details', params: { name: parent.name } }"
            >{{ parent.name }}</vm-link
          >. You can find more information about this component there.
        </vm-quote>
        <br />
      </template>

      <ComponentDetailsComponent :comp="component" />

      <ComponentDetailsAPI v-for="c in apiComponents" :key="c.id" :comp="c" />
    </div>
  </div>
</template>

<script lang="ts">
import ComponentDetailsAPI from '@/components/componentDetails/ComponentDetailsAPI.vue';
import ComponentDetailsComponent from '@/components/componentDetails/ComponentDetailsComponent.vue';
import ComponentDetailsHero from '@/components/componentDetails/ComponentDetailsHero.vue';
import { ComponentManager, VMComp } from '@/utils/ComponentManager';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    ComponentDetailsHero,
    ComponentDetailsComponent,
    ComponentDetailsAPI,
  },
})
export default class ComponentDetails extends Vue {
  mounted(): void {
    if (!this.component) {
      ComponentManager.loadComps(() => {
        if (!this.component) {
          this.$router.push({ name: 'home' });
        }
      });
    }
  }

  get component(): VMComp | null {
    let name = this.$route.params.name;
    if (!name.startsWith('vm')) name = 'vm' + name;
    else if (!name.startsWith('v')) name = 'v' + name;
    return ComponentManager.getComponent(name);
  }

  get parent(): VMComp | null {
    const comp = this.component;
    if (!comp) return null;
    return (
      ComponentManager.comps.filter((x) => x.children.includes(comp.id))[0] ||
      null
    );
  }

  get apiComponents(): (VMComp | null)[] {
    const comp = this.component;
    if (!comp) return [];
    return [comp.id, ...comp.children].map((x) =>
      ComponentManager.getComponent(x)
    );
  }
}
</script>

<style lang="scss" scoped>
.view-component-details {
  margin-top: calc(50px + env(safe-area-inset-top));

  [content] {
    padding-top: 20px;
  }
}
</style>
