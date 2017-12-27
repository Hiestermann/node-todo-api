
const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if (err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const mydb = db.db('TodoApp')

    mydb.collection('Todos').find().count().then((counter)=>{
        console.log('Todos counter: ', counter);
    }, (err) => {
        console.log('Unable to fetch todos', err)
    });

    //db.close();
});