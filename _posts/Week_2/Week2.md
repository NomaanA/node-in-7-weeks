
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

`get` method is the the equivalent of HTTP `GET` method. The super dumb down version of the above snippet is that there is a `GET` request on `/` and as a respond, send string 'Yo'. When the app gets more complicated, we are going to send a JSON back to client that was quired off of a database. 

if the request made it to your server and there was no error, you can do some work and return it to the client. In order to that, you need to check the status on `res` object.

```nodejs
app.get('/', (res, req)=>{
  if(res.statusCode == 200) {
    res.send('your request made it through.')
  }
})
```
Here is a possible, good to know at the point, statusCodes:

```text
200: Ok
404: Not Found
401: Unauthorized
503: Service Unavailable
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

file used in this   [app.js](../../src/app.js)
