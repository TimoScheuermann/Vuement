<template>
  <div class="view-list">
    <tc-divider position="leading">
      <h3>Example</h3>
    </tc-divider>
    <br />
    <tc-list>
      <tc-list-item title="List Item #1" />
      <tc-list-item title="List Item #2" />
      <tc-list-item title="List Item #3" />
      <tc-list-item title="List Item #4" />
      <tc-list-item title="List Item #5" />
    </tc-list>

    <br /><br />
    <tc-divider position="leading">
      <h3>Customize Lists</h3>
    </tc-divider>
    <br />

    <tc-grid>
      <tl-flow>
        <tc-list>
          <tc-list-item title="Title #1" description="Description #1" />
          <tc-list-item title="Title #2" description="Description #2" />
          <tc-list-item title="Title #3" description="Description #3" />
          <tc-list-item title="Title #4" description="Description #4" />
        </tc-list>
      </tl-flow>

      <tl-flow>
        <tc-list>
          <tc-list-item title="User #1" description="Using Avatars">
            <tc-avatar slot="media" />
          </tc-list-item>
          <tc-list-item title="User #2" description="Using Avatars">
            <tc-avatar slot="media" />
          </tc-list-item>
          <tc-list-item title="User #3" description="Using Avatars">
            <tc-avatar slot="media" />
          </tc-list-item>
          <tc-list-item title="User #4" description="Using Avatars">
            <tc-avatar slot="media" />
          </tc-list-item>
        </tc-list>
      </tl-flow>

      <tl-flow>
        <tc-list>
          <tc-list-item title="Navigation #1" routeName="tcList" />
          <tc-list-item title="Navigation #2" routeName="tcList" />
          <tc-list-item title="Navigation #3" routeName="tcList" />
          <tc-list-item title="Navigation #4" routeName="tcList" />
        </tc-list>
      </tl-flow>

      <tl-flow>
        <tc-list>
          <tc-list-item title="Custom Action #1">
            <tc-switch />
          </tc-list-item>
          <tc-list-item title="Custom Action #2">
            <tc-select placeholder="Select">
              <tc-select-item title="Item #1" id="1" icon="ti-heart" />
              <tc-select-item title="Item #2" id="2" icon="ti-heart" />
            </tc-select>
          </tc-list-item>
          <tc-list-item title="Custom Action #3">
            <tc-checkbox />
          </tc-list-item>
        </tc-list>
      </tl-flow>
    </tc-grid>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class List extends Vue {}
</script>

<style lang="scss" scoped>
.view-list {
  //
}
</style>
