---
title: Week 3
category: week_3
---

What is MongoDB?
---
It' a document-oriented database. It's not like mySQL (Structured Query Language) and does not use tables and rows to save data. It's build on collections and documents. 

How to Install?
--
Go to [MongoDB](https://www.mongodb.com/download-center?jmp=nav#community) Website and select your system. 
Another way to install MongoDB is `homebrew` if you are on macOS. 

Here is how you do it: 
make sure you have `homebrew` installed. If you get an error with the following commnad, you most likely need to install homebrew first. 

```
brew install mongodb
```

After you are finished installing mongo, go to `src` folder and create a `data` folder and `db` folder inside that folder which will hold all the database related files.
This folder needs to have right permissions 

```
sudo chown -R `id -un` data/db
```

At this point, you need to run MongoDB. Open a new tab to start the mongo daemon: 

```
mongod 
```
You will get some output and last line should say something like `waiting for connections on port 27017`. At this point, your mongo server is waiting for connection. Duh! 

Open up another terminal without closing the pervious one and execute the following: 

```
mongo
```

This is now mongo shell where you can execute commands for your mongoDB. 