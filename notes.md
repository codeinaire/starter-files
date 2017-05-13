19/05/2007 15:00
so far we have covered how to write a form and send the data as a post request through a route that will send back a json. It wasn't send back the json data and I realised the bodyParser wasn't uncommented in the app.js. This was annoying because I wasn't sure what it was for a while. The form was put into a mixin which kind of reminds me of a partial. IT's also a little bit like a block which can extend another file's pug such as, in this case, the layout file.
We created a store model that uses mongoose to interact with the data and global promises. We created a method to create a slug of the name before it is saved into the database what is a storeSchema.pre('save', function)




MIXIN
is sort of like a function that will return some HTML


It seems like the start of the process is with the app.js file, which can pass a bunch of middleware before it hits the route function. A bunch of files and methods are required in here one of which is the controller files and an instance of ROUTER which is used for the different methods in the request depending on the URL. This will be passed through to the controllers which will do something with the req such as get data from a database. However, it may even pass through some middleware before going to the database, like validating models or something like that. Even after extracting data from the database it could go through some more middleware which would be coming from a callback in the controller file and then that can be res to the view.

App.js > App.js: app.use.various-middleware > App.js: app.use('/', routes); >  routes/index.js: router.method(path, handler - such as controllers or middleware) > middleware or controllers


Middleware lets us run code after the req but before the res. There is:
- route specific middleware &
- global middleware in which it will run through the middle ware before it gets to the router. This is where we'd run application wide functions such as authorisation.

There's a lot of middleware in the app.js file and then it'll go into the routes file once it hits: app.use('/', routes); and if there are any errors during the routes it can go on to the middleware after the routes.


M - Model: the layer that interacts with the database
V - View: the templates that we use to see the res
C - Controller: the part between the Model and the View that directs the data from the database to the view. Create a controller for each of the functional parts of the application


router.get('name-of-url|directory', (req, res) => {
  res.render('name-of-file-to-render-at-url|directory')  
  })

req is what is being asked for by the client and refers to the 'name-of-directory', while res is the response by the server and that is being sent back to the client in the form of 'name-of-file-to-render'

router.get('name-of-directory', (req, res) => {
  res.render('name-of-file-to-render', {
    name: 'John',
    age: 100
    })  
  })

these are called local variables that are being sent back to the client and will able to be used to display stuff on the name-of-file-to-render. This can be refactored to another file and that refactor can be used to call persisted data from the database

PARAMS

router.get('name-of-url|directory', (req, res) => {
  const param-var-name = { param-name: param-value, param-name1 = param-value1 };
  res.send(req.query.param-name);
  OR
  res.send(param-var-name.optional-specification-of-param)
  })

res.send will return params from within a url in the clients browser for instance if we have localhost3000/?param-name=param-value this will send param-value to the clients screen whereas if we use the res.send(param-var...) it will send the local to the clients screen. To use the param this way it has to be put into a var.

router.get('name-of-url|directory', (req, res) => {
  res.send({ param-name: param-value, param-name1 = param-value1 });
  })

this will send this object to the client to be display, probably as an json object.
