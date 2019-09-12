<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-layout
      text-center
      wrap
    >

<v-col
          cols="20"
          md="4"
        >
          <v-text-field
              v-model="Nombre"
              :rules="nameRules"
              :counter="15"
              label="Nombre"
              required
          ></v-text-field>
          <v-text-field
              v-model="Apellido"
              :rules="nameRules"
              :counter="15"
              label="Apellido"
              required
          ></v-text-field>
          <v-text-field
              v-model="email"
              :rules="emailRules"
              :counter="40"
              label="email"
              required
          ></v-text-field>

          <v-text-field
              v-model="telefono"
              :counter="15"
              label="telefono"
              required
          ></v-text-field>
          
          <v-text-field
              v-model="localidadYDireccion"
              :counter="100"
              label="localidadYDireccion"
              required
          ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      @click="validate"> Validate </v-btn>
    <v-btn
      color="error"
      @click="reset"
    > Reset Form </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    > Reset Validation </v-btn>
  
    </v-col>
  
    </v-layout>
  </v-form>
</template>

//class="mr-4"

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }),

    methods: {
      validate () {
                let currentObj = this;
                this.axios.post('http://localhost:8083/yourPostApi', {
                    name: this.name,
                    description: this.description
                })
                .then( response => currentObj.output = response.data )
                .catch( error => currentObj.output = error );
            },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>
