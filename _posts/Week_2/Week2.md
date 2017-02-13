
---
title: Week 2
category: week_2
---

What is Express?
----

Express is a node library which can be used for creating API or webpages. 


Install Express
----

Go to the folder that we have other files and run the following command:

```Nodejs
npm install express --save
```

By adding `--save` we are making sure that express is added as one of our project dependencies to our `packages.json` file.

At this point you want to create a new file to hold our 'app' logics.

``` basic
touch app.js
```

Open up the app.js to get started.

As we talked about `importing` other libraries, you need to import express to our app.

```nodejs
const express = require('express);
const app = express();
```

The basics of expressjs is about understanding routes. In order to do that we are going to perform a `GET` request. Before walking you through that, let's talk about the URI you use to go to different pages of a website, they are basically routes so the home page is essentially is `/`. 

```nodejs
const route = '/'; //this is what happens when you are trying to reach the homepage.
app.get(route, (res, req)=>{
  res.send('Yo'); //this is what sent to the client when this route is requested.
})
```

`get` method is the the equalivant of HTTP `GET` method. The super dumb down version of the above snippet is that there is a `GET` request on `/` and as a respond, send string 'Yo'. When the app gets more complicated, we are going to send a JSON back to client that was quired off of a database. 

Let's get all the files that are in the same folder as our `app.js`. 

```nodejs
app.get(route, (res, req)=>{
  res.send(path.dirname(__filename));
})
```




Let's take a look at a `POST` request.

```nodejs
app.post('/', (req, res)=> {
  res.send('Posted to /');
})
```

In order to test our `POST` route. We need to use `curl` library. This is how you would do a POST request in cURL.

```bash
curl --request POST http://localhost:3001
```
When you send your POST request, you usually send an object or a json to the server. We will cover that soon.




Create an express server (link to a video)
understand basic of routes
Perform a GET and POST request
Basic of Respond methods

