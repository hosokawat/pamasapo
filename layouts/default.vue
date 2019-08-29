<template>
  <v-app>
    <v-content app>
      <nuxt />
    </v-content>
    <v-bottom-navigation app fixed>
      <v-btn to="/nurseries/">
        <span>リスト表示</span>
        <v-icon>list</v-icon>
      </v-btn>
      <v-btn to="/maps/">
        <span>地図表示</span>
        <v-icon>map</v-icon>
      </v-btn>
      <v-btn to="/favorites/">
        <span>お気に入り</span>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn to="/recent/">
        <span>履歴</span>
        <v-icon>history</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
