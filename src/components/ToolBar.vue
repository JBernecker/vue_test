<template>
  <v-app-bar dense dark clipped-left app>
    <v-toolbar-title></v-toolbar-title>
    <v-spacer></v-spacer>
    <center>
      <v-toolbar-items>
        <center>
          <v-btn text>
            <router-link to="/Item1" tag="button"> Item 1 </router-link>
          </v-btn>
        </center>
        <center>
          <v-btn text>
            <router-link to="/Item2" tag="button"> Item 2 </router-link>
          </v-btn>
        </center>
        <center>
          <v-btn text>
            <router-link to="/Item3" tag="button"> Item 3 </router-link>
          </v-btn>
        </center>
        <center>
          <v-btn text>
            <router-link to="/Item4" tag="button"> Item 4 </router-link>
          </v-btn>
        </center>
      </v-toolbar-items>
    </center>
  </v-app-bar>
</template>