/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose')
require('mongoose-double')(mongoose),
    Schema = mongoose.Schema;

/* Create your schema */
var SchemaTypes = mongoose.Schema.Types;
var listingSchema = new Schema({
  code: { type: String, uppercase: true, required: true },
  name: { type: String, required: true },
  coordinates: {
      latitude: SchemaTypes.Double,
      longitude: SchemaTypes.Double
  },
  address: String,
  created_at: Date,
  updated_at: Date
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
listingSchema.pre('save', function(next) {
  var currentDate = new Date();

  this.updated_at = currentDate;

  if (!this.created_at)
      this.created_at = currentDate;

  next();
});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);


/* Export the model to make it available to other parts of your Node application */
module.exports = Listing;
