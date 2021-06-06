import router from '@/router';

export interface VMProp {
  name: string;
  default: string;
  description: string;
  type: string;
}

export interface VMComponent {
  props: VMProp[];
  siblings?: string[];
  isSibling?: boolean;
}

// const V_MODEL_BOOL: VMProp = {
//   default: 'undefined',
//   description: 'TODO:',
//   name: 'v-model',
//   type: 'boolean',
// };
// const V_VALUE_BOOL: VMProp = {
//   default: 'false',
//   description: 'TODO:',
//   name: 'value',
//   type: 'boolean',
// };
// const COLOR_UNDEF: VMProp = {
//   default: 'undefined',
//   description: 'TODO:',
//   name: 'color',
//   type: 'string',
// };
// const BACKGROUND_UNDEF: VMProp = {
//   default: 'undefined',
//   description: 'TODO:',
//   name: 'background',
//   type: 'string',
// };

const components = {
  Accordion: {
    props: [],
  },
  Action: {
    props: [],
  },
  Avatar: {
    props: [],
  },
  Button: {
    props: [],
  },
  Card: {
    props: [],
  },
  Checkbox: {
    props: [],
  },
  Chip: {
    props: [],
  },
  Dialog: {
    props: [],
  },
  Divider: {
    props: [],
  },
  Hero: {
    props: [],
  },
  Image: {
    props: [],
  },
  Input: {
    props: [],
  },
  Link: {
    props: [],
  },
  List: {
    props: [],
  },
  MenuButton: {
    props: [],
  },
  Navbar: {
    props: [],
  },
  Notification: {
    props: [],
  },
  Progress: {
    props: [],
  },
  Quote: {
    props: [],
  },
  Radio: {
    props: [],
  },
  Revealer: {
    props: [],
  },
  ScrollUp: {
    props: [],
  },
  Segment: {
    props: [],
  },
  Select: {
    props: [],
  },
  Sheet: {
    props: [],
  },
  Sidebar: {
    props: [],
  },
  Slider: {
    props: [],
  },
  Spacer: {
    props: [],
  },
  Spinner: {
    props: [],
  },
  Switch: {
    props: [],
  },
  Tabbar: {
    props: [],
  },
  Table: {
    props: [],
  },
  Textarea: {
    props: [],
  },
  Title: {
    props: [],
  },
  Flow: {
    props: [],
  },
  Grid: {
    props: [],
  },
} as Record<string, VMComponent>;

export default components;

export function getComponents(): string[] {
  return Object.keys(components)
    .filter((x) => !components[x].isSibling)
    .sort((a, b) => a.localeCompare(b));
}

export function getComponent(
  component: string | undefined = undefined
): undefined | VMComponent {
  if (!component) {
    const { meta } = router.currentRoute;
    if (meta) component = meta.component;
  }
  if (!component) return undefined;

  const comp = components[component];
  return comp ? comp : undefined;
}

export function getProps(
  component: string | undefined = undefined
): undefined | VMProp[] {
  if (!component) {
    const { meta } = router.currentRoute;
    if (meta) component = meta.component;
  }
  if (!component) return undefined;

  const comp = components[component];
  return comp && comp.props.length > 0 ? comp.props : undefined;
}

export function getSiblings(
  component: string | undefined = undefined
): undefined | string[] {
  if (!component) {
    const { meta } = router.currentRoute;
    if (meta) component = meta.component;
  }
  if (!component) return undefined;

  const comp = components[component];
  return comp ? comp.siblings : undefined;
}
