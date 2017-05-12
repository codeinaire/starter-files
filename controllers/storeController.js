// example of middleware
exports.myMiddleware = (req, res, next) => {
  // const name = 'Tom' - this doesn't work
  req.name = 'John'; // this does because it is part of the req stream.
  if (req.name === 'John') {
    throw Error('That is an amazing name!'); // this is an example of an ERROR MESSAGE.
  }
  res.cookie('name', 'John is amazing', { maxAge: 9000000 }); // this is an example of using the cookie middleware and what can be returned.
  next();
};

exports.homePage = (req, res) => {
  // console.log(name);
  console.log(req.name);
  res.render('index');
};
