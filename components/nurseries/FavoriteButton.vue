<template>
  <div>
    <v-btn block color="amber" v-if="can_favorited()" @click="add_favorite">
      <v-icon>favorite</v-icon>
      お気に入りに追加
    </v-btn>
    <v-btn block color="" v-else @click="remove_favorite">
      <v-icon>favorite</v-icon>
      お気に入りから削除
    </v-btn>
  </div>
</template>
<script>
  export default {
    name: 'FavoriteButton',
    props: {
      id: {type: String, required: true},
    },
    methods: {
      can_favorited: function () {
        return !(this.$store.state.favorite.items.includes(this.id))
      },
      add_favorite: function () {
        this.$store.commit('favorite/add', this.id)
      },
      remove_favorite: function () {
        this.$store.commit('favorite/remove', this.id)
      }
    },
  }
</script>
