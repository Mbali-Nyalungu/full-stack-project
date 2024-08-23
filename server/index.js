

document.addEventListener('DOMContentLoaded', () => {
    const showTable = document.getElementById('showTable');
    const displayPatients = document.getElementById('displayPatients');
    const table = document.getElementById('table');
    const form = document.getElementById('form');
    const patientNumInput = document.getElementById('patientNum');
    const surnameInput = document.getElementById('surname');
    const nameInput = document.getElementById('name');
    const cellphoneInput = document.getElementById('cellphone');
    const genderInput = document.getElementById('gender');
    const dobInput = document.getElementById('dob');
    const cancelButton = document.getElementById('cancelButton');
    const formTitle = document.getElementById('formTitle');
    const patientTableBody = document.getElementById('patientTableBody');

    let patients = [];

   
    showTable.addEventListener('click', () => {
        table.classList.toggle('hidden');
        showTable.textContent = table.classList.contains('hidden') ? 'Show Table' : 'Hide Table';
    });

    
    displayPatients.addEventListener('click', fetchPatients);

    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        
        const patient = {
            Patient_Surname: surnameInput.value.trim(),
            Patient_name: nameInput.value.trim(),
            Patient_cellphone: cellphoneInput.value.trim(),
            gender: genderInput.value.trim(),
            DateOfBirth: dobInput.value
        };

        const patientId = patientNumInput.value.trim();
        const method = patientId ? 'PUT' : 'POST'; 
        const url = patientId ? 
            `http://localhost:2002/patients/${patientId}` : 
            'http://localhost:2002/patients';

        try {
            const response = await fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(patient)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            resetForm();
            fetchPatients(); 
        } catch (error) {
            console.error(`Error ${method === 'POST' ? 'adding' : 'updating'} patient:`, error);
            displayError('An error occurred. Please try again.');
        }
    });

    cancelButton.addEventListener('click', resetForm);

   
    async function fetchPatients() {
        try {
            const response = await fetch('http://localhost:2002/patients');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            patients = await response.json();
            renderTable();
        } catch (error) {
            console.error('Error fetching patients:', error);
            displayError('An error occurred while fetching patients.');
        }
    }

  
    function renderTable() {
        patientTableBody.innerHTML = '';
        patients.forEach(patient => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${patient.Patient_num}</td>
                <td>${patient.Patient_Surname}</td>
                <td>${patient.Patient_name}</td>
                <td>${patient.Patient_cellphone}</td>
                <td>${patient.gender}</td>
                <td>${patient.DateOfBirth}</td>
                <td>
                    <button class="edit-button" data-id="${patient.Patient_num}">Update</button>
                    <button class="delete-button" data-id="${patient.Patient_num}">Delete</button>
                </td>
            `;
            patientTableBody.appendChild(row);
        });
    }

    
    patientTableBody.addEventListener('click', async (e) => {
        const id = e.target.dataset.id;
        if (e.target.classList.contains('edit-button')) {
            await editPatient(id);
        } else if (e.target.classList.contains('delete-button')) {
            if (confirm('Are you sure you want to delete this patient?')) {
                await deletePatient(id);
                fetchPatients(); 
            }
        }
    });

   
    async function editPatient(id) {
        try {
            const response = await fetch(`http://localhost:2002/patients/${id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const patient = await response.json();
            if (patient) {
                patientNumInput.value = patient.Patient_num;
                surnameInput.value = patient.Patient_Surname;
                nameInput.value = patient.Patient_name;
                cellphoneInput.value = patient.Patient_cellphone;
                genderInput.value = patient.gender;
                dobInput.value = patient.DateOfBirth;
                formTitle.textContent = 'Update Patient';
                form.classList.remove('hidden');
                table.classList.add('hidden');
            }
        } catch (error) {
            console.error('Error fetching patient for editing:', error);
            displayError('An error occurred while fetching patient data.');
        }
    }

  
    async function deletePatient(id) {
        try {
            const response = await fetch(`http://localhost:2002/patients/${id}`, { method: 'DELETE' });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        } catch (error) {
            console.error('Error deleting patient:', error);
            displayError('An error occurred while deleting patient.');
        }
    }

   
    function resetForm() {
        patientNumInput.value = '';
        surnameInput.value = '';
        nameInput.value = '';
        cellphoneInput.value = '';
        genderInput.value = '';
        dobInput.value = '';
        formTitle.textContent = 'Add Patient';
        table.classList.remove('hidden');
    }

    
    function displayError(message) {
        
        alert(message);
    }
});