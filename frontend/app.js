// Import required modules
const express = require('express');
const axios = require('axios');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// Create Express app
const app = express();


app.get('/healthz',(req,res)=> {
  res.send ('OK');
});

//

// Serve static files
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/hello', (req, res) => {
  res.send('Hello world\n');
});

app.get('/api/doctors', async (req, res) => {
  let url = process.env.DOCTORS_SERVICE_URL;
  try {
    const response = await axios.get(`http://${url}/doctors`);
    const doctors = response.data;
    res.json(doctors);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ error: 'Could not fetch doctors' });
  }
});

app.get('/api/appointments', async (req, res) => {
  let url = process.env.APPOINTMENTS_SERVICE_URL;
  try {
    const response = await axios.get(`http://${url}/appointments`);
    const appointments = response.data;
    res.json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ error: 'Could not fetch appointments' });
  }
});



// Start the server
app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
