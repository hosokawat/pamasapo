<template>
  <v-app>
    <v-content style="margin-bottom: 56px">
      <nuxt />
    </v-content>
    <v-bottom-nav fixed :value="true">
      <v-btn flat color="teal" to="/nurseries/">
        <span>リスト表示</span>
        <v-icon>list</v-icon>
      </v-btn>
      <v-btn flat color="teal" to="/maps/">
        <span>地図表示</span>
        <v-icon>map</v-icon>
      </v-btn>
      <v-btn flat color="teal" to="/favorites/">
        <span>お気に入り</span>
        <v-icon>favorite</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>
