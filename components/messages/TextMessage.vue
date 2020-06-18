<template>
  <div>
    <div class="message__text" v-html="messageText"></div>
  </div>
</template>

<script>
export default {
  props: {
    messageText: {
      type: String,
      required: true
    }
  }
}
</script>
