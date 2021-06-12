<template>
  <transition-group
    tag="ul"
    name="list"
    class="vm-notifications"
    @beforeLeave="beforeLeave"
    :position="vmPosition"
    :style="{ '--vm-color': vmColor, '--vm-container': vmBackground }"
  >
    <li
      class="vm-notification"
      v-for="n in notifications"
      :key="n.id"
      @click="clicked(n.id)"
      :clickable="n.routeName || n.to || n.href || n.callback"
    >
      <div class="vm-notification__background" />
      <div
        class="vm-notification__close"
        v-if="n.closeable"
        @click.capture.stop="close(n.id)"
      />

      <div
        class="vm-notification--container"
        v-if="n.title || n.text || n.image"
      >
        <div class="vm-notification__image" v-if="n.image">
          <img :src="n.image" />
        </div>
        <div>
          <div class="vm-notification__title" v-if="n.title">
            {{ n.title }}
          </div>
          <span v-if="n.text">{{ n.text }}</span>
        </div>
      </div>

      <div v-if="n.content" :id="'vm-notification-' + n.id" />
    </li>
  </transition-group>
</template>

<script lang="ts">
import { NOOP } from '@/vuement/dev/constants';
import { VMNotificationObject } from '@/vuement/dev/interfaces';
import { VMBus } from '@/vuement/dev/util';
import VMBgProp from '@/vuement/mixins/VMBackgroundProp.mixin';
import VMBodyMountMixin from '@/vuement/mixins/VMBodyMount.mixin';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import { Vue, Component, Prop, Mixins } from 'vue-property-decorator';

type VMNot = VMNotificationObject & { timer?: number; id: number };

@Component
export default class VMNotification extends Mixins(
  VMCProp,
  VMBgProp,
  VMBodyMountMixin
) {
  @Prop({ default: 5000 }) duration!: number;
  @Prop({ default: 'top' }) position!: string;
  @Prop({ default: 'default' }) vmId!: string | number;

  public notifications: VMNot[] = [];

  mounted(): void {
    VMBus.$on('VMNotification', this.received);
    VMBus.$on('VMNotificationX', this.close);
    VMBus.$on('VMNotificationXA', this.closeAll);
  }

  beforeDestroy(): void {
    this.closeAll();
  }

  get vmPosition(): string {
    const positions = [
      'top-left',
      'top',
      'top-right',
      'bottom-left',
      'bottom',
      'bottom-right',
      'left',
      'right',
    ];
    const pos = (this.position || 'top').toLowerCase();
    if (positions.includes(pos)) return pos;
    return 'top';
  }

  public beforeLeave(el: HTMLElement): void {
    el.style.width = el.offsetWidth + 1 + 'px';
  }

  public received(notificiation: VMNotificationObject & { id: number }): void {
    let { duration, vmId } = notificiation;
    if (vmId !== this.vmId) return;
    if (!duration) duration = +this.duration || 5000;
    const not: VMNot = { ...notificiation };

    if (duration !== 'none') {
      not.timer = setTimeout(() => {
        this.close(notificiation.id);
      }, duration) as unknown as number;
    }

    this.close(notificiation.id);
    this.notifications.push(not);

    this.$nextTick(() => {
      if (not.content) {
        const ELEMENT = Vue.extend(not.content);
        const instance = new ELEMENT();
        if (notificiation.props) {
          Object.entries(notificiation.props).forEach(([key, data]) => {
            instance.$props[key] = data;
          });
        }
        instance.$mount('#vm-notification-' + notificiation.id);
      }
    });
  }

  public close(id: number): void {
    const not = this.notifications.filter((x) => x.id === id)[0];
    if (not && not.timer) {
      clearTimeout(not.timer);
    }
    this.notifications = this.notifications.filter((x) => x.id !== id);
  }

  public closeAll(): void {
    this.notifications.map((x) => x.id).forEach(this.close);
  }

  public clicked(id: number): void {
    const not = this.notifications.filter((x) => x.id === id)[0];
    if (!not) return;

    const { routeName, to, href, callback } = not;
    if (!(routeName || to || href || callback)) return;

    if (routeName) this.$router.push({ name: routeName }).catch(NOOP);
    if (to) this.$router.push(to).catch(NOOP);
    if (href) window.open(href);
    if (callback) callback();

    this.close(id);
  }
}
</script>

<style lang="scss" scoped>
.vm-notifications {
  position: fixed;
  margin: 0;
  padding: calc(12.5px + env(safe-area-inset-top)) 5vw
    calc(12.5px + env(safe-area-inset-bottom));
  z-index: 1500;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;

  &[position='top'] {
    align-items: center;
  }

  &[position='top-right'] {
    align-items: flex-end;
  }

  &[position='left'] {
    justify-content: center;
  }

  &[position='right'] {
    justify-content: center;
    align-items: flex-end;
  }

  &[position='bottom'] {
    flex-direction: column-reverse;
    align-items: center;
  }

  &[position='bottom-left'] {
    flex-direction: column-reverse;
  }

  &[position='bottom-right'] {
    flex-direction: column-reverse;
    align-items: flex-end;
  }

  pointer-events: none;
}

.vm-notification {
  max-width: 90vw;

  &[clickable] {
    cursor: pointer;
  }
  pointer-events: all;

  margin: 7.5px;

  list-style: none;
  padding: 0;
  position: relative;
  border-radius: $border-radius;

  color: rgba(var(--vm-color), 1);
  box-shadow: 2px 4px 8px rgba(#111, 0.05);

  @include backdrop-blur();
  &__background {
    transition: 0.2s ease-in-out;
    border-radius: inherit;
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(var(--vm-container), 1);
  }

  &--container {
    padding: 10px;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    span {
      font-size: 16px;
    }
  }

  &__title {
    font-weight: bold;
    font-size: 12px;
    text-transform: uppercase;
    opacity: 0.75;
    margin-bottom: 5px;
  }

  &__image {
    width: 50px;
    height: 50px;
    margin-right: 10px;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  &__close {
    position: absolute;
    top: 0;
    right: 0;
    // opacity: 0.5;
    background: rgba(var(--vm-background), 1);
    border-radius: 100px;
    height: 20px;
    width: 20px;
    z-index: 10;
    cursor: pointer;
    transform: translate(25%, -25%);
    transition: 0.2s ease-in-out;
    &:hover {
      transform: translate(25%, -25%) scale(1.2);
    }

    color: rgba(var(--vm-color-secondary), 1);

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 2px;
      width: 50%;
      border-radius: 10px;
      background: currentColor;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
}

.list-move {
  transition: transform 0.5s;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}
.list-leave-active {
  position: absolute;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-30px) scale(0.5);
}
</style>
