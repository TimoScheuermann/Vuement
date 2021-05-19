<template>
  <div class="view-quote">
    <tc-divider position="leading">
      <h3>Examples</h3>
    </tc-divider>
    <br />
    <tc-grid>
      <tl-flow>
        <tc-quote>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, ad
          aut. Quaerat fugit alias ipsum, maiores modi dolor voluptas possimus
          architecto est, a autem fuga sequi necessitatibus ratione explicabo
          ipsa?
        </tc-quote>
      </tl-flow>
      <tl-flow>
        <tc-quote title="Quote by Don Joe">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat non
          unde alias tempore doloribus repudiandae nostrum aperiam quos
          deleniti, inventore reiciendis amet, similique nisi sequi eius aut
          adipisci modi. Debitis?
        </tc-quote>
      </tl-flow>
      <tl-flow>
        <tc-quote>
          <b>Quote by Don Joe:</b>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem rem
          quas tempora omnis vero illum nostrum doloremque iure, delectus
          recusandae exercitationem praesentium obcaecati quasi sunt. Incidunt
          maxime itaque provident dolorem!
        </tc-quote>
      </tl-flow>
    </tc-grid>

    <br /><br />
    <tc-divider position="leading">
      <h3>Colors</h3>
    </tc-divider>
    <br />

    <tc-grid>
      <tc-quote color="#08f">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </tc-quote>
      <tc-quote>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </tc-quote>
      <tc-quote color="success">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </tc-quote>
      <tc-quote color="pink">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </tc-quote>
    </tc-grid>
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
