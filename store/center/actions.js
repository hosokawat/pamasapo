import * as queries from '~/graphql/queries/childcenter'

export default {
  async search({ commit }, params) {
    commit('SEARCH_CENTER')

    try {
      let { data } = await this.$apiClient.query({
        query: queries.search
      })

      commit('SEARCH_CENTER_SUCCESS', data)
    } catch (e) {
      commit('SEARCH_CENTER_FAILURE', e)
    }
  }
}
