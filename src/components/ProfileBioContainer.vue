<template>
  <v-content>
    <v-layout fill-height>
      <v-card class="ma-auto">
        <v-img :src="user.avatar_url"></v-img>
        <v-card-title>{{ user.name }}</v-card-title>
        <v-card-text>
          <span>Username: {{ user.login }}</span><br>
          <a :href="user.html_url">{{ user.html_url }}</a><br>
          <span>Public Repos: {{ user.public_repos }}</span><br>
          <span>Created at {{ user.created_at | formatDate }}</span>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-content>
</template>

<script>
import moment from 'moment';

export default {
  name: 'ProfileBioContainer',
  props: {
    user: {
      name: String,
      login: String,
      avatar_url: String,
      html_url: String,
      public_repos: Number,
      created_at: String
    }
  },
  filters: {
    formatDate (date) {
      return moment(date).format("LLL")
    }
  }
}
</script>
