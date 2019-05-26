<template>
  <no-ssr>
    <mapbox
      v-if="accessToken"
      :access-token="accessToken"
      :map-options="mapBoxOptions"
      :nav-control="navControl"
      @map-load="mapLoaded"
    />
    <p v-else>
      mapboxのapikeyが設定されていません。
    </p>
  </no-ssr>
</template>

<script>
  import Mapbox from 'mapbox-gl-vue';

  export default {
    name: "ShowMap",
    components: {Mapbox},
    props: {
      accessToken: {type: String, required: true},
      lat: {type: Number, default: 140.13217},
      lng: {type: Number, default: 35.590360000000004},
    },
    computed: {
      mapBoxOptions: function () {
        return {
          style: 'mapbox://styles/mapbox/streets-v10',
          center: [this.lat, this.lng],
          zoom: 10
        }
      }
    },
  }
</script>

<style scoped>

</style>
