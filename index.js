const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'form.html'));
});

let dataArray = [];

app.post('/submit-form', (req, res) => {
  const formData = req.body.data;
  dataArray.push(formData);
  console.log(dataArray);
  res.send('Data received and added to the array');
});

app.listen(port, () =>{
  console.log(`server listening at http://localhost:${port}`);
});

