<template>
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
    <img alt="写真" src='~assets/image.png'>
    <v-card-actions>
      <FavoriteButton :id="item.id" />
    </v-card-actions>
  </v-card>
</template>
<script>
  import FavoriteButton from "~/components/FavoriteButton"

  export default {
    name: 'NurseryCard',
    components: {FavoriteButton},
    props: {
      item: {}
    }
  }
</script>
