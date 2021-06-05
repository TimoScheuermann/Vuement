<template>
  <div class="view-components" content>
    <VSectionHeader title="Selection" subtitle="Component">
      <vm-input
        icon="ti-lens"
        placeholder="Search"
        :frosted="true"
        v-model="query"
      />
    </VSectionHeader>
    <vm-grid width="220px">
      <router-link v-for="c in components" :key="c" :to="{ name: 'vm' + c }">
        <div class="icon">
          <img :src="`assets/icons/vm${c}.svg`" :alt="c" />
        </div>
        <div class="name">{{ c }}</div>
      </router-link>
    </vm-grid>
  </div>
</template>

<script lang="ts">
import VSectionHeader from '@/components/VSectionHeader.vue';
import components, { getComponents } from '@/utils/components';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    VSectionHeader,
  },
})
export default class Components extends Vue {
  public query = '';

  get total(): number {
    return Object.keys(components).length;
  }

  get components(): string[] {
    return getComponents().filter((x) => {
      return this.query.length === 0
        ? true
        : x.toLowerCase().includes(this.query.toLowerCase());
    });
  }
}
</script>

<style lang="scss" scoped>
.view-components {
  .vm-input {
    margin: 0 {
      right: -10px;
    }
    width: auto;
  }
  a {
    display: grid;
    grid-template-columns: 1fr 2fr;
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
      padding: 20px;
      display: grid;
      place-content: center;
      background: rgba(var(--vm-primary), 1);
      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
