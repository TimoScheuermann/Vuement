import { Component, Mixins, Prop } from 'vue-property-decorator';
import VMColorMixin from './VMColor.mixin';

@Component
export default class VMCProp extends Mixins(VMColorMixin) {
  @Prop() color!: string;

  get vmColor(): string | null {
    return this.color ? this.getColor(this.color) : null;
  }
}
