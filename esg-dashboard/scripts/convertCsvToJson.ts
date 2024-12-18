const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');

const csvFilePath = path.join(process.cwd(), 'public', 'data.csv');
const jsonFilePath = path.join(process.cwd(), 'public', 'data.json');

const csvContent = fs.readFileSync(csvFilePath, 'utf-8');
const results = Papa.parse(csvContent, {
  header: true,
  skipEmptyLines: true,
});

fs.writeFileSync(jsonFilePath, JSON.stringify(results.data, null, 2));
console.log('CSV converted to JSON successfully!'); 