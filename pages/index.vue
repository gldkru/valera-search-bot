<template>
  <div>
    <message-list :messages="messages" />
    <user-input />
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
