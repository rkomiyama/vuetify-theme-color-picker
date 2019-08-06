<template>
  <v-layout>
    <NavDrawer v-model="drawer" @input:drawer="drawer = $event" />
    <AppBar @click:drawer="drawer = !drawer" ref="appBar" />
    <ContentContainer />
  </v-layout>
</template>

<script>
import NavDrawer from "@/components/NavDrawer/NavDrawer";
import AppBar from "@/components/AppBar";
import ContentContainer from "@/components/ContentContainer";

export default {
  name: "MainSiteContainer",
  data() {
    return {
      drawer: null
    };
  },
  components: {
    NavDrawer,
    AppBar,
    ContentContainer
  }
};
</script>
