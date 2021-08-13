<template>
  <div class="view-colors" content>
    <VSectionHeader title="Colors" subtitle="UI Options" />

    <span>
      You can also add new colors, or overwrite existing ones. By doing so you
      can access them easily in every component.
      <br /><br />
    </span>

    <vm-grid width="155">
      <vm-card
        v-for="c in Object.keys(colors)"
        type="frosted"
        :key="c"
        :title="c"
        :subtitle="colors[c]"
      >
        <vm-image slot="media" :src="imgSrc(colors[c])" />
      </vm-card>
    </vm-grid>
    <br />

    <VSectionHeader title="Themes" subtitle="UI Options" />

    <!-- <span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
      labore? Quisquam, consequuntur? Neque quasi repudiandae magnam ad autem
      consectetur voluptatibus iste at quam! Modi illum quia doloribus nesciunt
      aliquam totam!
      <br /><br />
    </span> -->
    <div
      class="theme"
      v-for="(t, i) in themes"
      :key="i"
      :style="{ color: t.color, background: i === 0 ? null : t.background }"
    >
      <div class="section-title">Theme | {{ names[i] }}</div>

      <vm-grid width="155">
        <vm-card
          v-for="c in Object.keys(t)"
          :key="c"
          :background="t.paragraph"
          :autoHeight="true"
          type="frosted"
          :color="t.color"
          :title="c"
          :subtitle="t[c]"
        >
          <vm-image slot="media" :src="imgSrc(t[c])" />
        </vm-card>
      </vm-grid>
    </div>
  </div>
</template>

<script lang="ts">
import VSectionHeader from '@/components/VSectionHeader.vue';
import {
  COLORS_DEFAULT,
  THEME_DARK,
  THEME_LIGHT,
} from '@/vuement/dev/constants';
import { VMTheme } from '@/vuement/dev/interfaces';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    VSectionHeader,
  },
})
export default class Colors extends Vue {
  public colors = COLORS_DEFAULT;

  get dark(): boolean {
    return this.$store.getters.dark;
  }

  get themes(): VMTheme[] {
    const t = [THEME_LIGHT, THEME_DARK];
    return this.dark ? t.reverse() : t;
  }

  get names(): string[] {
    const n = ['Light', 'Dark'];
    return this.dark ? n.reverse() : n;
  }

  public imgSrc(color: string): string {
    return `https://www.colorbook.io/imagecreator.php?hex=${color.replaceAll(
      '#',
      ''
    )}&width=5&height=4`;
  }
}
</script>

<style lang="scss" scoped>
.view-colors {
  padding-bottom: 0px !important;

  .theme {
    position: relative;
    padding-bottom: 30px;

    &:last-child {
      .section-title {
        padding-top: 30px;
      }
      @media #{$isMobile} {
        padding-bottom: calc(80px + env(safe-area-inset-bottom));
      }
    }

    &::before {
      content: '';
      position: absolute;
      width: 100vw;
      height: 100%;
      background: inherit;
      z-index: -1;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
