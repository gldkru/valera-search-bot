<template>
  <div>
    <div class="chat-window">
      <message-list class="chat-window__list" :messages="messages" />
      <user-input class="chat-window__input" :placeholder="$t('input-text')" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MessageList from '@/components/MessageList'
import UserInput from '@/components/UserInput'

export default {
  computed: {
    ...mapGetters(['messages'])
  },
  components: {
    MessageList,
    UserInput
  }
}
</script>

<style lang="scss" scoped>
.chat-window {
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  min-height: 300px;
  font-size: $font-size;

  &__list {
    width: 100%;
    flex: auto;
    overflow-x: hidden;
    overflow-y: auto;
  }

  &__input {
    width: 100%;
    flex: 0 1 auto;
  }
}
</style>
