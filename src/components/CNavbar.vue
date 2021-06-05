<template>
  <vm-navbar class="c-navbar" breakpoint="850px">
    <vm-flow slot="title" @click="goHome">
      <img src="assets/logo-wide.svg" alt="" />
    </vm-flow>

    <template v-if="$store.getters.desktop">
      <vm-navbar-item
        title="Components"
        @click="$store.commit('sidebar', true)"
      />
      <vm-navbar-item title="Colors" routeName="colors" />
      <vm-navbar-item title="Getting started" routeName="playground" />
    </template>
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
  .sidebar-opener {
    margin-right: 10px;
    cursor: pointer;
    height: 40px;
    width: 40px;
    display: grid;
    place-content: center;
    font-size: 20px;
  }

  img {
    height: 22px;
    cursor: pointer;
  }
}
</style>
