const axios = require('axios')
// const db = require('../server/knex')

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} = require("graphql");

// const ApartmentType = new GraphQLObjectType({
//   name: "Apartment",
//   fields: () => ({
//     apt_number: { type: GraphQLInt },
//     title: { type: GraphQLString },
//     description: { type: GraphQLString },
//     price: { type: GraphQLInt },
//     building: { type: BuildingType }
//   })
// });
// const BuildingType = new GraphQLObjectType({
//   name: "Building",
//   fields: () => ({
//     age: { type: GraphQLInt },
//     meterial: { type: GraphQLString },
//     height: { type: GraphQLString }
//   })
// });

const BeerType = new GraphQLObjectType({
  name: "Beers",
  fields: () => ({
    id: { type: GraphQLInt},
    name: { type: GraphQLString },
    tagline: { type: GraphQLString }
  })
})

const Apartments = new GraphQLObjectType({
  name: "Apartments",
  fields: () => ({
    title: { type: GraphQLString },
    address: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLInt}
  })
})

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // apartments: {
    //   type: new GraphQLList(Apartments),
    //   resolve(parent, args) {
    //     return db.select().table("apartments")
    //     .then(res => res);
    //   }
    // },
    beers: {
      type: new GraphQLList(BeerType),
      resolve(parent, args) {
        return axios.get('https://api.punkapi.com/v2/beers')
          .then(res => res.data)
      }
    }
  }
});


module.exports = new GraphQLSchema({
  query: RootQuery
})


// GRAPHQL SHRUTI 2019

// const express = require("express");
// const morgan = require("morgan");
// const graphqlHTTP = require("express-graphql");
// const { buildSchema } = require("graphql");
// const path = require("path");
// const db = require("./knex");

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema,
//     rootValue: root,
//     graphiql: true,
//   })
//  );

// const schema = buildSchema(`
// type Location{
//  id: String
//  latitude: String
//  longitude: String
//  name: String
//  highway: String
//  exitnumber: String

//  address1: String
//  city: String
//  state: String
//    zip: String
//    highway: String
// }

// type City{
//  city: String!
// }

// type Query {
//  Locations: [Location]

//  Cities: [City]
// }
// `);

// const root = {
//  Locations: async () => {
//    const locations = await db.select().table("locations");

//    return locations;
//  },
//  Addresses: async () => {
//    const addresses = await db
//      .select()
//      .from("addresses")
//      .join("locations", "locations.id", "addresses.siteId");

//    return addresses;
//  },
//  Cities: async () => {
//    const cities = await db("addresses").distinct("city");
//    console.log(cities);
//    return cities;
//  },
// };
