import { Component, Prop, Vue } from 'vue-property-decorator';
import { Location } from 'vue-router';
import { NOOP } from '../util';

@Component
export default class VMLinkMixin extends Vue {
  @Prop() to!: Location;
  @Prop() href!: string;
  @Prop() routeName!: string;
  @Prop() disabled!: boolean;

  public clicked(e: MouseEvent): void {
    if (this.disabled) return;

    this.$emit('click', e);

    if (this.routeName) this.$router.push({ name: this.routeName }).catch(NOOP);
    if (this.to) this.$router.push(this.to).catch(NOOP);
    if (this.href) window.open(this.href);
  }

  get isUrlActive(): boolean {
    const conditions: boolean[] = [];
    const { name, path } = this.$route;
    if (this.to) conditions.push(name === this.to.name);
    if (this.href) conditions.push(path === this.href);
    if (this.routeName) conditions.push(name === this.routeName);
    return conditions.some((x) => !!x);
  }
}
