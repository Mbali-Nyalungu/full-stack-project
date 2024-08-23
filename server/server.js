// const express = require("express");
// const server = express();
// server.use(express.json());
// server.use("/patients" ,require ('./routes/patientRoutes'))

// const cors = require('cors');
// server.use(cors());

// const port = 2002;
// server.use(express.json())


 
//   server.listen(2002, () => {
//     console.log('Listening on 127.0.0.1:2002');
//   });
  
  // const express = require("express");
  // const cors = require('cors');
  // const server = express();
  
  // // Middleware setup
  // server.use(cors());  // CORS should be set up before other routes and middleware
  // server.use(express.json());
  
  // // Route setup
  // server.use("/patients", require('./routes/patientRoutes'));
  
  
  // // Port configuration
  // const port = 2002;
  // server.listen(port, () => {
  //   console.log(`Listening on http://127.0.0.1:${port}`);
  // });
  

  const express = require("express");
const cors = require('cors');
const server = express();


server.use(cors());  
server.use(express.json());

// Route setup
server.use("/patients", require('./routes/patientRoutes'));

// Port configuration
const port = 2002;
server.listen(port, () => {
    console.log(`Listening on http://127.0.0.1:${port}`);
});
