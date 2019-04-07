<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>{{title}}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-img
          class="white--text"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
        </v-img>
        <v-list three-line subheader>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>名前</v-list-tile-title>
              <v-list-tile-sub-title>{{title}}</v-list-tile-sub-title>
              <v-list-tile-sub-title>{{title_kana}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>住所</v-list-tile-title>
              <v-list-tile-sub-title>〒 {{zip}}</v-list-tile-sub-title>
              <v-list-tile-sub-title>{{address}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>空き情報</v-list-tile-title>
              <v-list-tile-sub-title>{{aki}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>時間</v-list-tile-title>
              <v-list-tile-sub-title>{{start_time}}〜{{end_time}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>その他</v-list-tile-title>
              <v-list-tile-sub-title>{{other}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-card-actions>
          <v-btn>閉じる</v-btn>
          <v-btn>詳細</v-btn>
          <v-btn>ブックマーク</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
  export default {
    data() {
      return {
        dialog: true,
        notifications: false,
        sound: true,
        widgets: false,
        title: '開発中の画面です。タイトル',
        title_kana: 'タイトルkana',
        zip: '123-0001',
        address: '千葉県松戸市五香1-1-1',
        aki: '',
        start_time: '00:00',
        end_time: '00:00',
        other: '駐車場なし',
      }
    }
  }
</script>
