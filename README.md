![Vuement Logo](https://raw.githubusercontent.com/TimoScheuermann/Vuement/862f6a52e58478665236372ced2759b61e695102/vuement.png "Vuement Logo")


___

**55+ Components, ready to use, for Vue.js**

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

``` typescript
import Vue from 'vue';
import Vuement from 'vuement';

Vue.use(Vuement);

// you can pass options like colors and themes
Vue.use(Vuement, { colors: { primary: "#08f" }, theme: "light" });


// The theme can later also be changed by accessing the $vm object.
this.$vm.setTheme("dark");
```

## The $vm Object

Using the $vm object you can communicate with components and change their appearance. Available methods are listed below:

``` typescript
this.$vm.setTheme(theme: string): void
```

``` typescript
this.$vm.setColor(name: string, hex: string): void
```

``` typescript
this.$vm.addTheme(name: string, theme: VMTheme, replace = false): void
```

``` typescript
this.$vm.sendNotification(notificiation: VMNotificationObject): number
```

``` typescript
this.$vm.closeNotification(id: number): void
```

``` typescript
this.$vm.closeAllNotifications(): void
```

---
``` typescript
export interface VMTheme {
  color: string;
  'color-secondary': string;
  background: string;
  paragraph: string;
  container: string;
  border: string;
}
```

``` typescript
export interface VMNotificationObject {
  vmId?: string | number;
  title?: string;
  text?: string;
  image?: string;
  href?: string;
  to?: Location;
  routeName?: string;
  callback?: VoidFunction;
  duration?: 'none' | number;
  closeable?: boolean;
  content?: VueConstructor<Vue>;
  props?: Record<string, any>;
}
```

---



## Available Components

[vmAccordion](https://vuement.com/components/vmAccordion)
, [vmAction](https://vuement.com/components/vmAction)
, [vmAvatar](https://vuement.com/components/vmAvatar)
, [vmButton](https://vuement.com/components/vmButton)
, [vmCard](https://vuement.com/components/vmCard)
, [vmCheckbox](https://vuement.com/components/vmCheckbox)
, [vmChip](https://vuement.com/components/vmChip)
, [vmDialog](https://vuement.com/components/vmDialog)
, [vmDivider](https://vuement.com/components/vmDivider)
, [vmFlow](https://vuement.com/components/vmFlow)
, [vmGrid](https://vuement.com/components/vmGrid)
, [vmHero](https://vuement.com/components/vmHero)
, [vmImage](https://vuement.com/components/vmImage)
, [vmInput](https://vuement.com/components/vmInput)
, [vmLink](https://vuement.com/components/vmLink)
, [vmList](https://vuement.com/components/vmList)
, [vmMenuButton](https://vuement.com/components/vmMenuButton)
, [vmNavbar](https://vuement.com/components/vmNavbar)
, [vmNotification](https://vuement.com/components/vmNotification)
, [vmOnboarding](https://vuement.com/components/vmOnboarding)
, [vmProgress](https://vuement.com/components/vmProgress)
, [vmQuote](https://vuement.com/components/vmQuote)
, [vmRadio](https://vuement.com/components/vmRadio)
, [vmRevealer](https://vuement.com/components/vmRevealer)
, [vmScrollUp](https://vuement.com/components/vmScrollUp)
, [vmSegment](https://vuement.com/components/vmSegment)
, [vmSelect](https://vuement.com/components/vmSelect)
, [vmSheet](https://vuement.com/components/vmSheet)
, [vmSidebar](https://vuement.com/components/vmSidebar)
, [vmSlider](https://vuement.com/components/vmSlider)
, [vmSpacer](https://vuement.com/components/vmSpacer)
, [vmSpinner](https://vuement.com/components/vmSpinner)
, [vmSwitch](https://vuement.com/components/vmSwitch)
, [vmTabbar](https://vuement.com/components/vmTabbar)
, [vmTable](https://vuement.com/components/vmTable)
, [vmTextarea](https://vuement.com/components/vmTextarea)
, [vmTitle](https://vuement.com/components/vmTitle)

Some components also feature child components. Eg. vmTabbar includes vmTabbarItem, vmAvatar includes vmAvatarGroup, ...

For further information consider checking out the official docs at [Vuement.com](https://vuement.com)
___


This is still a WiP, further documentation and in-depth looks inside each component is available [here](https://vuement.com/components).
