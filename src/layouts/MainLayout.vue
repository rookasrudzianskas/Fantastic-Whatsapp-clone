<template>
  <q-layout view="lHh Lpr lFf">

    <q-header elevated>
      <q-toolbar>
        <q-btn v-if="$route.fullPath.includes('/chat')" v-go-back.single dense icon="arrow_back" flat label="Back" />
        <q-toolbar-title class="absolute-center">
          {{ title }}
        </q-toolbar-title>

        <q-btn v-if="!userDetails.userId" dense icon="account_circle" class="absolute-right q-pr-sm" no-caps to="/auth" flat label="Login" />

        <q-btn v-else dense @click="logoutUser" icon="account_circle" class="absolute-right q-pr-sm" no-caps flat > Log out {{ userDetails.name}}</q-btn>


      </q-toolbar>
    </q-header>



    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import mixinOtherUserDetails from "src/mixins/mixin-other-user-details";

export default {
  mixins: [mixinOtherUserDetails],
  computed: {
    ...mapState('store', ["userDetails"]),
    title() {
      let currentPath = this.$route.fullPath
      if(currentPath == '/') return 'SmackChat'
      else if(currentPath.includes('/chat')) return this.otherUserDetails.name
      else  if(currentPath == '/auth') return 'Login'
    }
  },
  methods: {
    ...mapActions('store', ['logoutUser'])
  }
}
</script>
<style lang="stylus">
  .q-toolbar
    .q-btn
      line-height 1.2
</style>
