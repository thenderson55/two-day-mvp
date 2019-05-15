
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('apartments').del()
    .then(function () {
      // Inserts seed entries
      return knex('apartments').insert([
        
        {
          title: "Comfortable in Shinjuku",
          description: "Close to all the excitement of Kabukicho!",  
          price: 130000,
          address: "Tokyo, Shinjuku-ku, Shinjuku 6-28-10"
        },
        {
          title: "9 mins to Shinjuku",
          description: "Next to the amazing Shinjuku Gyoen park!",  
          price: 140000,
          address: "Tokyo, Shinjuku-ku, Shinjuku 2-4-1"
        },
        {
          title: "A tent in 2-choume park",
          description: "Enjoy the sun on your face in the morning!",  
          price: 500,
          address: "Tokyo, Shinjuku-ku, Shinjuku 2-0-0"
        },
      ]);
    });
};
