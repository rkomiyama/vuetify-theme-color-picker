<template>
  <v-list
    dense
    expand
    nav
  >
    <ThemeListGroup />
  </v-list>
</template>

<script>
import ThemeListGroup from './ThemeListGroup'

export default {
  name: 'NavDrawerItems',
  components: {
    ThemeListGroup
  }
}
</script>
