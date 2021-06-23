<template>
  <div class="view-details-action">
    <vm-flow>
      <vm-action title="Was geht">
        <vm-action-item title="Open sheet" icon="ti-share" />
        <vm-action-item title="Hallo #1" />
        <vm-action-item title="Hallo #2" icon="ti-pencil" />
        <vm-spacer></vm-spacer>
        <vm-action-item title="Hallo #3" />
        <vm-action-item title="Hallo #1" />
      </vm-action>

      <vm-select>
        <vm-select-item vmId="a" title="Herein #1" icon="ti-pencil" />
        <vm-select-item vmId="b" title="Herein #2" :selected="true" />
        <vm-spacer></vm-spacer>
        <vm-select-item vmId="c" title="Herein #3" />
      </vm-select>

      <vm-select>
        <vm-select-item vmId="a" title="Open sheet" icon="ti-share" />
        <vm-select-item vmId="b" title="Hallo #1" />
        <vm-select-item vmId="c" title="Hallo #2" icon="ti-pencil" />
        <vm-spacer></vm-spacer>
        <vm-select-item vmId="d" title="Hallo #3" />
        <vm-action-item vmId="e" title="Hallo #1" />
      </vm-select>

      <vm-action>
        <vm-action-item title="Tschau #1" />
        <vm-action-item title="Tschau #2" />
        <vm-action-item title="Tschau #3" />
      </vm-action>
    </vm-flow>

    <vm-divider></vm-divider>

    <br /><br />

    <vm-action title="Filter Issues">
      <vm-action-item title="Turn Filter On" />
      <vm-spacer />
      <vm-action-group title="Sort By">
        <vm-action-item
          title="Date Created"
          :key="date + '' + latest"
          :icon="date ? 'ti-checkmark' : null"
          @click="date = true"
        />
        <vm-action-item
          title="Date Modified"
          :icon="!date ? 'ti-checkmark' : null"
          @click="date = false"
        />
        <vm-spacer />
        <vm-action-item
          title="Newest to Oldest"
          :icon="latest ? 'ti-checkmark' : null"
          @click="latest = true"
        />
        <vm-action-item
          title="Oldest to Neweset"
          :icon="!latest ? 'ti-checkmark' : null"
          @click="latest = false"
        />
      </vm-action-group>
      <vm-spacer />
      <vm-action-item title="Open" icon="ti-checkmark" />
      <vm-action-item title="Closed" icon="ti-checkmark" />
    </vm-action>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class DetailsVAction extends Vue {}
</script>

<style lang="scss" scoped>
.view-details-action {
  //
}
</style>
