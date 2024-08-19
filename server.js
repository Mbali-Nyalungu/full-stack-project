const express = require("express")
const server = express()
// const { connect } = require("http2")
const mysql = require("mysql2/promise") 
server.use(express.json())



const connecting =  mysql.createConnection({ 
      user: "root",
      host: "localhost",
      database: "HOSPITAL_MANAGEMENT",
      password:"Letsdoit!"
      

})
    
    try{
         console.log("connected to the database");

    }
  
  
    catch {  console.log("not conncted");

    }



  


    


    exports.getAllPatients = async (req, res) =>{

      const query = 'SELECT * FROM DOCTOR_T';
  
          try {
  
              const [results] = await con.promise().query(query);
              res.json(results);
              console.log(results);
          } catch (err) {
              console.error(`Error executing query: ${err}`);
              res.status(500).send('An error occurred while retrieving data');
          }
  
  }
  
  
  
    



 
  server.listen(2001, () => {
    console.log('Listening on 127.0.0.1:2001');
  });
  
