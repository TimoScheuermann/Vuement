<template>
  <div class="view-home">
    <h1>Home</h1>

    <div class="test">
      <tc-switch></tc-switch>
      <tc-switch></tc-switch>

      <tc-button title="Button" @click="visible = !visible"></tc-button>
      <tc-button variant="border" title="Button"></tc-button>
      <tc-button title="Button" variant="opaque"></tc-button>
    </div>

    <div class="title">
      <tc-title subtitle="showing of" title="tc action"></tc-title>
    </div>

    <div class="test">
      <tc-action>
        <tc-action-item icon="ti-house" title="Go Home" />
        <tc-action-item icon="ti-share" title="Share file" />
        <tc-action-item icon="ti-trashcan-alt" title="Delete item" />
      </tc-action>

      <tc-select>
        <tc-select-item id="home" icon="ti-house" title="Go Home" />
        <tc-select-item
          id="share"
          icon="ti-share"
          :selected="true"
          title="Share file"
        />
        <tc-select-item
          id="delete"
          icon="ti-trashcan-alt"
          title="Delete item"
        />
      </tc-select>

      <tc-checkbox></tc-checkbox>
    </div>

    <br />
    <!-- <tc-hero image="https://components.timos.design/assets/banner.svg">
      <tc-input :frosted="true" title="House" icon="ti-house"></tc-input>
      <tc-textarea :frosted="true" title="House" icon="ti-house"></tc-textarea>
    </tc-hero> -->

    <tc-scroll-up></tc-scroll-up>

    <tc-segment>
      <tc-segment-item icon="ti-house" title="Home" />
      <tc-segment-item icon="ti-dots" title="Dots" />
      <tc-segment-item title="Bucket" />
      <tc-segment-item icon="ti-dots" />
    </tc-segment>

    <tc-list>
      <tc-list-item title="Hello" description="Oh no, a description" />
      <tc-list-item title="Hello #2" description="Oh no, again.. a description">
        <tc-avatar
          slot="media"
          src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci84YTkxOWRjYjhlOGY4NzhlZTM3MmFkMjA1OTBlMzc5Yj9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.qFeLjA_Uqp_W29W8Chtq5ozvI0GrtYYtU8Fw4oJdmmA"
        ></tc-avatar>
      </tc-list-item>
      <tc-list-item title="Hello">
        <tc-switch></tc-switch>
      </tc-list-item>
      <br />

      <tc-list-item title="Hello" description="Oh no, a description">
        <tc-action>
          <tc-action-item icon="ti-house" title="Go Home" />
          <tc-action-item icon="ti-share" title="Share file" />
          <tc-action-item icon="ti-trashcan-alt" title="Delete item" />
        </tc-action>
      </tc-list-item>

      <tc-list-item title="Hello" description="Oh no, a description">
        <tc-checkbox></tc-checkbox>
      </tc-list-item>
    </tc-list>

    <tc-sheet title="Share">
      <tc-sheet-item icon="ti-house" title="Home"></tc-sheet-item>
    </tc-sheet>

    <!-- <tc-chip-wrapper>
      <tc-chip></tc-chip>
      <tc-chip></tc-chip>
      <tc-chip
        image="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci84YTkxOWRjYjhlOGY4NzhlZTM3MmFkMjA1OTBlMzc5Yj9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.qFeLjA_Uqp_W29W8Chtq5ozvI0GrtYYtU8Fw4oJdmmA"
      ></tc-chip>
    </tc-chip-wrapper> -->

    <tc-dialog title="Dialog">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
      recusandae, veritatis inventore molestiae temporibus ratione atque officia
      ea velit obcaecati culpa saepe. Commodi optio pariatur non mollitia!
      Animi, necessitatibus omnis.

      <tc-input></tc-input>

      <tc-dialog-button :disabled="true" slot="buttons" />
      <tc-dialog-button color="error" title="cancel" slot="buttons" />
    </tc-dialog>

    <!-- <tc-spinner type="square"></tc-spinner> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  public timer = 0;
  public visible = !false;
  public segment = 0;

  public testData = [{ text: 'T1' }, { text: 'T2' }];

  mounted(): void {
    // this.timer = setInterval(() => {
    //   this.segment += Math.random() * 10;
    //   this.segment = this.segment % 100;
    // }, 1000);
  }

  beforeDestroy(): void {
    clearInterval(this.timer);
  }
}
</script>

<style lang="scss" scoped>
.view-home {
  padding: 20px;
  padding-top: calc(70px + env(safe-area-inset-top));
  padding-bottom: calc(70px + env(safe-area-inset-bottom));
  //

  .test {
    display: flex;
    align-items: center;
  }

  .title {
    color: orange;
  }

  .image-wrapper {
    height: 200px;
    width: 200px;
    margin: 20px;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .flex-test {
    // line-height: 1.5;
    // white-space: normal;
    // overflow: auto;
    // text-overflow: ellipsis;
    // display: -webkit-box;
    // -webkit-line-clamp: 2;
    // -webkit-box-orient: vertical;

    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    max-height: 30px;
    background: orange;

    .item {
      flex: 1 1 0px;
      background: red;
      margin: 2.5px;
      padding: 0 2.5px;
    }
  }
}
</style>
