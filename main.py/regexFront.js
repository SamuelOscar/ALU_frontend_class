const fs = require('fs');

// Read input from file
const text = fs.readFileSync('sample_data.txt', 'utf-8');

// Regex patterns
const patterns = {
  "Emails": /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
  "URLs": /https?:\/\/[^\s<>"]+|www\.[^\s<>"]+/g,
  "Phone Numbers": /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g,
  "Credit Card Numbers": /\b(?:\d{4}[-\s]?){3}\d{4}\b/g,
  "Times": /\b(?:[01]?[0-9]|2[0-3]):[0-5][0-9](?:\s?[APap][Mm])?\b/g,
  "HTML Tags": /<[^>]+>/g,
  "Hashtags": /#\w+/g,
  "Currency Amounts": /\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g
};

// Extract matches and build output string
let output = '';

for (const [label, regex] of Object.entries(patterns)) {
  const matches = text.match(regex) || [];
  output += `${label}:\n`;
  matches.forEach(match => {
    output += `- ${match}\n`;
  });
  output += '\n';
}

// Write output to file
fs.writeFileSync('test_output.txt', output);

console.log("✅ Extraction complete. Results written to test_output.txt");
