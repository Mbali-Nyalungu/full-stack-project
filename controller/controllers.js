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

exports.createAllDoctors = async (req ,res) =>{ 
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
  
      
  
  