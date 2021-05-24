<template>
  <div class="view-interim-component">
    <div class="component-hero">
      <div class="hero-wrapper">
        <tc-flow>
          <tc-title :title="$route.meta.title" subtitle="Component" />
          <tc-flow>
            <tc-button icon="ti-github" variant="filled" />
            <tc-button icon="ti-back" variant="filled" />
            <tc-button icon="ti-bug" variant="filled" />
          </tc-flow>
        </tc-flow>
        <template v-if="comp && comp.preview">
          <div class="spacer" />
          <tc-flow horizontal="center">
            <component :is="comp.preview" />
          </tc-flow>
        </template>
      </div>
    </div>
    <div content>
      <router-view />

      <br />

      <template v-if="props">
        <tc-title :title="$route.meta.title" subtitle="API" />
        <br />
        <tc-table>
          <tc-tr>
            <tc-td>Prop</tc-td>
            <tc-td>Type</tc-td>
            <tc-td>Default</tc-td>
            <tc-td>Description</tc-td>
          </tc-tr>
          <tc-tr v-for="p in props" :key="p.name">
            <tc-td>{{ p.name }}</tc-td>
            <tc-td>{{ p.type }}</tc-td>
            <tc-td>{{ p.default }}</tc-td>
            <tc-td>{{ p.description }}</tc-td>
          </tc-tr>
        </tc-table>
      </template>

      <template v-if="siblings">
        <div v-for="s in Object.keys(siblings)" :key="s">
          <br />
          <tc-title :title="'TC ' + s" subtitle="API" />
          <br />
          <tc-table>
            <tc-tr>
              <tc-td>Prop</tc-td>
              <tc-td>Type</tc-td>
              <tc-td>Default</tc-td>
              <tc-td>Description</tc-td>
            </tc-tr>
            <tc-tr v-for="p in siblings[s]" :key="p.name">
              <tc-td>{{ p.name }}</tc-td>
              <tc-td>{{ p.type }}</tc-td>
              <tc-td>{{ p.default }}</tc-td>
              <tc-td>{{ p.description }}</tc-td>
            </tc-tr>
          </tc-table>
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
  TCComponent,
  TCProp,
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
  get comp(): TCComponent | undefined {
    return getComponent();
  }

  get props(): TCProp[] | undefined {
    return getProps();
  }

  get siblings(): Record<string, TCProp[]> | undefined {
    const sib = getSiblings();
    if (!sib || sib.length === 0) return undefined;

    const sibs: Record<string, TCProp[]> = {};
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
      #fff 0%,
      #f5f5f7 60%,
      #dadada 90%
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
