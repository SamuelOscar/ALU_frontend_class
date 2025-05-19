import re

# Read input from file
with open('sample_data.txt', 'r') as file:
    text = file.read()

# Regex patterns
patterns = {
    "Emails": r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}',
    "URLs": r'https?://[^\s<>"]+|www\.[^\s<>"]+',
    "Phone Numbers": r'(\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4})',
    "Credit Card Numbers": r'\b(?:\d{4}[-\s]?){3}\d{4}\b',
    "Times": r'\b(?:[01]?[0-9]|2[0-3]):[0-5][0-9](?:\s?[APap][Mm])?\b',
    "HTML Tags": r'<[^>]+>',
    "Hashtags": r'#\w+',
    "Currency Amounts": r'\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?'
}

# Extract matches
results = {}
for label, pattern in patterns.items():
    matches = re.findall(pattern, text)
    results[label] = matches

# Write output to file
with open('test_output.txt', 'w') as f:
    for label, matches in results.items():
        f.write(f"{label}:\n")
        for match in matches:
            f.write(f"- {match}\n")
        f.write("\n")

print("Extraction complete. Results written to test_output.txt.")
