
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



let category='stationary';  
con.query('select itemno, intname, price,category from item where category=?', [category], 
(err, rows) => {
    if (err) {
        console.log(err);  
    } else {
        if(rows.length > 0)
        {
            for(let i=0; i < rows.length; i++)
            console.log(rows[i].itemno + " " + rows[i].intname + " " + rows[i].price + " " +rows[i].category);
        }
            else
           console.log("no emp found with "+ itemno);
    
        }
}
);
