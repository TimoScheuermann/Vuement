<template>
  <div class="view-details-list">
    <vm-divider position="leading">
      <h3>Example</h3>
    </vm-divider>
    <br />
    <vm-list>
      <vm-list-item title="List Item #1" />
      <vm-list-item title="List Item #2" />
      <vm-list-item title="List Item #3" />
      <vm-list-item title="List Item #4" />
      <vm-list-item title="List Item #5" />
    </vm-list>

    <br /><br />
    <vm-divider position="leading">
      <h3>Customize Lists</h3>
    </vm-divider>
    <br />

    <vm-grid>
      <vm-flow>
        <vm-list>
          <vm-list-item title="Title #1" description="Description #1" />
          <vm-list-item title="Title #2" description="Description #2" />
          <vm-list-item title="Title #3" description="Description #3" />
          <vm-list-item title="Title #4" description="Description #4" />
        </vm-list>
      </vm-flow>

      <vm-flow>
        <vm-list>
          <vm-list-item title="User #1" description="Using Avatars">
            <vm-avatar slot="media" />
          </vm-list-item>
          <vm-list-item title="User #2" description="Using Avatars">
            <vm-avatar slot="media" />
          </vm-list-item>
          <vm-list-item title="User #3" description="Using Avatars">
            <vm-avatar slot="media" />
          </vm-list-item>
          <vm-list-item title="User #4" description="Using Avatars">
            <vm-avatar slot="media" />
          </vm-list-item>
        </vm-list>
      </vm-flow>

      <vm-flow>
        <vm-list>
          <vm-list-item>
            <vm-flow flow="column">
              <vm-avatar />
              <vm-spacer />
              <b>John Doe</b>
              <vm-spacer />
              <vm-spacer />
              <vm-button title="Sign out" :block="true" />
              <vm-spacer />
            </vm-flow>
          </vm-list-item>
          <vm-list-item title="Navigation #1" routeName="vmList" />
          <vm-list-item title="Navigation #2" routeName="vmList" />
        </vm-list>
      </vm-flow>

      <vm-flow>
        <vm-list>
          <vm-list-item title="Custom Action #1">
            <vm-switch slot="action" />
          </vm-list-item>
          <vm-list-item title="Custom Action #2">
            <vm-select placeholder="Select" slot="action">
              <vm-select-item title="Item #1" vmId="1" icon="ti-heart" />
              <vm-select-item title="Item #2" vmId="2" icon="ti-heart" />
            </vm-select>
          </vm-list-item>
          <vm-list-item title="Custom Action #3">
            <vm-checkbox slot="action" />
          </vm-list-item>
        </vm-list>
      </vm-flow>
    </vm-grid>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class DetailsVList extends Vue {}
</script>

<style lang="scss" scoped>
.view-details-list {
  //
}
</style>
