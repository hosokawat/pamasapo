import gql from 'graphql-tag'

export const search = gql`
  query {
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
  }
`
