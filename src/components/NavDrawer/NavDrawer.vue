<template>
  <v-navigation-drawer
    :value="$attrs.value"
    @input="$emit('input:drawer', $event)"
    mobile-break-point="960"
    app
  >
    <v-layout class="d-block">
      <NavDrawerItems />
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
import NavDrawerItems from "./Items/NavDrawerItems";

export default {
  name: "NavDrawer",
  components: {
    NavDrawerItems
  }
};
</script>
