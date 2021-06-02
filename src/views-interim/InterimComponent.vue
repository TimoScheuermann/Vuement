<template>
  <div class="view-interim-component">
    <div class="component-hero">
      <div class="hero-wrapper">
        <vm-flow>
          <vm-title :title="$route.meta.title" subtitle="Component" />
          <vm-flow>
            <vm-button icon="ti-github" variant="filled" />
            <vm-button icon="ti-back" variant="filled" />
            <vm-button icon="ti-bug" variant="filled" />
          </vm-flow>
        </vm-flow>
        <template v-if="comp && comp.preview">
          <div class="spacer" />
          <vm-flow horizontal="center">
            <component :is="comp.preview" />
          </vm-flow>
        </template>
      </div>
    </div>
    <div content>
      <router-view />

      <br />

      <template v-if="props">
        <vm-title :title="$route.meta.title" subtitle="API" />
        <br />
        <vm-table>
          <vm-tr>
            <vm-th>Prop</vm-th>
            <vm-th>Type</vm-th>
            <vm-th>Default</vm-th>
            <vm-th>Description</vm-th>
          </vm-tr>
          <vm-tr v-for="p in props" :key="p.name">
            <vm-td>{{ p.name }}</vm-td>
            <vm-td>{{ p.type }}</vm-td>
            <vm-td>{{ p.default }}</vm-td>
            <vm-td>{{ p.description }}</vm-td>
          </vm-tr>
        </vm-table>
      </template>

      <template v-if="siblings">
        <div v-for="s in Object.keys(siblings)" :key="s">
          <br />
          <vm-title :title="'VM ' + s" subtitle="API" />
          <br />
          <vm-table>
            <vm-tr>
              <vm-th>Prop</vm-th>
              <vm-th>Type</vm-th>
              <vm-th>Default</vm-th>
              <vm-th>Description</vm-th>
            </vm-tr>
            <vm-tr v-for="p in siblings[s]" :key="p.name">
              <vm-td>{{ p.name }}</vm-td>
              <vm-td>{{ p.type }}</vm-td>
              <vm-td>{{ p.default }}</vm-td>
              <vm-td>{{ p.description }}</vm-td>
            </vm-tr>
          </vm-table>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import CPreviewAction from '@/components/previews/CPreviewAction.vue';
import CPreviewNavbar from '@/components/previews/CPreviewNavbar.vue';
import CPreviewTabbar from '@/components/previews/CPreviewTabbar.vue';
import {
  getComponent,
  getProps,
  getSiblings,
  VMComponent,
  VMProp,
} from '@/utils/components';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    CPreviewNavbar,
    CPreviewTabbar,
    CPreviewAction,
  },
})
export default class InterimComponent extends Vue {
  get comp(): VMComponent | undefined {
    return getComponent();
  }

  get props(): VMProp[] | undefined {
    return getProps();
  }

  get siblings(): Record<string, VMProp[]> | undefined {
    const sib = getSiblings();
    if (!sib || sib.length === 0) return undefined;

    const sibs: Record<string, VMProp[]> = {};
    sib.forEach((x) => {
      const props = getProps(x);
      if (props && props.length > 0) sibs[x] = props;
    });
    return sibs;
  }
}
</script>

<style lang="scss" scoped>
.view-interim-component {
  .component-hero {
    padding: 0 5vw;
    padding-top: calc(50px + env(safe-area-inset-top));
    // background: radial-gradient(
    //   ellipse at center,
    //   #36383f 0%,
    //   #1a1d22 60%,
    //   #111 90%
    // );
    background: radial-gradient(
      ellipse at center,
      rgba(var(--vm-background), 1) 0%,
      rgba(var(--vm-paragraph), 1) 60%,
      rgba(var(--vm-border), 0.5) 90%
    );

    .hero-wrapper {
      min-height: 60px;
      padding: 30px 0;
      margin: 0 auto;
      max-width: 800px;

      .spacer {
        height: 20px;
      }
    }
  }

  [content] {
    padding-top: 20px;
  }

  /deep/ h3 {
    margin: 0;
  }
}
</style>
