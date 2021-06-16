import store from '@/store';

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
  private static backend = 'https://api.timos.design:3002';

  public static get comps(): VMComp[] {
    return store.getters.comps;
  }

  private static setComps(comps: VMComp[]): void {
    comps = comps.sort((a, b) => a.name.localeCompare(b.name));
    store.commit('comps', comps);
  }

  public static async loadComps(callback?: VoidFunction): Promise<void> {
    fetch(this.backend + '/vuement/components')
      .then((res) => res.json())
      .then((res) => {
        this.setComps(res);
        if (callback) callback();
      });
  }

  public static getComponent(id: string): VMComp | null {
    id = id.toLowerCase();
    return (
      this.comps.filter((x) => x.id === id || x.name.toLowerCase() === id)[0] ||
      null
    );
  }
}
