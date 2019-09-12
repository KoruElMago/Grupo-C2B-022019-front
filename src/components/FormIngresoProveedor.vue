<template>
    <v-container>
            <v-text-field
              v-model="Nombre"
              :rules="nameRules"
              :counter="15"
              label="Nombre"
              required
            ></v-text-field>
            <v-text-field
              v-model="Logo"
              :counter="15"
              label="Logo"
              required
            ></v-text-field>
            <v-text-field
              v-model="Localidad"
              :counter="40"
              label="Localidad"
              required
            ></v-text-field>
            <v-text-field
              v-model="Nombre"
              :rules="nameRules"
              :counter="15"
              label="Dirección y Ubicación en un mapa"
              required
            ></v-text-field>
            <v-textarea
              v-model="Description"
              :auto-grow="1"
              :rules="descriptionRules"
              label="Description"
              required
            ></v-textarea>
            <v-text-field
              v-model="Url"
              :rules="dirUrlRule"
              label="Dirección web o de facebook"
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
              v-model="TimeBand"
              label="Banda Horaria de Atencion"
              required
            ></v-text-field>
            <v-text-field
              v-model="deliverLocation"
              label="Localidad de Entregas"
              required
            ></v-text-field>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      descriptionRules: [
        v => v.length >= 30 || "Descripcion corta",
        v => v.length <= 200 || "Descripcion muy larga"
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }),
  };
</script>
