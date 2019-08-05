<template>
  <v-layout>
    <NavDrawer v-model="drawer" @input:drawer="drawer = $event" />
    <AppBar @click:drawer="drawer = !drawer" ref="appBar" />
  </v-layout>
</template>

<script>
import NavDrawer from "@/components/NavDrawer/NavDrawer";
import AppBar from "@/components/AppBar";

export default {
  name: "MainSiteContainer",
  data() {
    return {
      drawer: null
    };
  },
  components: {
    NavDrawer,
    AppBar
  }
};
</script>
