<script>
export default {
  name: 'VMRevealer',
  functional: true,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render(createElement, context) {
    const data = {
      props: {
        name: 'expand',
      },
      on: {
        enter(element) {
          element.style.height = 'var(--vm-height)';
          element.style.width = 'var(--vm-width)';
          element.style.top = 'var(--vm-top)';
          element.style.left = 'var(--vm-left)';

          requestAnimationFrame(() => {
            element.style.height = '100vh';
            element.style.width = '100vw';
            element.style.top = '0px';
            element.style.left = '0px';
          });
        },
        leave(element) {
          element.style.height = '100vh';
          element.style.width = '100vw';
          element.style.top = '0px';
          element.style.left = '0px';

          requestAnimationFrame(() => {
            element.style.height = 'var(--vm-height)';
            element.style.width = 'var(--vm-width)';
            element.style.top = 'var(--vm-top)';
            element.style.left = 'var(--vm-left)';
          });
        },
      },
    };
    return createElement('transition', data, context.children);
  },
};
</script>

<style scoped>
* {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>

<style>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease-in-out;
  overflow: hidden;
}
.expand-enter,
.expand-leave-to {
  height: var(--vm-height);
  width: var(--vm-width);
  top: var(--vm-top);
  left: var(--vm-left);
}
</style>
