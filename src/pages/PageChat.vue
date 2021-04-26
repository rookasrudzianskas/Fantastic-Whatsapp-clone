<template>
  <q-page class="flex column">

    <q-banner class=" text-center bg-grey-4">
      User is offline
    </q-banner>

    <div class="q-pa-md column col justify-end">
      <q-chat-message v-for="message in messages"
        :key="message.text"
        :name="message.from"
        :text="[message.text]"
        :sent="message.from == 'me' ? true : false"
      />

    </div>
    <q-footer elevated>
      <q-toolbar>
        <q-form @submit="sendMessage" class="full-width">
          <q-input bg-color="white" rounded outlined v-model="newMessage" label="Message 🚀" dense>
            <template v-slot:before>
            </template>
            <template v-slot:after>
              <q-btn @click="sendMessage" round dense flat icon="send" color="white" />
            </template>
          </q-input>
        </q-form>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      newMessage: '',

    }

  },
  computed: {
    ...mapState('store', ['messages'])
  },
  methods: {
    ...mapActions('store', ['firebaseGetMessages', 'firebaseStopGettingMessages']),
    sendMessage() {
      console.log('👽', 'clicked')
      this.messages.push({
        text: this.newMessage,
        from: 'me',
      })
    }
  },
  mounted() {
    this.firebaseGetMessages(this.$route.params.otherUserId)
  },
  destroyed() {
    this.firebaseStopGettingMessages()
  }
}
</script>

<style>

</style>
