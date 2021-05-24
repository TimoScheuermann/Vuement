<template>
  <tc-navbar class="c-navbar" breakpoint="850px">
    <template slot="title">
      <tc-flow>
        <div class="title" @click="goHome">
          <i class="ti-tccomponents" />
          <span>TC Components</span>
        </div>
      </tc-flow>
    </template>

    <template v-if="$store.getters.desktop">
      <tc-navbar-item
        title="Components"
        @click="$store.commit('sidebar', true)"
      />
      <tc-navbar-item title="Colors" />
      <tc-navbar-item title="Themes" />
      <tc-navbar-item title="Getting started" />
    </template>
  </tc-navbar>
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
  .title {
    cursor: pointer;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;

    i {
      margin-right: 10px;
      color: $error;
    }
  }
}
</style>
