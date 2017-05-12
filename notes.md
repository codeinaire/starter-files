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
