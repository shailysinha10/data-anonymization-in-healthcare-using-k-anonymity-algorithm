// server.js
const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const app = express();

// Define route for doctor page
app.get('/doctor', function(req, res) {
  // Read the CSV file using fs module
  createReadStream('researcher_data.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      // Render admin.ejs template with dataset
      res.render('doctor', { researcher_data: results });
    });
});

// Start server
app.listen(3000, function() {
  console.log('Server started on port 3000.');
});