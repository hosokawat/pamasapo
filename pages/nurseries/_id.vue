<template>
  <div>
    <v-container>
      <h2>{{ item.name }}</h2>
      <v-chip>{{ item.nursery.facility.nurseryType }}</v-chip>
      <v-chip>{{ item.nursery.facility.ownership }}</v-chip>
      <v-list>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>住所</v-list-tile-title>
            <v-list-tile-sub-title>{{ address }}</v-list-tile-sub-title>
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
            <v-list-tile-sub-title>{{ period }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="item.nursery.facility.hasParkingLot">
          <v-list-tile-content>
            <v-list-tile-title>駐車場台数</v-list-tile-title>
            <v-list-tile-sub-title>{{ item.nursery.facility.numberOfParkingLot }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-btn block>お気に入り</v-btn>
        </v-list-tile>
      </v-list>
      <ShowMap
        :access-token="accessToken"
        :lat="item.lat"
        :long="item.long"
      />
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
  import ShowMap from '~/components/nurseries/ShowMap'
  // import * as queries from '~/graphql/queries/get'

  export default {
    name: "id",
    components: {ShowMap},
    asyncData(context) {
      // TOOD: ここでAPIを叩きitemを更新させる。
      // const response = await context.$apiClient.query({
      //   query: queries.get
      // })
      // debugger
      return {
        accessToken: context.env.mapbox.accessToken
      }
    },
    computed: {
      address: function () {
        const item = this.item
        return `${item.prefecture}${item.city}${item.ward}${item.address}`
      },
      period: function () {
        const item = this.item
        return `${item.nursery.facility.openingTime} 〜 ${item.nursery.facility.closingTime}`
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
        item: {
          "id": "0c59666b-c709-48eb-9986-4a00e80c066e",
          "name": "白旗保育所",
          "kana": "しらはたほいくじょ",
          "postalCode": "2600841",
          "prefecture": "千葉県",
          "city": "千葉市",
          "ward": "中央区",
          "address": "白旗2-6-11",
          "lat": 35.5783264,
          "long": 140.1408013,
          "phone": "0432612916",
          "fax": "0432647271",
          "email": null,
          "website": null,
          "remarksBasic": null,
          "nursery": {
            "facility": {
              "owner": "千葉市",
              "ownership": "公立",
              "nurseryType": "認可保育所",
              "nurserySubType": null,
              "openingTime": "7:00",
              "closingTime": "19:00",
              "standardOpeningTime": "7:00",
              "standardClosingTime": "19:00",
              "shortOpeningTime": "7:00",
              "shortClosingTime": "19:00",
              "ageFrom": 0,
              "ageTo": 5,
              "capacity1": null,
              "capacity2": null,
              "capacity3": null,
              "areaOfNurseryRoom": null,
              "hasYard": true,
              "areaOfYard": null,
              "hasPool": true,
              "hasParkingLot": true,
              "numberOfParkingLot": 2,
              "remarksFacility": null
            },
            "service": null
          }
        }
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
