const express = require("express");
const app = express();

const mysql = require("mysql2");
 
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "logdb"
});

let date = new Date();
(function updateServerRow(date){
    const sql = `UPDATE server SET last_entrance_date=? WHERE id=?`;
    const data = [date, 1];
    connection.query(sql, data, function(err, results) {
        if(err) console.log(err);
        console.log(results);
    });
})(`${date.toDateString()} ${date.toTimeString().split(' ')[0]}`);

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin','*');  
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    if (req.method === "OPTIONS") {
    return res.status(200).end();
    }
    next();
    });

app.get('/autorization', function(request, response){  
    let id = request.query.id;
    let email = request.query.email;
    let date = request.query.date;
    console.log(id, email, date);

    const sql = `SELECT * FROM users`;
 
    connection.query(sql, function(err, results) {
        if(err){
            console.log(err);
            return;
        }
        const users = results;
        for(let i=0; i < users.length; i++)
            if(users[i].id == id){
                updateUserRow(id, date);
                return;
            }
        createUserRow(id, email, date);
    });

    function createUserRow(id, email, date){
        const sql = `INSERT INTO users(id, email, last_entrance_date) VALUES('${id}', '${email}', '${date}')`;
        connection.query(sql, function(err, results) {
        if(err) console.log(err);
            console.log(results);
        });
    }

    function updateUserRow(id, date){
        const sql = `UPDATE users SET last_entrance_date=? WHERE id=?`;
        const data = [date, id];
        connection.query(sql, data, function(err, results) {
            if(err) console.log(err);
            console.log(results);
        });
    }
});


app.get('/add', function(request, response){  
    let userId = request.query.userId;
    let trackId = request.query.trackId;
    let trackName = request.query.trackName;
    let date = request.query.date;
    const sql = `INSERT INTO tracks(id, name, upload_date, upload_user) VALUES('${trackId}', '${trackName}', '${date}', '${userId}')`;
        connection.query(sql, function(err, results) {
        if(err) console.log(err);
            console.log(results);
        });
});


app.listen(5500);