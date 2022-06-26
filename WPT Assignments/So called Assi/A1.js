const url="";
let dbparams=
{
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'latur',
	port:3306
};
const mysql = require('mysql2');
const con=mysql.createConnection(dbparams);

let itemno = 3;
let intname = 'Apple';
let price =300;
let category = 'Fruits';
con.query('insert into item(itemno,intname,price,category) values (?,?,?,?)', [itemno,intname,price,category], 
(err, res1) => {
    if (err) {
        console.log(err);  
    } else {
        console.log(res1.affectedRows)     
       
    }
}
);


