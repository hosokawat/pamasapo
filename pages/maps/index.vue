<template>
  <no-ssr>
    <mapbox
      v-if="accessToken"
      :access-token="accessToken"
      :map-options="mapBoxOptions"
      :nav-control="navControl"
      @map-load="mapLoaded"
    />
    <p v-else>mapboxのapikeyが設定されていません。</p>
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
        navControl: {show: true, position: 'top-right' },
      }
    },
    methods:{
      mapLoaded(map){
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

        map.on('click', 'nursery', function (e) {
          let coordinates = e.features[0].geometry.coordinates.slice();
          let properties = e.features[0].properties;
          let popup_contet = `${properties.Name}(${properties.Type}) <br />
                              住所: ${properties.Address}${(properties.Address2==='null')?'':properties.Address2} <br />
                              tel: ${properties.Tel} <br />
                              fax: ${properties.Fax} <br />
`
          // Ensure that if the map is zoomed out such that multiple
          // copies of the feature are visible, the popup appears
          // over the copy being pointed to.
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }

          const mapboxgl = require('mapbox-gl');
          new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(popup_contet)
            .addTo(map);
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
