<template>
  <no-ssr>
    <mapbox
      :access-token="accessToken"
      :map-options="mapBoxOptions"
      @map-load="mapLoaded"
    >
    </mapbox>
  </no-ssr>
</template>

<script>
  import Mapbox from 'mapbox-gl-vue';
  export default {
    name: "index",
    components: {Mapbox},
    asyncData(context){
      return {
        accessToken: context.env.mapbox.accessToken
      }
    },
    data() {
      return {
        mapBoxOptions: {
          style: 'mapbox://styles/mapbox/streets-v10',
          center: [140.13217,35.590360000000004],
          zoom: 10
        },
      }
    },
    methods:{
      mapLoaded(map){
        // station
        map.addLayer({
          "id": 'station',
          "type": "symbol",
          "source": {
            type: 'geojson',
            data: 'https://raw.githubusercontent.com/codeforchiba/papamama/develop/data/station.geojson',
          },
          'layout': {
            'icon-image': 'rail-15',
            'text-field': '{station_name}',
            'text-anchor': 'top',
            'text-offset': [ 0, 0.6 ]
          },
        });

        // nursery
        map.addLayer({
          "id": 'nursery',
          "type": "symbol",
          "source": {
            type: 'geojson',
            data: 'https://raw.githubusercontent.com/codeforchiba/papamama/develop/data/nurseryFacilities.geojson',
          },
          'layout': {
            'icon-image': 'star-15',
            'text-field': '{Name}',
            'text-anchor': 'top',
            'text-offset': [ 0, 0.6 ]
          },
        });
      }
    },
  }
</script>

<style scoped>
  #map {
    width: 100%;
    height: 500px;
  }
</style>
