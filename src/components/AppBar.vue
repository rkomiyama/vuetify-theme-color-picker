<template>
  <v-app-bar height="64" app>
    <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="$emit('click:drawer')"></v-app-bar-nav-icon>
    <v-toolbar-title class="headline text-uppercase hidden-xs-only">
      <v-flex class="d-flex align-center">
        <v-img class="hidden-sm-and-down" :src="require('@/assets/github.svg')" height="64" />
        <span>Color&nbsp;</span>
        <span class="font-weight-light">Picker</span>
      </v-flex>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar"
};
</script>
