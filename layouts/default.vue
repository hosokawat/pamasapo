<template>
  <v-app>
    <v-content style="margin-bottom: 56px">
      <nuxt />
    </v-content>
    <v-bottom-nav fixed :value="true">
      <v-btn flat color="teal" value="recent" router to="/lists/">
        <span>リスト表示</span>
        <v-icon>list</v-icon>
      </v-btn>
      <v-btn flat color="teal" value="histories" router to="/maps/">
        <span>地図表示</span>
        <v-icon>map</v-icon>
      </v-btn>
      <v-btn flat color="teal" value="favorites" router to="/favorites/">
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
