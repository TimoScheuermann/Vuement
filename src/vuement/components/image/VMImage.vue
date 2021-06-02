<template>
  <img
    class="vm-image"
    ref="image"
    :expanded="expanded"
    v-if="src || srcset"
    :src="src"
    :srcset="srcset"
    @click="toggleExpand"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class VMImage extends Vue {
  @Prop() src!: string;
  @Prop() srcset!: string;

  public expanded = false;
  public expandedImage: HTMLImageElement | null = null;

  mounted(): void {
    if (this.$router) {
      this.$router.afterEach(() => {
        if (this.expanded) {
          this.toggleExpand();
        }
      });
    }
  }

  public toggleExpand(): void {
    if (this.expanded && this.expandedImage) {
      this.hideExpand(this.expandedImage);
    } else if (!this.expanded) {
      this.showExpand();
    }
    this.expanded = !this.expanded;
  }

  public showExpand(): void {
    if (this.expandedImage) {
      this.expandedImage.remove();
    }

    const elem = this.$refs.image;
    if (!elem) return;

    const image = elem as HTMLImageElement;
    const style = image.getAttribute('style');
    const created = document.createElement('img');

    document.body.appendChild(created);

    Object.values(image.attributes).forEach((attr) => {
      created.setAttribute(attr.name, attr.value);
    });

    created.classList.remove('vm-image');
    created.addEventListener('click', this.toggleExpand);
    created.setAttribute('style', [style, this.getOrigin()].join(';'));
    created.classList.add('vm-image--expanded');

    this.expandedImage = created;

    setTimeout(() => {
      if (style) created.setAttribute('style', style);
      else created.removeAttribute('style');
    }, 0);
  }

  public hideExpand(image: HTMLImageElement): void {
    if (image) {
      image.setAttribute('style', this.getOrigin());
      setTimeout(() => {
        image.remove();
        this.expandedImage = null;
      }, 300);
    }
  }

  public getOrigin(): string {
    const elem = this.$refs.image;
    if (!elem) return '';
    const image = elem as HTMLImageElement;
    const { top, left, height, width } = image.getBoundingClientRect();
    return [
      image.getAttribute('style'),
      `top:${top}px`,
      `left:${left}px`,
      `height:${height}px`,
      `width:${width}px;`,
    ].join(';');
  }
}
</script>
<style lang="scss">
.vm-image--expanded {
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  position: fixed;
  object-fit: contain;
  z-index: 2000;
  transition: all 0.2s ease-in-out;
}
</style>
<style lang="scss" scoped>
.vm-image {
  transition: opacity 0s;
  transition-delay: 0.3s;
  &[expanded] {
    transition-delay: 0s;
    opacity: 0;
  }
}
</style>
