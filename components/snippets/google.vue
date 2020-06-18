<template>
  <div>
    <div v-html="htmlTitle"></div>
    <div v-html="htmlSnippet"></div>
    <div>
      <a :href="link" target="_blank" rel="nofollow" v-html="displayLink"></a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    htmlTitle: String,
    htmlSnippet: String,
    displayLink: String,
    link: String
  }
}
</script>

<style></style>
