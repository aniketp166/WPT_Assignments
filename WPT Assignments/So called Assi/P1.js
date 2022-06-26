const express = require('express');
const app = express();

app.use(express.static("sf"));

const mysql = require('mysql2');

let dbparams = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "latur",
    port: 3306,
};

const con = mysql.createConnection(dbparams);

app.get("/blurevent", (req, resp) => { 
    let rollno = req.query.rollno;
    let output = { status: false, studentdetails: { rollno: 0, name: 0,marks:0 } };

    con.query('select rollno, name,marks from studentdetails where  rollno=?', [rollno],
        (err, rows) => {
            if (err) {
                console.log(err);
            } else {
                if (rows.length > 0) {
                    output.status = true;
                    output.studentdetails = rows[0];
                }
            }
            console.log(output);
            resp.send(output);
    }
    
    );    

    });
    app.get("/showcontent",(req,res)=>{ 

        conn.query('select * from studentdetails',[],(err,rows)=>{
            if(err){
                console.log("error occured "+err);
            }
           
    
            res.send(rows)
    
        })
    })


    app.get("/updatedetail",(req,res)=>{
        let input={rollno:req.query.rollno, name:req.query.name, marks:req.query.marks}
        let output={status:false, studentdetailsstudentdetails:{}}
       
        con.query('update studentdetails set name=? , marks=? where rollno=?',[input.name,input.marks,input.rollno],(err,res1)=>{
            if(err){
                console.log("error occurred "+err);
            }else{
                if(res1.affectedRows>0){
                    
                   output.status=true; 
                }
            }
    
            res.send(output);
        })
    })
    

    app.get("/adddetail",(req,res)=>{
        let input={rollno:req.query.rollno, name:req.query.name, marks:req.query.marks}
        console.log(input);
        let output={status: false};
        conn.query('insert into studentdetails(rollno,name, marks) values (?,?,?)',[input.rollno,input.name,input.marks],(err,res1)=>{
            if(err){
                console.log("error occured nodejs "+err);
            }else{
                if(res1.affectedRows > 0)
                output.status=true;
            }
    
            res.send(output);
    
        })
    
    
    })




app.listen(903, function () { 
        console.log("Server Listening at 903 Port");

});