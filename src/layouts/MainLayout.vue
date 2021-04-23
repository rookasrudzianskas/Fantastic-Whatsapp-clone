<template>
  <q-layout view="lHh Lpr lFf">

    <q-header elevated>
      <q-toolbar>
        <q-btn v-if="$route.fullPath.includes('/chat')" v-go-back.single dense icon="arrow_back" flat label="Back" />
        <q-toolbar-title class="absolute-center">
          {{ title }}
        </q-toolbar-title>

      </q-toolbar>
    </q-header>



    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  computed: {
    title() {
      let currentPath = this.$route.fullPath
      if(currentPath == '/') return 'SmackChat'
      else if(currentPath == '/chat') return 'Chat'
      else  if(currentPath == '/auth') return 'Login'
    }
  },
  methods: {

  }
}
</script>
