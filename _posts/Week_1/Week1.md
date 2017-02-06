---
title: Week 1
category: week_1
---


## What is Nodejs? 

Nodejs is a JavaScript runtime. It means that you can run your JavaScript in other places other than your browser. 

## How do you I install it? 

Head to [https://nodejs.org]() and grab the packaged file for your operating system. 

## What can you do with it?

There are ways that you can use Nodejs. It can be used for having REST-ful APIs. It's easy to do so with the powerful `express` library. 
We will look into doing a simple API. 

## Getting started

All you need to know to get started with Nodejs is knowing JaveScript syntax. Let's do a super simple exercise.
 
 
Open your terminal and go to the directory that you created for this lesson. 
Create a file called `hello.js`. You can use `nano` command to create a new file.

```
nano hello.js
```

Open it in your editor. Add the following in that file: 

``` 
console.log('hello world');
```

Save the file and run the following command: 

```
node hello.js
```

You should get the following output: 

```
hello world
```

You now have done a `hello world` program in Nodejs. 

## What else is good to know? 

it's good to know how to organize your code in Node. It uses a module system. Here is an example of that. 
Let's use our hello.js in a different file. In order to do that, create another file called `main.js` and add the following:  

```
const hello = require('./hello');
```

We are saying that I need `hello` file which is in the same directory hence `./`.
If we look in our hello file, there is nothing from that file that is accessible from another file. We need to `export` object from `hello` file so other files can use it. Let's see how that looks: 

``` 
exports.world = function() {
  console.log('hell world');
}
```
At this point, `hello` module has a function called `world` that can be used outside of the file. Let's use it: 

In your `main.js` file continue adding this: 

``` 
hello.world();
```
Now, it's time to test our little export and import, in your terminal, write the following: 

```
node main.js
```

You should get: 

```
> hello world
```
___

 Files used in this section: 
  
 [hello.js](hello.js)
 