<template>
  <div class="view-playground" content>
    <VSectionHeader title="Playground" subtitle="UI Elements Testing" />

    <vm-dialog v-model="dialog" title="Hallo">
      <vm-menu-button slot="button"></vm-menu-button>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus ab
      molestiae enim fuga debitis! Voluptate ipsa consequatur officia quis
      eveniet, tempora reiciendis et voluptates, aliquid sunt magnam libero
      dolores delectus.

      <template slot="footer">
        <vm-dialog-button title="cancel" color="error" />
        <vm-dialog-button title="accept" />
      </template>
    </vm-dialog>

    <!-- <vm-menu-button></vm-menu-button> -->

    <div style="font-sizedw: 30px">
      Heist ich klicke
      <vm-action>
        <div slot="trigger">
          <vm-menu-button icon="cross" />
        </div>
        <vm-action-item title="Action #1" />
        <vm-action-item title="Action #2" />
        <vm-action-item title="Action #3" />
      </vm-action>
      und die Action öffnet sich?
    </div>

    <h1>Dialog <vm-menu-button @click="dialog = true" /></h1>
    <h3>
      Sheet
      <vm-menu-button icon="dots-v" :border="false" @click="sheet = true" />
    </h3>

    <vm-chip-wrapper>
      <vm-chip value="test"></vm-chip>
    </vm-chip-wrapper>

    <vm-sheet v-model="sheet" title="El individuo">
      <div class="ppl-wrapper">
        <vm-avatar-group>
          <vm-avatar
            variant="round"
            v-for="(s, i) in avatars"
            :key="i"
            :src="s"
          />
        </vm-avatar-group>
      </div>
      <vm-button
        :gradient="false"
        :block="true"
        color="color"
        background="container"
        title="Was geht"
        icon="ti-house"
      />
    </vm-sheet>

    <vm-accordion>
      <vm-accordion-item title="Was geht ab?">
        <vm-flow slot="title">
          <vm-button title="Hello" />
          <span>Hello</span>
        </vm-flow>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit facere
        ipsa id fugiat eligendi, cumque quo dicta optio aliquam qui repellat! At
        cum ad impedit harum odio amet delectus hic. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Explicabo, voluptatibus, totam nisi facere
        non iure, vel consequuntur consectetur a ex sapiente laboriosam
        repudiandae. Blanditiis sint quaerat quasi eaque est commodi.
      </vm-accordion-item>
      <vm-accordion-item title="Gibts was neues?">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic inventore
        in vero! Cumque sit et quibusdam facilis praesentium qui quam rem sunt?
        Itaque, eum quis! Suscipit ex quam blanditiis dolore?
      </vm-accordion-item>
      <vm-accordion-item title="Was mach ich hier?">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rem
        voluptatum pariatur deserunt ipsam dignissimos dolore! Voluptatum, quo
        recusandae atque at ducimus dolores, dignissimos omnis necessitatibus
        cum eum, molestias itaque?
      </vm-accordion-item>
    </vm-accordion>
  </div>
</template>

<script lang="ts">
import VSectionHeader from '@/components/VSectionHeader.vue';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    VSectionHeader,
  },
})
export default class Playground extends Vue {
  public dialog = false;
  public sheet = false;

  public avatars = [
    'https://newtonfoxbds.com/wp-content/uploads/2019/04/user-placeholder-man-10-6.jpg',
    'https://i1.wp.com/school.haoptimit.com/wp-content/uploads/2020/01/user-placeholder-man-4.jpg?ssl=1',
    'https://processworkonline.com/wp-content/uploads/2019/12/user-placeholder-woman-1.jpg',
    'https://bloggershq.org/wp-content/uploads/2018/11/user-placeholder-man-1.jpg',
  ];
}
</script>

<style lang="scss" scoped>
.view-playground {
  .ppl-wrapper {
    height: 100px;
    display: grid;
    place-content: center;
  }
}
</style>
