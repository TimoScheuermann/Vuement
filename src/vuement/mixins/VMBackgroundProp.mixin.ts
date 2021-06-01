import { Component, Mixins, Prop } from 'vue-property-decorator';
import VMColorMixin from './VMColor.mixin';

@Component
export default class VMBgProp extends Mixins(VMColorMixin) {
  @Prop() background!: string;

  get vmBackground(): string | null {
    return this.background ? this.getColor(this.background) : null;
  }
}
