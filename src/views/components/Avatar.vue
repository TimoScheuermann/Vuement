<template>
  <div class="view-avatar">
    <tc-divider position="leading">
      <h3>Sizes</h3>
    </tc-divider>

    <tc-flow horizontal="space-around">
      <tc-flow flow="column" horizontal="center">
        <tc-avatar
          src="https://images.unsplash.com/photo-1470130623320-9583a8d06241?h=400"
        />
        <b>small</b>
      </tc-flow>
      <tc-flow flow="column" horizontal="center">
        <tc-avatar
          size="normal"
          src="https://images.unsplash.com/photo-1470130623320-9583a8d06241?h=400"
        />
        <b>normal</b>
      </tc-flow>
      <tc-flow flow="column" horizontal="center">
        <tc-avatar
          size="medium"
          src="https://images.unsplash.com/photo-1470130623320-9583a8d06241?h=400"
        />
        <b>medium</b>
      </tc-flow>
      <tc-flow flow="column" horizontal="center">
        <tc-avatar
          size="large"
          src="https://images.unsplash.com/photo-1470130623320-9583a8d06241?h=400"
        />
        <b>large</b>
      </tc-flow>
    </tc-flow>

    <br />

    <tc-divider position="leading">
      <h3>Variants</h3>
    </tc-divider>

    <tc-grid width="100px">
      <tc-flow flow="column">
        <tc-avatar
          size="normal"
          src="https://images.unsplash.com/photo-1470130623320-9583a8d06241?h=400"
        />
        <b>rounded</b>
      </tc-flow>
      <tc-flow flow="column">
        <tc-avatar
          variant="circle"
          size="normal"
          src="https://images.unsplash.com/photo-1470130623320-9583a8d06241?h=400"
        />
        <b>circle</b>
      </tc-flow>
      <tc-flow flow="column">
        <tc-avatar
          variant="square"
          size="normal"
          src="https://images.unsplash.com/photo-1470130623320-9583a8d06241?h=400"
        />
        <b>square</b>
      </tc-flow>
    </tc-grid>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Avatar extends Vue {}
</script>

<style lang="scss" scoped>
.view-avatar {
  //
}
</style>
