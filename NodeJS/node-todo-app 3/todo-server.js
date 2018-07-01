/**
 * Created by littleworld on 15/02/16.
 */


var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

var mysql = require('mysql');
function getConnection() {
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'todo'
  });
  return connection;
}

app.listen(3000, function () {
  console.log('todo app on port 3000');
});

app.use(express.static('public'));


app.post('/todo', function (req, res) {
  var connection = getConnection();
  connection.connect();
  var newTodo =
      {id: 0, task: req.body.task, task2: req.body.task2};


  var query = connection.query
      ('INSERT INTO todo SET ?', newTodo, function (err, result) {
      console.log("added " +  newTodo)});


    res.status(200).end();

  connection.end();
});

app.get('/todos', function(req, res) {
  var connection = getConnection();
  connection.connect();
  connection.query('SELECT * from todo order by id desc', function(err, rows, fields) {
    if (!err) {
      //console.log(rows);
      res.send(JSON.stringify(rows));
    }
    else {
      console.log('Error while performing Query.');
    }
  });
  connection.end();
});

app.delete('/todo/:id', function(req, res) {
  var id = req.params.id;
  var connection = getConnection();
  connection.connect();
  connection.query('DELETE from todo where id = ?', id,  function(err, rows, fields) {
    console.log('deleted ' + id);
    res.status(200).end();
  });
  connection.end();
});
