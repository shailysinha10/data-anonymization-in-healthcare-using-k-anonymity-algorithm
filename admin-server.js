// server.js
const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const app = express();

// Define route for admin page
app.get('/admin', function(req, res) {
  // Read the CSV file using fs module
  createReadStream('insurance_data.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      // Render admin.ejs template with dataset
      res.render('admin', { insurance_data: results });
    });
});

// Start server
app.listen(3000, function() {
  console.log('Server started on port 3000.');
});
