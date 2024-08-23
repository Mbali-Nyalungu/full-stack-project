

  const express = require("express");
const cors = require('cors');
const server = express();


server.use(cors());  
server.use(express.json());



server.use("/patients", require('./routes/patientRoutes'));


const port = 2002;
server.listen(port, () => {
    console.log(`Listening on http://127.0.0.1:${port}`);
});
