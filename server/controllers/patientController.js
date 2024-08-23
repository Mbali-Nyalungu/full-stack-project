

const mysql = require('mysql2');


const connection = mysql.createConnection({
    user: "root",
    host: "localhost",
    database: "HOSPITAL_MANAGEMENT",
    password: "Letsdoit!"
});


connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database.');
});


exports.getAllPatients = async (req, res) => {
    const query = 'SELECT * FROM PATIENT_';

    try {
        const [results] = await connection.promise().query(query);
        res.json(results);
    } catch (err) {
        console.error(`Error executing query: ${err}`);
        res.status(500).send('An error occurred while retrieving data');
    }
};


exports.createAllPatients = async (req, res) => {
    const { Patient_Surname, Patient_name, DateOfBirth, gender, Patient_cellphone } = req.body;
    const query = `
        INSERT INTO PATIENT_ (Patient_Surname, Patient_name, DateOfBirth, gender, Patient_cellphone)
        VALUES (?, ?, ?, ?, ?)
    `;
    const values = [Patient_Surname, Patient_name, DateOfBirth, gender, Patient_cellphone];

    try {
        const [result] = await connection.promise().query(query, values);
        res.status(201).json({ message: "Patient successfully created", id: result.insertId });
    } catch (err) {
        console.error(`Error executing query: ${err}`);
        res.status(500).send('An error occurred while creating data');
    }
};


exports.getAllPatientsById = async (req, res) => {
    const { Patient_num } = req.params;

    const query = 'SELECT * FROM PATIENT_ WHERE Patient_num = ?';
    const values = [Patient_num];

    try {
        const [results] = await connection.promise().query(query, values);
        if (results.length > 0) {
            res.json(results[0]);
        } else {
            res.status(404).json({ message: "Patient not found" });
        }
    } catch (err) {
        console.error(`Error executing query: ${err}`);
        res.status(500).send('An error occurred while retrieving data');
    }
};


exports.updateAllPatientsById = async (req, res) => {
    const { Patient_num } = req.params;
    const { Patient_Surname, Patient_name, DateOfBirth, gender, Patient_cellphone } = req.body;

    const updateQuery = `
        UPDATE PATIENT_
        SET Patient_Surname = ?, Patient_name = ?, DateOfBirth = ?, gender = ?, Patient_cellphone = ?
        WHERE Patient_num = ?
    `;
    const updateValues = [Patient_Surname, Patient_name, DateOfBirth, gender, Patient_cellphone, Patient_num];

    try {
        const [results] = await connection.promise().query(updateQuery, updateValues);
        if (results.affectedRows > 0) {
            res.status(200).send("Patient successfully updated");
        } else {
            res.status(404).send("Patient not found");
        }
    } catch (err) {
        console.error(`Error executing query: ${err}`);
        res.status(500).send('An error occurred while updating data');
    }
};


exports.deleteAllPatientsById = async (req, res) => {
    const { Patient_num } = req.params;

    const deleteQuery = 'DELETE FROM PATIENT_ WHERE Patient_num = ?';

    try {
        const [result] = await connection.promise().query(deleteQuery, [Patient_num]);
        if (result.affectedRows > 0) {
            res.status(200).json({ message: "Patient successfully deleted" });
        } else {
            res.status(404).json({ message: "Patient not found" });
        }
    } catch (err) {
        console.error(`Error executing query: ${err}`);
        res.status(500).send('An error occurred while deleting data');
    }
};
