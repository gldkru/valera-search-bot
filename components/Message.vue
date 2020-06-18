<template>
  <section class="message" :class="{ messageLeft: message.me }">
    <header class="message__meta">
      <span class="message__author">{{ author }}</span>
      <span class="message__time">{{ time }}</span>
    </header>

    <loader-message key="loader" v-if="message.type === 'loading'" />
    <text-message
      key="text"
      v-if="message.type === 'text'"
      :message-text="message.text"
    />
    <lang-message
      key="lang"
      v-if="message.type === 'lang'"
      :message-id="message.id"
    />
    <google-message
      key="google"
      v-if="message.type === 'google'"
      :message-items="message.items"
    />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import TextMessage from '@/components/messages/TextMessage'
import LangMessage from '@/components/messages/LangMessage'
import GoogleMessage from '@/components/messages/GoogleMessage'
import LoaderMessage from '@/components/messages/LoaderMessage'

export default {
  props: {
    message: {
      type: Object
    }
  },
  components: {
    TextMessage,
    LangMessage,
    GoogleMessage,
    LoaderMessage
  },
  updated() {
    this.$emit('update')
  },
  computed: {
    ...mapGetters(['loading']),
    author() {
      return this.message.me ? this.$t('you') : this.$t('bot-name')
    },
    time() {
      const date =
        this.message.meta && this.message.meta.time
          ? this.$moment(this.message.meta.time)
          : new Date()
      const today = new Date()
      const format = date.isSame(today, 'day') ? 'LT' : 'LLL'

      return this.$moment(this.message.meta.time).format(format)
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
    font-size: $font-size-second;
    color: $color-second;
    margin-left: 0.5rem;
  }

  &__text {
    white-space: pre-line;
  }
}
</style>
