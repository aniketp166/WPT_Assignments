const express = require('express');
const app = express();

app.use(express.static("sf"));

const mysql = require('mysql2');

let dbparams = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "pleaswork",
    port: 3306,
};

const con = mysql.createConnection(dbparams);

app.get("/bank", (req, resp) => { 
    let acno = req.query.acno;
    let output = { status: false, accountdetails: { acno: 0, balance: 0 } };

    con.query('select acno, balance from accdetails where  acno=?', [acno],
        (err, rows) => {
            if (err) {
                console.log(err);
            } else {
                if (rows.length > 0) {
                    output.status = true;
                    output.accountdetails = rows[0];
                }
            }
            console.log(output);
            resp.send(output);
    }
    
    );
    
});
app.listen(90, function () { 
        console.log("Server Listening at 90 Port");

});