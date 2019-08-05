<template>
  <v-list-group
    prepend-icon="mdi-palette-advanced"
    ripple
  >
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title>
          Themes
        </v-list-item-title>
      </v-list-item-content>
    </template>
    <v-list-item-group
      v-model="themeOption"
      mandatory
    >
      <v-list-item
        v-for="(theme, i) in themes"
        class="pl-10"
        @click="clickListItem(theme)"
        link
        :key="i"
      >
        <v-list-item-action>
          <v-icon :color="theme.color">
            {{ `mdi-circle${theme.name === "Light" ? "-outline" : ""}` }}
          </v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-flex class="d-flex">
            <v-list-item-title>{{ theme.name }}</v-list-item-title>
            <v-switch
              v-if="theme.name === 'Light'"
              v-model.lazy="darkOrLight"
              @change="clickSwitch('Light')"
              value="Light"
              @click.stop="clickListItem(theme)"
              inset
            ></v-switch>
            <v-switch
              v-else-if="theme.name === 'Dark'"
              v-model.lazy="darkOrLight"
              @change="clickSwitch('Dark')"
              value="Dark"
              @click.stop="clickListItem(theme)"
              inset
            ></v-switch>
          </v-flex>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list-group>
</template>

<script>
import themes from '@/themes'

export default {
  name: "ThemeListGroup",
  data () {
    return {
      themeOption: 0,
      darkOrLight: ['Light'],
      darkTheme: false,
      themesSwapped: false,
      themes
    }
  },
  methods: {
    swapColors (newTheme) {
      this.$vuetify.theme.themes.light = newTheme.themes.light
      this.$vuetify.theme.themes.dark = newTheme.themes.dark
    },
    clickSwitch (themeName) {
      const otherThemeName = themeName === "Dark" ? "Light" : "Dark"
      this.darkOrLight = this.darkOrLight[0] === themeName ? [otherThemeName] : [themeName]
      this.$vuetify.theme.light = this.darkOrLight[0] === "Light"
      this.$vuetify.theme.dark = this.darkOrLight[0] === "Dark"
    },
    clickListItem (theme) {
      if (theme.name === "Light" || theme.name === "Dark") {
        this.clickSwitch(theme.name)
      }
      this.swapColors(theme)
    }
  }
}
</script>

