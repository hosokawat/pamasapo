<template>
  <div>
    <v-container>
      <h2>おひさまのお家</h2>
      <v-chip>認可保育園</v-chip>
      <v-chip>私立</v-chip>
      <v-list>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>住所</v-list-tile-title>
            <v-list-tile-sub-title>千葉県松戸市六高台</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>欠員</v-list-tile-title>
            <v-list-tile-sub-title></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>時間</v-list-tile-title>
            <v-list-tile-sub-title>7:00〜20:00</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>駐車場台数</v-list-tile-title>
            <v-list-tile-sub-title></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-btn block>お気に入り</v-btn>
        </v-list-tile>
      </v-list>
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
      <v-list>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>延長保育</v-list-tile-title>
            <v-list-tile-sub-title></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>一時保育</v-list-tile-title>
            <v-list-tile-sub-title></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>夜間保育</v-list-tile-title>
            <v-list-tile-sub-title></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>24時間</v-list-tile-title>
            <v-list-tile-sub-title></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>年齢</v-list-tile-title>
            <v-list-tile-sub-title></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>定員</v-list-tile-title>
            <v-list-tile-sub-title></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>スモック</v-list-tile-title>
            <v-list-tile-sub-title></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>申込み倍率</v-list-tile-title>
            <v-list-tile-sub-title></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-container>
  </div>
</template>

<script>
  import Mapbox from 'mapbox-gl-vue';

  export default {
    name: "id",
    components: {Mapbox},
    asyncData(context) {
      return {
        accessToken: context.env.mapbox.accessToken
      }
    },
    data: function () {
      return {
        mapBoxOptions: {
          style: 'mapbox://styles/mapbox/streets-v10',
          center: [140.13217, 35.590360000000004],
          zoom: 10
        },
        navControl: {show: true, position: 'top-right'},
        dialogData: {
          dialogShow: false,
          title: '開発中の画面です。タイトル',
          address: '千葉県松戸市五香1-1-1',
          aki: '',
          start_time: '00:00',
          end_time: '00:00',
          type: 'type',
        }
      }
    },
    methods: {
      showDialog() {
        this.dialogData.dialogShow = true
      },
      setDialog(key, value) {
        this.dialogData[key] = value
      },
      mapLoaded(map) {
        const self = this
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
            'text-offset': [0, 0.6]
          },
        });
      }
    },
  }

</script>

<style scoped>
  #map {
    width: 100%;
    height: 200px;
  }
</style>
