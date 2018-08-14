const{ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
// var id = '5b6e6dbe74afedc014e02ec9';
// if (!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

//User.findById
User.findById('5b6e76ba0f54e8e015b22c43').then((user) => {
  if (!user){
    return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user, undefined, 2));
},(e) => {
  console.log(e);
});
