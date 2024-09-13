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
    database:'medical',
    timezone : "+00:00"
})
db.connect((err)=>{
    if(err){
        console.log('Database Connection error\n'+err);
        return;
    }
    console.log('connection id:'+db.threadId);
})
// SELECT customer.MedicalNumber,customer.CustomerName,agent.AgentID,agent.Name from customer join agent on customer.RelatedAgent=agent.AgentID where customer.dateCreated between '2024-08-01' and '2024-08-10'
// db.query("SELECT * from customer join agent on customer.RelatedAgent=agent.AgentID where customer.dateCreated between '2024-08-01' and '2024-08-10'",(error,res,field)=>{
//     if(error){
//         console.log('error');
//         throw error;
//     }
    
//     res.forEach(element => {
//         console.log(element);
//     });
// })
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
app.post('/getCustomerByAgentID',(req,res)=>{
    // console.log(req.body.agentID);
    const sqlQuery= "SELECT * FROM agent JOIN Customer ON agent.agentID=Customer.RelatedAgent where agent.agentID="+Number(req.body.agentID)
    db.query(sqlQuery,(err,result)=>{
        if(err){
            return res.json({Message:"Error from server side"})
        }
        // console.log(result);
        return res.json(result)
    })
    // }
})
app.post('/getCustomerByDate',(req,res)=>{
    // console.log(req.body.dateData);
    const sqlQuery= 'select * from customer where dateCreated="'+req.body.dateData+'"'
    db.query(sqlQuery,(err,result)=>{
        if(err){
            return res.json({Message:"Error from server side"})
        }
        // console.log(result[0].dateCreated);
        return res.json(result)
    })
    // }
})

app.post('/addAgent',(req,res)=>{
    // if(Object.keys(req.body).length === 0 || req.body.agentID==='' || req.body.agentName==='' || req.body.agentAddress==='' || req.body.agentMobileNumber===''){
    //     res.statusMessage = "Mandatory Data is missing";
    //     res.status(400).end();
    //     return
    // }
    let sqlQuery
    if(req.body.agentDateCreated===''){
        let currDate = new Date()
        currDate=currDate.toISOString().split('T')[0]
        sqlQuery = "insert into agent (AgentID,Name,Address,MobileNumber,dateCreated) Values ("+Number(req.body.agentID)+",'"+req.body.agentName
        +"','"+req.body.agentAddress+"','"+req.body.agentMobileNumber+"','"+currDate+"')"
    }else{
        sqlQuery = "insert into agent (AgentID,Name,Address,MobileNumber,dateCreated) Values ("+Number(req.body.agentID)+",'"+req.body.agentName
        +"','"+req.body.agentAddress+"','"+req.body.agentMobileNumber+"','"+req.body.agentDateCreated+"')"
    }
    // console.log(sqlQuery);
    
    db.query(sqlQuery,(err,result)=>{
        if(err){
            console.log(err);            
            res.statusMessage = "DB Error";
            res.status(500).end();
            return
        }else{
            res.status(200).send('DB Success')
            return
        }
    })
    // console.log(req.body);
})
app.post('/addCustomer',(req,res)=>{
    // if(Object.keys(req.body).length === 0 || req.body.MedicalNumber==='' || req.body.CustomerName==='' || req.body.Address==='' || req.body.MobileNumber===''
    // || req.body.ToBePaidByCustomer===''|| req.body.PaidToCustomer===''|| req.body.AppliedCountry===''|| req.body.CutomerWork===''|| req.body.RelatedAgent===''){
    //     res.statusMessage = "Mandatory Data is missing";
    //     res.status(400).end();
    //     return
    // }
    //to throw agent does not exist error
    const query= "select * from agent where AgentID="+Number(req.body.RelatedAgent)
    let statusAgent=true
    db.query(query,(err,result)=>{
        if(err){
            console.log(err);            
            res.statusMessage = "DB Error for Agent DB";
            res.status(400).end();
            return
        }
        if(result.length===0){
            statusAgent=false
        }
    })
    if(!statusAgent){
        res.statusMessage = req.body.RelatedAgent+" Agent Does not Exist.";
        res.status(400).end();
        return
    }
    let sqlQuery
    if(req.body.dateCreated===''){
        let currDate = new Date() 
        currDate=currDate.toISOString().split('T')[0]
        // currDate=currDate.getFullYear()+"-"+(currDate.getMonth()+1)+"-"+currDate.getDate()
        sqlQuery = "insert into customer Values ("+Number(req.body.MedicalNumber)+",'"+req.body.CustomerName
        +"','"+req.body.Address+"','"+req.body.MobileNumber+"','"+req.body.Height+"','"+req.body.Weight+"','"
        +req.body.BloodGroup+"','"+Number(req.body.ToBePaidByCustomer)+"','"+Number(req.body.PaidToCustomer)+"','"+req.body.AppliedCountry+"','"+
        req.body.CutomerWork+"','"+Number(req.body.RelatedAgent)+"','"+currDate+"')"
    }else{
        sqlQuery = "insert into customer Values ("+Number(req.body.MedicalNumber)+",'"+req.body.CustomerName
        +"','"+req.body.Address+"','"+req.body.MobileNumber+"','"+req.body.Height+"','"+req.body.Weight+"','"
        +req.body.BloodGroup+"','"+Number(req.body.ToBePaidByCustomer)+"','"+Number(req.body.PaidToCustomer)+"','"+req.body.AppliedCountry+"','"+
        req.body.CutomerWork+"','"+Number(req.body.RelatedAgent)+"','"+req.body.dateCreated+"')"
    }
    console.log(sqlQuery);
    
    db.query(sqlQuery,(err,result)=>{
        if(err){
            // console.log(err);            
            res.statusMessage = "DB Error";
            res.status(500).end();
            return
        }else{
            res.status(200).send('DB Success')
            return
        }
    })
    

})
app.listen('8081',()=>{
    console.log('listening');
    
})