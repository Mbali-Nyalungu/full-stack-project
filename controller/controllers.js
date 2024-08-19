const mysql = require("mysql2") 


exports.getAllPatients = async (req, res) =>{

    const query = 'SELECT * FROM PATIENT_';

        try {

            const [results] = await con.promise().query(query);
            res.json(results);
            console.log(results);
        } catch (err) {
            console.error(`Error executing query: ${err}`);
            res.status(500).send('An error occurred while retrieving data');
        }

}

exports.createAllpatients= async (req ,res) =>{ 
    const { Patient_num,Patient_Surname, Patient_name,DateOfBirth ,gender,Patient_cellphone } = req.body;
        const query = `
            INSERT INTO Patient_T (Patient_Surname, Patient_name,DateOfBirth ,gender,Patient_cellphone);
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [Patient_num,Patient_Surname, Patient_name,DateOfBirth ,gender,Patient_cellphone];
    
        try {
            const [result] = await con.query(query, values);
            res.status(201).json({ message: "Patient successfully created", id: result.insertId });
        } catch (err) {
            console.error(`Error executing query: ${err}`);
            res.status(500).send('An error occurred while creating data');
        }
      }
  
      
  
      exports.getAllPatientsById = async (req, res) => {
        const { Patient_num } = req.params;
    
        const query = 'SELECT * FROM PATIENT_ WHERE Patient_num = ?';
        const values = [Patient_num ];
    
        try {
            const [results] = await con.promise().query(query, values);
            if (results.length > 0) {
                res.json(results[0]);
            } else {
                res.status(404).json({ message: "Patient not found " });
            }
        } catch (err) {
            console.error(`Error executing query: ${err}`);
            res.status(500).send('An error occurred while retrieving data');
        }
    }
    

    
    exports.putAllPatientsById = async (req, res) => {
        const { Patient_num } = req.params;
        const {Patient_Surname, Patient_name,DateOfBirth ,gender,Patient_cellphone } = req.body;
    
        try {
            
            const [patient] = await con.promise().query('SELECT * FROM PATIENT_');
            const Patients = Patients.find(pat => pat.Patient_num  == Patient_num );
    
            if (!patient) {
                return res.status(404).json({ message: "Patient not found" });
            }
        
        const updateQuery = `
            UPDATE DOCTOR_T
            SET Patient_Surname = ?, Patient_name= ?, DateOfBirth = ?, gender = ?, Patient_cellphone] = ?, 
            WHERE Patient_num = ?
        `;
        const updateValues = [Patient_num,Patient_Surname, Patient_name,DateOfBirth ,gender,Patient_cellphone];

        const [results] = await con.promise().query(updateQuery, updateValues);

        if (results.affectedRows > 0) {
            res.status(201).send("Data successfully updated");

        } else {
            res.status(404).send("Patient not found");
        }
    } catch (err) {
        console.error(`Error executing query: ${err}`);
        res.status(500).send('An error occurred while updating data');
    }
}
exports.deleteAllPatientsById = async (req, res) => {
    const { Patient_num } = req.params;

    try {
       
        const [patients] = await con.promise().query
        ('SELECT * FROM PATIENT_ WHERE Patient_num = ?', [Patient_num]);

        if (patients.length === 0) {
            return res.status(404).json({ message: "Patient not found" });
        }

        
        const deleteQuery = 'DELETE FROM Patient_T WHERE Patient_num = ?';
        const [result] = await con.promise().query(deleteQuery, [Patient_num]);

        if (result.affectedRows > 0) {
            res.status(201).json({ message: "Patient successfully deleted" });
        } else {
            res.status(404).json({ message: "Patient not found"  });
        }
    } catch (err) {
        console.error(`Error executing query: ${err}`);
        res.status(500).send('An error occurred while deleting data');
    }
};
     
    
    