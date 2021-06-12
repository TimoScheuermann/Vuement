import store from '@/store';

export interface VMComp {
  id: string;
  name: string;
  isChild: boolean;
  children: string[];
  props: string[];
}

export interface VMProp {
  id: string;
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

  public static get props(): VMProp[] {
    return store.getters.props;
  }

  private static setComps(comps: VMComp[]): void {
    comps = comps.sort((a, b) => a.name.localeCompare(b.name));
    store.commit('comps', comps);
  }

  private static setProps(props: VMProp[]): void {
    props = props.sort((a, b) => a.name.localeCompare(b.name));
    store.commit('props', props);
  }

  public static async loadComps(callback?: VoidFunction): Promise<void> {
    fetch(this.backend + '/vuement/components')
      .then((res) => res.json())
      .then((res) => {
        this.setComps(res);
        if (callback) callback();
      });
  }

  public static loadProps(callback?: VoidFunction): void {
    fetch(this.backend + '/vuement/props')
      .then((res) => res.json())
      .then((res) => {
        this.setProps(res);
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

  public static getProp(id: string): VMProp | null {
    id = id.toLowerCase();
    return (
      this.props.filter((x) => x.id === id || x.name.toLowerCase() === id)[0] ||
      null
    );
  }
}
