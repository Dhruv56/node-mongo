const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/test", (err, client) => {
    if (err) {
        return console.log("Unable to connect to the mongo database", err);
    }

    console.log("Connected to mongodb server");

    const db = client.db("test");

    db.collection('Todos').find({ completed: true }).toArray().then(doc => {
        console.log(JSON.stringify(doc, undefined, 2));
    }, err => {
        console.log(err);
    })

    client.close();
})