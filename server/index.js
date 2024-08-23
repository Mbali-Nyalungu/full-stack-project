

// document.addEventListener('DOMContentLoaded', () => {
//     const showTable = document.getElementById('showTable');
//     const displayPatients = document.getElementById('displayPatients');
//     const table = document.getElementById('table');
//     const form = document.getElementById('form');
//     const patientNumInput = document.getElementById('patientNum');
//     const surnameInput = document.getElementById('surname');
//     const nameInput = document.getElementById('name');
//     const cellphoneInput = document.getElementById('cellphone');
//     const genderInput = document.getElementById('gender');
//     const dobInput = document.getElementById('dob');
//     const cancelButton = document.getElementById('cancelButton');
//     const formTitle = document.getElementById('formTitle');
//     const patientTableBody = document.getElementById('patientTableBody');

//     let patients = [];

//     // Toggle table visibility
//     showTable.addEventListener('click', () => {
//         table.classList.toggle('hidden');
//         showTable.textContent = table.classList.contains('hidden') ? 'Show Table' : 'Hide Table';
//     });

//     // Fetch and display patients
//     displayPatients.addEventListener('click', fetchPatients);

//     // Form submission (Add or Update patient)
//     form.addEventListener('submit', async (e) => {
//         e.preventDefault();
//         const patient = {
//             Patient_Surname: surnameInput.value.trim(),
//             Patient_name: nameInput.value.trim(),
//             Patient_cellphone: cellphoneInput.value.trim(),
//             gender: genderInput.value.trim(),
//             DateOfBirth: dobInput.value
//         };

//         const method = patientNumInput.value ? 'PUT' : 'POST';
//         const url = patientNumInput.value ? 
//             `http://localhost:2002/patients/${patientNumInput.value}` : 
//             'http://localhost:2002/patients';

//         try {
//             const response = await fetch(url, {
//                 method: method,
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(patient)
//             });

//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }

//             resetForm();
//             fetchPatients();
//         } catch (error) {
//             console.error(`Error ${method === 'POST' ? 'adding' : 'updating'} patient:`, error);
//             displayError('An error occurred. Please try again.');
//         }
//     });

//     // Cancel form
//     cancelButton.addEventListener('click', resetForm);

//     // Fetch patients from the server
//     async function fetchPatients() {
//         try {
//             const response = await fetch('http://localhost:2002/patients');
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             patients = await response.json();
//             renderTable();
//         } catch (error) {
//             console.error('Error fetching patients:', error);
//             displayError('An error occurred while fetching patients.');
//         }
//     }

//     // Render the patient table
//     function renderTable() {
//         patientTableBody.innerHTML = '';
//         patients.forEach(patient => {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//                 <td>${patient.Patient_num}</td>
//                 <td>${patient.Patient_Surname}</td>
//                 <td>${patient.Patient_name}</td>
//                 <td>${patient.Patient_cellphone}</td>
//                 <td>${patient.gender}</td>
//                 <td>${patient.DateOfBirth}</td>
//                 <td>
//                     <button class="edit-button" data-id="${patient.Patient_num}">Update</button>
//                     <button class="delete-button" data-id="${patient.Patient_num}">Delete</button>
//                 </td>
//             `;
//             patientTableBody.appendChild(row);
//         });
//     }

//     // Handle table button clicks
//     patientTableBody.addEventListener('click', async (e) => {
//         const id = e.target.dataset.id;
//         if (e.target.classList.contains('edit-button')) {
//             await editPatient(id);
//         } else if (e.target.classList.contains('delete-button')) {
//             if (confirm('Are you sure you want to delete this patient?')) {
//                 await deletePatient(id);
//                 fetchPatients(); // Refresh the list after deletion
//             }
//         }
//     });

//     // Prepare form for editing a patient
//     async function editPatient(id) {
//         try {
//             const response = await fetch(`http://localhost:2002/patients/${id}`);
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             const patient = await response.json();
//             if (patient) {
//                 patientNumInput.value = patient.Patient_num;
//                 surnameInput.value = patient.Patient_Surname;
//                 nameInput.value = patient.Patient_name;
//                 cellphoneInput.value = patient.Patient_cellphone;
//                 genderInput.value = patient.gender;
//                 dobInput.value = patient.DateOfBirth;
//                 formTitle.textContent = 'Update Patient';
//                 form.classList.remove('hidden');
//                 table.classList.add('hidden');
//             }
//         } catch (error) {
//             console.error('Error fetching patient for editing:', error);
//             displayError('An error occurred while fetching patient data.');
//         }
//     }

//     // Delete a patient
//     async function deletePatient(id) {
//         try {
//             const response = await fetch(`http://localhost:2002/patients/${id}`, { method: 'DELETE' });
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//         } catch (error) {
//             console.error('Error deleting patient:', error);
//             displayError('An error occurred while deleting patient.');
//         }
//     }

//     // Reset the form fields
//     function resetForm() {
//         patientNumInput.value = '';
//         surnameInput.value = '';
//         nameInput.value = '';
//         cellphoneInput.value = '';
//         genderInput.value = '';
//         dobInput.value = '';
//         formTitle.textContent = 'Add Patient';
//         form.classList.add('hidden');
//         table.classList.remove('hidden');
//     }

//     // Display an error message in the UI
//     function displayError(message) {
//         // For now, use an alert; you might want to create a more sophisticated error display later
//         alert(message);
//     }
// });
// document.addEventListener('DOMContentLoaded', () => {
//     const showTable = document.getElementById('showTable');
//     const displayPatients = document.getElementById('displayPatients');
//     const table = document.getElementById('table');
//     const form = document.getElementById('form');
//     const patientNumInput = document.getElementById('patientNum');
//     const surnameInput = document.getElementById('surname');
//     const nameInput = document.getElementById('name');
//     const cellphoneInput = document.getElementById('cellphone');
//     const genderInput = document.getElementById('gender');
//     const dobInput = document.getElementById('dob');
//     const cancelButton = document.getElementById('cancelButton');
//     const formTitle = document.getElementById('formTitle');
//     const patientTableBody = document.getElementById('patientTableBody');

//     let patients = [];

//     // Toggle table visibility
//     showTable.addEventListener('click', () => {
//         table.classList.toggle('hidden');
//         showTable.textContent = table.classList.contains('hidden') ? 'Show Table' : 'Hide Table';
//     });

//     // Fetch and display patients
//     displayPatients.addEventListener('click', fetchPatients);

//     // Form submission (Add or Update patient)
//     form.addEventListener('submit', async (e) => {
//         e.preventDefault();
//         const patient = {
//             Patient_Surname: surnameInput.value.trim(),
//             Patient_name: nameInput.value.trim(),
//             Patient_cellphone: cellphoneInput.value.trim(),
//             gender: genderInput.value.trim(),
//             DateOfBirth: dobInput.value
//         };

//         const method = patientNumInput.value ? 'PUT' : 'POST';
//         const url = patientNumInput.value ? 
//             `http://localhost:2002/patients/${patientNumInput.value}` : 
//             'http://localhost:2002/patients';

//         try {
//             const response = await fetch(url, {
//                 method: method,
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(patient)
//             });

//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }

//             resetForm();
//             fetchPatients();
//         } catch (error) {
//             console.error(`Error ${method === 'POST' ? 'adding' : 'updating'} patient:`, error);
//             displayError('An error occurred. Please try again.');
//         }
//     });

//     // Cancel form
//     cancelButton.addEventListener('click', resetForm);

//     // Fetch patients from the server
//     async function fetchPatients() {
//         try {
//             const response = await fetch('http://localhost:2002/patients');
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             patients = await response.json();
//             renderTable();
//         } catch (error) {
//             console.error('Error fetching patients:', error);
//             displayError('An error occurred while fetching patients.');
//         }
//     }

//     // Render the patient table
//     function renderTable() {
//         patientTableBody.innerHTML = '';
//         patients.forEach(patient => {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//                 <td>${patient.Patient_num}</td>
//                 <td>${patient.Patient_Surname}</td>
//                 <td>${patient.Patient_name}</td>
//                 <td>${patient.Patient_cellphone}</td>
//                 <td>${patient.gender}</td>
//                 <td>${patient.DateOfBirth}</td>
//                 <td>
//                     <button class="edit-button" data-id="${patient.Patient_num}">Update</button>
//                     <button class="delete-button" data-id="${patient.Patient_num}">Delete</button>
//                 </td>
//             `;
//             patientTableBody.appendChild(row);
//         });
//     }

//     // Handle table button clicks
//     patientTableBody.addEventListener('click', async (e) => {
//         const id = e.target.dataset.id;
//         if (e.target.classList.contains('edit-button')) {
//             await editPatient(id);
//         } else if (e.target.classList.contains('delete-button')) {
//             if (confirm('Are you sure you want to delete this patient?')) {
//                 await deletePatient(id);
//                 fetchPatients(); // Refresh the list after deletion
//             }
//         }
//     });

//     // Prepare form for editing a patient
//     async function editPatient(id) {
//         try {
//             const response = await fetch(`http://localhost:2002/patients/${id}`);
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             const patient = await response.json();
//             if (patient) {
//                 patientNumInput.value = patient.Patient_num;
//                 surnameInput.value = patient.Patient_Surname;
//                 nameInput.value = patient.Patient_name;
//                 cellphoneInput.value = patient.Patient_cellphone;
//                 genderInput.value = patient.gender;
//                 dobInput.value = patient.DateOfBirth;
//                 formTitle.textContent = 'Update Patient';
//                 form.classList.remove('hidden');
//                 table.classList.add('hidden');
//             }
//         } catch (error) {
//             console.error('Error fetching patient for editing:', error);
//             displayError('An error occurred while fetching patient data.');
//         }
//     }

//     // Delete a patient
//     async function deletePatient(id) {
//         try {
//             const response = await fetch(`http://localhost:2002/patients/${id}`, { method: 'DELETE' });
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//         } catch (error) {
//             console.error('Error deleting patient:', error);
//             displayError('An error occurred while deleting patient.');
//         }
//     }

//     // Reset the form fields
//     function resetForm() {
//         patientNumInput.value = '';
//         surnameInput.value = '';
//         nameInput.value = '';
//         cellphoneInput.value = '';
//         genderInput.value = '';
//         dobInput.value = '';
//         formTitle.textContent = 'Add Patient';
//         form.classList.add('hidden');
//         table.classList.remove('hidden');
//     }

//     // Display an error message in the UI
//     function displayError(message) {
//         // For now, use an alert; you might want to create a more sophisticated error display later
//         alert(message);
//     }
// });


// 

// // document.addEventListener('DOMContentLoaded', () => {
// //     const showTable = document.getElementById('showTable');
// //     const displayPatients = document.getElementById('displayPatients');
// //     const table = document.getElementById('table');
// //     const form = document.getElementById('form');
// //     const patientNumInput = document.getElementById('patientNum');
// //     const surnameInput = document.getElementById('surname');
// //     const nameInput = document.getElementById('name');
// //     const cellphoneInput = document.getElementById('cellphone');
// //     const genderInput = document.getElementById('gender');
// //     const dobInput = document.getElementById('dob');
// //     const cancelButton = document.getElementById('cancelButton');
// //     const formTitle = document.getElementById('formTitle');
// //     const patientTableBody = document.getElementById('patientTableBody');

// //     let patients = [];

// //     // Toggle table visibility
// //     showTable.addEventListener('click', () => {
// //         table.classList.toggle('hidden');
// //         showTable.textContent = table.classList.contains('hidden') ? 'Show Table' : 'Hide Table';
// //     });

// //     // Fetch and display patients
// //     displayPatients.addEventListener('click', fetchPatients);

// //     // Form submission (Add or Update patient)
// //     form.addEventListener('submit', async (e) => {
// //         e.preventDefault();
        
// //         // Prepare patient data from form inputs
// //         const patient = {
// //             Patient_Surname: surnameInput.value.trim(),
// //             Patient_name: nameInput.value.trim(),
// //             Patient_cellphone: cellphoneInput.value.trim(),
// //             gender: genderInput.value.trim(),
// //             DateOfBirth: dobInput.value
// //         };

// //         const patientId = patientNumInput.value.trim();
// //         const method = patientId ? 'PUT' : 'POST'; // Determine HTTP method
// //         const url = patientId ? 
// //             `http://localhost:2002/patients/${patientId}` : 
// //             'http://localhost:2002/patients';

// //         try {
// //             const response = await fetch(url, {
// //                 method: method,
// //                 headers: { 'Content-Type': 'application/json' },
// //                 body: JSON.stringify(patient)
// //             });

// //             if (!response.ok) {
// //                 throw new Error(`HTTP error! Status: ${response.status}`);
// //             }

// //             resetForm();
// //             fetchPatients(); // Refresh the table after the operation
// //         } catch (error) {
// //             console.error(`Error ${method === 'POST' ? 'adding' : 'updating'} patient:`, error);
// //             displayError('An error occurred. Please try again.');
// //         }
// //     });

// //     // Cancel form
// //     cancelButton.addEventListener('click', resetForm);

// //     // Fetch patients from the server
// //     async function fetchPatients() {
// //         try {
// //             const response = await fetch('http://localhost:2002/patients');
// //             if (!response.ok) {
// //                 throw new Error(`HTTP error! Status: ${response.status}`);
// //             }
// //             patients = await response.json();
// //             renderTable();
// //         } catch (error) {
// //             console.error('Error fetching patients:', error);
// //             displayError('An error occurred while fetching patients.');
// //         }
// //     }

// //     // Render the patient table
// //     function renderTable() {
// //         patientTableBody.innerHTML = '';
// //         patients.forEach(patient => {
// //             const row = document.createElement('tr');
// //             row.innerHTML = `
// //                 <td>${patient.Patient_num}</td>
// //                 <td>${patient.Patient_Surname}</td>
// //                 <td>${patient.Patient_name}</td>
// //                 <td>${patient.Patient_cellphone}</td>
// //                 <td>${patient.gender}</td>
// //                 <td>${patient.DateOfBirth}</td>
// //                 <td>
// //                     <button class="edit-button" data-id="${patient.Patient_num}">Update</button>
// //                     <button class="delete-button" data-id="${patient.Patient_num}">Delete</button>
// //                 </td>
// //             `;
// //             patientTableBody.appendChild(row);
// //         });
// //     }

// //     // Handle table button clicks
// //     patientTableBody.addEventListener('click', async (e) => {
// //         const id = e.target.dataset.id;
// //         if (e.target.classList.contains('edit-button')) {
// //             await editPatient(id);
// //         } else if (e.target.classList.contains('delete-button')) {
// //             if (confirm('Are you sure you want to delete this patient?')) {
// //                 await deletePatient(id);
// //                 fetchPatients(); // Refresh the list after deletion
// //             }
// //         }
// //     });

// //     // Prepare form for editing a patient
// //     async function editPatient(id) {
// //         try {
// //             const response = await fetch(`http://localhost:2002/patients/${id}`);
// //             if (!response.ok) {
// //                 throw new Error(`HTTP error! Status: ${response.status}`);
// //             }
// //             const patient = await response.json();
// //             if (patient) {
// //                 patientNumInput.value = patient.Patient_num;
// //                 surnameInput.value = patient.Patient_Surname;
// //                 nameInput.value = patient.Patient_name;
// //                 cellphoneInput.value = patient.Patient_cellphone;
// //                 genderInput.value = patient.gender;
// //                 dobInput.value = patient.DateOfBirth;
// //                 formTitle.textContent = 'Update Patient';
// //                 form.classList.remove('hidden');
// //                 table.classList.add('hidden');
// //             }
// //         } catch (error) {
// //             console.error('Error fetching patient for editing:', error);
// //             displayError('An error occurred while fetching patient data.');
// //         }
// //     }

// //     // Delete a patient
// //     async function deletePatient(id) {
// //         try {
// //             const response = await fetch(`http://localhost:2002/patients/${id}`, { method: 'DELETE' });
// //             if (!response.ok) {
// //                 throw new Error(`HTTP error! Status: ${response.status}`);
// //             }
// //         } catch (error) {
// //             console.error('Error deleting patient:', error);
// //             displayError('An error occurred while deleting patient.');
// //         }
// //     }

// //     // Reset the form fields
// //     function resetForm() {
// //         patientNumInput.value = '';
// //         surnameInput.value = '';
// //         nameInput.value = '';
// //         cellphoneInput.value = '';
// //         genderInput.value = '';
// //         dobInput.value = '';
// //         formTitle.textContent = 'Add Patient';
// //         form.classList.add('hidden');
// //         table.classList.remove('hidden');
// //     }

// //     // Display an error message in the UI
// //     function displayError(message) {
// //         // For now, use an alert; you might want to create a more sophisticated error display later
// //         alert(message);
// //     }
// // });

// document.addEventListener('DOMContentLoaded', () => {
//     const showTable = document.getElementById('showTable');
//     const displayPatients = document.getElementById('displayPatients');
//     const table = document.getElementById('table');
//     const form = document.getElementById('form');
//     const patientNumInput = document.getElementById('patientNum');
//     const surnameInput = document.getElementById('surname');
//     const nameInput = document.getElementById('name');
//     const cellphoneInput = document.getElementById('cellphone');
//     const genderInput = document.getElementById('gender');
//     const dobInput = document.getElementById('dob'); // Use id "dob" as in HTML
//     const cancelButton = document.getElementById('cancelButton');
//     const formTitle = document.getElementById('formTitle');
//     const patientTableBody = document.getElementById('patientTableBody');

//     let patients = [];

//     // Toggle table visibility
//     showTable.addEventListener('click', () => {
//         table.classList.toggle('hidden');
//         showTable.textContent = table.classList.contains('hidden') ? 'Show Table' : 'Hide Table';
//     });

//     // Fetch and display patients
//     displayPatients.addEventListener('click', fetchPatients);

//     // Form submission (Add or Update patient)
//     form.addEventListener('submit', async (e) => {
//         e.preventDefault();
        
//         // Prepare patient data from form inputs
//         const patient = {
//             Patient_Surname: surnameInput.value.trim(),
//             Patient_name: nameInput.value.trim(),
//             Patient_cellphone: cellphoneInput.value.trim(),
//             gender: genderInput.value.trim(),
//             DateOfBirth: dobInput.value
//         };

//         const patientId = patientNumInput.value.trim();
//         const method = patientId ? 'PUT' : 'POST'; // Determine HTTP method
//         const url = patientId ? 
//             `http://localhost:2002/patients/${patientId}` : 
//             'http://localhost:2002/patients';

//         try {
//             const response = await fetch(url, {
//                 method: method,
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(patient)
//             });

//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }

//             resetForm();
//             fetchPatients(); // Refresh the table after the operation
//         } catch (error) {
//             console.error(`Error ${method === 'POST' ? 'adding' : 'updating'} patient:`, error);
//             displayError('An error occurred. Please try again.');
//         }
//     });

//     // Cancel form
//     cancelButton.addEventListener('click', resetForm);

//     // Fetch patients from the server
//     async function fetchPatients() {
//         try {
//             const response = await fetch('http://localhost:2002/patients');
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             patients = await response.json();
//             renderTable();
//         } catch (error) {
//             console.error('Error fetching patients:', error);
//             displayError('An error occurred while fetching patients.');
//         }
//     }

//     // Render the patient table
//     function renderTable() {
//         patientTableBody.innerHTML = '';
//         patients.forEach(patient => {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//                 <td>${patient.Patient_num}</td>
//                 <td>${patient.Patient_Surname}</td>
//                 <td>${patient.Patient_name}</td>
//                 <td>${patient.Patient_cellphone}</td>
//                 <td>${patient.gender}</td>
//                 <td>${patient.DateOfBirth}</td>
//                 <td>
//                     <button class="edit-button" data-id="${patient.Patient_num}">Update</button>
//                     <button class="delete-button" data-id="${patient.Patient_num}">Delete</button>
//                 </td>
//             `;
//             patientTableBody.appendChild(row);
//         });
//     }

//     // Handle table button clicks
//     patientTableBody.addEventListener('click', async (e) => {
//         const id = e.target.dataset.id;
//         if (e.target.classList.contains('edit-button')) {
//             await editPatient(id);
//         } else if (e.target.classList.contains('delete-button')) {
//             if (confirm('Are you sure you want to delete this patient?')) {
//                 await deletePatient(id);
//                 fetchPatients(); // Refresh the list after deletion
//             }
//         }
//     });

//     // Prepare form for editing a patient
//     async function editPatient(id) {
//         try {
//             const response = await fetch(`http://localhost:2002/patients/${id}`);
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             const patient = await response.json();
//             if (patient) {
//                 patientNumInput.value = patient.Patient_num;
//                 surnameInput.value = patient.Patient_Surname;
//                 nameInput.value = patient.Patient_name;
//                 cellphoneInput.value = patient.Patient_cellphone;
//                 genderInput.value = patient.gender;
//                 dobInput.value = patient.DateOfBirth;
//                 formTitle.textContent = 'Update Patient';
//                 form.classList.remove('hidden');
//                 table.classList.add('hidden');
//             }
//         } catch (error) {
//             console.error('Error fetching patient for editing:', error);
//             displayError('An error occurred while fetching patient data.');
//         }
//     }

//     // Delete a patient
//     async function deletePatient(id) {
//         try {
//             const response = await fetch(`http://localhost:2002/patients/${id}`, { method: 'DELETE' });
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//         } catch (error) {
//             console.error('Error deleting patient:', error);
//             displayError('An error occurred while deleting patient.');
//         }
//     }

//     // Reset the form fields
//     function resetForm() {
//         patientNumInput.value = '';
//         surnameInput.value = '';
//         nameInput.value = '';
//         cellphoneInput.value = '';
//         genderInput.value = '';
//         dobInput.value = '';
//         formTitle.textContent = 'Add Patient';
//         form.classList.add('hidden');
//         table.classList.remove('hidden');
//     }

//     // Display an error message in the UI
//     function displayError(message) {
//         // For now, use an alert; you might want to create a more sophisticated error display later
//         alert(message);
//     }
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const showTable = document.getElementById('showTable');
//     const displayPatients = document.getElementById('displayPatients');
//     const table = document.getElementById('table');
//     const form = document.getElementById('form');
//     const patientNumInput = document.getElementById('patientNum');
//     const surnameInput = document.getElementById('surname');
//     const nameInput = document.getElementById('name');
//     const cellphoneInput = document.getElementById('cellphone');
//     const genderInput = document.getElementById('gender');
//     const dobInput = document.getElementById('dob'); // Correct ID here
//     const cancelButton = document.getElementById('cancelButton');
//     const formTitle = document.getElementById('formTitle');
//     const patientTableBody = document.getElementById('patientTableBody');

//     let patients = [];

//     // Toggle table visibility
//     showTable.addEventListener('click', () => {
//         table.classList.toggle('hidden');
//         showTable.textContent = table.classList.contains('hidden') ? 'Show Table' : 'Hide Table';
//     });

//     // Fetch and display patients
//     displayPatients.addEventListener('click', fetchPatients);

//     // Form submission (Add or Update patient)
//     form.addEventListener('submit', async (e) => {
//         e.preventDefault();
        
//         // Prepare patient data from form inputs
//         const patient = {
//             Patient_Surname: surnameInput.value.trim(),
//             Patient_name: nameInput.value.trim(),
//             Patient_cellphone: cellphoneInput.value.trim(),
//             gender: genderInput.value.trim(),
//             DateOfBirth: dobInput.value
//         };

//         const patientId = patientNumInput.value.trim();
//         const method = patientId ? 'PUT' : 'POST'; // Determine HTTP method
//         const url = patientId ? 
//             `http://localhost:2002/patients/${patientId}` : 
//             'http://localhost:2002/patients';

//         try {
//             const response = await fetch(url, {
//                 method: method,
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(patient)
//             });

//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }

//             resetForm();
//             fetchPatients(); // Refresh the table after the operation
//         } catch (error) {
//             console.error(`Error ${method === 'POST' ? 'adding' : 'updating'} patient:`, error);
//             displayError('An error occurred. Please try again.');
//         }
//     });

//     // Cancel form
//     cancelButton.addEventListener('click', resetForm);

//     // Fetch patients from the server
//     async function fetchPatients() {
//         try {
//             const response = await fetch('http://localhost:2002/patients');
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             patients = await response.json();
//             renderTable();
//         } catch (error) {
//             console.error('Error fetching patients:', error);
//             displayError('An error occurred while fetching patients.');
//         }
//     }

//     // Render the patient table
//     function renderTable() {
//         patientTableBody.innerHTML = '';
//         patients.forEach(patient => {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//                 <td>${patient.Patient_num}</td>
//                 <td>${patient.Patient_Surname}</td>
//                 <td>${patient.Patient_name}</td>
//                 <td>${patient.Patient_cellphone}</td>
//                 <td>${patient.gender}</td>
//                 <td>${patient.DateOfBirth}</td>
//                 <td>
//                     <button class="edit-button" data-id="${patient.Patient_num}">Update</button>
//                     <button class="delete-button" data-id="${patient.Patient_num}">Delete</button>
//                 </td>
//             `;
//             patientTableBody.appendChild(row);
//         });
//     }

//     // Handle table button clicks
//     patientTableBody.addEventListener('click', async (e) => {
//         const id = e.target.dataset.id;
//         if (e.target.classList.contains('edit-button')) {
//             await editPatient(id);
//         } else if (e.target.classList.contains('delete-button')) {
//             if (confirm('Are you sure you want to delete this patient?')) {
//                 await deletePatient(id);
//                 fetchPatients(); // Refresh the list after deletion
//             }
//         }
//     });

//     // Prepare form for editing a patient
//     async function editPatient(id) {
//         try {
//             const response = await fetch(`http://localhost:2002/patients/${id}`);
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             const patient = await response.json();
//             if (patient) {
//                 patientNumInput.value = patient.Patient_num;
//                 surnameInput.value = patient.Patient_Surname;
//                 nameInput.value = patient.Patient_name;
//                 cellphoneInput.value = patient.Patient_cellphone;
//                 genderInput.value = patient.gender;
//                 dobInput.value = patient.DateOfBirth;
//                 formTitle.textContent = 'Update Patient';
//                 form.classList.remove('hidden');
//                 table.classList.add('hidden');
//             }
//         } catch (error) {
//             console.error('Error fetching patient for editing:', error);
//             displayError('An error occurred while fetching patient data.');
//         }
//     }

//     // Delete a patient
//     async function deletePatient(id) {
//         try {
//             const response = await fetch(`http://localhost:2002/patients/${id}`, { method: 'DELETE' });
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//         } catch (error) {
//             console.error('Error deleting patient:', error);
//             displayError('An error occurred while deleting patient.');
//         }
//     }

//     // Reset the form fields
//     function resetForm() {
//         patientNumInput.value = '';
//         surnameInput.value = '';
//         nameInput.value = '';
//         cellphoneInput.value = '';
//         genderInput.value = '';
//         dobInput.value = '';
//         formTitle.textContent = 'Add Patient';
//         form.classList.add('hidden');
//         table.classList.remove('hidden');
//     }

//     // Display an error message in the UI
//     function displayError(message) {
//         // For now, use an alert; you might want to create a more sophisticated error display later
//         alert(message);
//     }
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const showTable = document.getElementById('showTable');
//     const displayPatients = document.getElementById('displayPatients');
//     const table = document.getElementById('table');
//     const form = document.getElementById('form');
//     const patientNumInput = document.getElementById('patientNum');
//     const surnameInput = document.getElementById('surname');
//     const nameInput = document.getElementById('name');
//     const cellphoneInput = document.getElementById('cellphone');
//     const genderInput = document.getElementById('gender');
//     const dobInput = document.getElementById('dob'); // Correct ID here
//     const cancelButton = document.getElementById('cancelButton');
//     const formTitle = document.getElementById('formTitle');
//     const patientTableBody = document.getElementById('patientTableBody');

//     let patients = [];

//     // Toggle table visibility
//     showTable.addEventListener('click', () => {
//         table.classList.toggle('hidden');
//         showTable.textContent = table.classList.contains('hidden') ? 'Show Table' : 'Hide Table';
//     });

//     // Fetch and display patients
//     displayPatients.addEventListener('click', fetchPatients);

//     // Form submission (Add or Update patient)
//     form.addEventListener('submit', async (e) => {
//         e.preventDefault();
        
//         // Prepare patient data from form inputs
//         const patient = {
//             Patient_Surname: surnameInput.value.trim(),
//             Patient_name: nameInput.value.trim(),
//             Patient_cellphone: cellphoneInput.value.trim(),
//             gender: genderInput.value.trim(),
//             DateOfBirth: dobInput.value
//         };

//         const patientId = patientNumInput.value.trim();
//         const method = patientId ? 'PUT' : 'POST'; // Determine HTTP method
//         const url = patientId ? 
//             `http://localhost:2002/patients/${patientId}` : 
//             'http://localhost:2002/patients';

//         try {
//             const response = await fetch(url, {
//                 method: method,
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(patient)
//             });

//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }

//             resetForm();
//             fetchPatients(); // Refresh the table after the operation
//         } catch (error) {
//             console.error(`Error ${method === 'POST' ? 'adding' : 'updating'} patient:`, error);
//             displayError('An error occurred. Please try again.');
//         }
//     });

//     // Cancel form
//     cancelButton.addEventListener('click', resetForm);

//     // Fetch patients from the server
//     async function fetchPatients() {
//         try {
//             const response = await fetch('http://localhost:2002/patients');
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             patients = await response.json();
//             renderTable();
//         } catch (error) {
//             console.error('Error fetching patients:', error);
//             displayError('An error occurred while fetching patients.');
//         }
//     }

//     // Render the patient table
//     function renderTable() {
//         patientTableBody.innerHTML = '';
//         patients.forEach(patient => {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//                 <td>${patient.Patient_num}</td>
//                 <td>${patient.Patient_Surname}</td>
//                 <td>${patient.Patient_name}</td>
//                 <td>${patient.Patient_cellphone}</td>
//                 <td>${patient.gender}</td>
//                 <td>${patient.DateOfBirth}</td>
//                 <td>
//                     <button class="edit-button" data-id="${patient.Patient_num}">Update</button>
//                     <button class="delete-button" data-id="${patient.Patient_num}">Delete</button>
//                 </td>
//             `;
//             patientTableBody.appendChild(row);
//         });
//     }

//     // Handle table button clicks
//     patientTableBody.addEventListener('click', async (e) => {
//         const id = e.target.dataset.id;
//         if (e.target.classList.contains('edit-button')) {
//             await editPatient(id);
//         } else if (e.target.classList.contains('delete-button')) {
//             if (confirm('Are you sure you want to delete this patient?')) {
//                 await deletePatient(id);
//                 fetchPatients(); // Refresh the list after deletion
//             }
//         }
//     });

//     // Prepare form for editing a patient
//     async function editPatient(id) {
//         try {
//             const response = await fetch(`http://localhost:2002/patients/${id}`);
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             const patient = await response.json();
//             if (patient) {
//                 patientNumInput.value = patient.Patient_num;
//                 surnameInput.value = patient.Patient_Surname;
//                 nameInput.value = patient.Patient_name;
//                 cellphoneInput.value = patient.Patient_cellphone;
//                 genderInput.value = patient.gender;
//                 dobInput.value = patient.DateOfBirth;
//                 formTitle.textContent = 'Update Patient';
//                 form.classList.remove('hidden');
//                 table.classList.add('hidden');
//             }
//         } catch (error) {
//             console.error('Error fetching patient for editing:', error);
//             displayError('An error occurred while fetching patient data.');
//         }
//     }

//     // Delete a patient
//     async function deletePatient(id) {
//         try {
//             const response = await fetch(`http://localhost:2002/patients/${id}`, { method: 'DELETE' });
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//         } catch (error) {
//             console.error('Error deleting patient:', error);
//             displayError('An error occurred while deleting patient.');
//         }
//     }

//     // Reset the form fields
//     function resetForm() {
//         patientNumInput.value = '';
//         surnameInput.value = '';
//         nameInput.value = '';
//         cellphoneInput.value = '';
//         genderInput.value = '';
//         dobInput.value = '';
//         formTitle.textContent = 'Add Patient';
//         form.classList.add('hidden');
//         table.classList.remove('hidden');
//     }

//     // Display an error message in the UI
//     function displayError(message) {
//         // For now, use an alert; you might want to create a more sophisticated error display later
//         alert(message);
//     }
// });

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
    const dobInput = document.getElementById('dob'); // Corrected ID
    const cancelButton = document.getElementById('cancelButton');
    const formTitle = document.getElementById('formTitle');
    const patientTableBody = document.getElementById('patientTableBody');

    let patients = [];

    // Toggle table visibility
    showTable.addEventListener('click', () => {
        table.classList.toggle('hidden');
        showTable.textContent = table.classList.contains('hidden') ? 'Show Table' : 'Hide Table';
    });

    // Fetch and display patients
    displayPatients.addEventListener('click', fetchPatients);

    // Form submission (Add or Update patient)
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Prepare patient data from form inputs
        const patient = {
            Patient_Surname: surnameInput.value.trim(),
            Patient_name: nameInput.value.trim(),
            Patient_cellphone: cellphoneInput.value.trim(),
            gender: genderInput.value.trim(),
            DateOfBirth: dobInput.value
        };

        const patientId = patientNumInput.value.trim();
        const method = patientId ? 'PUT' : 'POST'; // Determine HTTP method
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
            fetchPatients(); // Refresh the table after the operation
        } catch (error) {
            console.error(`Error ${method === 'POST' ? 'adding' : 'updating'} patient:`, error);
            displayError('An error occurred. Please try again.');
        }
    });

    // Cancel form
    cancelButton.addEventListener('click', resetForm);

    // Fetch patients from the server
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

    // Render the patient table
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

    // Handle table button clicks
    patientTableBody.addEventListener('click', async (e) => {
        const id = e.target.dataset.id;
        if (e.target.classList.contains('edit-button')) {
            await editPatient(id);
        } else if (e.target.classList.contains('delete-button')) {
            if (confirm('Are you sure you want to delete this patient?')) {
                await deletePatient(id);
                fetchPatients(); // Refresh the list after deletion
            }
        }
    });

    // Prepare form for editing a patient
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

    // Delete a patient
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

    // Reset the form fields
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

    // Display an error message in the UI
    function displayError(message) {
        // For now, use an alert; you might want to create a more sophisticated error display later
        alert(message);
    }
});
