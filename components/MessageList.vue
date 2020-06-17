<template>
  <div ref="scrollList">
    <message
      v-for="{ id, ...message } in messages"
      :message="message"
      :key="id"
    />
  </div>
</template>

<script>
import Message from '@/components/Message'

export default {
  components: {
    Message
  },
  props: {
    messages: {
      type: Array,
      required: true
    }
  },
  mounted() {
    this.$nextTick(this._scrollDown())
  },
  updated() {
    if (this.shouldScrollToBottom()) this.$nextTick(this._scrollDown())
  },
  methods: {
    _scrollDown() {
      this.$refs.scrollList.scrollTop = this.$refs.scrollList.scrollHeight
    },
    shouldScrollToBottom() {
      const scrollTop = this.$refs.scrollList.scrollTop
      const scrollable = scrollTop > this.$refs.scrollList.scrollHeight - 600
      return this.alwaysScrollToBottom || scrollable
    }
  }
}
</script>

<style></style>
