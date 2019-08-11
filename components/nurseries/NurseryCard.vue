<template>
  <v-card>
    <v-img
      :src="default_image"
      contain
      aspect-ratio="1"
      max-height="300"
    ></v-img>
    <v-card-title>
      {{item.name}}
      <span class="subtitle-1">({{ item.kana }})</span>
    </v-card-title>
    <v-card-text>
      <span>住所　{{ item.postalCode + item.prefecture + item.city + item.ward + item.address }}</span><br>
      <span>空き状況({{ item.base_date }})</span><br>
      <span>開園時間　{{ item.openingTime }}から{{ item.openingTime }}まで</span><br>
      <span v-if='item.number_of_parking_lot>0'>駐車場 あり{{ item.number_of_parking_lot }}台</span>
      <span v-else>駐車場 なし</span>
    </v-card-text>
    <v-card-actions>
      <v-btn :to="{ name: 'nurseries-id', params: { id: item.id }}">詳細表示</v-btn>
      <FavoriteButton :id="item.id" />
    </v-card-actions>
  </v-card>
</template>
<script>
    import DefaultImage from "~/assets/image.png"
  import FavoriteButton from "~/components/FavoriteButton"

  export default {
    name: 'NurseryCard',
    components: {FavoriteButton},
      data() {
          return {
              default_image: DefaultImage
          }
      },
    props: {
      item: {}
    }
  }
</script>
