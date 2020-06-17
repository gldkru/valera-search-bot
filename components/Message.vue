<template>
  <section class="message" :class="{ messageLeft: message.me }">
    <header class="message__meta">
      <span class="message__author">{{ author }}</span>
      <span class="message__time">{{ time }}</span>
    </header>
    <text-message v-if="message.type === 'text'" :message-text="message.text" />
  </section>
</template>

<script>
import TextMessage from '@/components/messages/TextMessage'

export default {
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  components: {
    TextMessage
  },
  computed: {
    author() {
      return this.message.me ? 'Вы' : 'Валера'
    },
    time() {
      return this.$moment(this.message.meta.time).format('LT')
    }
  }
}
</script>

<style lang="scss">
.message {
  width: 100%;
  padding: 1rem 1.5rem;

  &__meta {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-end;
    margin-bottom: 0.5rem;
  }

  &__author {
    font-weight: bold;
  }

  &__time {
    font-size: 0.75rem;
    color: #9babb4;
    margin-left: 0.5rem;
  }
}
</style>
