import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { VMBus } from '../dev/util';

interface VMCloseExcept {
  el: Element;
  gr: string;
}

@Component
export default class VMOpensMixin extends Vue {
  @Prop() value!: boolean;
  @Prop({ default: true }) closeable!: boolean;

  public vmOpensGroup = 'unset';
  public visible = !!this.value;

  mounted(): void {
    this.$on('close', this.close);

    VMBus.$on('VMOpensMixin', ({ el, gr }: VMCloseExcept) => {
      if (this.visible && el !== this.$el && gr === this.vmOpensGroup) {
        this.visible = false;
      }
    });
  }

  @Watch('value', { immediate: true })
  valueChanged(): void {
    if (this.value) this.open();
    else this.close();
  }

  @Watch('visible', { immediate: true })
  visibleChanged(): void {
    this.$emit('input', this.visible);
  }

  public toggleVisible(): void {
    if (this.visible) this.close();
    else this.open();
  }

  public open(): void {
    this.visible = true;

    VMBus.$emit('VMOpensMixin', {
      el: this.$el,
      gr: this.vmOpensGroup,
    } as VMCloseExcept);
  }

  public close(): void {
    if (this.closeable) this.visible = false;
  }
}
