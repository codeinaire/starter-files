const mongoose = require('mongoose');

// NOTE
// MODEL
// Store comes from our Store.js file which has already imported the database into the app.
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
  req.hey = 'what up?';
  console.log(req.hey);
  res.render('index');
};

exports.addStore = (req, res) => {
  res.render('editStore', { title: 'Add Store  ' });
};

exports.createStore = async (req, res) => {
  const store = new Store(req.body); // creating a new object
  await store.save(); // this has to have happened before it can move onto the next line
  console.log(store);
  res.redirect('/');

};

// NOTE
// EXAMPLE OF MIDDLEWARE
// exports.myMiddleware = (req, res, next) => {
  // const name = 'Tom' - this doesn't work
  // req.name = 'John'; // this does because it is part of the req stream.
  // if (req.name === 'John') {
  //   throw Error('That is an amazing name!');
  // this is an example of an ERROR MESSAGE. It doesn't pass the req.name to .homePage.
  // I'm not sure why, maybe it stops here. I'm guess it stops here at the error message.
  // It makes sense. It won't pass anything else on because this is where the error is at and this will hepl to locate a bug.
  // }
  // res.cookie('name', 'John is amazing', { maxAge: 9000000 });
  // this is an example of using the cookie middleware and what can be returned.
  // next();
// };

// NOTE
// EXAMPLE OF REQ PASSING VARIABLES ON
// exports.homePage = (req, res) => {
//   req.hey = 'what up?'
//   // console.log(name);
//   console.log(req.hey);
//   console.log(req.name);
//   res.render('index');
// };

// NOTE
// MY TESTING FOR THE ORDER OF CALLBACKS
// the order here doesn't matter, only the order of the callback in the router matters.
// However, I imagine it's best practice to put the callbacks here in order of
// the calls backs on the routes file.
// However, if one can't it doesn't matter because they are separate callbacks.
// exports.testExportsOrder = (req, res, next) => {
//   req.name += 'is amazing';
//   console.log(req.name);
//   res.render('index');
//   // next(); this next was causing an error:
//   // ERROR: Can't set headers after they are sent. It seems that we cannot have a next after ar
// };
