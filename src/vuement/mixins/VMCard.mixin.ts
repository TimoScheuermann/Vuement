import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class VMCardMixin extends Vue {
  @Prop() video!: string;
  @Prop() image!: string;
  @Prop() title!: string;
  @Prop() subtitle!: string;

  get hasTitle(): boolean {
    return (
      !!this.title ||
      !!this.subtitle ||
      !!this.$slots.title ||
      !!this.$slots.subtitle
    );
  }

  get hasMedia(): boolean {
    return !!this.$slots.media || !!this.image || !!this.video;
  }
}
