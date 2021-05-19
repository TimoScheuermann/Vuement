import { Component, Vue } from 'vue-property-decorator';
import { LooseObject } from '../util';

interface TCComponentSetting {
  default: string;
  type: string;
}

@Component
export default class TCComponentMixin extends Vue {
  get intercom(): Vue {
    return (this as LooseObject).$tc;
  }

  public getSetting(component: string, setting: string): TCComponentSetting {
    return { default: '', type: '' };
  }
}
