<template>
  <div>
    <message-list :messages="messages" />
  </div>
</template>

<script>
import MessageList from '@/components/MessageList'

export default {
  data() {
    return {
      messages: [
        {
          id: 1,
          type: 'text',
          text: 'Hello world!',
          me: false,
          meta: {
            timestamp: new Date()
          }
        },
        {
          id: 2,
          type: 'text',
          text: 'Hello, Valera!',
          me: true,
          meta: {
            timestamp: new Date()
          }
        }
      ]
    }
  },
  components: {
    MessageList
  }
}
</script>
