<template>
  <div>
    <NursriesDetail v-if="item" :item="item" :accessToken="accessToken" />
    <p v-else>保育園のデータが取得できませんでした。</p>
  </div>
</template>

<script>
  import * as queries from '~/graphql/queries/get'
  import NursriesDetail from "~/components/nurseries/NursriesDetail";

  export default {
    name: "nurseries_id",
    components: {NursriesDetail},
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
  }

</script>

