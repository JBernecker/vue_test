<template>
  <v-navigation-drawer app clipped flat align="center">
    <v-container fill-height fluid>
      <v-row justify="center">
        <v-col>
          <v-card>
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
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-navigation-drawer>
</template>
<script>
export default {
  data: () => ({ drawer: null }),
};
</script>