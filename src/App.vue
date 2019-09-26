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
        <v-col> <FormIngresoCliente /> </v-col>
        <v-col> <FormIngresoProveedor /> </v-col>
      </v-row>

      <v-row>
        <GmapMap 
          :center="{ lat: -53.0, lng: -28.0 }" 
          :zoom="8"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
  >  </GmapMap> 
      </v-row>

      <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Vue Axios Post - ItSolutionStuff.com</div>
                    <div class="card-body">
                        <form @submit="formSubmit">
                        <strong>Name:</strong>
                        <input type="text" class="form-control" v-model="name">
                        <strong>Description:</strong>
                        <textarea class="form-control" v-model="description"></textarea>
                        <button class="btn btn-success">Submit</button>
                        </form>
                        <strong>Output:</strong>
                        <pre>  {{output}} </pre>
                    </div>
                    </div>
            </div>
        </div>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import FormIngresoCliente from './components/FormIngresoCliente';
import FormIngresoProveedor from './components/FormIngresoProveedor';

import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";
import VueAxios from "vue-axios";

import * as VueGoogleMaps from "vue2-google-maps";

let port = process.env.PORT || 8083;
Vue.use(port);

Vue.use(VueGoogleMaps, {
  load: {
    key: "CLAVE",
    libraries: "places,drawing,visualization",
  },
  installComponents: true
});

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/home', component: HelloWorld }, // El origen es el template
    { path: '/service/login', component: FormIngresoProveedor, props: true }, // Pass route.params to props
    { path: '/client/login', component: FormIngresoCliente, props: { name: 'desconocido' }}, // static values
  ]
});

export default {
  router,
  name: "App",
  components: {
    FormIngresoCliente, FormIngresoProveedor
  },
  data: () => ({
    //
  }),
};
</script>
