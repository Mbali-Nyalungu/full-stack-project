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