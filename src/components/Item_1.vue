<template>
  <v-container fill-height>
    <v-card class="mx-auto" max-width="800" max-height="80vh" style="padding-left:150px">
      <v-container fluid>
        <v-row dense>
          <v-col v-for="(n, i) in $store.state.products" :key="i">
            <v-card
              v-if="n.Typeid === 1"
              width="400"
              height="20vh"
            >
            <v-card-title v-text="n.description"></v-card-title>
                <v-card-subtitle> Price: {{ n.price}}
                </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>


<script>