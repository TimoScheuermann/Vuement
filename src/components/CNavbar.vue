<template>
  <vm-navbar class="c-navbar" breakpoint="850px" title="Test">
    <vm-flow slot="title" @click="goHome">
      <img src="assets/logo-wide.svg" alt="" />
    </vm-flow>

    <vm-button
      slot="static"
      variant="transparent"
      title="Get started"
      icon="ti-chevron-right"
      routeName="guide"
      :iconTrailing="true"
    />

    <template v-if="$store.getters.desktop">
      <vm-navbar-item title="Components" routeName="components" />
      <vm-navbar-item title="Colors" routeName="colors" />
      <!-- <vm-navbar-item title="Playground" routeName="playground" /> -->
    </template>
    <div
      v-else-if="$route.name === 'components'"
      class="search-bar"
      slot="action"
    >
      <vm-input
        :frosted="true"
        placeholder="Search Component..."
        @input="$store.commit('compQuery', $event)"
      />
    </div>
  </vm-navbar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class CNavbar extends Vue {
  public goHome(): void {
    if (this.$route.name !== 'home') {
      this.$router.push({ name: 'home' });
    }
  }
}
</script>

<style lang="scss" scoped>
.c-navbar {
  .search-bar {
    display: flex;
    max-width: 400px;
    margin: 5px auto;
    .vm-input {
      flex: 1 1 0px;
      // margin: 0;
    }
  }

  img {
    height: 22px;
    cursor: pointer;
  }
}
</style>
