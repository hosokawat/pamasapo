import gql from 'graphql-tag'

export const get = gql`
query getItem{
  get($id) {
    id,
    name,
    kana,
    postalCode,
    prefecture,
    city,
    ward,
    address,
    lat,
    long,
    phone,
    fax,
    email,
    website,
    remarksBasic,
    nursery: {
      facility:{
        owner,
        ownership,
        nurseryType,
        nurserySubType,
        openingTime,
        closingTime,
        standardOpeningTime,
        standardClosingTime,
        shortOpeningTime,
        shortClosingTime,
        ageFrom,
        ageTo,
        capacity1,
        capacity2,
        capacity3,
        areaOfNurseryRoom,
        hasYard,
        areaOfYard,
        hasPool,
        hasParkingLot,
        numberOfParkingLot,
        remarksFacility
      },
      service:{
        supportMaturnityLeave
      }
    }
  }
}`
