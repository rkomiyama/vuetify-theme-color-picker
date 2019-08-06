<template>
  <v-content>
    <v-container grid-list-lg>
      <v-layout wrap>
        <v-flex xs6 sm3>
          <v-alert type="success">Success</v-alert>
        </v-flex>
        <v-flex xs6 sm3>
          <v-alert type="info">Info</v-alert>
        </v-flex>
        <v-flex xs6 sm3>
          <v-alert type="warning">Warning</v-alert>
        </v-flex>
        <v-flex xs6 sm3>
          <v-alert type="error">Error</v-alert>
        </v-flex>
      </v-layout>
      <v-layout justify-center wrap>
        <v-flex xs6 sm3 class="d-flex justify-center">
          <v-btn color="primary">Waddup</v-btn>
        </v-flex>
        <v-flex xs6 sm3 class="d-flex justify-center">
          <v-switch v-model="switch1" label="Switch" class="mt-0" inset hide-details></v-switch>
        </v-flex>
      </v-layout>
      <v-card max-width="344" class="mx-auto mt-4">
        <v-card-title>I'm a title</v-card-title>
        <v-card-text>I'm card text</v-card-text>
      </v-card>
      <v-flex xs6 class="mx-auto mt-4">
        <v-slider
          v-model="volume"
          append-icon="mdi-volume-high"
          prepend-icon="mdi-volume-medium"
          label="Volume"
          hide-details
        ></v-slider>
      </v-flex>
      <v-card class="mx-auto mt-4" max-width="400">
        <v-list class="primary--text">
          <v-subheader>REPORTS</v-subheader>
          <v-list-item-group v-model="item">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-action>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "ContentContainer",
  data() {
    return {
      volume: 10,
      switch1: true,
      item: 1,
      items: [
        { text: "Real-Time", icon: "mdi-clock" },
        { text: "Audience", icon: "mdi-account" },
        { text: "Conversions", icon: "mdi-flag" }
      ]
    };
  }
};
</script>
