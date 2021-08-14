import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { VMBus } from '../dev/util';

interface VMCloseExcept {
  el: Element;
  gr: string;
}

@Component<VMOpensMixin>({
  name: 'vmOpensMixin',
})
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

  beforeDestroy(): void {
    this.unfreezeBody();
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

    if (
      this.$el &&
      this.$el.getAttributeNames().includes('vm-prevent-body-scroll')
    ) {
      requestAnimationFrame(() => {
        this.freezeBody();
      });
    }
  }

  public close(): void {
    if (this.closeable) {
      this.visible = false;
      this.unfreezeBody();
    }
  }

  public freezeBody(): void {
    document.body.classList.add('vm-prevent-scroll');
  }

  public unfreezeBody(): void {
    document.body.classList.remove('vm-prevent-scroll');
  }
}
