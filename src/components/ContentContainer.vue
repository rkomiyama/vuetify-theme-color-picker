<template>
  <v-content>
    <v-container>
      <div class="text-center">
        <v-btn color="primary" class="mx-auto">Waddup</v-btn>
      </div>
      <v-card color="primary" max-width="344" class="mx-auto mt-4">
        <v-card-title>I'm a title</v-card-title>
        <v-card-text>I'm card text</v-card-text>
      </v-card>
      <v-card class="mx-auto mt-4" max-width="400" color="primary">
        <v-list color="primary">
          <v-subheader>REPORTS</v-subheader>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
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
