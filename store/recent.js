
export const state = () => ({
  items: [],
  limitLength: 5// context.env.recent.limitLength
})

export const getters = {
  items: state => {
    return state.items
  },

}


export const mutations = {
  add(state, id) {
    state.items.unshift({ id: id, timestamp: new Date() });
    state.items = state.items.slice(0, state.limitLength)
  },
}
