<template>
  <div class="view-playground" content>
    <VSectionHeader title="Playground" subtitle="UI Elements Testing" />

    <vm-button
      title="Onboarding"
      variant="transparent"
      @click="onboarding = true"
    />

    <div class="test">
      <div>Hallo</div>
      <span>Hallo</span>
    </div>

    <vm-dialog v-model="dialog" title="Hallo">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit iusto fuga
      quo velit facere, aut fugiat impedit, asperiores deserunt ea accusamus,
      magnam amet rerum adipisci quisquam suscipit ipsum quia molestiae!
      <vm-action title="Was geht" slot="button">
        <vm-action-item
          title="Open sheet"
          icon="ti-share"
          @click="sheet = true"
        />
        <vm-action-item title="Hallo #1" />
        <vm-action-item title="Hallo #2" icon="ti-pencil" />
        <vm-spacer></vm-spacer>
        <vm-action-item title="Hallo #3" />
        <vm-action-item title="Hallo #1" />
      </vm-action>
      <vm-textarea
        value=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit iusto fuga quo velit facere, aut fugiat impedit, asperiores deserunt ea accusamus"
      ></vm-textarea>
      <template slot="footer">
        <vm-dialog-button title="cancel" color="error" />
        <vm-dialog-button title="accept" />
      </template>
    </vm-dialog>

    <!-- <vm-menu-button></vm-menu-button> -->

    <div style="font-sizedw: 30px">
      Heist ich klicke
      <vm-action>
        <!-- <template slot="trigger">hier</template> -->
        <vm-menu-button slot="trigger" icon="cross" />
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
      <div style="height: 100px; display: grid; place-content: center">
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
        @click="dialog = true"
      />
    </vm-sheet>

    <vm-accordion>
      <vm-accordion-item title="Was geht ab?">
        <vm-flow slot="title">
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

    <br />

    <vm-switch></vm-switch>

    <vm-card>
      <vm-list>
        <vm-list-item title="Title #1" description="Description #1" />
        <vm-list-item title="Title #2" description="Description #2" />
        <vm-list-item title="Title #3" description="Description #3" />
        <vm-list-item title="Title #4" description="Description #4" />
      </vm-list>
    </vm-card>

    <vm-onboarding v-model="onboarding">
      <vm-flow slot="head" horizontal="end">
        <span>
          <vm-button
            variant="transparent"
            title="Skip"
            @click="onboarding = false"
          />
        </span>
      </vm-flow>
      <!-- <vm-flow flow="column" slot="footer">
        <vm-spacer />
        <vm-button
          size="medium"
          :block="true"
          :round="true"
          title="Create account"
        />
        <vm-button
          size="medium"
          :block="true"
          :round="true"
          variant="transparent"
          title="Sign in"
        />
      </vm-flow> -->
      <vm-onboarding-view
        title="Ready to travel"
        description="Choose your destination, plan your trip. Pick the best place for your holiday"
      >
        <Onboarding1 slot="media" />
      </vm-onboarding-view>
      <vm-onboarding-view
        title="Book your ticket"
        description="Book your trip with us, we give you the best price, guaranteed."
      >
        <Onboarding2 slot="media" />
      </vm-onboarding-view>
      <vm-onboarding-view
        title="Stress-free planning"
        description="Get personalized activity ideas based on the time, place and weather."
      >
        <Onboarding3 slot="media" />
      </vm-onboarding-view>
    </vm-onboarding>

    <!-- <p v-for="c in $store.getters.comps" :key="c.id">
      &lt;url> &lt;loc>https://vuement.com/components/{{ c.name }}&lt;/loc>
      &lt;changefreq>daily&lt;/changefreq> &lt;priority>1&lt;/priority> &lt;/url
      >
    </p> -->
    <p>{{ $store.getters.comps.length }}</p>
    <div v-for="c in $store.getters.comps" :key="c.id">
      <span v-if="!c.isChild"
        >* [{{ c.name }}](https://vuement.com/components/{{ c.name }})</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import Onboarding1 from '@/components/etc/onboarding/Onboarding1.vue';
import Onboarding2 from '@/components/etc/onboarding/Onboarding2.vue';
import Onboarding3 from '@/components/etc/onboarding/Onboarding3.vue';
import VSectionHeader from '@/components/VSectionHeader.vue';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    VSectionHeader,
    Onboarding1,
    Onboarding2,
    Onboarding3,
  },
})
export default class Playground extends Vue {
  public dialog = false;
  public sheet = false;
  public onboarding = false;

  public avatars = [
    'https://newtonfoxbds.com/wp-content/uploads/2019/04/user-placeholder-man-10-6.jpg',
    'https://i1.wp.com/school.haoptimit.com/wp-content/uploads/2020/01/user-placeholder-man-4.jpg?ssl=1',
    'https://processworkonline.com/wp-content/uploads/2019/12/user-placeholder-woman-1.jpg',
    'https://bloggershq.org/wp-content/uploads/2018/11/user-placeholder-man-1.jpg',
  ];
}
</script>
