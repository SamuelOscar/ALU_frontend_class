// regexExtractor.js - JavaScript solution for extracting data using Regular Expressions

// Function to extract email addresses from text
function extractEmails(text) {
  const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  return text.match(emailPattern) || [];
}

// Function to extract URLs from text
function extractURLs(text) {
  const urlPattern = /https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?/g;
  return text.match(urlPattern) || [];
}

// Function to extract phone numbers from text
function extractPhoneNumbers(text) {
  const phonePattern = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
  return text.match(phonePattern) || [];
}

// Function to extract currency amounts from text
function extractCurrencyAmounts(text) {
  const currencyPattern = /\$\d{1,3}(,\d{3})*(\.\d{2})?/g;
  return text.match(currencyPattern) || [];
}

// Sample text for testing
const sampleText = `
  Contact us at support@example.com, admin@company.org.
  Visit https://www.example.com or http://sub.test.org for details.
  Call us at (123) 456-7890 or 123-456-7890.
  The total cost is $1,234.56 or $99.99.
`;

console.log("Extracted Emails:", extractEmails(sampleText));
console.log("Extracted URLs:", extractURLs(sampleText));
console.log("Extracted Phone Numbers:", extractPhoneNumbers(sampleText));
console.log("Extracted Currency Amounts:", extractCurrencyAmounts(sampleText));
