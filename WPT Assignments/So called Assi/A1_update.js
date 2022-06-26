const url="";
let dbparams=
{
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'pleaswork',
	port:3306
};
const mysql = require('mysql2');
const con=mysql.createConnection(dbparams);

let price =500;

let category = 'Fruits';
let itemno = 3;

con.query('update  item set price =?,category =? where itemno=? ', [price,category,itemno], 
(err,res1) => {
    if (err) {
        console.log(err);  
    } else {
        if(res1.affectedRows===0)
        {
            console.log("update failed");
        } 
        else
           console.log("update suceeded");    
       
    }
}
);
