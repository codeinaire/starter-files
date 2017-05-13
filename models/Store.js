// NOTE
// GENERAL MODEL
// do all the data normalisation as close to the model as possible
// before the model is preferrable before it is saved.

const mongoose = require('mongoose');
// NOTE
// PROMISE
// a promise is a part of JS asychronous nature is a way for the
// language to remember what database call has been made when. This
// is so it can stay in line and then return the result once it is
// done. "global.Promise" is ES6
// this is described by Wes as an IOU saying that i'll come back to
// you with the data or an err message and this is used in the storeController
mongoose.Promise = global.Promise;
const slug = require('slugs');

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a store name!', // this is cool, it will give us an
    // error message if nothing was entered.
  },
  slug: String,
  description: {
    type: String,
    trim: true,
  },
  tags: [String],
});

// NOTE
// SLUGIFY pre model save
// this will happen before the object is saved into the db
// so the slug can be auto generated and passed into the
// object before it is saved
// NOTE
// THIS
// in this case 'this' will be equal to the store we are
// saving so this is taking that object getting access to
// the same inside the slug function and returning
// that function to the this.slug slot in the object.
// we are using a strict schema
storeSchema.pre('save', function (next) {
  // if the stores name is not modified we'll skip this functio
  if (!this.isModified('name')) {
    next();
    return;
  }
  // this saves it before every save, but we want to be moer scfcity
  this.slug = slug(this.name);
  next();
});

// NOTE
// MODULE.exports = vs EXPORTS =
// we are using this because we are importing an entire object in the file
// and not a particular function in the file
module.exports = mongoose.model('Store', storeSchema);
