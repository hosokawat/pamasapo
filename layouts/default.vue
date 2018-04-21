<template>
  <v-app>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-bottom-nav fixed :value="true">
      <v-btn flat color="teal" value="home" router to="/">
        <span>ホーム</span>
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn flat color="teal" value="recent" router to="/recent/">
        <span>最近みた場所</span>
        <v-icon>list</v-icon>
      </v-btn>
      <v-btn flat color="teal" value="favorites" router to="/favorites/">
        <span>お気に入り</span>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn flat color="teal" value="histories" router to="/histories/">
        <span>検索履歴</span>
        <v-icon>history</v-icon>
      </v-btn>
      <v-btn flat color="teal" value="settings" router to="/settings/">
        <span>設定</span>
        <v-icon>settings</v-icon>
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
