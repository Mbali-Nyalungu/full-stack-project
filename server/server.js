const express = require("express");
const server = express();


server.use(express.json());


server.use("/patients" ,require('./routes/patientRoutes'))

 
 
  server.listen(2001, () => {
    console.log('Listening on 127.0.0.1:2001');
  });
  
