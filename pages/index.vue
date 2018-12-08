<template>
  <div class="home-view">
    <v-toolbar dense>
      <a href="/" class="d-flex ml-2 router-link-active">
        <img src="logo.png" width="220px" height="32px">
      </a>
      <v-text-field
        v-model="searchKeyword"
        append-icon="search"
        type="text"
        name="input-10-1"
        placeholder="住所検索..."
      ></v-text-field>
    </v-toolbar>
    <v-layout row class="top-nav">
      <v-flex xs6 order-lg2>
        <v-btn depressed block color="location" class="mt-0" v-on:click=locationSearch>
          <v-icon class="mr-1">location_searching</v-icon>
          現在位置から探す
        </v-btn>
      </v-flex>
      <v-flex xs6>
        <v-btn depressed block color="map" class="mt-0" v-on:click=mapSearch>
          <v-icon class="mr-1">location_on</v-icon>
          地図から探す
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      searchKeyword: '',
    };
  },
  methods: {
    locationSearch() {
      alert("現在位置から探す")
    },
    mapSearch() {
      alert("地図から探す")
    }
  }
};
</script>

<style lang="scss" scoped>
.toolbar {
  background-color: #fff;
}
.location {
  background-color: #5CD8B7!important;
  border-color: #5CD8B7!important;
  color: #fff;
}
.map {
  background-color: #8CC2E3!important;
  border-color: #8CC2E3!important;
  color: #fff;
}
.top-nav {
  button {
    border-radius: 0;
    height: 45px;
    font-weight: bold;
  }
}
</style>
