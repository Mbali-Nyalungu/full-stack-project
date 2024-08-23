const express = require('express');
const router = express.Router();
const patientController = require("../controllers/patientController")




    router.get('/', patientController.getAllPatients);
    router.get('/:Patient_num', patientController.getAllPatientsById);
    router.post ('/', patientController.createAllPatients);

    router.put('/:Patient_num', patientController.updateAllPatientsById);
    router.delete('/:Patient_num', patientController.deleteAllPatientsById);

    module.exports = router;
   
       
