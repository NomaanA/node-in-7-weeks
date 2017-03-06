---
title: Week 4
category: week_4
---


At this point, you should have a mongo shell open for us to explore some of Mongo capabilities.
Mongo shell can execute js code so you can write functions in the REPL. 
let's see all the databases we already have. 

```bash
show dbs
```

That should give you `admin` and `local` which are the default databases. In order to find out what database you are using at the moment, execute this: 

```
db
``` 
You will get `test`. 

If you want to create a new database, you can use: 

```
use office_status 
```

You now created a database called `office_status` and have switched to that. 
We can now insert *documents* to our databases. Documents are essentially a JSON bulb. In mySQL sense, row = documents and tables = collections. Now, in the shell, execute the following comment:

```
db.offices.insert({
    "name": "03-021",
    "isOccupied": false
})

```

You have created a *collection* called `offices` and now inserting a document into the collection. 

If you get `WriteResult({ "nInserted" : 1 })` back, you just inserted your first document. 

Let's check to see if it's really there. 

If you were to add multiple documents, you need to pass it in as an array. 

```
db.offices.find().pretty()
```
Ops, we forgot to add the equipment associated with that office to our document. Here is how you update: 

```
db.offices.update({"_id" : ObjectId("58b38b8192ce8910a4b323e8")}, {"equipments": []})
```
`"nModified": 1` indicates that one documents has been modified/updated. 

If you were to drop/delete the collection, you can use: 

```
db.offices.drop()
```
