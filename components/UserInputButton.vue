<template>
  <div class="submit-button">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.submit-button {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: $color-link;

  &:hover {
    color: darken($color-link, 15%);
    cursor: pointer;
  }
}
</style>
