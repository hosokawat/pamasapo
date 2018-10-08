<template>
  <mapbox
    :access-token="accessToken"
    :map-options="mapBoxOptions"
    @map-load="mapLoaded"
  >
  </mapbox>
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
        map.addSource('station', {
          type: 'geojson',
          data: './station.geojson',
          buffer: 0,
          maxzoom: 12
        });

        map.addLayer({
          "id": "points",
          "type": "symbol",
          "source": 'station',
          'paint': {
            'circle-color': {
              property: 'CYC_INJ',
              type: 'interval',
              stops: [
                [1, 'orange'],
                [2, 'red']
              ]
            },
            'circle-radius': {
              property: 'CYC_INJ',
              base: 3,
              type: 'interval',
              stops: [
                [1, 3],
                [2, 8],
                [3, 12]
              ]
            },
            'circle-opacity': 0.8,
            'circle-blur': 0.5
          },
        });
        // TODO: マーカーが出ないので試行錯誤中
        // station.json 自体は読み込んでいるがピンが表示されていないようだ
        console.log(map);
        console.log('mapLoaded');
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
