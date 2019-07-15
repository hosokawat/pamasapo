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
        return !(this.favoriteList().includes(this.id))
      },
      favoriteList: function () {
        if (localStorage.getItem('favorite')) {
          return JSON.parse(localStorage.getItem('favorite'))
        } else {
          return []
        }
      },
      add_favorite: function () {
        debugger
        const value = this.favoriteList().push(this.id);
        localStorage.setItem('favorite', JSON.stringify(value))
      },
      remove_favorite: function () {
        debugger
        const id = this.id
        const value = this.favoriteList().filter(e => el != id)
        localStorage.setItem('favorite', JSON.stringify(value))
      }
    },
    // created: function() {
    //   if (localStorage.getItem('favorite')) {
    //     this.favoriteList = JSON.parse(localStorage.getItem('favorite'))
    //   }
    // },
  }
</script>
