<template>
  <div class="view-avatar">
    <vm-divider position="leading">
      <h3>Sizes</h3>
    </vm-divider>

    <vm-flow horizontal="space-around">
      <vm-flow flow="column" horizontal="center">
        <vm-avatar
          src="https://images.unsplash.com/photo-1470130623320-9583a8d06241?h=400"
        />
        <b>small</b>
      </vm-flow>
      <vm-flow flow="column" horizontal="center">
        <vm-avatar
          size="normal"
          src="https://images.unsplash.com/photo-1470130623320-9583a8d06241?h=400"
        />
        <b>normal</b>
      </vm-flow>
      <vm-flow flow="column" horizontal="center">
        <vm-avatar
          size="medium"
          src="https://images.unsplash.com/photo-1470130623320-9583a8d06241?h=400"
        />
        <b>medium</b>
      </vm-flow>
      <vm-flow flow="column" horizontal="center">
        <vm-avatar
          size="large"
          src="https://images.unsplash.com/photo-1470130623320-9583a8d06241?h=400"
        />
        <b>large</b>
      </vm-flow>
    </vm-flow>

    <br />

    <vm-divider position="leading">
      <h3>Variants</h3>
    </vm-divider>

    <vm-grid width="100px">
      <vm-flow flow="column">
        <vm-avatar
          size="normal"
          src="https://images.unsplash.com/photo-1470130623320-9583a8d06241?h=400"
        />
        <b>rounded</b>
      </vm-flow>
      <vm-flow flow="column">
        <vm-avatar
          variant="circle"
          size="normal"
          src="https://images.unsplash.com/photo-1470130623320-9583a8d06241?h=400"
        />
        <b>circle</b>
      </vm-flow>
      <vm-flow flow="column">
        <vm-avatar
          variant="square"
          size="normal"
          src="https://images.unsplash.com/photo-1470130623320-9583a8d06241?h=400"
        />
        <b>square</b>
      </vm-flow>
    </vm-grid>
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
