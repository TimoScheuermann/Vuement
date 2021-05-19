<template>
  <div class="tc-chip" @click="clicked">
    <div class="tc-chip--image" v-if="image">
      <img :src="image" alt="" />
    </div>
    <div class="tc-chip--icon" v-else-if="icon">
      <i :class="icon" />
    </div>
    <div
      class="tc-chip--input"
      :contenteditable="editable"
      ref="input"
      @input="input"
      @keypress="keypress"
    >
      {{ value }}
    </div>
    <div class="tc-chip--spacer" />
    <div class="tc-chip--remove" v-if="remove" @click="removeClicked">
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script lang="ts">
import TCLinkMixin from '@/tcComponents/mixins/TCLink.mixin';
import { Component, Prop, Mixins } from 'vue-property-decorator';

@Component
export default class TCChip extends Mixins(TCLinkMixin) {
  @Prop({ default: '' }) value!: string;
  @Prop() icon!: string;
  @Prop() image!: string;
  @Prop({ default: false }) remove!: boolean;
  @Prop({ default: false }) editable!: boolean;
  @Prop({ default: 10 }) maxLength!: number;

  public keypress(e: KeyboardEvent): void {
    let elem = this.$refs.input;
    if (elem) {
      const key = e.which || e.keyCode;

      // Enter key
      if (key === 13) {
        e.preventDefault();
        return;
      }

      elem = elem as HTMLElement;
      let value = elem.innerHTML;
      let maxLength = 10;
      if (this.maxLength && !isNaN(+this.maxLength)) {
        maxLength = +this.maxLength;
      }

      if (value.length > maxLength) {
        // 46 = delete
        if (key !== 46) e.preventDefault();
      }
    }
  }

  public input(): void {
    const elem = this.$refs.input;
    if (elem) {
      this.$emit('input', (elem as HTMLElement).innerHTML);
    }
  }

  public removeClicked(): void {
    this.$emit('remove');
  }
}
</script>

<style lang="scss" scoped>
.tc-chip {
  background: var(--tc-container);
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  padding: 2.5px;
  margin: 2.5px;
  cursor: pointer;

  $indicatorScale: 24px;
  border-radius: $indicatorScale;

  &--image,
  &--icon {
    display: grid;
    place-content: center;
    height: $indicatorScale;
    width: $indicatorScale;
    border-radius: $indicatorScale;
    background: rgba(#111, 0.1);
    font-size: 14px;
  }

  &--image {
    img {
      width: 100%;
      height: 100%;
      border-radius: $indicatorScale;
      object-fit: cover;
    }
  }

  &--input {
    padding: 0 5px;
    margin: 0 2.5px;
    transition: 0.2s ease-in-out;
    border-radius: #{$border-radius / 1.5};
    &:focus {
      background: rgba(#000, 0.5);
      color: #fff;
      outline: none;
    }
  }

  &--spacer {
    flex-grow: 1;
  }

  &--remove {
    height: $indicatorScale;
    width: $indicatorScale;
    border-radius: $indicatorScale;
    color: red;
    position: relative;

    cursor: pointer;
    transition: 0.1s ease-in-out;
    &:hover {
      background: rgba(#111, 0.1);
    }

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 50%;
      height: 2px;
      border-radius: 2px;
      background: currentColor;
      &:first-child {
        transform: translate(-50%, -50%) rotate(45deg);
      }
      &:last-child {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }
}
</style>
