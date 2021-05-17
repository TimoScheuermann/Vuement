<template>
  <div id="timos-icons">
    <!-- <tc-navbar>
      <b slot="title">TC Components</b>
      <tc-navbar-item icon="ti-house" title="Home" routeName="home" />
      <tc-navbar-item icon="ti-button" title="Buttons" routeName="buttons" />
    </tc-navbar> -->

    <!-- <tc-tabbar>
      <tc-tabbar-item icon="ti-house" title="Home" routeName="home" />
      <tc-tabbar-item icon="ti-button" title="Buttons" routeName="buttons" />
    </tc-tabbar> -->

    <!-- <tc-sidebar>
      <tc-sidebar-item icon="ti-house" title="Home" routeName="home" />
      <tc-sidebar-item icon="ti-button" title="Buttons" routeName="buttons" />

      <tc-sidebar-group title="Group #1">
        <tc-sidebar-item icon="ti-house" title="Home" />
        <tc-sidebar-item icon="ti-button" title="Buttons" />
        <tc-sidebar-group title="Group #1.1">
          <tc-sidebar-item icon="ti-house" title="Home" />
          <tc-sidebar-item icon="ti-button" title="Buttons" />
          <tc-sidebar-item icon="ti-button" title="Buttons" />
        </tc-sidebar-group>
      </tc-sidebar-group>
      <tc-sidebar-item icon="ti-button" title="Buttons" />

      <tc-sidebar-group title="Group #1">
        <tc-sidebar-item icon="ti-house" title="Home" />
        <tc-sidebar-item icon="ti-button" title="Buttons" />
        <tc-sidebar-item icon="ti-button" title="Buttons" />
      </tc-sidebar-group>
    </tc-sidebar> -->

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class App extends Vue {}
</script>

<style lang="scss">
html {
  font-family: -apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI,
    Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol;
  scroll-behavior: smooth;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

body {
  min-height: 100vh;
  margin: 0;
}
</style>
