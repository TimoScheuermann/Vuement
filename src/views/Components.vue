<template>
  <div class="view-components" content>
    <VSectionHeader title="Components" subtitle="Vuement" />

    <transition-group tag="ul" class="components-grid" name="list">
      <router-link
        v-for="c in components"
        :key="c.id"
        :to="{ name: 'component-details', params: { name: c.name } }"
      >
        <div class="icon">
          <img
            v-if="c.image && c.image.includes('.svg')"
            :src="c.image"
            :alt="c"
          />
        </div>
        <div class="name">{{ c.name }}</div>
      </router-link>
    </transition-group>
  </div>
</template>

<script lang="ts">
import VSectionHeader from '@/components/VSectionHeader.vue';
import { ComponentManager, VMComp } from '@/utils/ComponentManager';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    VSectionHeader,
  },
})
export default class Components extends Vue {
  mounted(): void {
    this.$store.commit('compQuery', '');
  }

  get query(): string {
    return this.$store.getters.compQuery.toLowerCase();
  }

  get components(): VMComp[] {
    return ComponentManager.comps
      .filter((x) => !x.isChild)
      .filter((x) => {
        return this.query.length === 0
          ? true
          : x.name.toLowerCase().includes(this.query);
      });
  }
}
</script>

<style lang="scss" scoped>
.view-components {
  @media #{$isMobile} {
    margin-top: 34.33px;
  }

  .components-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-gap: 20px;
    margin: 0;
    padding: 0;
    position: relative;
  }

  a {
    display: grid;
    grid-template-columns: 80px 1fr;
    height: 80px;
    color: inherit;
    text-decoration: none;
    background: rgba(var(--vm-paragraph), 1);
    border-radius: $border-radius;
    overflow: hidden;

    transition: 0.2s ease-in-out;
    &:hover {
      transform: scale(1.0174);
    }

    .name {
      display: grid;
      place-content: center;
      font-weight: 500;
    }

    .icon {
      display: grid;
      place-content: center;
      background: rgba(var(--vm-primary), 1);
      img {
        margin: 20px;
        height: calc(100% - 40px);
        width: calc(100% - 40px);
        object-fit: contain;
      }
    }
  }
}
</style>
