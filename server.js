const express = require("express")
const server = express()
// const { connect } = require("http2")

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



  


    


    

  
    



 
  server.listen(2001, () => {
    console.log('Listening on 127.0.0.1:2001');
  });
  
