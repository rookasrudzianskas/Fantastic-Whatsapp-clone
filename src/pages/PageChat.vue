<template>
  <q-page
    ref="pageChat"
    class="flex column">

    <q-banner class=" text-center bg-grey-4" v-if="!otherUserDetails.online">
      {{ otherUserDetails.name }} is offline
    </q-banner>

    <div
      :class="{'invisible' : !showMessages}"
      class="q-pa-md column col justify-end">
      <q-chat-message v-for="(message, key) in messages"
        :key="key"
        :name="message.from == 'me' ? userDetails.name : otherUserDetails.name"
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
import mixinOtherUserDetails from "src/mixins/mixin-other-user-details";
export default {
  mixins: [mixinOtherUserDetails],
  data() {
    return {
      newMessage: '',
      showMessages: false,
    }

  },
  computed: {
    ...mapState('store', ['messages', 'userDetails']),

  },
  methods: {
    ...mapActions('store', ['firebaseGetMessages', 'firebaseStopGettingMessages', 'firebaseSendMessage']),
    sendMessage() {
      this.firebaseSendMessage({
        message: {
          text: this.newMessage,
          from: 'me',
        },
        otherUserId: this.$route.params.otherUserId
      })
    },
    scrollToBottom() {
      let pageChat = this.$refs.pageChat.$el
      setTimeout(() => {
        window.scrollTo(0, pageChat.scrollHeight)
      }, 20)

    }
  },
  watch: {
    messages: function (val) {
      if(Object.keys(val).length) {
        this.scrollToBottom()
        setTimeout(() => {
          this.showMessages = true
        }, 200)
      }
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
