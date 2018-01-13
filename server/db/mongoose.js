var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds251737.mlab.com:51737/node-todo-api' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose}