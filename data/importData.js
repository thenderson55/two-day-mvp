

import db from './fakeData'

console.log(db)

// name: db.data[0].name,
// description: db.data[0].description,
// price: db.data[0].price,
(async () => {
  try {
    for(apartment of db.data){
      const title = apartment.name;
      const description = apartment.description;
      const address = apartment.address;

      const result = await knex('apartments').insert({
        title,
        description,
        address
      })
      console.log(result)
    }
  } catch (err) {
    console.error("Error inserting records", err);
  } 
})()
