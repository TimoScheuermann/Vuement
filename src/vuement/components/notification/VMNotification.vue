<template>
  <div class="vm-notification"></div>
</template>

<script lang="ts">
import { VMBus } from '@/vuement/dev/util';
import { Vue, Component } from 'vue-property-decorator';

// type VMNot = VMNotification & {timer: any, };

@Component
export default class VMNotification extends Vue {
  mounted(): void {
    document.body.appendChild(this.$el);
    VMBus.$on('VMNotification', this.onReceive);
  }

  beforeDestroy(): void {
    document.body.removeChild(this.$el);
  }

  public onReceive(notificiation: VMNotification): void {
    console.log(notificiation);
  }
}
</script>

<style lang="scss" scoped>
.vm-notification {
  //
}
</style>
