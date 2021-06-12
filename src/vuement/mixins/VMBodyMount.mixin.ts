import { Component, Vue } from 'vue-property-decorator';

@Component
export default class VMBodyMountMixin extends Vue {
  mounted(): void {
    document.body.appendChild(this.$el);
  }

  beforeDestroy(): void {
    try {
      document.body.removeChild(this.$el);
    } catch {
      /**/
    }
  }
}
