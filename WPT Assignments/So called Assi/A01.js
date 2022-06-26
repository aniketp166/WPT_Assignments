const express = require('express');
const app = express();

const mysql = require('mysql2');

let dbparams=
{
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'latur',
	port:3306
}; //

const con=mysql.createConnection(dbparams);

app.use(express.static("sf")) ;

app.get("/login",(req,resp)=>{


    let itemno =req.query.itemno;
    let intname =req.query.intname;
    let price =req.query.price;
     let category=req.query.category;
    
    let loginstatus={ status:false, message:"login due to user"};
    
    con.query('insert into item(itemno,intname,price,category) values (?,?,?,?)', 
    [itemno,intname,price,category], 
(err, rows) => {
    if (err) {
        console.log(err);  
    } else {
        if(rows.length > 0)
        {
            console.log(rows.affectedRows)  
        loginstatus.status=true;
        loginstatus.message="login successful";
        }

    }
    resp.send(loginstatus);
    
}
);
  
});

app.get("/updateprofile",(req,resp)=> {
    resp.send("ok for update profile");
});

//setup the server.
app.listen(901, function () {
    console.log("server listening at port 901...");
});