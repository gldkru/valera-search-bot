<template>
  <div>
    <div class="message__text" v-html="messageText"></div>
  </div>
</template>

<script>
export default {
  props: {
    messageId: {
      type: String,
      required: true
    }
  },
  computed: {
    messageText() {
      return this.$t(this.messageId)
    }
  }
}
</script>
