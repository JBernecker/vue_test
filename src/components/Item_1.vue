<template>
  <v-container fill-height>
    <v-card class="mx-auto" min-height="80vh" style="padding-left:500px">
      <v-container fluid>
        <v-row dense>
          <v-col v-for="(n, i) in myFilmes" :key="i" cols="12" sm="6">
            <v-card
              width="500"
              height="30vh"
            >
            <v-card-title v-text="n.title"></v-card-title>
                <v-card-subtitle> Description: {{ n.description }}
                </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>


<script>

export default {
  name: "Item_1",
  computed: {
    myFilmes () {
      return this.$store.getters.filmeScore
    },
},
  created() {
      this.$store.dispatch("getFilmes");
  }
};
</script> 