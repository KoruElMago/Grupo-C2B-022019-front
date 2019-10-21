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
        <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
      </v-btn>
    </v-app-bar>

<v-toolbar app color="brown darken-4" dark>
            <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
                <v-toolbar-title to="/">{{appTitle}}</v-toolbar-title>
            </router-link>
            <v-btn flat class="hidden-sm-and-down" to="/menu">Menu</v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn flat class="hidden-sm-and-down" to="/sign-in">SIGN IN</v-btn>
            <v-btn color="brown lighten-3" class="hidden-sm-and-down" to="/join">JOIN</v-btn>
        </v-toolbar>

        <router-view /> <!-- @authenticated="setAuthenticated" -->

    <v-content>


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
                    <div class="card-header">Vue Axios Post </div>
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

        <v-btn
                    color="brown lighten-3"
                    to="/join"
                    class="nav-join"
                    data-cy="joinBtn"
                    >JOIN</v-btn
                >
                <router-link to="/About">About</router-link>
                <router-link to="/Menu">Menu</router-link>
    </v-content>
  </v-app>
</template>

<script>
import Vue from "vue";

import axios from "axios";
import VueAxios from "vue-axios";
import * as VueGoogleMaps from "vue2-google-maps";

let clave = process.env.VUE_APP_GOOGLEKEY || "Nada"; 

Vue.use(VueGoogleMaps, {
  load: {
    key: {clave},
    libraries: "places,drawing,visualization",
  },
  installComponents: true
});

Vue.use(VueAxios, axios);

export default {
  name: "App",
  data(){
            return {
            appTitle: 'ViandasYa',
            drawer: false,
            authenticated: false,
                mockAccount: {
                    username: "nraboy",
                    password: "password"
                },
            items: [
                { title: 'Menu' },
                { title: 'Profile' }, 
                { title: 'Sign In' },
                { title: 'Join' }
            ]
        };
  },

        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
};
</script>
