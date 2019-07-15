<template>
  <div>
    <v-container v-if="item">
      <pre>{{item}}</pre>
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
        :lng="item.long"
        :lat="item.lat"
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
    <p v-else>保育園のデータが取得できませんでした。</p>
  </div>
</template>

<script>
  import ShowMap from '~/components/nurseries/ShowMap'
  import * as queries from '~/graphql/queries/get'

  export default {
    name: "nurseries_id",
    components: {ShowMap},
    async asyncData({app, params, env}) {
      const client = app.$apiClient

      const promise = client.query({
        query: queries.get,
        variables: {id: params.id}
      })

      const get_data = await promise.then((data) => {
        return data.data.get
      })

      return {
        accessToken: env.mapbox.accessToken,
        item: get_data
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
  }

</script>

<style scoped>
</style>
