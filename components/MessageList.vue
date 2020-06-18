<template>
  <div ref="scrollList" @scroll="handleScroll">
    <transition-group name="list" tag="div">
      <message
        v-for="(message, index) in messages"
        :message="message"
        :key="message.meta.time + index"
        @update="_scrollDown"
      />
    </transition-group>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
    this.init()
    this.$nextTick(this._scrollDown())
  },
  updated() {
    this.$nextTick(this._scrollDown())
  },
  methods: {
    ...mapActions(['init']),
    _scrollDown() {
      this.$refs.scrollList.scrollTop = this.$refs.scrollList.scrollHeight
    },
    handleScroll(e) {
      if (e.target.scrollTop === 0) {
        this.$emit('scrollToTop')
      }
    }
  }
}
</script>

<style>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
