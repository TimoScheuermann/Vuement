<img src="https://timos.s3.eu-central-1.amazonaws.com/lib/632e6c9c-bee5-4018-9e19-0ebdb099af7b.svg" />

___

**44+ Components, ready to use, for Vue.js**

## Installation

``` bash
# npm
npm install vuement
```

``` bash
# yarn
yarn add vuement
```
## Use

``` javascript
import Vue from 'vue';
import Vuement from 'vuement';

Vue.use(Vuement);

// you can pass options like colors and themes
Vue.use(Vuement, {colors: {primary: "#08f"}, theme: "light" });


// The theme can later also be changed by accessing the $vm object.

this.$vm.setTheme("dark");
```

## Use only some components

``` javascript
import Vue from "vue";
import {vmButton, vmNavbar, vmCheckbox} from "vuement";

Vue.use(vmButton);
Vue.use(vmNavbar);
Vue.use(vmCheckbox);
```

## Available Components

* vmButton
* vmAction
* vmAvatar
* vmCard
* vmCheckbox
* vmChip
* vmDialog
* vmDivider
* vmHero
* vmImage
* vmInput
* vmLink
* vmList
* vmNavbar
* vmProgress
* vmQuote
* vmRadio
* vmRevealer
* vmScrollUp
* vmSegment
* vmSelect
* vmSheet
* vmSidebar
* vmSlider
* vmSpacer
* vmSpinner
* vmSwitch
* vmTabbar
* vmTable
* vmTextarea
* vmTitle
* vmFlow
* vmGrid

___

This is still a WiP, further documentation and in-depth looks inside each component will follow soon.
