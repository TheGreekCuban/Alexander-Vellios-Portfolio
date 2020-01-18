const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const PersonSchema = new Schema({
  // `title` is required and of type String
  name: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  phone: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  // `person` is an object that stores a Person id
  // The ref property links the ObjectId to the Person model
  person: [{
    type: Schema.Types.ObjectId,
    ref: "Person"
  }]
});

// This creates our model from the above schema, using mongoose's model method
const Person = mongoose.model("Person", PersonSchema);

// Export the Article model
module.exports = Person;