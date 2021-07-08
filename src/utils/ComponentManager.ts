import store from '@/store';
import * as vmComponents from '@/vuement/components';

export interface VMComp {
  id: string;
  name: string;
  isChild: boolean;
  children: string[];
  props: VMProp[];
}

export interface VMProp {
  name: string;
  value: string;
  type: string;
  description: string;
}

export class ComponentManager {
  private static backend = 'https://api.timos.design';

  public static get comps(): VMComp[] {
    return store.getters.comps;
  }

  public static setComps(comps: VMComp[]): void {
    comps = comps.sort((a, b) => a.name.localeCompare(b.name));
    store.commit('comps', comps);
  }

  public static async loadComps(callback?: VoidFunction): Promise<void> {
    fetch(this.backend + '/vuement/component')
      .then((res) => res.json())
      .then((res) => {
        this.setComps(res);
        if (callback) callback();
      })
      .catch(() => {
        this.setComps(
          Object.keys(vmComponents).map((x, i) => {
            return {
              id: i + '',
              name: x,
              isChild: false,
              children: [],
              props: [],
            } as VMComp;
          })
        );

        if (callback) callback();
      });
  }

  public static getComponent(id: string): VMComp | null {
    if (!id) return null;
    id = id.toLowerCase();
    return (
      this.comps.filter((x) => x.id === id || x.name.toLowerCase() === id)[0] ||
      null
    );
  }
}
