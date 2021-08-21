<template>
  <vm-dialog class="c-update-available" :value="innerValue" @close="close">
    <vm-flow flow="column">
      <img src="pwa/logo.png" class="logo" />

      <vm-title title="Update Available" />
      <br />
      <span center> Lets update Vuement to enjoy the latest features. </span>
    </vm-flow>

    <template slot="footer">
      <vm-dialog-button color="error" title="Cancel" @click="close" />
      <vm-dialog-button title="Update" @click="$emit('refresh')" />
    </template>
  </vm-dialog>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from 'vue-property-decorator';

@Component
export default class CUpdateAvailable extends Vue {
  @Prop() value!: boolean;

  public innerValue = !!this.value;

  @Watch('value')
  valueChanged(): void {
    this.innerValue = !!this.value;
  }

  public close(): void {
    this.innerValue = false;
    this.$emit('input', false);
  }
}
</script>

<style lang="scss">
.c-update-available .vm-dialog {
  max-width: 370px;
  .vm-dialog__content {
    overflow: visible;
  }
}
</style>
<style lang="scss" scoped>
.c-update-available {
  .logo {
    margin-top: -50px;
    margin-bottom: 15px;
    filter: drop-shadow(4px 8px 20px rgba(var(--vm-primary), 0.3));
    border-radius: 25%;
    padding: 10px;
    background: rgba(var(--vm-paragraph), 1);
    height: 50px;
  }
}
</style>
