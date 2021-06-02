<template>
  <div class="view-quote">
    <vm-divider position="leading">
      <h3>Examples</h3>
    </vm-divider>
    <br />
    <vm-grid>
      <vm-flow>
        <vm-quote>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, ad
          aut. Quaerat fugit alias ipsum, maiores modi dolor voluptas possimus
          architecto est, a autem fuga sequi necessitatibus ratione explicabo
          ipsa?
        </vm-quote>
      </vm-flow>
      <vm-flow>
        <vm-quote title="Quote by Don Joe">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat non
          unde alias tempore doloribus repudiandae nostrum aperiam quos
          deleniti, inventore reiciendis amet, similique nisi sequi eius aut
          adipisci modi. Debitis?
        </vm-quote>
      </vm-flow>
      <vm-flow>
        <vm-quote>
          <b>Quote by Don Joe:</b>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem rem
          quas tempora omnis vero illum nostrum doloremque iure, delectus
          recusandae exercitationem praesentium obcaecati quasi sunt. Incidunt
          maxime itaque provident dolorem!
        </vm-quote>
      </vm-flow>
    </vm-grid>

    <br /><br />
    <vm-divider position="leading">
      <h3>Colors</h3>
    </vm-divider>
    <br />

    <vm-grid>
      <vm-quote color="#08f">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </vm-quote>
      <vm-quote>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </vm-quote>
      <vm-quote color="success">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </vm-quote>
      <vm-quote color="pink">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </vm-quote>
    </vm-grid>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Quote extends Vue {}
</script>

<style lang="scss" scoped>
.view-quote {
  //
}
</style>
