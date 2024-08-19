const router = require("express").Router()
const controllers = require("../controller/controllers");






    router.get("/", patientControllers.getAllPatients);
    router.get("/:Practice_Number", patientControllers.getAllPatientsById);
    router.post ("/doctor", patientControllers.createAllControllers);
   
    router.delete("/:Practice_Number", patientControllers.deleteAllPatientsById);
    router.put("/:Practice_Number", patientControllers.putAllPracticeById);


   
       
 module.exports = router;
 