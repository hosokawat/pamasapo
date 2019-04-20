export const state = () => ({
  items: [],
  error: undefined,
  loading: false
})

export const getters = {
  items: state => {
    return state.items
  }
}
