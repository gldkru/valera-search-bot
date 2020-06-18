<template>
  <div>
    <div>{{ $t('google-snippet') }}</div>

    <div class="sn-google">
      <a
        class="sn-google__box"
        v-for="({ htmlTitle, htmlSnippet, displayLink, link },
        index) in messageItems"
        :key="link"
        :href="link"
        target="_blank"
        rel="nofollow"
      >
        <span class="sn-google__number" v-if="messageItems.length > 1">
          <span> {{ ++index }} </span>
        </span>
        <span class="sn-google__content">
          <span class="sn-google__title" v-html="htmlTitle"></span>
          <span class="sn-google__external" v-html="displayLink"></span>
          <span class="sn-google__description" v-html="htmlSnippet"></span>
        </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messageItems: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.sn-google {
  $this: &;

  margin-top: 16px;

  > a:not(:last-child) {
    margin-bottom: 16px;
  }

  &__box {
    display: flex;
    box-shadow: $box-shadow;

    span {
      display: block;
      color: $color;
    }

    // link color
    #{$this}__title {
      color: $color-link;
    }

    #{$this}__external {
      color: darken($color-second, 15%);
    }

    &:hover,
    &:focus {
      text-decoration: none;

      #{$this}__title {
        color: darken($color-link, 15%);
      }
    }
  }

  &__content {
    display: block;
    padding: 1.25rem;
  }

  &__number {
    flex: 0 1 auto;
    overflow: hidden;
    width: 55px;
    text-align: right;
    padding: 1.25rem 1rem;

    background-color: lighten($color-border, 6%);
    font-size: $font-size-second * 3;
    font-weight: bold;
    position: relative;

    > span {
      position: absolute;
      top: 0;
      right: 0;
      color: lighten($color-second, 25%) !important;
    }
  }

  &__title {
    font-size: $font-size;
    margin-bottom: 5px;
  }

  &__description {
    font-size: $font-size-second;
  }

  &__external {
    font-size: $font-size-second;
    margin-bottom: 5px;
  }
}
</style>
