<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>ViandasYA: la gauchita   </span>
        <span class="font-weight-light">"DONDE ESTA MI HAMBURGUESA!?!?"</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-row>
        <FormIngresoCliente />
        </v-row>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import FormIngresoCliente from './components/FormIngresoCliente';
export default {
  name: 'App',
  components: {
    HelloWorld,FormIngresoCliente
  },
  data: () => ({
    //
  }),
};
</script>
