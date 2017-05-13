const express = require('express');

const storeController = require('../controllers/storeController');

const router = express.Router();

// NOTE
// this: storeController.testExportsOrder, was inbetween the
// 2 and if it was at the end it wouldn't work because the last
// callback is a res callback and will render the index page. Plus it has no 'next'
//  storeController.myMiddleware,
router.get('/', storeController.homePage);

router.get('/add', storeController.addStore);
router.post('/add', storeController.createStore);

module.exports = router;

// NOTE
// Do work here
// router.get('/', (req, res) => {
//   // console.log("What is up");
//   const john = { name: 'John', age: 100, height: 'forever' };
//   // res.send('Hey! It works!'); // this is a callback
//   // don't try to send data to the browser twice in one router function, it'll come up as an errorHandlers
//   res.send(john);
//   // res.send(req.query.height);// this lets us grab the data from a url because the url is a request and the res is .send-ing back the req.query.whatever is the name of the values which looks like this: http://localhost:7777/?name=john&age=50&height=2m
//   // res.json(req.query); //query will get the query params which are the keys and values after the ?
// });

// NOTE
// req has the information
// res has all the methods for sending data back to the user
// router.get('/reverse/:name', (req,res) => {
//   console.log(req.IncomingMessage); //this is happening through the url and perhaps forms and some other ways...
//   console.log("----------------RESPOND---------------");
//   console.log(res.domain); // this is what is being sent back to the client into their web browser.
//   const reverse = [...req.params.name].reverse().join('');
//   // req.params allows us to access the data that was sent.
//   console.log(reverse);
//   res.send(reverse);
// });

// NOTE
// router.get('/', (req, res) => {
  // const john = { name: 'John', age: 100, height: 'forever' };
  // res.send(john);
  // res.render('hello', {
  //   name: 'Tom',
  //   age: req.query.age //this will get the age from the query url like the above value and these are called local variables OR LOCALS
  // })
  // res.render('hello');
// ;
// res.send('tey it works');
// res.render('hello', {
//   title: ''
// });
// });

// req - an object with data that is coming from the client to the server
// res - an object sent back to the client
// next is middleware
