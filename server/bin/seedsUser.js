const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const bcryptSalt = 10;



 const dbName = 'nomadaTravel';
mongoose
  .connect(`mongodb://localhost/${dbName}`, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let user = [
  {
    username: "angel",
    password: bcrypt.hashSync("angel", bcrypt.genSaltSync(bcryptSalt)),
    email:"angel@gmail.com"
  },
  {
    username: "bob",
    password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
    email:"bob@gmail.com"
},
  {
    username: "aledia",
    password: bcrypt.hashSync("aledia", bcrypt.genSaltSync(bcryptSalt)),
    email:"aledia@gmail.com"
},
  {
    username: "pep",
    password: bcrypt.hashSync("pep", bcrypt.genSaltSync(bcryptSalt)),
    email:"pep@gmail.com"
}
]
User.create(user, (err) => {
  if (err) {
    throw (err)
  }
  console.log(`create ${user.length} user`)
  mongoose.connection.close();
})
// .then(userCreated => {
  // console.log(`${userCreated.length} users created with the following id:`);
  // console.log(userCreated.map(u => u._id));
//  })
// .then(() => {
 
//   mongoose.disconnect()
// })
// .catch(err => {
//   mongoose.disconnect()
//   throw err
// })