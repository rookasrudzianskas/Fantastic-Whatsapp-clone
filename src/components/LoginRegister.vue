<template>
  <q-form @submit="submitForm">
    <q-input
      v-if="tab == 'register'"
      outlined
      v-model="formData.name"
      class="q-mb-md"
      label="Name 🤹" />

    <q-input
      outlined
      v-model="formData.email"
      class="q-mb-md"
      type="email"
      label="Email ✉️" />

    <q-input
      outlined
      v-model="formData.password"
      class="q-mb-md"
      type="password"
      label="Password 👽" />

<div class="row">
  <q-space />
    <q-btn
      color="primary"
      type="submit"
      :label="tab"
       />

</div>
  </q-form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['tab'],
  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: '',
      }
    }
  },
  methods: {
    ...mapActions('store', ['registerUser']),
    submitForm() {
      if (this.tab == 'login'){
        console.log('log in to the user')
      } else {
        this.registerUser(this.formData)
      }
    }
  }

}
</script>
