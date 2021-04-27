export default {
  computed: {
    otherUserDetails() {
      return this.$store.state.store.users[this.$route.params.otherUserId]
    }
  }
}
