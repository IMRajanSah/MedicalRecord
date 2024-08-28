const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql')

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'medical'
})
db.connect((err)=>{
    if(err){
        console.log('Database Connection error\n'+err);
        return;
    }
    console.log('connection id:'+db.threadId);
})
// SELECT customer.MedicalNumber,customer.CustomerName,agent.AgentID,agent.Name from customer join agent on customer.RelatedAgent=agent.AgentID where customer.dateCreated between '2024-08-01' and '2024-08-10'
db.query("SELECT * from customer join agent on customer.RelatedAgent=agent.AgentID where customer.dateCreated between '2024-08-01' and '2024-08-10'",(error,res,field)=>{
    if(error){
        console.log('error');
        throw error;
    }
    
    res.forEach(element => {
        console.log(element);
    });
})
app.get('/customer',(req,res)=>{
    const sqlQuery = "SELECT * from customer"
    db.query(sqlQuery,(err,result)=>{
        if(err){
            return res.json({Message:"Error from server side"})
        }
        return res.json(result)
    })
})
app.get('/agent',(req,res)=>{
    const sqlQuery = "SELECT * from agent"
    db.query(sqlQuery,(err,result)=>{
        if(err){
            return res.json({Message:"Error from server side"})
        }
        return res.json(result)
    })
})
app.listen('8081',()=>{
    console.log('listening');
    
})