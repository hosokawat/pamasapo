<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs6>
        <v-select
            :items="items"
            label="絞り込み"
            multiple
            chips
            box
          ></v-select>
      </v-flex>

      <v-flex xs6>
        <v-select
            :items="items2"
            label="並び替え"
            chips
            box
          ></v-select>
      </v-flex>

      <v-flex xs6>
          <v-btn block color="grey lighten-3">常時</v-btn>
      </v-flex>

      <v-flex xs6>
          <v-btn block color="grey lighten-3">新年度</v-btn>
      </v-flex>

    <template v-for="item in centers">
      <v-flex xs12 :key="item.name">
        <v-card>
          <v-card-text class="px-0">
            <span>保育所かな　{{ item.kana }}</span><br>
            <span class='headline'>保育所名　{{ item.name }}</span><br>
            <span>住所　{{ item.postalCode + item.prefecture + item.city + item.ward + item.address }}</span><br>
            <span>空き状況({{ item.base_date }})</span><br>
            <span>開園時間　{{ item.openingTime }}から{{ item.openingTime }}まで</span><br>
            <span v-if='item.number_of_parking_lot>0'>駐車場 あり{{ item.number_of_parking_lot }}台</span>
            <span v-else>駐車場 なし</span>
          </v-card-text>
          <img alt="写真" src='image.png'>
          <v-card-actions>
            <v-btn block color="amber" @click="toggleFavorites(item.id)">
            <v-icon>favorite</v-icon>
            お気に入り{{ favoriteList.includes(item.id) ? 'から削除'　: 'に追加' }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </template>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        items: ['許認可',
          '私立・公立',
          '開園時間',
          '閉園時間',
          '24時間',
          '延長',
          '一時保育',
          '夜間・休日',
          '駐車場'],
        items2: ['許認可',
          '私立・公立',
          '開園時間',
          '閉園時間',
          '24時間',
          '延長',
          '一時保育',
          '夜間・休日',
          '駐車場'],
        favoriteList: []
      }
    },

    computed: {
      ...mapGetters({
        centers: 'center/items'
      })
    },

    async fetch({ store }) {
      await store.dispatch('center/search')
    },

    methods: {
      toggleFavorites: function(id) {
        if (this.favoriteList.includes(id)) {
          this.favoriteList = this.favoriteList.filter(el => el != id)
        } else {
          this.favoriteList.push(id)
        }
        localStorage.setItem('favorite', JSON.stringify(this.favoriteList))
      }
    },

    created: function() {
      if (localStorage.getItem('favorite')) {
        this.favoriteList = JSON.parse(localStorage.getItem('favorite'))
      }
    },

  }
</script>
