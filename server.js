const express = require("express")
const server = express()
// const { connect } = require("http2")
const mysql = require("mysql2") 
server.use(express.json())



const connecting =  mysql.createConnection({ 
      user: "root",
      host: "localhost",
      database: "HOSPITAL_MANAGEMENT",
      password:"Letsdoit!"
      


    });


    


server.get("/")((req, res) => {
  
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});







  
    



 
  server.listen(2001, () => {
    console.log('Listening on 127.0.0.1:2000');
  });
  
