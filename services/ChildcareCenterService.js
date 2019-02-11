import { API, graphqlOperation } from 'aws-amplify'
export default {
  async getLists () {
    const querylists = `query {
      search {
        items {
          id
		  name
          kana
		  postalCode
          prefecture
          city
          ward
          address
          nursery {
   	       facility {
    	     openingTime
    	   }
      	  } 
        }
      }
    }`
const lists = await API.graphql(graphqlOperation(querylists))
    return lists.data.search.items
  }
}
