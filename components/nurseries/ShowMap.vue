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
  import * as mapboxgl from "mapbox-gl";

  export default {
    name: "ShowMap",
    components: {Mapbox},
    data: function () {
      return {
        navControl: {show: true, position: 'top-right'},
      }
    },
    props: {
      accessToken: {type: String, required: true},
      lng: {type: Number, required: true},
      lat: {type: Number, required: true},
    },
    methods: {
      mapLoaded(map) {
        const self = this
        var geojson = {
          type: 'FeatureCollection',
          features: [{
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [self.lng, self.lat]
            },
            properties: {
              title: '保育園',
              description: '保育園'
            }
          }]
        };

        geojson.features.forEach(function (marker) {
          var el = document.createElement('div');
          el.className = 'marker';
          new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);
        });
      }
    },
    computed: {
      mapBoxOptions: function () {
        return {
          style: 'mapbox://styles/mapbox/streets-v10',
          center: [this.lng, this.lat],
          zoom: 13
        }
      }
    },
  }
</script>

<style>
  #map {
    width: 100%;
    height: 200px;
  }

  .marker {
    /*TODO: 保育園のアイコンを用意して差し替える*/
    background-image: url('https://docs.mapbox.com/help/demos/custom-markers-gl-js/mapbox-icon.png');
    background-size: cover;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
  }
</style>
