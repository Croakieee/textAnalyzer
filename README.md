# Text Analyzer

A JavaScript program for analyzing text and providing detailed information.

## Features

- Analyze the number of words in the text.
- Analyze the number of characters in the text (including spaces).
- Analyze the number of sentences in the text.
- Count the number of unique words in the text.
- Calculate the average word length in the text.
- Count the number of characters without spaces in the text.
- Identify the most frequent words in the text.
- Identify the most frequent letters in the text.
- Check if the text is empty.

## How to Use

1. Include the `textAnalyzer.js` file in your HTML document.
2. Use the `analyzeText` function by passing the text you want to analyze.
3. Receive an object containing various analyses.

## Example

```javascript
// Include the textAnalyzer.js file in your HTML

// Sample text
const sampleText = "This is a sample sentence. It has multiple words and some punctuation!";

// Analyze the text
const analysisResult = analyzeText(sampleText);

console.log("Analysis Result:", analysisResult);
