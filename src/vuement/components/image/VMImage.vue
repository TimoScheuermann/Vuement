<template>
  <img
    class="vm-image"
    ref="image"
    :expanded="expanded"
    v-if="src || srcset"
    :src="src"
    :srcset="srcset"
    @click="toggleExpanded"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import VMImageFullscreen from './VMImageFullscreen.vue';

@Component
export default class VMImage extends Vue {
  @Prop() src!: string;
  @Prop() srcset!: string;

  public expanded = false;
  public instance: null | VMImageFullscreen = null;

  mounted(): void {
    if (this.$router) {
      this.$router.afterEach(() => {
        this.removeInstance();
      });
    }
    this.createInstance();
  }

  beforeDestroy(): void {
    this.removeInstance();
  }

  public toggleExpanded(): void {
    this.expanded = !this.expanded;
    this.updateInstance();
  }

  public removeInstance(): void {
    if (!this.instance) return;
    document.body.removeChild(this.instance.$el);
    this.instance = null;
  }

  public createInstance(): void {
    this.removeInstance();

    this.instance = new VMImageFullscreen();
    this.instance.$slots.default = this.$slots.overlay;
    this.instance.$mount();

    document.body.appendChild(this.instance.$el);

    this.instance.$props.expanded = false;
    this.instance.$on('close', () => {
      this.expanded = false;
      this.updateInstance();
    });
  }

  @Watch('src')
  @Watch('srcset')
  public updateInstance(): void {
    if (!this.instance) return;
    const elem = this.$refs.image;
    if (!elem) return;

    const image = elem as HTMLImageElement;
    const { top, left, height, width } = image.getBoundingClientRect();

    this.instance.$props.top = top;
    this.instance.$props.left = left;
    this.instance.$props.height = height;
    this.instance.$props.width = width;
    this.instance.$props.src = this.src;
    this.instance.$props.srcset = this.srcset;

    this.instance.$props.expanded = this.expanded;
  }
}
</script>

<style lang="scss" scoped>
.vm-image {
  cursor: zoom-in;
  transition: opacity 0s 0.2s;
  &[expanded] {
    transition-delay: 0s;
    opacity: 0;
  }
}
</style>
