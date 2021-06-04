<template>
  <vm-navbar class="c-navbar" breakpoint="850px">
    <template slot="title">
      <vm-flow>
        <div class="title" @click="goHome">
          <img
            src="https://timos.s3.eu-central-1.amazonaws.com/lib/632e6c9c-bee5-4018-9e19-0ebdb099af7b.svg"
            alt=""
          />
        </div>
      </vm-flow>
    </template>

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
  .title {
    cursor: pointer;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;

    img {
      height: 20px;
    }
  }
}
</style>
