const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '179.188.16.118',
    user: 'lirollajr53',
    password: 'Pw@senh4',
    database: 'lirollajr53' 
});

connection.connect(function(err){
    if(err) return console.log(err);
    console.log('Conectou!');
});