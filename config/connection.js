var mysql = require("mysql");
var connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"himawari19!",
    database: "burgers_db"
})

//JAWSDB connection attempt
//var connection = mysql.createConnection({
//    host:"x40p5pp7n9rowyv6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//    user:"bhpn4t5a0zf4iwi5",
//    password:"vqr97bbx1fwoxz8g",
//    database: "t99klzj3msx6pjby"
//})

connection.connect(function(err) {
    if(err)throw err;
    console.log("connected as id: " + connection.threadid);
});

module.exports = connection;